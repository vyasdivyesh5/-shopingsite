'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import "../globals.css";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
    <>
      {/* Desktop / Laptop Navigation */}
      <div className="container flex items-center justify-between text-lg px-[15px] mx-auto bg-white rounded-b-lg font-bold">
        <div onClick={handleClick} className="cursor-pointer">
          <Image src="/zuppo.png" alt="Logo" width={140} height={60} />
        </div>
        <ul className="hidden md:flex space-x-10">
          <li><Link href="/" className="no-underline py-[10px] hover:text-black">Home</Link></li>
          <li><Link href="/about" className="no-underline py-[10px] hover:text-black">About</Link></li>
          <li><Link href="/services" className="no-underline py-[10px] hover:text-black">Services</Link></li>
          <li><Link href="/blog" className="no-underline py-[10px] hover:text-black">Blog</Link></li>
          <li><Link href="/contact" className="no-underline py-[10px] hover:text-black">Contact</Link></li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden w-[40px] h-[40px]">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <svg
              className="w-[40px] h-[40px]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="w-full md:hidden fixed top-0 left-0 h-screen bg-white z-50 px-[15px] pb-4">
          <div className="flex justify-between items-center">
            <div onClick={handleClick} className="cursor-pointer">
              <Image src="/zuppo.png" alt="Logo" width={140} height={60} />
            </div>
            <div className="w-[40px] h-[40px]">
              <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
                <svg
                  className="w-[40px] h-[40px]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <ul className="flex flex-col mt-20 space-y-4 text-lg font-semibold">
            <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
            <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navigation;
