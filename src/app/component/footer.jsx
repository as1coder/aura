"use client";

import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { bodoni, poppins } from "../fonts";
import { motion, scale } from "framer-motion";
import Link from "next/link";

export default function Footer() {
    return (
        
        <footer className="bg-[#0B0B0B] text-[#EBDAB0] px-6 py-16 border-t border-[#EBDAB0]/10">
<section id="contact">
            <div className="max-w-6xl mx-auto">

                {/* TOP */}
                <motion.div className="grid md:grid-cols-3 gap-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>

                    {/* BRAND */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <h2
                            className={`${bodoni.className} text-3xl md:text-4xl mb-4 tracking-wide`}
                        >
                                Aura Perfume
                    </h2>

                    <p
                        className={`${poppins.className} text-[#F4EADE]/60 leading-relaxed max-w-sm`}
                    >
                        Crafted with elegance, tradition, and timeless fragrance
                        experiences designed to leave a lasting impression.
                    </p>
                </motion.div>

                {/* LINKS */}
                <div className={`${poppins.className}`}>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="uppercase tracking-[0.2em] text-2xl text-[#EBDAB0]/40 mb-5"
                    >
                        Quick Links
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col gap-3 text-[#F4EADE]/70"
                    >
                        <Link href="/home" className="hover:text-[#EBDAB0] transition">
                            Home
                        </Link>

                        <Link href="/#collection" className="hover:text-[#EBDAB0] transition">
                            Collection
                        </Link>

                        <Link href="/#journal" className="hover:text-[#EBDAB0] transition">
                            Journal
                        </Link>

                  <Link href="/#about" className="hover:text-[#EBDAB0] transition">
                            Our Story
                        </Link>      

                        <Link href="/#location" className="hover:text-[#EBDAB0] transition">
                            Location
                        </Link>

                    </motion.div>
                </div>

                {/* SOCIAL */}
                <div className={`${poppins.className}`}>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                       
                        className="uppercase tracking-[0.2em] text-2xl text-[#EBDAB0]/40  mb-5"
                    >
                        Connect
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center gap-4">

                        <Link
                            href="https://www.instagram.com/codexrehan_4232/"
                            target="_blank"
                            className="w-11 h-11 rounded-full border border-[#EBDAB0]/20 flex items-center justify-center hover:bg-[#EBDAB0] hover:text-black transition duration-300"
                        >
                            <FaInstagram size={18} />
                        </Link>

                        <Link   
                            href="https://wa.me/8421405548"
                            target="_blank"
                            className="w-11 h-11 rounded-full border border-[#EBDAB0]/20 flex items-center justify-center hover:bg-[#EBDAB0] hover:text-black transition duration-300"
                        >
                            <FaWhatsapp size={18} />
                        </Link>

                        <Link
                            href="https://www.facebook.com/codexrehan_4232/"
                            target="_blank"
                            className="w-11 h-11 rounded-full border border-[#EBDAB0]/20 flex items-center justify-center hover:bg-[#EBDAB0] hover:text-black transition duration-300"
                        >
                            <FaFacebookF size={16} />
                        </Link>

                    </motion.div>
                </div>
            </motion.div>

            {/* BOTTOM */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-16 pt-6 border-t border-[#EBDAB0]/10 flex flex-col md:flex-row items-center justify-between gap-4">
                <p
                    className={`${poppins.className} text-sm text-[#F4EADE]/40`}
                >
                    © 2026 Aura Perfume. All rights reserved.
                </p>

                <p
                    className={`${poppins.className} text-sm text-[#F4EADE]/30`}
                >
                    Designed with elegance & timeless simplicity.
                </p>
            </motion.div>
        </div>
        </section>
    </footer >
  );
}