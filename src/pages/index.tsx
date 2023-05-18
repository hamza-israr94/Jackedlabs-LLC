import Head from 'next/head';
import Hero from '@/components/templates/home/Hero';
import Showcase from '@/components/templates/home/Showcase';
import Whatweoffer from '@/components/templates/home/Whatweoffer';
import WhyChooseUs from '@/components/templates/home/WhyChooseUs';
import Founders from '@/components/templates/home/Founders';
import RoadMap from '@/components/templates/home/RoadMap';
import OurPartners from '@/components/templates/home/OurPartners';
import { formatHtmlTitle } from '@/utils/global';

export default function Home() {
  return (
    <>
      <Head>
        <title key="title">{formatHtmlTitle('Home')}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Showcase />
        <Whatweoffer />
        <WhyChooseUs />
        <Founders />
        <RoadMap />
        <OurPartners />
      </main>
    </>
  );
}
