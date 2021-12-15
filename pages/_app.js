import "../styles/globals.css";
import "../styles/Text.css";
import "../styles/phaseline.css";
import "../styles/modelvision.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Streami-Fi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </> 
  );
}

export default MyApp;
