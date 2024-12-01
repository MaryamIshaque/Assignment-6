import React from 'react'
import Image from 'next/image';
import { FaFacebook, FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Button } from './ui/button';
const Header = () => {
  return (
    <header className=' flex flex-col gap-2'>
        <div className='bg-secondary flex justify-between px-[64px] items-center py-3 '>
            <div className='text-[#000000] text-[14px] '>
            Phone Number: 956 742 455 678 ! Email:info@ddsgnr.com

            </div>
            <ul className='flex justify-between items-center gap-[12px]'>
                <li className='w-6 h-6  '><FaFacebook/></li>
                <li className='w-6 h-6 '><FaInstagram/></li>
                <li className='w-6 h-6 '><FaTwitter/></li>
                <li className='w-6 h-6 '><FaLinkedin/></li>

            </ul>

       </div>
       <nav className='bg-secondary flex justify-between items-center py-[29px] px-[64px] border-1 border-[#676767] '>
        <div className='logo'>
            <Image src={"/images/logo (3).png"} alt='logo' width={130} height={41}></Image>
        </div>
        <div className='flex gap-[32px] bg-white '>

        <ul className='flex items-center p-[10px] gap-[32px] '>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Courses</li>
            <li className='cursor-pointer'>Services</li>
            <li className='cursor-pointer'>Achievements</li>
            <li className='cursor-pointer'>About us</li>
            <li className='cursor-pointer'>Testimonial</li>

        </ul>
        <div className='flex gap-[16px] justify-between items-center'>
                  <Button className='py-[8px] px-[20px] border-[1px] border-black rounded-lg' variant={"secondary"}>Login</Button> 
                  <Button className='py-[8px] px-[20px] border-[1px] border-black rounded-lg'>Sign Up</Button>
        </div>
        </div>
       </nav>
    </header>
  )
}

export default Header