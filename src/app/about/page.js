// pages/about.js
import React from 'react';
import Navigation from '../components/Navigation';
import "../globals.css";
import Image from 'next/image';
import Footer from '../components/Footer';
export default function About() {
  return (
    <div className='bg-purple-200'>
      <Navigation />
      <div className="relative px-[15px] max-w-full  h-[20px] md:h-[40px] py-[50px] my-[50px] md:py-[100px]">
        <Image
          src="/purple.jpeg"
          alt="Background"
          layout="fill"
          objectFit="contian"
          quality={100}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-4xl">About us</h1>
        </div>
      </div>

      <div className=' px-[15px] my-[50px]  container mx-auto'>

        <div className="inline-flex items-center font-bold py-[5px] px-[6px] rounded-2xl text-md bg-white  gap-2">
          <span className="w-3 h-3 bg-red-400 rounded-full inline-block"></span>
          <span>About us</span>
          <span className="w-3 h-3 bg-red-400 rounded-full inline-block"></span>
        </div>
        <h1 className='text-4xl my-[30px]'>
          Introduction to best delivery agency

        </h1>

        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          <p className='text-lg text-black p-[20px] bg-white rounded-lg flex-2 shadow-purple-600 shadow-md'>
            Welcome to <span className='font-bold'>zuppo</span>– your trusted local shop offering fast and reliable delivery of everyday essentials right to your doorstep.
          </p>
          <p className='text-lg text-black  p-[20px] bg-white rounded-lg flex-1  shadow-purple-600 shadow-md'>
            We believe convenience should never compromise quality.
          </p>
          <p className='text-lg text-black p-[20px] bg-white rounded-lg flex-1  shadow-purple-600 shadow-md'>
            <span className='font-bold '>Our mission is simple:</span>
            Shop easy. Get it fast. Love the service.
          </p>
        </div>



      </div>

      <div className='w-full  '>
        <div className=' px-[15px] pb-[50px] container mx-auto flex flex-col items-center justify-center '>
          <div className="inline-flex items-center font-bold py-[6px] px-[6px] rounded-2xl my-[50px] text-md bg-white  gap-2">
            <span className="w-3 h-3 bg-red-400 rounded-full inline-block"></span>
            <span>Our team </span>
            <span className="w-3 h-3 bg-red-400 rounded-full inline-block"></span>
          </div>
          <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
            <div className='flex relative  flex-col bg-white rounded-2xl  bg-cover overflow-hidden h-[231px]'>
              <img src='ceo.jpg  ' className='object-cover w-full h-full ' alt='' />
              <div className='bg-white absolute top-[67%] left-0.5 w-[50%]  text-md p-[15px] rounded-2xl '>

                <p className='font-bold '>murdul katkiya</p>
                <p className='text-gray-600 text-sm'>CEO</p>


              </div>



            </div>
            <div className='flex relative  flex-col bg-white rounded-2xl  bg-cover overflow-hidden h-[231px]'>
              <img src='cfo.jpg  ' className='object-cover w-full h-full' alt='' />
              <div className='bg-white absolute top-[67%] left-0.5 w-[50%]  text-md p-[15px] rounded-2xl '>

                <p className='font-bold object-contain'>sunil patil</p>
                <p className='text-gray-600 text-sm'>CFO</p>


              </div>



            </div>
            <div className='flex relative  flex-col bg-white rounded-2xl  bg-cover overflow-hidden h-[231px]'>
              <img src='employee.jpeg  ' className='object-cover w-full h-full' alt='' />
              <div className='bg-white absolute top-[67%] left-0.5 min-w-[50%]  text-md p-[15px] rounded-2xl '>

                <p className='font-bold object-contain'>anuradha kashayup</p>
                <p className='text-gray-600 text-sm'>CEO</p>


              </div>



            </div>
            <div className='flex relative  flex-col bg-white rounded-2xl  bg-cover  h-[231px]'>
              <img src='marketing.jpeg  ' className='object-cover w-full h-full' alt='' />
              <div className='bg-white absolute top-[67%] left-0.5 min-w-[50%]]  text-md p-[15px] rounded-2xl '>

                <p className='font-bold '>kunal katkiya</p>
                <p className='text-gray-600 text-sm'>marketing & designing</p>


              </div>



            </div>

          </div>


        </div>
      </div>
   <Footer/>

      



    </div>
  );
}
