import PostContent from '../../../components/PostContent';
import { getAllPostsInfo, getOnePostById } from '../../../utils/notion-api';

const MiscPage = ({ post }) => <PostContent post={post} />;

export const getStaticPaths = async (context) => {
  const postsInfo = await getAllPostsInfo(process.env.MISC_PAGE_ID);
  return {
    fallback: false, // since we only have the static site generation option
    paths: postsInfo.map(({ slug, id }) => ({ params: { id } }))
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  return { props: { post: await getOnePostById(id) } };
};

export default MiscPage;
