import Image from 'next/image';
import React from 'react';
import Img1 from '../../../assets/asset/girl.png'
import Img2 from '../../../assets/asset/family.png'
import Img3 from '../../../assets/asset/ground.png'
const allCategories = async()=>{
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
  const data = await res.json()
  return data.data
}
const LeftSidebar = async() => {
  const allCategory = await allCategories()
  const newsCategory = allCategory.news_category
  return (
    <div>
      <h2 className='font-bold text-[20px] mb-4'>All Category</h2>
    <ul className='space-y-4'>
      {
        newsCategory.map((category)=>{
          const {category_name, category_id} = category
          return(
          <li key={category_id} className=''>
              <button className='mb-3 w-43 bg-gray-300 text-left px-4 py-2 rounded cursor-pointer font-medium transition-all'>{category_name}</button>
          </li>
        )})
      }
    </ul>
    <div className="space-y-6 flex flex-col items-center width-full">
          {/* Swimming Card */}
          <div className="relative group">
            <Image src={Img1} alt="Swimming" className="w-full h-auto rounded-lg shadow-sm" />
            <p className="text-center mt-2 font-semibold text-gray-700 uppercase tracking-wide text-sm italic">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
          </div>

          {/* Class Card */}
          <div className="relative">
            <Image src={Img2} alt="Class" className="w-full h-auto rounded-lg shadow-sm" />
            <p className="text-center mt-2 font-semibold text-gray-700 uppercase tracking-wide text-sm italic">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
          </div>

          {/* Playground Card */}
          <div className="relative">
            <Image src={Img3} alt="Playground" className="w-full h-auto rounded-lg shadow-sm" />
            <p className="text-center mt-2 font-semibold text-gray-700 uppercase tracking-wide text-sm italic">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
          </div>
        </div>
    </div>
  );
};

export default LeftSidebar;