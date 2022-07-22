import React from 'react';
import Header from './Header';
import { DefaultSeo } from 'next-seo';

const Layout = ({ children }) => (
  <>
    <DefaultSeo
      title='Rununu Blog'
      description='For the latest tech news in kenya'
      canonical='https://rununublog.vercel.app/'
      openGraph={{
        url: 'https://rununublog.vercel.com',
        description: 'For the latest tech news in kenya',
      }}
      twitter={{
        handle: '@tqariuqij',
        site: '@tqariuqij',
        cardType: 'summary_large_image',
      }}
    />

    <Header />
    {children}
  </>
);

export default Layout;
