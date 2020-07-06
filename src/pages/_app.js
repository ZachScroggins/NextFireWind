import Head from 'next/head';
import '../styles/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NextFireWind</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
