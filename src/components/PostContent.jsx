import React from 'react';
import { format, parseISO } from 'date-fns';
import Head from 'next/head';
import { renderPost } from '../utils/notion-renderer';

const PostContent = ({ post }) => (
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
        Created at: {format(parseISO(post.createdAt), 'HH:mm dd/MM/yyyy')} | Last edited:{' '}
        {format(parseISO(post.lastEditedAt), 'HH:mm dd/MM/yyyy')}
      </div>
    </div>
  </>
);

export default PostContent;
