import { format, parseISO } from 'date-fns';
import Head from 'next/head';
import { NOTION_TYPES } from '../../constants';
import { getAllReviewsInfo, getOneReviewById } from '/src/notion-api';

const PostsPage = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <div className="container max-w-3xl">
        <div className="text-3xl font-medium pb-2 text-primary text-center">
          {post.title || 'untitled'}
        </div>
        <div className="text-lg">{renderPost(post.content)}</div>
        <div className="text-right mt-5">
          Created at: {format(parseISO(post.createdAt), 'HH:mm dd/MM/yyyy')} | Last
          edited: {format(parseISO(post.lastEditedAt), 'HH:mm dd/MM/yyyy')}
        </div>
      </div>
    </>
  );
};

const renderPost = (post) => {
  if (!post?.results?.length) return null;
  const renderBlock = (block) => {
    const { type } = block;
    const content = block[type];

    switch (type) {
      case NOTION_TYPES.PARAGRAPH: {
        if (content.text?.length) {
          return (
            <p className="my-1">{content.text.map((block) => renderBlock(block))}</p>
          );
        }
        break;
      }
      case NOTION_TYPES.TEXT: {
        // TODO: add processing anotations for text color
        const {
          href = null,
          annotations: {
            color,
            code = false,
            underline = false,
            italic = false,
            strikethrough = false,
            bold = false
          }
        } = block;
        return (
          <span
            className={`${bold ? 'font-semibold' : ''}
          ${strikethrough ? 'line-through' : ''}
          ${italic ? 'italic' : ''}
          ${underline || href ? 'underline' : ''}
          ${color ? `text-${color}-500` : ''}
          ${href ? 'cursor-pointer opacity-70' : ''}
          `}
            onClick={() => {
              if (href) window.open(href);
            }}
          >
            {code ? (
              <code className="rounded-md p-[2px] text-lime-400 bg-gray-700">
                {content.content || ''}
              </code>
            ) : (
              content.content || ''
            )}
          </span>
        );
        break;
      }
      case NOTION_TYPES.IMAGE: {
        if (content.type)
          return (
            <div className="text-sm">
              <img className="mx-auto my-1" src={content[content.type]?.url} alt="" />
              {content.caption?.length
                ? content.caption.map((block) => renderBlock(block))
                : null}
            </div>
          );
        break;
      }
      case NOTION_TYPES.BULLETED_LIST_ITEM: {
        return (
          <ul className="list-disc list-inside">
            {content.text.map((block) => (
              <li>{renderBlock(block)}</li>
            ))}
          </ul>
        );
      }
      case NOTION_TYPES.TOGGLE: {
        return (
          <div className="flex my-1 gap-x-1">
            <div className="">
              <div className="hover:bg-text-primary hover:rounded-md cursor-pointer relative top-1">
                👉
              </div>
            </div>
            <div>
              <div className="my-1">
                {content.text.map((block) => renderBlock(block))}
              </div>
              {renderPost(content.children)}
            </div>
          </div>
        );
      }
      case NOTION_TYPES.COLUMN_LIST: {
        return (
          <div className="flex justify-between gap-x-6">
            {renderPost(content.children)}
          </div>
        );
      }
      case NOTION_TYPES.COLUMN: {
        return <div className='flex-1'>{renderPost(content.children)}</div>;
      }
      case NOTION_TYPES.TO_DO: {
        return (
          <div className="flex gap-x-1">
            {content.checked ? '✔' : '⭕'}
            <div className={`${content.checked ? 'line-through' : ''}`}>
              {content.text.map((block) => renderBlock(block))}
            </div>
          </div>
        );
      }
      case NOTION_TYPES.QUOTE: {
        return (
          <div className="border-black border-l-4 dark:border-primary">
            <div className="ml-4">{content.text.map((block) => renderBlock(block))}</div>
          </div>
        );
      }
      case NOTION_TYPES.DIVIDER: {
        return <hr className="my-6 dark:opacity-50" />;
      }
      default:
        break;
    }
    return null;
  };
  return <>{post.results.map((block) => renderBlock(block))}</>;
};

export const getStaticPaths = async (context) => {
  const reviewsInfo = await getAllReviewsInfo();
  return {
    fallback: false, // since we only have the static site generation option
    paths: reviewsInfo.map(({ slug, id }) => ({ params: { id } }))
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  return { props: { post: await getOneReviewById(id) } };
};

export default PostsPage;
