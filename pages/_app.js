import "../styles/input.css";
import "../styles/globals.css";
import "../styles/Text.css";
import "../styles/button.css";
import "../styles/layout_margin.css";
import "../styles/header.css";
import "../styles/vision.css";
import "../styles/case.css";
import "../styles/asset.css";
import "../styles/token.css";
import "../styles/roadmap.css";
import "../styles/footer.css";



import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>Streami-Fi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </> 
  );
}

export default MyApp;
