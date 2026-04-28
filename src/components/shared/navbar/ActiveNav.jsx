'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const ActiveNav = ({children, href, className}) => {
  const pathName = usePathname()
  const isActive = pathName === href
  return (
    <li className='w-23'>
      <Link 
      href={href} 
      className={`border-2 font-semibold border-gray-500 rounded xl px-4 py-2 shadow-md 
      ${className} ${isActive && 'bg-green-400'}`}>
      {children}
      </Link>
    </li>
  );
};

export default ActiveNav;