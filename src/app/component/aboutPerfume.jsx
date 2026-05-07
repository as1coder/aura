"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { bodoni, poppins } from "../fonts";

export default function AboutPerfume() {
 const features = [
  "Alcohol-Free Formulation",
  "Long-Lasting Fragrance (Up to 24 Hours)",
  "Crafted with Pure Essential Oils",
  "Designed in Elegant, Timeless Bottles",
];

  return (
    <section
    id="journal" className="bg-[#0B0B0B] text-[#EBDAB0] py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-xl"
        >
          <Image
            src="/aboutBottle.png"
            alt="Perfume"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* RIGHT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`${poppins.className}`}
        >
          <h2 className={`${bodoni.className} text-3xl md:text-4xl mb-8`}>
            Crafted for Elegance
          </h2>

          <div className="space-y-6">
            {features.map((item, i) => (
              <div key={i} className="flex items-center gap-4 group">

                {/* Line */}
                <div className="w-10 h-[1px] bg-[#EBDAB0]/40 group-hover:w-16 transition-all"></div>

                {/* Text */}
                <p className="text-lg text-[#F4EADE]/80 group-hover:text-[#EBDAB0] transition">
                  {item}
                </p>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}