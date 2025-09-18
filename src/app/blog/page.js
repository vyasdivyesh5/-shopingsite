import React from 'react';
import Navigation from '../components/Navigation';
import "../globals.css";
import Image from 'next/image';
import Footer from '../components/Footer';

function Blog() {
  return (
    <div className=' bg-purple-200 '>
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
          <h1 className="text-white text-2xl md:text-4xl">Blog</h1>
        </div>
      </div>


      <div className='container mb-[50px] mx-auto grid px-[15px] gap-6 lg:grid-cols-3  md:grid-cols-2 '>
        <div className='col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
          <div className='flex flex-col bg-white rounded-2xl overflow-hidden'>
            <img src='eyewear.jpg'  classname="object-cover"  alt=''/>
            <div className='p-[15px]'>
              <p className='text-gray-500 my-2'>26 March 2015 By Author</p>

              <p className='font-bold text-xl my-2'>earum non mollitia ipsa sit asperiores assumenda.</p>

              <p className='text-lg my-2'>Lorem ipsum dolor sit amet. Est vero error est saepe voluptatem et officiis adipisci et voluptatibus earum non mollitia ipsa sit asperiores assumenda. Ut minima mollitia et odit nobis et itaque odio. Eum veritatis dolores aut quasi provident est repellat voluptas</p>


            </div>

          </div>


          <div className='flex flex-col bg-white rounded-2xl overflow-hidden'>
            <img src='eyewear.jpg'  classname="object-cover"  alt=''/>
            <div className='p-[15px]'>
              <p className='text-gray-500 my-2'>26 March 2015 By Author</p>

              <p className='font-bold text-xl my-2'>earum non mollitia ipsa sit asperiores assumenda.</p>

              <p className='text-lg my-2'>Lorem ipsum dolor sit amet. Est vero error est saepe voluptatem et officiis adipisci et voluptatibus earum non mollitia ipsa sit asperiores assumenda. Ut minima mollitia et odit nobis et itaque odio. Eum veritatis dolores aut quasi provident est repellat voluptas</p>


            </div>

          </div>

          <div className='flex flex-col bg-white rounded-2xl overflow-hidden'>
            <img src='eyewear.jpg'  classname="object-cover"  alt=''/>
            <div className='p-[15px]'>
              <p className='text-gray-500 my-2'>26 March 2015 By Author</p>

              <p className='font-bold text-xl my-2'>earum non mollitia ipsa sit asperiores assumenda.</p>

              <p className='text-lg my-2'>Lorem ipsum dolor sit amet. Est vero error est saepe voluptatem et officiis adipisci et voluptatibus earum non mollitia ipsa sit asperiores assumenda. Ut minima mollitia et odit nobis et itaque odio. Eum veritatis dolores aut quasi provident est repellat voluptas</p>


            </div>

          </div>

          <div className='flex flex-col bg-white rounded-2xl overflow-hidden'>
            <img src='eyewear.jpg'  classname="object-cover"  alt=''/>
            <div className='p-[15px]'>
              <p className='text-gray-500 my-2'>26 March 2015 By Author</p>

              <p className='font-bold text-xl my-2'>earum non mollitia ipsa sit asperiores assumenda.</p>

              <p className='text-lg my-2'>Lorem ipsum dolor sit amet. Est vero error est saepe voluptatem et officiis adipisci et voluptatibus earum non mollitia ipsa sit asperiores assumenda. Ut minima mollitia et odit nobis et itaque odio. Eum veritatis dolores aut quasi provident est repellat voluptas</p>


            </div>

          </div>


          <div className='flex flex-col bg-white rounded-2xl'>
            <img src='eyewear.jpg'  classname="object-cover"  alt=''/>
            <div className='p-[15px]'>
              <p className='text-gray-500 my-2'>26 March 2015 By Author</p>

              <p className='font-bold text-xl my-2'>earum non mollitia ipsa sit asperiores assumenda.</p>

              <p className='text-lg my-2'>Lorem ipsum dolor sit amet. Est vero error est saepe voluptatem et officiis adipisci et voluptatibus earum non mollitia ipsa sit asperiores assumenda. Ut minima mollitia et odit nobis et itaque odio. Eum veritatis dolores aut quasi provident est repellat voluptas</p>


            </div>

          </div>


          <div className='flex flex-col bg-white rounded-2xl'>
            <img src='eyewear.jpg'  classname="object-cover"  alt=''/>
            <div className='p-[15px]'>
              <p className='text-gray-500 my-2'>26 March 2015 By Author</p>

              <p className='font-bold text-xl my-2'>earum non mollitia ipsa sit asperiores assumenda.</p>

              <p className='text-lg my-2'>Lorem ipsum dolor sit amet. Est vero error est saepe voluptatem et officiis adipisci et voluptatibus earum non mollitia ipsa sit asperiores assumenda. Ut minima mollitia et odit nobis et itaque odio. Eum veritatis dolores aut quasi provident est repellat voluptas</p>


            </div>

          </div>


          <div className='flex flex-col bg-white rounded-2xl'>
            <img src='eyewear.jpg'  classname="object-cover"  alt=''/>
            <div className='p-[15px]'>
              <p className='text-gray-500 my-2'>26 March 2015 By Author</p>

              <p className='font-bold text-xl my-2'>earum non mollitia ipsa sit asperiores assumenda.</p>

              <p className='text-lg my-2'>Lorem ipsum dolor sit amet. Est vero error est saepe voluptatem et officiis adipisci et voluptatibus earum non mollitia ipsa sit asperiores assumenda. Ut minima mollitia et odit nobis et itaque odio. Eum veritatis dolores aut quasi provident est repellat voluptas</p>


            </div>

          </div>

          <div className='flex flex-col bg-white rounded-2xl'>
            <img src='eyewear.jpg'  classname="object-cover"  alt=''/>
            <div className='p-[15px]'>
              <p className='text-gray-500 my-2'>26 March 2015 By Author</p>

              <p className='font-bold text-xl my-2'>earum non mollitia ipsa sit asperiores assumenda.</p>

              <p className='text-lg my-2'>Lorem ipsum dolor sit amet. Est vero error est saepe voluptatem et officiis adipisci et voluptatibus earum non mollitia ipsa sit asperiores assumenda. Ut minima mollitia et odit nobis et itaque odio. Eum veritatis dolores aut quasi provident est repellat voluptas</p>


            </div>

          </div>

          <div className='flex flex-col bg-white rounded-2xl'>
            <img src='eyewear.jpg'  classname="object-cover"  alt=''/>
            <div className='p-[15px]'>
              <p className='text-gray-500 my-2'>26 March 2015 By Author</p>

              <p className='font-bold text-xl my-2'>earum non mollitia ipsa sit asperiores assumenda.</p>

              <p className='text-lg my-2'>Lorem ipsum dolor sit amet. Est vero error est saepe voluptatem et officiis adipisci et voluptatibus earum non mollitia ipsa sit asperiores assumenda. Ut minima mollitia et odit nobis et itaque odio. Eum veritatis dolores aut quasi provident est repellat voluptas</p>


            </div>

          </div>

        </div>


          <div className='flex flex-col h-fit p-[15px] bg-white rounded-2xl overflow-hidden'>
            <div className='grid py-[15px]  grid-cols-12 '>
            <input type='text' name='search' placeholder='Search...' className='col-span-9 p-2  border-1 rounded-l-2xl border-purple-600 border-solid text-black' />
            <button className=' col-span-3 p-2  bg-purple-600 rounded-r-2xl  border-solid text-white'>Search </button>
            </div>
            <div className='py-[15px]'>
              <p className='font-bold text-2xl'>Categrory</p>
              <ul className='list-none pl-[15px]'>
                <li className='py-[7px] border-b-1'>Apparel & Accessories</li>
                <li  className='py-[7px] border-b-1'>Electronics</li>
                <li  className='py-[7px] border-b-1'>Home & Furniture</li>
                <li  className='py-[7px] border-b-1'>Kitchen & Dining</li>
                <li  className='py-[7px] border-b-1'>Kitchen & Dining</li>
                <li  className='py-[7px] border-b-1'>Health & Wellness</li>
              </ul>



            </div>
                        <div className='py-[15px]'>
              <p className='font-bold text-2xl'>Categrory</p>
              <ul className='list-none pl-[15px]'>
                <li className='py-[7px] border-b-1 flex overflow-hidden items-center'>
                  <img src='watch.jpg' className='w-[80px] h-[80px] object-contain' alt=''/>
                  <div className='p-[15px]'>
                    <a href="#" className='no-underline text-md'>Lorem ipsum dolor sit amet consectetur adipisicing.</a>
                     <p className='text-gray-500 my-2 text-md'>26 March 2015 By Author</p>
                  </div>
                </li>
                 <li className='py-[7px] border-b-1 flex overflow-hidden items-center'>
                  <img src='watch.jpg' className='w-[80px] h-[80px] object-contain' alt=''/>
                  <div className='p-[15px]'>
                    <a href="#" className='no-underline text-md'>Lorem ipsum dolor sit amet consectetur adipisicing.</a>
                     <p className='text-gray-500 my-2 text-md'>26 March 2015 By Author</p>
                  </div>
                </li>
                 <li className='py-[7px] border-b-1 flex overflow-hidden items-center'>
                  <img src='watch.jpg' className='w-[80px] h-[80px] object-contain' alt=''/>
                  <div className='p-[15px]'>
                    <a href="#" className='no-underline text-md'>Lorem ipsum dolor sit amet consectetur adipisicing.</a>
                     <p className='text-gray-500 my-2 text-md'>26 March 2015 By Author</p>
                  </div>
                </li>
                 <li className='py-[7px] border-b-1 flex overflow-hidden items-center'>
                  <img src='watch.jpg' className='w-[80px] h-[80px] object-contain' alt=''/>
                  <div className='p-[15px]'>
                    <a href="#" className='no-underline text-md'>Lorem ipsum dolor sit amet consectetur adipisicing.</a>
                     <p className='text-gray-500 my-2 text-md'>26 March 2015 By Author</p>
                  </div>
                </li>
              </ul>



            </div>
              <div className='py-[15px]'>
              <p className='font-bold text-2xl'>Tags</p>
              <div class="flex pl-[15px] py-[15px] flex-wrap gap-2">
    <span class="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full">JavaScript</span>
    <span class="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full">Web Dev</span>
    <span class="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full">Node.js</span>
    </div>
              </div>
          
          </div>



      </div>
     

      
          


     
      
   <Footer/>
   </div>

      



   

      
    
  )
}

export default Blog
