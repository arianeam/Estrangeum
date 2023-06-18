import "daisyui/dist/full.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Estrangeum</title>
        <link rel="icon" href="/iconcolor.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
