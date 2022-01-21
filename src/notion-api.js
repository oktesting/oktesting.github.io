import { kebabCase } from 'lodash';

import { Client } from '@notionhq/client';
import { NOTION_TYPES } from '/src/constants';

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
    const content = await notion.blocks.children.list({ block_id: id });
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
