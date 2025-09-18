'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Image from 'next/image';
import "../globals.css";

function Blog() {
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
          <h1 className="text-white text-2xl md:text-4xl">Blog</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className='container mb-[50px] mx-auto grid px-[15px] gap-6 lg:grid-cols-3 md:grid-cols-2'>
        {/* Blog Posts */}
        <div className='col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4'>
          {[...Array(10)].map((_, i) => (
            <div key={i} className='flex flex-col bg-white rounded-2xl overflow-hidden'>
              <Image
                src="/eyewear.jpg"
                alt="Blog Post"
                width={600}
                height={400}
                className="object-cover"
              />
              <div className='p-[15px]'>
                <p className='text-gray-500 my-2'>26 March 2015 By Author</p>
                <p className='font-bold text-xl my-2'>earum non mollitia ipsa sit asperiores assumenda.</p>
                <p className='text-lg my-2'>
                  Lorem ipsum dolor sit amet. Est vero error est saepe voluptatem et officiis adipisci et voluptatibus earum non mollitia ipsa sit asperiores assumenda. Ut minima mollitia et odit nobis et itaque odio. Eum veritatis dolores aut quasi provident est repellat voluptas.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className='flex flex-col h-fit p-[15px] bg-white rounded-2xl overflow-hidden'>
          {/* Search */}
          <div className='grid py-[15px] grid-cols-12'>
            <input
              type='text'
              name='search'
              placeholder='Search...'
              className='col-span-9 p-2 border border-purple-600 rounded-l-2xl text-black'
            />
            <button className='col-span-3 p-2 bg-purple-600 rounded-r-2xl text-white'>Search</button>
          </div>

          {/* Categories */}
          <div className='py-[15px]'>
            <p className='font-bold text-2xl'>Category</p>
            <ul className='list-none pl-[15px]'>
              <li className='py-[7px] border-b border-gray-300'>Apparel & Accessories</li>
              <li className='py-[7px] border-b border-gray-300'>Electronics</li>
              <li className='py-[7px] border-b border-gray-300'>Home & Furniture</li>
              <li className='py-[7px] border-b border-gray-300'>Kitchen & Dining</li>
              <li className='py-[7px] border-b border-gray-300'>Health & Wellness</li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className='py-[15px]'>
            <p className='font-bold text-2xl'>Recent Posts</p>
            <ul className='list-none pl-[15px]'>
              {[...Array(4)].map((_, i) => (
                <li key={i} className='py-[7px] border-b border-gray-300 flex items-center overflow-hidden'>
                  <Image src="/watch.jpg" width={80} height={80} className="object-contain" alt='Recent Post' />
                  <div className='p-[15px]'>
                    <a href="#" className='no-underline text-md'>Lorem ipsum dolor sit amet consectetur adipisicing.</a>
                    <p className='text-gray-500 my-2 text-md'>26 March 2015 By Author</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className='py-[15px]'>
            <p className='font-bold text-2xl'>Tags</p>
            <div className="flex pl-[15px] py-[15px] flex-wrap gap-2">
              {['JavaScript', 'Web Dev', 'Node.js'].map((tag, i) => (
                <span key={i} className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Blog;
