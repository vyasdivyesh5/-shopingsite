'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import "../globals.css";
import Image from 'next/image';
import Footer from '../components/Footer';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log('Form Submitted:', data);
    // You can integrate email service / API here
  };

  return (
    <div className='bg-purple-200'>
      <Navigation />

      {/* Hero / Breadcrumb */}
      <div className="relative px-[15px] max-w-full h-[20px] md:h-[40px] py-[50px] my-[50px] md:py-[100px]">
        <Image
          src="/purple.jpeg"
          alt="Background"
          fill
          objectFit="contain"
          quality={100}
        />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-white text-2xl md:text-4xl font-bold">Contact us</h1>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white shadow-md mb-[50px] rounded-md space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">Contact Us</h2>

        <div>
          <input
            type="text"
            name="name"
            placeholder="Please enter name"
            required
            className="mt-1 block w-full p-[10px] rounded-2xl border-gray-300 shadow-md focus:shadow-lg focus:border-purple-500 focus:ring focus:ring-purple-200 focus:outline-none"
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Please enter email"
            required
            className="mt-1 block w-full p-[10px] rounded-2xl border-gray-300 shadow-md focus:shadow-lg focus:border-purple-500 focus:ring focus:ring-purple-200 focus:outline-none"
          />
        </div>

        <div>
          <textarea
            name="message"
            rows="5"
            required
            placeholder="Type your message"
            className="mt-1 block w-full p-[10px] rounded-2xl border-gray-300 shadow-md focus:shadow-lg focus:border-purple-500 focus:ring focus:ring-purple-200 focus:outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-2xl hover:bg-purple-700 transition shadow-md shadow-purple-500"
        >
          Send Message
        </button>
      </form>

      <Footer />
    </div>
  );
}

export default Contact;
