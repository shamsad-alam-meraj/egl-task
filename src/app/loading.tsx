"use client";

import { Loader } from "lucide-react";

export default function LoadingPage() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-50">
      <Loader className="w-16 h-16 animate-spin text-green-500" />
    </div>
  );
}
