import { Youtube, Linkedin, Github, BookOpen } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="shadow-[#D9D9D9]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-b border-gray-200 pb-10">
          {/* Logo + description (50%) */}
          <div >
            <Image
              src="/assets/images/egl_logo.png"
              alt="logo"
              width={123}
              height={36}
            />
            <p className="mt-4 text-[16px] text-[#595959] leading- text-justify pr-10">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex.
            </p>
          </div>

          {/* Right side (Solutions, Company, Community in 3 cols inside 50%) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Solutions */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Solutions</h3>
              <ul className="space-y-2 text-sm text-[#595959]">
                <li>
                  <a href="#">Web Tool</a>
                </li>
                <li>
                  <a href="#">Consulting</a>
                </li>
                <li>
                  <a href="#">Research</a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-[#595959]">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Methodology</a>
                </li>
                <li>
                  <a href="#">Partners</a>
                </li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Community</h3>
              <ul className="space-y-2 text-sm text-[#595959]">
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">Open-Source Data</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6">
          <p className="text-sm text-gray-500 text-center md:text-left">
           Copyright © 2025 everythinggreen. All Rights Reserved
          </p>

          {/* Social icons */}
          <div className="flex gap-4 text-[#595959]">
            <a href="#" aria-label="YouTube">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Docs">
              <BookOpen className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
