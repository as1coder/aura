"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { bodoni, poppins } from "../fonts";

export default function About() {
  return (
    <section
    id="about" className={`${poppins.className} bg-[#0B0B0B] text-[#EBDAB0] px-6 py-20`}>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`${bodoni.className} text-3xl md:text-4xl mb-12 text-center tracking-wide`}
        >
          About Us
        </motion.h1>
      <div className="max-w-6xl mx-auto">

        {/* 🔥 OUR STORY */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <h2 className={`${bodoni.className} text-3xl md:text-4xl mb-6 tracking-wide`}>
            Born from Tradition
          </h2>

          <p className="text-[#F4EADE]/70 max-w-2xl mx-auto leading-relaxed text-lg">
            Rooted in heritage and refined through time, our fragrances are crafted 
            to capture emotion, identity, and elegance in every drop.
          </p>
        </motion.div>

        {/* 🔥 IMAGE BLOCK */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <Image
            src="/aboutimg.jpg"
            alt="craft"
            width={1200}
            height={700}
            className="w-full h-[500px] object-cover rounded-xl"
          />
        </motion.div>

        {/* 🔥 CRAFT TEXT (LEFT RIGHT SPLIT WITHOUT CARDS) */}
        <div className="grid md:grid-cols-2 gap-16 mb-32">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className={`${bodoni.className} text-3xl mb-6`}>
              The Craft
            </h3>

            <p className="text-[#F4EADE]/70 leading-relaxed">
              Each fragrance is composed with precision, blending rare ingredients 
              through time-honored distillation techniques. The process is slow, 
              intentional, and deeply rooted in tradition.
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className={`${bodoni.className} text-3xl mb-6`}>
              The Essence
            </h3>

            <p className="text-[#F4EADE]/70 leading-relaxed">
              From the first note to the last, every scent evolves uniquely on the skin. 
              Designed to leave a lasting impression, our attars reflect both luxury 
              and individuality.
            </p>
          </motion.div>

        </div>

        {/* 🔥 DIVIDER LINE */}
        <div className="w-full h-[1px] bg-[#EBDAB0]/20 mb-20"></div>

        {/* 🔥 FINAL QUOTE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className={`${bodoni.className} text-2xl md:text-4xl leading-relaxed`}>
            A fragrance is more than a scent —  
            it is a silent expression of who you are.
          </p>
        </motion.div>

      </div>
    </section>
  );
}