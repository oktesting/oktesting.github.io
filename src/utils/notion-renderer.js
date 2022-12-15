import { NOTION_TYPES } from './../constants';
import { format, parseISO } from 'date-fns';

export const renderPost = (post) => {
  if (!post?.results?.length) return null;
  let numberedListItemCount = [];
  const renderBlock = (block, level = 0) => {
    const { type } = block;
    const content = block[type];

    if (isNaN(parseInt(numberedListItemCount[level]))) numberedListItemCount[level] = 0; // init for current level
    console.log(type, numberedListItemCount);
    // only increase count when NUMBERED_LIST_ITEMs are adjecent within same level, otherwise, reset count to 0
    if (type !== NOTION_TYPES.NUMBERED_LIST_ITEM) numberedListItemCount[level] = 0;

    switch (type) {
      case NOTION_TYPES.PARAGRAPH: {
        if (content.text?.length) {
          return (
            <p className="my-1">
              {content.text.map((block) => renderBlock(block, level + 1))}
            </p>
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
      }
      case NOTION_TYPES.IMAGE: {
        if (content.type)
          return (
            <div className="text-sm">
              <img className="mx-auto my-1" src={content[content.type]?.url} alt="" />
              {content.caption?.length
                ? content.caption.map((block) => renderBlock(block, level + 1))
                : null}
            </div>
          );
        break;
      }
      case NOTION_TYPES.BULLETED_LIST_ITEM: {
        return (
          <ul className="list-disc list-inside">
            <li>{content.text.map((block) => renderBlock(block, level + 1))}</li>
          </ul>
        );
      }
      case NOTION_TYPES.NUMBERED_LIST_ITEM: {
        return (
          // increase(FIRST) the count for current level
          <ol start={++numberedListItemCount[level]} className="list-decimal list-inside">
            <li>{content.text.map((block) => renderBlock(block, level + 1))}</li>
          </ol>
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
                {content.text.map((block) => renderBlock(block, level + 1))}
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
        return <div className="flex-1">{renderPost(content.children)}</div>;
      }
      case NOTION_TYPES.TO_DO: {
        return (
          <div className="flex gap-x-1">
            {content.checked ? '✔' : '⭕'}
            <div className={`${content.checked ? 'line-through' : ''}`}>
              {content.text.map((block) => renderBlock(block, level + 1))}
            </div>
          </div>
        );
      }
      case NOTION_TYPES.QUOTE: {
        return (
          <div className="border-black border-l-4 dark:border-primary">
            <div className="ml-4">
              {content.text.map((block) => renderBlock(block, level + 1))}
            </div>
          </div>
        );
      }
      case NOTION_TYPES.DIVIDER: {
        return <hr className="my-6 dark:opacity-50" />;
      }
      case NOTION_TYPES.MENTION: {
        return (
          <span className="bg-gray-200 hover:cursor-pointer">
            {renderBlock(content, level + 1)}
          </span>
        );
      }
      case NOTION_TYPES.DATE: {
        const DATE_FORMAT = 'yyyy-MM-dd',
          DATETIME_FORMAT = 'HH:mm dd/MM/yyyy';
        // notion stored datetime in ISO format, to distinguish between date and datetime relies in their lengths
        const dateOnly = (date = '') => date.length === DATE_FORMAT.length;
        let value = format(
          parseISO(content.start),
          dateOnly(content.start) ? DATE_FORMAT : DATETIME_FORMAT
        );
        if (content.end)
          value += ` -> ${format(
            parseISO(content.start),
            dateOnly(content.start) ? DATE_FORMAT : DATETIME_FORMAT
          )}`;
        return value;
      }
      case NOTION_TYPES.USER: {
        // TODO: could extend the logic to do popup shit but kinda overkill rn
        return `@${content.name}`;
      }
      case NOTION_TYPES.PAGE: {
        // TODO: NAH!
      }
      default:
        break;
    }
    return null;
  };
  return <>{post.results.map((block) => renderBlock(block))}</>;
};
