// @ts-nocheck
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';
import NavLink from '../atoms/NavLink';

const categories= ['Home', 'services', 'about', 'contact'];

type Props = {
  nav?: boolean;
  onClick?: () => void;
  setNav: Dispatch<SetStateAction<boolean>>;
};
const Navlinks = ({ nav, setNav }: Props) => {
  const router = useRouter();
  const isActive = (path: String) => {
    return router.pathname?.split('/').pop() === path;
  };
  return (
    <div
      className={` ${
        nav ? 'flex flex-col items-start' : 'flex items-center'
      } `}
    >
      {categories.map((category, index) => (
        <NavLink
          setNav={setNav}
          nav={nav}
          key={index}
          category={category}
          isActive={isActive(category)}
        />
      ))}
    </div>
  );
};

export default Navlinks;
