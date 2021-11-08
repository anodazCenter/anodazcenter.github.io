import "../styles/globals.css";
import "../styles/phaseline.css";
import "../styles/modelvision.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Rhyquiem</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
