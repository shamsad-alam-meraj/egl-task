"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // ✅ Close menu automatically if resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="w-full shadow-sm font-inter">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between h-[72px] px-6">
        {/* Left Logo */}
        <div>
          <Image
            src="/assets/images/egl_logo.png"
            alt="logo"
            width={180}
            height={52}
          />
        </div>

        {/* Middle Nav */}
        <nav className="hidden md:flex items-center gap-[30px] text-md">
          <Link href="/" className="font-semibold text-black">
            Home
          </Link>
          <Link href="/services">Services</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>

        {/* Right Button  */}
        <div className="hidden md:block">
          <button className="px-[35px] py-2 rounded-full border border-[#1C9876] text-black hover:bg-[#1C9876] hover:text-white transition text-md font-semibold">
            Login
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-black"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <Menu className="w-7 h-7" />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* ✅ Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-2.5 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4 }}
              className="fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-white shadow-lg z-50 flex flex-col"
            >
              {/* Close Button */}
              <div className="flex justify-end p-4">
                <button onClick={toggleMenu} aria-label="Close Menu">
                  <X className="w-7 h-7 text-black" />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex flex-col items-center gap-6 mt-10 text-lg font-medium text-gray-800">
                <Link href="/" onClick={toggleMenu}>
                  Home
                </Link>
                <Link href="/services" onClick={toggleMenu}>
                  Services
                </Link>
                <Link href="/blog" onClick={toggleMenu}>
                  Blog
                </Link>
                <Link href="/contact" onClick={toggleMenu}>
                  Contact Us
                </Link>
                <button
                  onClick={toggleMenu}
                  className="mt-6 px-[35px] py-2 rounded-full border border-[#1C9876] text-black hover:bg-[#1C9876] hover:text-white transition text-md font-semibold"
                >
                  Login
                </button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
