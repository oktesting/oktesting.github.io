import PostContent from '../../../components/PostContent';
import { getAllPostsInfo, getOnePostById } from '../../../utils/notion-api';

const ReviewPage = ({ post }) => <PostContent post={post} />;

export const getStaticPaths = async (context) => {
  const reviewsInfo = await getAllPostsInfo(process.env.REVIEWS_PAGE_ID);
  return {
    fallback: false, // since we only have the static site generation option
    paths: reviewsInfo.map(({ slug, id }) => ({ params: { id } }))
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  return { props: { post: await getOnePostById(id) } };
};

export default ReviewPage;
