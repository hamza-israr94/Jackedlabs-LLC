import TobeDevelopedCard from '@/components/atoms/TobeDevelopedCard';
import React from 'react';

const TobeDeveloped = () => {
  const cards = [
    {
      id: 1,
      src: '/static/images/metaverse.png',
      title: 'Metaverse',
    },
    {
      id: 2,
      src: '/static/images/nft.png',
      title: 'NFT',
    },
    {
      id: 3,
      src: '/static/images/dao.png',
      title: 'DAO',
    },
    
    {
      id: 5,
      src: '/static/images/dapp.png',
      title: 'DAPP',
    },
    {
      id: 6,
      src: '/static/images/web3.png',
      title: 'Web 3.0',
    },
  ];
  return (
    <div className="bg-background bg-[url(/static/images/bgtexture.png)]">
      <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 px-2 pb-4">
        {cards.map((card) => (
          <TobeDevelopedCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default TobeDeveloped;
