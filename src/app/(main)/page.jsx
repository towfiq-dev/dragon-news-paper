import LeftSidebar from '@/components/homepage/leftSidebar/LeftSidebar';
import NewsHome from '@/components/homepage/newsHome/NewsHome';
import RightSidebar from '@/components/homepage/rightSidebar/RightSidebar';
import React from 'react';

const HomePage = () => {

  return (
    <div className='grid grid-cols-12 gap-4 mt-8'>

      {/* LeftSidebar */}
      <div className='col-span-3'>
        <LeftSidebar/>
      </div>

      {/* NewsHome */}
      <div className='col-span-6'>
        <NewsHome/>
      </div>

      {/* RightSidebar */}
      <div className='col-span-3'>
        <RightSidebar/>
      </div>
    </div>
  );
};

export default HomePage;