import Head from 'next/head';
import Link from 'next/link';
import { getAllPostsInfo } from '../../../utils/notion-api';

const ReviewsPage = ({ reviews = [] }) => {
  return (
    <>
      <Head>
        <title>Movie Reviews</title>
      </Head>
      <div className="container max-w-3xl text-center">
        {/* <div className="text-4xl font-semibold mb-4"> */}
        <div className="text-3xl font-medium pb-2 text-primary">
          Movie reviews</div>
        {reviews.map((review) => (
          <div className="font-medium text-2xl no-underline text-primary mb-2">
            <Link href={`/posts/reviews/${review.id}`}>{review.title}</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  return { props: { reviews: await getAllPostsInfo(process.env.REVIEWS_PAGE_ID) } };
};

export default ReviewsPage;
