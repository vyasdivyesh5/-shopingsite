'use client';

import { TruckIcon, ArrowPathIcon, GiftIcon, PhoneIcon, WrenchIcon, CreditCardIcon } from '@heroicons/react/24/outline';
import ServiceCard from '../components/ServiceCard';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import "../globals.css";
import Image from 'next/image';

const services = [
  {
    title: 'Home Delivery',
    description: 'Get products delivered quickly and safely to your door.',
    Icon: TruckIcon,
  },
  {
    title: 'Easy Returns',
    description: 'Hassle-free returns within 7 days for eligible items.',
    Icon: ArrowPathIcon,
  },
  {
    title: 'Gift Wrapping',
    description: 'Complimentary gift wrapping for special occasions.',
    Icon: GiftIcon,
  },
  {
    title: '24/7 Customer Support',
    description: 'Our team is here to help you anytime.',
    Icon: PhoneIcon,
  },
  {
    title: 'Product Setup',
    description: 'Free installation for select electronics & furniture.',
    Icon: WrenchIcon,
  },
  {
    title: 'Multiple Payment Options',
    description: 'Pay via UPI, card, or COD at your convenience.',
    Icon: CreditCardIcon,
  },
];

export default function Service() {
  return (
    <div className='bg-purple-200'>
      <Navigation />

      {/* Hero & Breadcrumb (kept as-is) */}
      <div className="relative px-[15px] max-w-full h-[20px] md:h-[40px] py-[50px] my-[50px] md:py-[100px]">
        <Image
          src="/purple.jpeg"
          alt="Background"
          fill
          objectFit="contain"
          quality={100}
        />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-white text-2xl md:text-4xl font-bold">Our Services</h1>
        </div>
      </div>

      {/* Services Section */}
      <div className="container px-[15px] py-[50px] mx-auto">
        <div className="inline-flex items-center font-bold py-[5px] px-[6px] rounded-2xl text-md bg-gray-200 gap-2">
          <span className="w-3 h-3 bg-red-400 rounded-full inline-block"></span>
          <span>Our Services</span>
          <span className="w-3 h-3 bg-red-400 rounded-full inline-block"></span>
        </div>

        <h1 className='text-4xl my-[30px]'>
          We offer a range of services to make your shopping experience smooth and satisfying.
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              Icon={service.Icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
