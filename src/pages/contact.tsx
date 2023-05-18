import WriteToUs from '@/components/templates/WriteToUs';
import { formatHtmlTitle } from '@/utils/global';
import Head from 'next/head';
import React from 'react';

const contact = () => {
  return (
    <>
      <Head>
        <title key="title">{formatHtmlTitle('Contact')}</title>
      </Head>
      <WriteToUs/>
    </>
  );
};

export default contact;
