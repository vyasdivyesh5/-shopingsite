import Image from "next/image";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-purple-200">
      <Navigation />
      <div className="px-[15px]">
        <div className="container relative mx-auto bg-transparent mt-[50px] shadow-md shadow-purple-500 rounded-2xl  overflow-hidden">
          <img src='retailshop.jpg' className=' w-full md:h-[400px] lg:h-[500px]  object-cover  xl:h-[500px] z-10 ' alt='' />
          < h1 className="absolute top-[25%] left-[20%]  md:left-[30%] lg:left-[40%] z-20 text-lg md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black  leading-tight" style={{ textShadow: '30px 25px 6px rgba(0, 0, 0, 0.3)' }}>
            <span className="block">Let's buy from</span>
            <span className="block relative left-16">our shop</span>
            <span className="block relative left-0">today and</span>
            <span className="block relative left-20">save more!</span>
          </h1>

        </div>
      </div>
      <div className='w-full  '>
        <div className=' px-[15px] pb-[50px] container mx-auto flex flex-col items-center justify-center '>
          <div className="inline-flex items-center font-bold py-[6px] px-[6px] rounded-2xl my-[50px] text-md bg-white  gap-2">
            <span className="w-3 h-3 bg-red-400 rounded-full inline-block"></span>
            <span>Top selling products</span>
            <span className="w-3 h-3 bg-red-400 rounded-full inline-block"></span>
          </div>
          <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10'>
            <div className="flex  group relative flex-col bg-cover text-center bg-white rounded-2xl overflow-hidden">
              <img src='bags.jpg' className='w-full h-[300px]' alt='' />
              <p className="text-lg font-bold mt-2">zuppo's bag</p>
              <p className="text-md text-black"><span className="font-bold">₹</span>50000.00</p>
              <button className="hidden group-hover:block bg-purple-600 absolute  p-[6px] rounded-2xl w-full  top-[75%] text-white">Add to cart</button>
            </div>

            <div className="flex group  relative flex-col bg-cover text-center bg-white rounded-2xl overflow-hidden">
              <img src='shoes.jpg' className='w-full h-[300px]' alt='' />
              <p className="text-lg font-bold mt-2 ">Ladies shoes</p>
              <p className="text-md text-black"><span className="font-bold">₹</span>5000.00</p>
              <button className="hidden group-hover:block bg-purple-600 absolute  p-[6px] rounded-2xl w-full  top-[75%] text-white">Add to cart</button>
            </div>


            <div className="flex group  relative flex-col bg-cover text-center bg-white rounded-2xl overflow-hidden">
              <img src='watch.jpg' className='w-full h-[300px]' alt='' />
              <p className="text-lg font-bold mt-2">zuppo's watch</p>
              <p className="text-md text-black"><span className="font-bold">₹</span>50000.00</p>
              <button className="hidden group-hover:block bg-purple-600 absolute  p-[6px] rounded-2xl w-full  top-[75%] text-white">Add to cart</button>
            </div>


            <div className="flex group  relative flex-col bg-cover text-center bg-white rounded-2xl overflow-hidden">
              <img src='bags.jpg' className='w-full h-[300px]' alt='' />
              <p className="text-lg font-bold mt-2">zuppo's bag</p>
              <p className="text-md text-black"><span className="font-bold">₹</span>50000.00</p>
              <button className="hidden group-hover:block bg-purple-600 absolute  p-[6px] rounded-2xl w-full  top-[75%] text-white">Add to cart</button>
            </div>

            <div className="flex group  relative flex-col bg-cover text-center bg-white rounded-2xl overflow-hidden">
              <img src='headphone.jpg' className='w-full h-[300px]' alt='' />
              <p className="text-lg font-bold mt-2 ">altar'd Headphone</p>
              <p className="text-md text-black"><span className="font-bold">₹</span>50000.00</p>
              <button className="hidden group-hover:block bg-purple-600 absolute  p-[6px] rounded-2xl w-full  top-[75%] text-white">Add to cart</button>
            </div>

          </div>
        </div>

      </div>

      <div className='w-full h-full  '>
        <div className=' px-[15px]  container mx-auto flex flex-col items-center justify-center '>
          <div className='flex relative flex-col bg-white rounded-2xl overflow-hidden w-full  h-[500px]'>
            <img src='big_sale.png' className='object-contain h-full w-full' alt='' />
          </div>

        </div>
      </div>

      <div className='w-full  '>
        <div className=' px-[15px]  container mx-auto flex flex-col items-center justify-center '>
          <div className="inline-flex items-center font-bold py-[6px] px-[6px] rounded-2xl my-[50px] text-md bg-white  gap-2">
            <span className="w-3 h-3 bg-red-400 rounded-full inline-block"></span>
            <span>Categrory</span>
            <span className="w-3 h-3 bg-red-400 rounded-full inline-block"></span>
          </div>
          <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10'>
            <div className="flex  relative flex-col bg-cover text-center bg-white rounded-2xl overflow-hidden">
              <img src='bags.jpg' className='w-full h-[300px]' alt='' />
              <p className="text-lg font-bold my-2">Bags & Clothes</p>


            </div>

            <div className="flex group  relative flex-col bg-cover text-center bg-white rounded-2xl overflow-hidden">
              <img src='shoes.jpg' className='w-full h-[300px]' alt='' />
              <p className="text-lg font-bold my-2">Shoes</p>

            </div>


            <div className="flex group  relative flex-col bg-cover text-center bg-white rounded-2xl overflow-hidden">
              <img src='watch.jpg' className='w-full h-[300px]' alt='' />
              <p className="text-lg font-bold my-2">Watch's</p>

            </div>


            <div className="flex group  relative flex-col bg-cover text-center bg-white rounded-2xl overflow-hidden">
              <img src='bags.jpg' className='w-full h-[300px]' alt='' />
              <p className="text-lg font-bold my-2">Snack's & Braverages</p>

            </div>

            <div className="flex group  relative flex-col bg-cover text-center bg-white rounded-2xl overflow-hidden">
              <img src='headphone.jpg' className='w-full h-[300px]' alt='' />
              <p className="text-lg font-bold my-2 ">Personal Care</p>

            </div>

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
                <img src='ceo.jpg  ' className='object-cover w-full h-full' alt='' />
                <div className='bg-white absolute top-[67%] left-0.5 w-[50%]  text-md p-[15px] rounded-2xl '>

                  <p className='font-bold'>murdul katkiya</p>
                  <p className='text-gray-600 text-sm'>CEO</p>


                </div>



              </div>
              <div className='flex relative  flex-col bg-white rounded-2xl  bg-cover overflow-hidden h-[231px]'>
                <img src='cfo.jpg  ' className='object-cover w-full h-full' alt='' />
                <div className='bg-white absolute top-[67%] left-0.5 w-[50%]  text-md p-[15px] rounded-2xl '>

                  <p className='font-bold '>sunil patil</p>
                  <p className='text-gray-600 text-sm'>CFO</p>


                </div>



              </div>
              <div className='flex relative  flex-col bg-white rounded-2xl  bg-cover overflow-hidden h-[231px]'>
                <img src='employee.jpeg  ' className='object-cover w-full h-full' alt='' />
                <div className='bg-white absolute top-[67%] left-0.5 min-w-[50%]  text-md p-[15px] rounded-2xl '>

                  <p className='font-bold'>anuradha kashayup</p>
                  <p className='text-gray-600 text-sm'>CEO</p>


                </div>



              </div>
              <div className='flex relative  flex-col bg-white rounded-2xl  bg-cover overflow-hidden h-[231px]'>
                <img src='marketing.jpeg  ' className='object-cover w-full h-full' alt='' />
                <div className='bg-white absolute top-[67%] left-0.5 min-w-[50%]  text-md p-[15px] rounded-2xl '>

                  <p className='font-bold'>kunal katkiya</p>
                  <p className='text-gray-600 text-sm'>marketing & designing</p>


                </div>



              </div>

            </div>


          </div>
        </div>
      </div>




      <Footer />

    </div>
  );
}
