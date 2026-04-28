'use client'
import React from 'react';
import ActiveNav from './ActiveNav';
import Image from 'next/image';
import NavLogo from '../../../assets/asset/user.png'
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import Link from 'next/link';

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    toast.success('Log Out Successfully');
                }
            }
        });
    };

    const links = 
  <div className='flex gap-5 justify-center items-center'>
    <ActiveNav href={'/'}>Home</ActiveNav>
    <ActiveNav href={'/allNavs/about'}>About</ActiveNav>
    <ActiveNav href={'/allNavs/contact'}>Contact</ActiveNav>
    <ActiveNav href={'/allNavs/dashboard'}>Dashboard</ActiveNav>
  </div>

    if (isPending) {
        return (
            <div className="h-16 flex items-center justify-center bg-base-100 shadow-sm border-b">
                <span className="loading loading-spinner loading-md text-primary"></span>
            </div>
        );
    }

    return (
        <div className="navbar bg-base-100 shadow-md rounded-xl px-4 md:px-8 mt-4 sticky top-0 z-50 transition-all duration-300">
            {/* Navbar Start: Logo & Mobile Menu */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-1 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52 border">
                        {links}
                    </ul>
                </div>
                {/* Logo or Brand Name */}
                <Link href="/" className="text-xl font-bold tracking-tighter text-primary">
                    MY<span className="text-neutral">NEWS</span>
                </Link>
            </div>

            {/* Navbar Center: Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2 font-medium">
                    {links}
                </ul>
            </div>

            {/* Navbar End: User Info & Auth Actions */}
            <div className="navbar-end gap-3">
                {user ? (
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar online border-primary hover:border-primary-focus transition-all">
                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <Image 
                                    width={40} 
                                    height={40} 
                                    src={user.image || NavLogo} 
                                    alt={user.name} 
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow-xl menu menu-sm dropdown-content bg-base-100 rounded-box w-60 border border-base-200">
                            <li className="p-3 border-b mb-2">
                                <p className="font-bold text-lg text-neutral truncate">{user.name}</p>
                                <p className="text-xs text-gray-500 truncate">{user.email}</p>
                            </li>
                            <li><Link href="/profile">My Profile</Link></li>
                            <li><Link href="/settings">Settings</Link></li>
                            <li>
                                <button onClick={handleSignOut} className="text-red-500 font-semibold hover:bg-red-50">
                                    Log Out
                                </button>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <Link href="/auth/signin" className="btn btn-primary btn-sm md:btn-md rounded-lg px-6 shadow-md hover:shadow-lg transition-all">
                        Log In
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;