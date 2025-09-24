import Image from "next/image";

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
        <div className="flex items-center md:flex-row flex-col gap-5 flex-wrap justify-center">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative opacity-60"
              style={{ width: img.width, height: img.height }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
