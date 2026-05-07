"use client";

import { motion } from "framer-motion";
import { bodoni, poppins } from "../fonts";

export default function Location() {
  return (
    <section
      id="location"
      className="bg-[#0B0B0B] text-[#EBDAB0] py-24 px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[0.3em] text-sm text-[#EBDAB0]/50 mb-4">
            Visit Us
          </p>

          <h2
            className={`${bodoni.className} text-4xl md:text-5xl mb-6`}
          >
            Our Store Location
          </h2>

          <p
            className={`${poppins.className} text-[#F4EADE]/70 leading-relaxed mb-8 max-w-md`}
          >
            Experience our fragrances in person and discover a collection
            crafted with elegance, tradition, and timeless luxury.
          </p>

          {/* ADDRESS */}
          <div className={`${poppins.className} space-y-2 mb-8`}>
            <p className="text-lg">Malegaon, Nashik</p>
            <p className="text-[#F4EADE]/60">
              Maharashtra, India
            </p>
          </div>

          {/* BUTTON */}
          <a
            href="https://maps.app.goo.gl/oii1112VDAsC9VqW9"
            target="_blank"
            className={`${poppins.className} inline-block border border-[#EBDAB0]/40 px-6 py-3 rounded-full hover:bg-[#EBDAB0] hover:text-black transition`}
          >
            View Directions
          </a>
        </motion.div>

        {/* RIGHT MAP */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-2xl border border-[#EBDAB0]/10 h-[400px]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.793710567428!2d74.53968487434152!3d20.555619703862728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bde9900219674d5%3A0x72aacb8280207339!2sAura%20Perfumes!5e0!3m2!1sen!2sin!4v1778094581875!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      
      </div>
    </section>
  );
}