"use client";
import Image from "next/image";
import { bodoni, poppins } from "../fonts";
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="bg-[#0B0B0B] min-h-screen p-4 flex flex-col lg:flex-row">
      {/* IMAGE */}

      {/* TEXT */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-7 py-4 gap-8">        <motion.h1 className={`${bodoni.className} tracking-widest text-4xl sm:text-5xl lg:text-6xl text-[#EBDAB0]`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        Leave a Memory Not Just a Scent
      </motion.h1>

        <motion.p className={`${poppins.className} tracking-wide text-lg sm:text-xl lg:text-3xl text-[#E0E0E0]`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          Because the right fragrance stays long after you’re gone.
        </motion.p>
       <Link href={"/products"}>
        <motion.button className={`${poppins.className} cursor-pointer border-2 border-[#EBDAB0] text-[#EBDAB0] px-12 py-3 rounded-md w-max`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
          Shop Now <GoArrowRight className="inline ml-2 text-2xl" />
        </motion.button>
       </Link>
      </div>
      <motion.div
        className="relative items-center p-3 justify-center flex w-full lg:w-1/2 h-[70vh] lg:h-[88vh]"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Image
          src="/auraPerfumePage.png"
          alt="Hero"
          fill
          priority
          className="object-cover object-[60%_center] md:object-center opacity-60 rounded-xl"
        />
      </motion.div>

    </div>
  );
}