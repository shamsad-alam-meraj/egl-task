"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/assets/images/image1.png", alt: "logo1", width: 200, height: 57 },
  { src: "/assets/images/image2.png", alt: "logo2", width: 200, height: 57 },
  { src: "/assets/images/image3.png", alt: "logo3", width: 200, height: 72 },
  { src: "/assets/images/image4.jpg", alt: "logo4", width: 200, height: 72 },
  { src: "/assets/images/image5.png", alt: "logo5", width: 200, height: 72 },
];

export default function Awards() {
  return (
    <section className="w-full md:py-[134px] py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Wrapper for horizontal scroll on small screens */}
        <motion.div
          className="flex gap-5 overflow-x-auto md:overflow-x-visible scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 py-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="relative flex-shrink-0 opacity-60"
              style={{ width: img.width, height: img.height }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                style={{ objectFit: "contain" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
