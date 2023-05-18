import Developed from '@/components/atoms/ToBeDeveloped';
import TobeDeveloped from '@/components/templates/services/TobeDeveloped';
import { formatHtmlTitle } from '@/utils/global';
import Head from 'next/head';

const services = () => {
  return (
    <>
      <Head>
        <title key="title">{formatHtmlTitle('Services')}</title>
      </Head>
      <Developed />
      <TobeDeveloped/>
    </>
  );
};

export default services;
