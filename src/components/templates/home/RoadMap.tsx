import RoadMapCard from '@/components/atoms/RoadMapCard';
import RoadMapCard2 from '@/components/atoms/RoadMapCard2';
import RoadMapCard3 from '@/components/atoms/RoadMapCard3';
import RoadMapCard4 from '@/components/atoms/RoadMapCard4';
import RoadMapCard5 from '@/components/atoms/RoadMapCard5';
import React from 'react';

const RoadMap = () => {
  return (
    <div className="bg-background bg-[url(/static/images/bgtexture.png)]">
      <div className="max-w-[1236px] w-full mx-auto px-2 ">
        <h2 className="font-primary text-[64px] text-secondary text-center mb-[101px]">
          Jacked Labs Roadmap
        </h2>
        <RoadMapCard />
        <RoadMapCard2 />
        <RoadMapCard3 />
        <RoadMapCard4 />
        <RoadMapCard5 />
      </div>
    </div>
  );
};

export default RoadMap;
