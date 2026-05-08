"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { bodoni, poppins } from "../fonts";
import Link from "next/link";
export default function Collection() {
  const items = [
    { name: "Everyday Essentials", image: "/everydayPerfume.webp" , link: "/products#everyday" },
    { name: "Evening & Party", image: "/eveningPartyImage.webp" , link: "/products#evening"},
    { name: "Seasonal Picks", image: "/seasonalPerfume.webp", link: "/products#seasonal" },
    { name: "Signature Attars", image: "/signaturePerfume.webp",  link: "/products#signature" },
  ];

  return (
    <section
      id="collection"
      className="py-20 bg-[#EBDAB0] px-6"
    >
      {/* Heading */}
      <motion.h3
        className={`${bodoni.className} text-3xl md:text-5xl text-center text-[#0B0B0B] mb-12`}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Our Collection
      </motion.h3>

      {/* Grid */}
      <div
        className={`${poppins.className} max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6`}
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            {/* Image Wrapper */}
            <Link href={item.link} className="relative w-full h-56 md:h-72 overflow-hidden rounded-xl">
            <div className="relative w-full h-56 md:h-72 overflow-hidden rounded-xl">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />

              {/* Text */}
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className={`${bodoni.className} text-lg md:text-xl`}>
                  {item.name}
                </h4>
              </div>
            </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}