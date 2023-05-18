import React, { Children, ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
