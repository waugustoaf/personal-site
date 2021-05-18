import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/global';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>waugustoaf</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
};

export default MyApp;
