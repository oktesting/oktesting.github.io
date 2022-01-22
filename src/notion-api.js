import { kebabCase } from 'lodash';
import { Client } from '@notionhq/client';

import { NOTION_TYPES } from './constants';

// Initializing a client
export const notion = new Client({
  auth: process.env.NOTION_TOKEN
});

export const getAllReviewsInfo = async () => {
  try {
    return (
      await notion.blocks.children.list({
        block_id: process.env.REVIEWS_PAGE_ID
      })
    ).results
      .filter((item) => item.type === NOTION_TYPES.CHILD_PAGE)
      .map((item) => {
        return {
          slug: kebabCase(item.child_page.title),
          title: item.child_page.title,
          id: item.id,
          lastEditedAt: item.last_edited_time,
          createdAt: item.created_time
        };
      });
  } catch (error) {
    console.log('getAllReviewsInfo -> error', error);
  }
};

export const getOneReviewById = async (id) => {
  try {
    const info = await notion.pages.retrieve({ page_id: id });
    let content = await notion.blocks.children.list({ block_id: id });

    // processing block type that need to be fetched: column_list, toggle,... => has_children == true
    const getFullContent = async (content) => {
      if (content.results?.length) {
        const hasChidldrenBlocks = content.results.filter((block) => block.has_children);
        const fetchedBlocks = await Promise.allSettled(
          hasChidldrenBlocks.map((block) =>
            notion.blocks.children.list({ block_id: block.id })
          )
        );

        // map fetched data using index since the returned order of Promise.allSettle is preserved!
        const mappedChildrenBlocks = {};
        for (const [index, block] of hasChidldrenBlocks.entries()) {
          if (fetchedBlocks[index].status === 'fulfilled')
            /* added recursion to get the fullest of the fullContent itself, 
              like children of children, 
              also called 'grandchildren' (and their children too)
            **/
            mappedChildrenBlocks[block.id] = await getFullContent(
              fetchedBlocks[index].value
            );
        }

        content.results?.forEach(async (block) => {
          if (mappedChildrenBlocks[block.id]) {
            block[block.type].children = mappedChildrenBlocks[block.id];
          }
        });

        return content;
      }
    };
    content = await getFullContent(content);

    if (content.results?.length)
      return {
        content,
        // content: processPost(content),
        title: info.properties.title.title[0].plain_text,
        lastEditedAt: info.last_edited_time,
        createdAt: info.created_time,
        id: info.id
        // slug: kebabCase(info.child_page.title),
      };
  } catch (error) {
    console.log('getOneReviewById -> error', error);
  }
};

const processPost = ({ results }) => {
  return results.map((block) => processBlock(block))?.join('');
};

const processBlock = (block) => {
  const { type } = block;
  const content = block[type];
  let output;

  switch (type) {
    case NOTION_TYPES.PARAGRAPH: {
      if (content.text?.length) {
        output += content.text.map((block) => processBlock(block)).join('');
      }
      break;
    }
    case NOTION_TYPES.TEXT: {
      output += content.content || '';
      // TODO: add processing anotations for text
      break;
    }
    case NOTION_TYPES.IMAGE: {
      // if (content.type === 'external')
      // break;
    }

    default:
      break;
  }
  return output;
};

/* (
  await notion.search({
    filter: { property: 'object', value: 'page' }
  })
)
.results.map((review) => review.properties.Name.title[0].plain_text) */
