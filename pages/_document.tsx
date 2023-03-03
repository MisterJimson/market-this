import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Generate your next marketing snippet seconds."
          />
          <meta property="og:site_name" content="marketthis.xyz" />
          <meta
            property="og:description"
            content="Generate your next marketing snippet seconds."
          />
          <meta property="og:title" content="marketThis" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="marketThis" />
          <meta
            name="twitter:description"
            content="Generate your next marketing snippet seconds."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
