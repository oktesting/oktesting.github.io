import Head from 'next/head';
import Link from 'next/link';

const PostsPage = () => {
  return (
    <>
      <Head>
        <title>posts</title>
      </Head>
      <div className="container max-w-3xl text-center">
        {/* <div className="text-3xl font-medium pb-2 text-primary">
          <Link href={'/posts/difficulties'}>Technical difficulties</Link>
        </div>
        <div className="text-left text-lg">
          Where i discuss (and whine about) the problems i am facing while making this
          pages.
        </div>
        <hr className="my-8" />
        <div className="text-3xl font-medium pb-2 text-primary">
          <Link href={'/posts/thoughts'}>Thoughts</Link>
        </div>
        <div className="text-left text-lg">
          I had a (private) section called{' '}
          <span className="font-semibold underline">train of thoughts</span> where I jot
          down my instance thoughts or reflections that i had during the day before they
          went into oblivion. 'Dreams', i recorded them too but not very often. U only realize that was a
          wonderful yet bizarre dream until it's half faded. I want to display SOME of
          them here on this page.
        </div>
        <hr className="my-8" /> */}
        <div className="text-3xl font-medium pb-2 text-primary">
          <Link href={'/posts/reviews'}>Movie reviews</Link>
        </div>
        <div className=" text-left text-lg">
          I started this section in May 2021 as i could recall, the very first one i did
          was the movie named Mandy. I did this simply because, a good movie could have
          very significant impact on me (either negative or positive) like mood swing,
          overwhelming, thought-provoking, etc..., and I want to capture them while they
          still stuck in my head. I like to write down my thoughts and ideas right after i
          finished watching cuz once they have gone then it's very tough to get them back.
          that is the reason why my writing is messy and filled up with grammatical errors
          all over the place. There is very litte room in my (lazy) life to revisiting my
          works and editing them properly.
          <br />
          These things that i wrote are the place that i will come back to as i decide to
          do a rewatch on those movies in the future, to see whether the time has changed
          my initial perspective on them or not.
        </div>
      </div>
    </>
  );
};

export default PostsPage;
