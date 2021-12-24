import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="dark:bg-dark-mode content-wrapper">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
