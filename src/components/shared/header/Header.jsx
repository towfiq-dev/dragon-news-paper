import Image from 'next/image';
import React from 'react';
import logo from '../../../assets/asset/logo.png'
import { format } from 'date-fns';
const Header = () => {
  return (
    <div className='mt-7 space-y-2'>
      <Image className='mx-auto' src={logo} alt={logo}></Image>
      <p className='text-center text-gray-500 text-[18px]'>Journalism Without Fear or Favour</p>
      <p className='text-center font-bold text-[20px]'>{format(new Date(), "EEEE, MMM-dd, yyyy")}</p>
    </div>
  );
};

export default Header;