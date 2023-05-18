import React, { Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';

type Props = {
  category: String;
  isActive: Boolean;
  nav?: boolean;
  setNav: Dispatch<SetStateAction<boolean>>;
};
const NavLink = ({ category, isActive, nav, setNav }: Props) => {
  const router = useRouter();
  const handleClick = () => {
    category === 'Home' ? router.push('/') : router.push(`/${category}`);
    setNav(false);
  };

  let capsCategory = category.charAt(0).toUpperCase() + category.slice(1);
  return (
    <div
      className={` ${
        nav ? ' flex-col' : 'flex-row'
      } flex text-lg p-2 mr-2   cursor-pointer hover:text-secondary hover:bg-primary rounded-lg ${
        isActive && '  text-primary'
      } ${router.pathname == '/' && category === 'Home' ? 'text-primary' : ''}`}
      onClick={handleClick}
      //   href={`${category === "Home" ? "/" : `/${category}`}  `}
    >
      {capsCategory}
    </div>
  );
};

export default NavLink;
