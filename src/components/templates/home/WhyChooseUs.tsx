import Card from '@/components/atoms/Card';
import React from 'react';

const WhyChooseUs = () => {
  const cards = [
    {
      id: 1,
      path: '/static/images/newInnovators.svg',
      title: 'Young Innovators',
      desc: 'Our team is full of young, talented innovators ready to create a new space for invention and growth.',
    },
    {
      id: 2,
      path: '/static/images/credentialed.svg',
      title: 'Credentialed',
      desc: 'From engineering credentials, to Certified Personal Trainers and MBAs, we are diverse in our credentialism and professionalism.',
    },
    {
      id: 3,
      path: '/static/images/cardanobased.svg',
      title: 'Cardano Based',
      desc: 'We believe Cardano is the next step into creating a true multiverse, with the best Proof-of-Work algorithms.',
    },
    {
      id: 4,
      path: '/static/images/web3.svg',
      title: 'Web 3.0',
      desc: 'We are forward-facing, and what that means is to focus our efforts in Web3.0. With growing trends in decentralization and AI, our platform seeks to utilize this new evolution of the internet.',
    },
  ];
  return (
    <section className="bg-background bg-[url(/static/images/bgtexture.png)] pt-10">
      <div className="container mx-auto text-center mt-5 ">
        <span className=" text-6xl md:text-[64px] font-primary text-secondary  ">
          Why Choose JackedLabs
        </span>
        <div className=" max-w-[1372px] inline-grid grid-cols-1 md:grid-cols-2 lg:px-4 w-full gap-4 mt-8 md:mt-[90px] pb-10">
          {cards.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
