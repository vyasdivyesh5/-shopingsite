// pages/about.js
import React from 'react';
import Navigation from '../components/Navigation';
import "../globals.css";
import Image from 'next/image';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="bg-purple-200">
      <Navigation />

      {/* Hero Banner */}
      <div className="relative px-[15px] max-w-full h-[200px] md:h-[300px] lg:h-[400px] my-[50px]">
        <Image
          src="/purple.jpeg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="text-white text-2xl md:text-4xl font-bold">About Us</h1>
        </div>
      </div>

      {/* Intro Section */}
      <div className="px-[15px] my-[50px] container mx-auto">
        <div className="inline-flex items-center font-bold py-[5px] px-[6px] rounded-2xl text-md bg-white gap-2">
          <span className="w-3 h-3 bg-red-400 rounded-full inline-block"></span>
          <span>About Us</span>
          <span className="w-3 h-3 bg-red-400 rounded-full inline-block"></span>
        </div>
        <h1 className="text-4xl my-[30px]">Introduction to best delivery agency</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <p className="text-lg text-black p-[20px] bg-white rounded-lg shadow-purple-600 shadow-md">
            Welcome to <span className="font-bold">zuppo</span> – your trusted local shop offering fast and reliable
            delivery of everyday essentials right to your doorstep.
          </p>
          <p className="text-lg text-black p-[20px] bg-white rounded-lg shadow-purple-600 shadow-md">
            We believe convenience should never compromise quality.
          </p>
          <p className="text-lg text-black p-[20px] bg-white rounded-lg shadow-purple-600 shadow-md">
            <span className="font-bold">Our mission is simple:</span> Shop easy. Get it fast. Love the service.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="w-full">
        <div className="px-[15px] pb-[50px] container mx-auto flex flex-col items-center justify-center">
          <div className="inline-flex items-center font-bold py-[6px] px-[6px] rounded-2xl my-[50px] text-md bg-white gap-2">
            <span className="w-3 h-3 bg-red-400 rounded-full inline-block"></span>
            <span>Our Team</span>
            <span className="w-3 h-3 bg-red-400 rounded-full inline-block"></span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* CEO */}
            <div className="flex relative flex-col bg-white rounded-2xl overflow-hidden h-[231px]">
              <Image src="/ceo.jpg" alt="CEO" fill className="object-cover" />
              <div className="bg-white absolute top-[67%] left-0.5 w-[50%] text-md p-[15px] rounded-2xl">
                <p className="font-bold">Murdul Katkiya</p>
                <p className="text-gray-600 text-sm">CEO</p>
              </div>
            </div>

            {/* CFO */}
            <div className="flex relative flex-col bg-white rounded-2xl overflow-hidden h-[231px]">
              <Image src="/cfo.jpg" alt="CFO" fill className="object-cover" />
              <div className="bg-white absolute top-[67%] left-0.5 w-[50%] text-md p-[15px] rounded-2xl">
                <p className="font-bold">Sunil Patil</p>
                <p className="text-gray-600 text-sm">CFO</p>
              </div>
            </div>

            {/* Employee */}
            <div className="flex relative flex-col bg-white rounded-2xl overflow-hidden h-[231px]">
              <Image src="/employee.jpeg" alt="Employee" fill className="object-cover" />
              <div className="bg-white absolute top-[67%] left-0.5 w-[50%] text-md p-[15px] rounded-2xl">
                <p className="font-bold">Anuradha Kashayup</p>
                <p className="text-gray-600 text-sm">Manager</p>
              </div>
            </div>

            {/* Marketing */}
            <div className="flex relative flex-col bg-white rounded-2xl overflow-hidden h-[231px]">
              <Image src="/marketing.jpeg" alt="Marketing" fill className="object-cover" />
              <div className="bg-white absolute top-[67%] left-0.5 w-[50%] text-md p-[15px] rounded-2xl">
                <p className="font-bold">Kunal Katkiya</p>
                <p className="text-gray-600 text-sm">Marketing & Designing</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
