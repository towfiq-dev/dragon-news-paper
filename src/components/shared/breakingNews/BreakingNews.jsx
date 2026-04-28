import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
  return (
    <div className='mt-7 bg-gray-200 rounded shadow-md flex items-center gap-3 px-4 py-2'>
      <button className='btn bg-red-500 '>Latest News</button>
      <Marquee speed={40} pauseOnHover={true}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fuga ipsa repellat voluptas porro tenetur voluptatum et officia nisi dolorum!
    </Marquee>
    </div>
  );
};

export default BreakingNews;