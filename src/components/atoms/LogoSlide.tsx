import Image from 'next/image';
import Link from 'next/link';

const LogoSlide = ({ data }: any) => {
  return (
    <Link href="https://www.veitechnology.com/" passHref target="_blank">
      <div className=" max-w-[260px] w-full p-2 h-[50px] lg:h-[150px] md:h-[100px] flex items-center justify-center rounded-[10px] border border-[#6E82BA] bg-background">
        <Image
          src="/static/images/logo.png"
          alt="logo-Image"
          width={152}
          height={80}
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
    </Link>
  );
};

export default LogoSlide;
