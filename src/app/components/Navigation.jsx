'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
    setMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className='container flex items-center justify-between text-lg px-[15px] mx-auto bg-white rounded-b-lg font-bold'>
        <Image src="/zuppo.png" alt="Logo" width={140} height={60} onClick={handleClick} className='cursor-pointer' />
        <ul className='hidden md:flex space-x-10'>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        {/* Mobile Hamburger */}
        <div className='md:hidden w-[40px] h-[40px]'>
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <svg className="w-[40px] h-[40px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className='flex justify-between items-center'>
            <Image src="/zuppo.png" alt="Logo" width={140} height={60} onClick={handleClick} className='cursor-pointer' />
            <button onClick={() => setMenuOpen(false)} className="focus:outline-none">
              <svg className="w-[40px] h-[40px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
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
