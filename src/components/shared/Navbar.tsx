"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between h-[72px] px-6 ">
        {/* Left Logo Section */}
        <div>
          <Image
            src="/assets/images/egl_logo.png"
            alt="logo"
            width={249}
            height={72}
          />
        </div>

        {/* Middle Nav Links */}
        <nav className="flex items-center gap-[30px] text-md">
          <Link href="/" className="font-semibold text-black ">
            Home
          </Link>
          <Link href="/services">Services</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>

        {/* Right Button */}
        <div>
          <button className="px-[35px] py-2 rounded-full border border-[#1C9876] text-black hover:bg-[#1C9876] hover:text-white transition text-md font-semibold">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}
