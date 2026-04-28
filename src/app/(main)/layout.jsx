import BreakingNews from '@/components/shared/breakingNews/BreakingNews';
import Footer from '@/components/shared/footer/Footer';
import Header from '@/components/shared/header/Header';
import Navbar from '@/components/shared/navbar/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
  return (
    <div>
      <Header/>
      <BreakingNews/>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  );
};

export default MainLayout;