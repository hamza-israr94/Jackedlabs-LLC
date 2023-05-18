import AboutSlider from '@/components/templates/about/AboutSlider';
import { formatHtmlTitle } from '@/utils/global';
import Head from 'next/head';
import React from 'react';

const about = () => {
  const items = [
    {
      id: 1,
      title: 'Mission',
      description:
        'The vision of this project is to create an art-based NFT with real world and web3.0 utility. This will be achieved by creating a diverse and global community, rewarding holders with an array of different utilities, and exclusive access to “Project Mercurialis”.',
      image: 'bg-[url(/static/images/Mission.png)]',
    },

    {
      id: 2,
      title: 'Vision',
      description:
        'To connect the world through fitness and Web3.0 using blockchain technology built on the Cardano blockchain.',
      image: 'bg-[url(/static/images/Vision.png)]',
    },
    {
      id: 3,
      title: 'Problem',
      description:
        "Web2.0 has shown us what the internet can really do. From social media, to worldwide connectivity at all times, it was truly the next iteration of the internet. Its centralized components unfortunately leaves it open to constant attacks, hacks, leaks, and threats. This was the case with MyFitnessPal. “During the MyFitnessPal data breach, hackers accessed usernames, passwords, and email addresses. Under Armor quickly reset all affected user's passwords, so the information could not be used on the app, but a year later, the old passwords were on sale on the dark web for around $20,000.”",
      image: 'bg-[url(/static/images/Problem.png)]',
    },
    {
      id: 4,
      title: 'Solution',
      description:
        'It is time we utilize what blockchain technologies and Web3.0 have to offer. We would like to develop a dApp that will be similar to MyFitnessPal (i.e. food/calorie tracking, workout tracking, and more). We can connect professionals from around the world to work with anyone. Using our NFT as a digital identity, users who hold the token will be able to access this for free. We can include a tiered pricing subscription model to build revenue and give different access depending on the users goals. This will include an “Access Pass” NFT to ensure parts of the website cannot be accessed without the appropriate tier pass. We would also like to integrate other blockchains in order to create a more cohesive ecosystem and not exclude any potential users.',
      image: 'bg-[url(/static/images/Solution.png)]',
    },
  ];
  return (
    <>
      <Head>
        <title key="title">{formatHtmlTitle('About')}</title>
      </Head>
      {/* <Founders/> */}
      <div className="bg-background bg-[url(/static/images/bgtexture.png)]">
        <div className="pb-2 max-w-[1370px] mx-auto w-full ">
          <AboutSlider slides={items} />
        </div>
      </div>
    </>
  );
};

export default about;
