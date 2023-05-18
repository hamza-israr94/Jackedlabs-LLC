import dynamic from 'next/dynamic';
const Slider = dynamic(() => import('../../organisms/Slider'), { ssr: false });
const Founders = () => {
  const items = [
    {
      id: 1,
      name: 'Jeffrey Littlefield ',
      title: 'CEO',
      description:
        'Got into crypto in 2020, Cardano NFTs in 2021. Jeff is a certified personal trainer with experience in sports performance, powerlifting, and overall fitness. Jeff sees the potential that crypto and online training have in giving way to more access to services, information, and independence.',
      image: '/static/images/jeff.png',
    },

    {
      id: 2,
      name: 'Henrick Malpica ',
      title: 'CSO',
      description:
        'Since graduating from University of Maine with a degree in construction engineering, Henry Malpica has spent time working as an integration consultant in the software industry and now brings his passion for technology to JackedLabs. Henry is excited and eager to be involved in shaping the future of fitness and block chain development.',
      image: '/static/images/Henrick.png',
    },
    {
      id: 3,
      name: 'Kevin Rivera',
      title: 'CTO',
      description:
        'Firmware engineer with a deep background in technology and mathematics. Since 2017, Kevin has been interested in cryptocurrency and its role in the future of finance and technology. He will help our team design and create a platform in the Web3 space that rewards a healthy and fit community.',
      image: '/static/images/kevin.png',
    },
    {
      id: 4,
      name: 'Phil Haines',
      title: 'CMO',
      description:
        'Starting with his Packard Bell and Windows 95, Phil quickly became interested in connectivity and cyberspace. As the web moves into the next era, an increasing number of human interactions will stem from the online world. Phil hopes to positively impact a place where the fitness community can grow.',
      image: '/static/images/phil.png',
    },
  ];
  return (
    <div className="bg-background bg-[url(/static/images/bgtexture.png)] pt-[20px]  lg:pt-[40px] 2xl:pt-[70px] px-1 md:px-3 lg:px-2">
      <div className="container mx-auto">
        <h3 className="text-[64px] pb-4 lg:mb-[50px] xl:mb-[120px] text-secondary font-primary text-center ">
          Founders
        </h3>
        <div className="py-2 max-w-[1320px] mx-auto w-full ">
          <Slider slides={items} />
        </div>
      </div>
    </div>
  );
};

export default Founders;
