"use client";
import { motion } from "framer-motion";
import {bodoni , poppins} from "../fonts";

export default function PerfumeInfo() {
const sections = [
  {
    title: "Parfum (Extrait de Parfum)",
    desc: "The highest concentration of fragrance, offering a deep, rich, and long-lasting scent that can stay on the skin for 8–12 hours or more.",
  },
  {
    title: "Eau de Parfum (EDP)",
    desc: "A well-balanced fragrance with strong projection and longevity, making it ideal for both everyday wear and special occasions.",
  },
  {
    title: "Eau de Toilette (EDT)",
    desc: "A lighter, more refreshing scent designed for casual and daytime use, providing a subtle yet noticeable presence.",
  },
  {
    title: "Eau de Cologne (EDC)",
    desc: "A fresh and invigorating fragrance with a low concentration, perfect for a quick burst of freshness that lasts a few hours.",
  },
  {
    title: "Woody Fragrance",
    desc: "Warm and sophisticated, featuring notes like sandalwood and cedarwood that create a deep and masculine character.",
  },
  {
    title: "Fresh / Citrus",
    desc: "Bright, clean, and energizing scents with citrus and aquatic notes, perfect for warm weather and daily wear.",
  },
  {
    title: "Oriental / Spicy",
    desc: "Rich, warm, and slightly sweet fragrances with spicy undertones, ideal for evenings and special occasions.",
  },
  {
    title: "Floral",
    desc: "Soft, elegant, and timeless scents built around floral notes, offering a delicate and refined fragrance experience.",
  },
];

  return (
    <section className={`${poppins.className} bg-[#EBD8B0] text-[#333] py-10 px-3 `}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto "
      >
        
        {/* Heading */}
        <h2 className={`${bodoni.className} text-3xl md:text-4xl  mb-5 p-5`}>
          Types of Perfumes
        </h2>

        {/* Sections */}
        <div className="">
          {sections.map((item, index) => (
            <div key={index} className="group p-3">

              {/* Title */}
              <h3 className={`${bodoni.className} text-xl md:text-2xl `}>
                {item.title}
              </h3>

              {/* Description */}
              <p className=" mt-2 leading-relaxed max-w-2xl">
                {item.desc}
              </p>

              {/* Divider */}
              <div className="mt-6 flex items-center gap-3">
                <div className="h-[1px] bg-gray-900 flex-1"></div>
                <div className="w-2 h-2 bg-[#333] rounded-full"></div>
                <div className="h-[1px] bg-gray-900 flex-1"></div>
              </div>

            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}