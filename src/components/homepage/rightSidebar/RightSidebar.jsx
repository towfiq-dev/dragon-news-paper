'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import swimmingImg from '../../../assets/asset/swimming.png'
import classImg from '../../../assets/asset/class.png'
import playgroundImg from '../../../assets/asset/playground.png'
import bgImg from '../../../assets/asset/rightBg.png';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';
const RightSidebar = () => {
  const handleGoogleSignin =async()=>{
    const data = await authClient.signIn.social({
      provider: "google",
      callbackURL: '/'
    })
    if (data) {
      toast.success('SignIn Successful')
    }else{
      toast.error('something went wrong.')
    }
    
  }

    const handleGithubSignin =async()=>{
    const data = await authClient.signIn.social({
      provider: "github",
      callbackURL: '/'
    })
    if (data) {
      toast.success('SignIn Successful')
    }else{
      toast.error('something went wrong.')
    }
  }
  return (
    <div>
      {/* Register */}
      <div className=''>
      <h3 className='font-semibold text-[20px] mb-4'>Register With</h3>
      <div 
      //href={'/auth/signup'} 
      className='flex text-[17px] btn btn-primary justify-center items-center gap-2 px-5 py-2 mb-3'>
      <FaGoogle />
      <button className='cursor-pointer' onClick={handleGoogleSignin}>Register with Google</button>
      </div>
      <div 
      //href={'/auth/github'} 
      className='flex text-[17px] btn btn-primary justify-center items-center gap-2 px-5 py-2'>
      <FaGithub />
      <button className='cursor-pointer' onClick={handleGithubSignin}>Register with Github</button>
      </div>
      </div>
      {/* 2. Find Us On */}
      <div className='mt-7'>
        <h3 className="font-bold text-xl mb-4 text-neutral-700">Find Us On</h3>
        <div className="flex flex-col border rounded-lg overflow-hidden">
          <Link href="https://facebook.com" className="flex items-center gap-3 p-4 border-b hover:bg-base-200 transition-all">
            <span className="p-2 bg-gray-100 rounded-full text-blue-600"><FaFacebook /></span>
            <span className="font-medium text-gray-600">Facebook</span>
          </Link>
          <Link href="https://twitter.com" className="flex items-center gap-3 p-4 border-b hover:bg-base-200 transition-all">
            <span className="p-2 bg-gray-100 rounded-full text-sky-400"><FaTwitter /></span>
            <span className="font-medium text-gray-600">Twitter</span>
          </Link>
          <Link href="https://instagram.com" className="flex items-center gap-3 p-4 hover:bg-base-200 transition-all">
            <span className="p-2 bg-gray-100 rounded-full text-pink-500"><FaInstagram /></span>
            <span className="font-medium text-gray-600">Instagram</span>
          </Link>
        </div>
      </div>

      {/* 3. Q-Zone */}
      <div className="bg-gray-100 rounded-lg p-4 mt-6">
        <h3 className="font-bold text-xl mb-6 text-neutral-700">Q-Zone</h3>
        <div className="space-y-6 flex flex-col items-center">
          {/* Swimming Card */}
          <div className='w-full'>
            <Image src={swimmingImg} alt="Swimming" className="w-full h-auto rounded-lg shadow-sm" />
          </div>

          {/* Class Card */}
          <div className='w-full'>
            <Image src={classImg} alt="Class" className="w-full h-auto rounded-lg shadow-sm" />
          </div>

          {/* Playground Card */}
          <div className='w-full'>
            <Image src={playgroundImg} alt="Playground" className="w-full h-auto rounded-lg shadow-sm" />
          </div>
        </div>
      </div>

      {/* 4. Advertisement Banner */}
      <div className="mt-7 relative rounded-lg overflow-hidden h-[400px] flex flex-col items-center justify-center text-white text-center p-6" 
           style={{ backgroundImage: `url(${bgImg.src})`, backgroundSize: 'cover' }}>
        <div className="bg-black/40 absolute inset-0"></div>
        <div className="relative z-10">
            <h2 className="text-3xl font-bold leading-tight">Create an Amazing Newspaper</h2>
            <p className="my-5 text-sm">Discover thousands of options, easy to customize layouts, and much more.</p>
            <button className="btn btn-error text-white rounded-none px-8">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;