import { getAllReviewsInfo, notion } from "../../notion-api";

export default async (req, res) => {
  try {
    let posts = {};
    // await notion.pages.retrieve({ page_id: process.env.REVIEWS_PAGE_ID })

    const reviewsInfo = await getAllReviewsInfo();

    posts = (
      await Promise.allSettled(
        reviewsInfo.map((review) => notion.blocks.children.list({ block_id: review.id }))
      )
    )
      ?.filter(({ status, value }) => status === 'fulfilled' && value?.results)
      ?.map(({ value }) => value);

    // posts = posts.map((post) => processPost(post));

    // console.log('review info', reviewsInfo);

    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status('500').json('internal server error');
  }
};
