import Head from 'next/head';

const DifficultiesPage = () => {
  return (
    <>
      <Head>
        <title>Technical difficulties</title>
      </Head>
      <div className="container max-w-3xl text-center">
        <div className="text-3xl font-medium pb-2 text-primary">Technical difficulties</div>
        <div className="text-left text-lg">
          The problem i am facing right now with doing a post section is what approach i
          should take. first, i'm limited to this github page, which is static pages
          serving only. i could move to vercel or something to utilize nextjs other
          powerful features, but right now i'm still happy with github pages as my comfort
          zone. so static site generating is my friend then most of the magic happen at
          the build time and at user's client. secondly, the content to feed this section,
          i don't even have any source for it cause most of my writing sit in notion, i
          could convert them to a database at my disposal but again, it take time and
          effort. i thought of using notion's API directly to access as my sources but
          still haven't managed to make a single successful call to the APIs.
        </div>
        <hr className="my-8" />
        <div className="text-left text-lg">
          #update: i had made use of notion APIs successfully and leverage it as my
          backend APIs + database for fetching and storing posts that will be feeded here.
          other problem emerged already. the images, i upload to notion as the part of the
          posts itself, are actually stored on AWS S3. They are presigned with the
          expriation time of 3600s, so they cannot be access after 1 hour. this is bad,
          cuz my site is static-generated, with those expired images' url in the{' '}
          <code>img</code> tag are not going to work very well. i think of an idea: a
          cronjob workflow for github that periodically (1 hour to be percise) rebuilds
          and redeploys the site (with refreshed images' url)
        </div>
      </div>
    </>
  );
};
export default DifficultiesPage;
