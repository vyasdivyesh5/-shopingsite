'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Image from 'next/image';
import "../globals.css";

export default function About() {
  return (
    <div className='bg-purple-200'>
      <Navigation />

      {/* Hero Section */}
      <div className="relative px-[15px] max-w-full h-[20px] md:h-[40px] py-[50px] my-[50px] md:py-[100px]">
        <Image
          src="/purple.jpeg"
          alt="Background"
          fill
          style={{ objectFit: "contain" }}
          quality={100}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-4xl">About us</h1>
        </div>
      </div>

      {/* Intro Section */}
      <div className='px-[15px] my-[50px] container mx-auto'>
        <div className="inline-flex items-center font-bold py-[5px] px-[6px] rounded-2xl text-md bg-white gap-2">
          <span className="w-3 h-3 bg-red-400 rounded-full inline-block"></span>
          <span>About us</span>
          <span className="w-3 h-3 bg-red-400 rounded-full inline-block"></span>
        </div>

        <h1 className='text-4xl my-[30px]'>
          Introduction to best delivery agency
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          <p className='text-lg text-black p-[20px] bg-white rounded-lg shadow-md shadow-purple-600'>
            Welcome to <span className='font-bold'>zuppo</span>– your trusted local shop offering fast and reliable delivery of everyday essentials right to your doorstep.
          </p>
          <p className='text-lg text-black p-[20px] bg-white rounded-lg shadow-md shadow-purple-600'>
            We believe convenience should never compromise quality.
          </p>
          <p className='text-lg text-black p-[20px] bg-white rounded-lg shadow-md shadow-purple-600'>
            <span className='font-bold'>Our mission is simple:</span> Shop easy. Get it fast. Love the service.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className='w-full'>
        <div className='px-[15px] pb-[50px] container mx-auto flex flex-col items-center justify-center'>
          <div className="inline-flex items-center font-bold py-[6px] px-[6px] rounded-2xl my-[50px] text-md bg-white gap-2">
            <span className="w-3 h-3 bg-red-400 rounded-full inline-block"></span>
            <span>Our team</span>
            <span className="w-3 h-3 bg-red-400 rounded-full inline-block"></span>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
            {/* Team Member */}
            {[
              { name: "Murdul Katkiya", role: "CEO", img: "/ceo.jpg" },
              { name: "Sunil Patil", role: "CFO", img: "/cfo.jpg" },
              { name: "Anuradha Kashayup", role: "CEO", img: "/employee.jpeg" },
              { name: "Kunal Katkiya", role: "Marketing & Designing", img: "/marketing.jpeg" },
            ].map((member, index) => (
              <div key={index} className='flex relative flex-col bg-white rounded-2xl overflow-hidden h-[231px]'>
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-2xl"
                />
                <div className='bg-white absolute top-[67%] left-0.5 w-[50%] text-md p-[15px] rounded-2xl'>
                  <p className='font-bold'>{member.name}</p>
                  <p className='text-gray-600 text-sm'>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
