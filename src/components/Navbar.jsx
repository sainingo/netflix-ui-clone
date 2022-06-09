import React from 'react'
import {BsSearch} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {
  return (
    <div className='flex text-white justify-between p-4 items-center shadow-xl fixed w-full border-gray-700 bg-slate-900/70'>
        <div className='flex justify-around ml-4'>
            <p className='text-red-600 text-4xl pr-5 cursor-pointer'>NETFLIX</p>
            <ul className='hidden md:flex px-4 py-2 gap-10'>
                <li>HOME</li>
                <li>TV Shows</li>
                <li>Movies</li>
            </ul>
        </div>
        <div className='hidden md:flex items-center justify-around gap-6 mr-10'>
            <p className='text-2xl'><BsSearch /></p>
            <button className='bg-white text-red-600  text-2xl py-2 px-6 rounded-md'>sign in</button>
        </div>
        <div className='text-white/90 md:hidden text-2xl'><GiHamburgerMenu className='cursor-pointer' /></div>
    </div>
  )
}

export default Navbar