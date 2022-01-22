export const NOTION_TYPES = {
  PARAGRAPH: 'paragraph',
  TEXT: 'text',
  IMAGE: 'image',
  EXTERNAL: 'external',
  FILE: 'file',
  TOGGLE: 'toggle',
  BULLETED_LIST_ITEM: 'bulleted_list_item',
  CHILD_PAGE: 'child_page',
  COLUMN_LIST: 'column_list',
  TO_DO: 'to_do'
};

export const NOTION_TYPES_NEED_TO_BE_FETCHED = [
  NOTION_TYPES.TOGGLE,
  NOTION_TYPES.COLUMN_LIST
];
