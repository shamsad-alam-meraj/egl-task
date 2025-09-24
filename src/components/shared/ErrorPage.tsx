"use client";

import { AlertCircle } from "lucide-react";
import Link from "next/link";

interface ErrorPageProps {
  message?: string;
}

export default function ErrorPage({ message = "Something went wrong!" }: ErrorPageProps) {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <AlertCircle className="w-20 h-20 text-red-500 mb-6" />
      <h1 className="text-3xl font-bold mb-2">Oops!</h1>
      <p className="text-lg text-gray-600 mb-4">{message}</p>
      <Link
        href="/"
        className="px-6 py-2 rounded-full bg-[#1C9876] text-white font-semibold hover:bg-green-600 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
