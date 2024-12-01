import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='flex items-center '>
        <div className='flex flex-col pr-[60px] pl-[80px] w-[50%] h-[300px]  gap-[24px]  my-[100px]'>
            <div className=' flex flex-col gap-[24px] '>
                <h1 className='text-[56px] font-bold leading-[67px]'>Learn new skills online with ease</h1>
                <p className='font-normal text-[18px] leading-[27px]'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
            </div>
            <div className='flex pt-[16px] gap-4'>
                 <Button className='py-[12px] px-[24px]'>Start Learning Now</Button>
                 <Button className='py-[12px] px-[24px] border-2 border-black' variant={"secondary"}>Explore Courses</Button>

            </div>

        </div>
        <div className='w-[50%] h-[900px]'>
            <Image className='' src={"/images/image.png"} alt='hero' width={885} height={800} ></Image>
        </div>

    </div>
  )
}

export default Hero