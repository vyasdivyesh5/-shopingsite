'use client';

import Image from "next/image";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-purple-200">
      <Navigation />

      {/* Hero Section */}
      <div className="px-[15px]">
        <div className="container relative mx-auto bg-transparent mt-[50px] shadow-md shadow-purple-500 rounded-2xl overflow-hidden">
          <Image
            src="/retailshop.jpg"
            alt="Retail Shop"
            width={1200}
            height={500}
            className="w-full md:h-[400px] lg:h-[500px] object-cover xl:h-[500px] z-10"
          />
          <h1
            className="absolute top-[25%] left-[20%] md:left-[30%] lg:left-[40%] z-20 text-lg md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight"
            style={{ textShadow: "30px 25px 6px rgba(0, 0, 0, 0.3)" }}
          >
            <span className="block">Let&apos;s buy from</span>
            <span className="block relative left-16">our shop</span>
            <span className="block relative left-0">today and</span>
            <span className="block relative left-20">save more!</span>
          </h1>
        </div>
      </div>

      {/* Top Selling Products */}
      <div className="w-full">
        <div className="px-[15px] pb-[50px] container mx-auto flex flex-col items-center justify-center">
          <div className="inline-flex items-center font-bold py-[6px] px-[6px] rounded-2xl my-[50px] text-md bg-white gap-2">
            <span className="w-3 h-3 bg-red-400 rounded-full inline-block"></span>
            <span>Top selling products</span>
            <span className="w-3 h-3 bg-red-400 rounded-full inline-block"></span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {[
              { src: "/bags.jpg", title: "Zuppo&apos;s Bag", price: 50000 },
              { src: "/shoes.jpg", title: "Ladies Shoes", price: 5000 },
              { src: "/watch.jpg", title: "Zuppo&apos;s Watch", price: 50000 },
              { src: "/bags.jpg", title: "Zuppo&apos;s Bag", price: 50000 },
              { src: "/headphone.jpg", title: "Altar&apos;d Headphone", price: 50000 },
            ].map((product, idx) => (
              <div key={idx} className="flex group relative flex-col bg-white text-center rounded-2xl overflow-hidden">
                <Image src={product.src} alt={product.title} width={500} height={300} className="w-full h-[300px] object-cover" />
                <p className="text-lg font-bold mt-2">{product.title}</p>
                <p className="text-md text-black">
                  <span className="font-bold">₹</span>{product.price.toLocaleString()}
                </p>
                <button className="hidden group-hover:block bg-purple-600 absolute p-[6px] rounded-2xl w-full top-[75%] text-white">
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Big Sale Banner */}
      <div className="w-full">
        <div className="px-[15px] container mx-auto flex flex-col items-center justify-center">
          <div className="flex relative flex-col bg-white rounded-2xl overflow-hidden w-full h-[500px]">
            <Image src="/big_sale.png" alt="Big Sale" width={1200} height={500} className="object-contain h-full w-full" />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="w-full">
        <div className="px-[15px] container mx-auto flex flex-col items-center justify-center">
          <div className="inline-flex items-center font-bold py-[6px] px-[6px] rounded-2xl my-[50px] text-md bg-white gap-2">
            <span className="w-3 h-3 bg-red-400 rounded-full inline-block"></span>
            <span>Category</span>
            <span className="w-3 h-3 bg-red-400 rounded-full inline-block"></span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {[
              { src: "/bags.jpg", title: "Bags & Clothes" },
              { src: "/shoes.jpg", title: "Shoes" },
              { src: "/watch.jpg", title: "Watch&apos;s" },
              { src: "/bags.jpg", title: "Snack&apos;s & Beverages" },
              { src: "/headphone.jpg", title: "Personal Care" },
            ].map((cat, idx) => (
              <div key={idx} className="flex relative flex-col bg-cover text-center bg-white rounded-2xl overflow-hidden">
                <Image src={cat.src} alt={cat.title} width={300} height={300} className="w-full h-[300px]" />
                <p className="text-lg font-bold my-2">{cat.title}</p>
              </div>
            ))}
          </div>
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
            {[
              { src: "/ceo.jpg", name: "Murdul Katkiya", role: "CEO" },
              { src: "/cfo.jpg", name: "Sunil Patil", role: "CFO" },
              { src: "/employee.jpeg", name: "Anuradha Kashayup", role: "Manager" },
              { src: "/marketing.jpeg", name: "Kunal Katkiya", role: "Marketing & Designing" },
            ].map((member, idx) => (
              <div key={idx} className="flex relative flex-col bg-white rounded-2xl overflow-hidden h-[231px]">
                <Image src={member.src} alt={member.name} fill className="object-cover" />
                <div className="bg-white absolute top-[67%] left-0.5 w-[50%] text-md p-[15px] rounded-2xl">
                  <p className="font-bold">{member.name}</p>
                  <p className="text-gray-600 text-sm">{member.role}</p>
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
