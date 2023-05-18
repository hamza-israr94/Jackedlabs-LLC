import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const socials = [
    {
      id: 1,
      path: '/static/Icons/discord.svg',
      link: 'https://discord.gg/VR8S3Fj4',
    },
    {
      id: 2,
      path: '/static/Icons/instagram.svg',
      link: 'https://instagram.com/jackedlabsllc',
    },
    {
      id: 3,
      path: '/static/Icons/medium.svg',
      link: 'https://medium.com/@jackedlabsllc',
    },
    {
      id: 4,
      path: '/static/Icons/twitter.svg',
      link: 'https://twitter.com/jacked_labs',
    },
  ];

  const openMail = () => {
    window.open('mailto:contact@jackedlabs.io', '_blank');
  };
  return (
    <div className="bg-roadMapCard flex  flex-col items-center">
      <h3 className="mt-[50px] md:mt-[100px] text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-primary text-secondary mb-2 md:mb-4 lg:mb-7 2xl:mb-10">
        Be in the <span className="text-primary font-primary">know?</span>{' '}
      </h3>
      <p className="text-secondary max-w-[604px] w-full text-center mb-5 md:mb-10 px-2 md:text-xl">
        Let our team keep you up to date on the latest news about our projects
      </p>
      <div className=" max-w-[300px] md:max-w-[470px] flex w-full space-x-5 mb-6 lg:mb-10 ">
        <input
          type="text"
          placeholder="Email"
          className="max-w-[350px] w-full p-2 lg:p-3 2xl:p-5 rounded bg-card border border-[#ffffff/30] outline-none text-secondary caret-secondary"
        />
        <button className="bg-primary p-2 lg:p-3 2xl:p-5 rounded text-secondary">
          Submit
        </button>
      </div>
      <div className="max-w-[240px] flex items-center space-x-7 mb-4 md:mb-8 lg:mb-[50px]">
        {socials.map((social) => (
          <div className="cursor-pointer" key={social.id}>
            <Link href={social.link} passHref target="_blank">
              <Image
                src={social.path}
                alt="socialmedia-logo"
                width={24}
                height={24}
              />
            </Link>
          </div>
        ))}
      </div>
      <div className="bg-background w-full py-2 md:py-7 lg:py-10">
        <div className="flex items-center justify-center space-x-1">
          <span className="text-secondary text-base">Contact Us:</span>
          <Link href="mailto:contact@jackedlabs.io" target="_blank">
            <span className="text-primary text-base cursor-pointer">
              contact@jackedlabs.io
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
