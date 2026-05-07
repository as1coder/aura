"use client";

import Image from "next/image";
import Navbar from "../component/Navbar";
import Footer from "../component/footer";
import { motion } from "framer-motion";
import { bodoni, poppins } from "../fonts";
import sections from "../data/products";
import Link from "next/link";
import ScrollTopButton from "../component/scrollUp";
export default function Products() {

    // =========================
    // PRODUCT DATA
    // =========================

    return (
        <div className="bg-[#0B0B0B] text-[#EBDAB0]">

            <Navbar />

            {/* HERO */}
            <section className="pt-36 pb-20 px-10 text-start border-b border-[#EBDAB0]/10">

                <motion.p
                    className={`${poppins.className} uppercase tracking-[0.4em] text-3xl text-[#EBDAB0]/40 mb-4`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    Our Collection
                </motion.p>

                <motion.h1
                    className={`${bodoni.className} text-5xl md:text-7xl`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Crafted Fragrances
                </motion.h1>

                <motion.p
                    className={`${poppins.className} text-[#F4EADE]/60 max-w-2xl  mt-6 leading-relaxed`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    Explore our signature collection of perfumes and attars,
                    designed to capture elegance, depth, and timeless luxury.
                </motion.p>
            </section>

            {/* STICKY FILTER NAV */}
            <div className="sticky top-16 z-40 backdrop-blur-xl bg-[#0B0B0B]/70 flex justify-center border-b border-[#EBDAB0]/10">

                <div
                    className={`${poppins.className} max-w-6xl mx-auto flex items-center gap-6 overflow-x-auto px-6 py-4`}
                >
                    {sections.map((section, i) => (
                        <a
                            key={i}
                            href={`#${section.id}`}
                            className="text-sm whitespace-nowrap text-[#F4EADE]/60 hover:text-[#EBDAB0] transition"
                        >
                            {section.title}
                        </a>
                    ))}
                </div>
            </div>

            {/* SECTIONS */}
            <div className="max-w-6xl mx-auto px-6 py-20 space-y-32">

                {sections.map((section, i) => (

                    <section key={i} id={section.id}>

                        {/* SECTION HEADING */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="mb-12"
                        >

                            <p
                                className={`${poppins.className} uppercase tracking-[0.3em] text-sm text-[#EBDAB0]/40 mb-3`}
                            >
                                Collection
                            </p>

                            <h2
                                className={`${bodoni.className} text-4xl md:text-5xl mb-4`}
                            >
                                {section.title}
                            </h2>

                            <p
                                className={`${poppins.className} text-[#F4EADE]/60 max-w-xl`}
                            >
                                {section.subtitle}
                            </p>

                        </motion.div>

                        {/* PRODUCTS GRID */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

                            {section.products.map((product, index) => (

                                <Link
                                    key={index}
                                    href={`/${product.productId}`}
                                >

                                    <motion.div
                                        className="group cursor-pointer"
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                    >

                                        {/* IMAGE */}
                                        <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-2xl">

                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-cover group-hover:scale-110 transition duration-700"
                                            />

                                            {/* OVERLAY */}
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500" />

                                        </div>

                                        {/* INFO */}
                                        <div className="pt-4">

                                            <h3
                                                className={`${bodoni.className} text-xl md:text-2xl mb-2`}
                                            >
                                                {product.name}
                                            </h3>

                                            {/* PRICE */}
                                            <div className="flex items-center gap-3">

                                                <p
                                                    className={`${bodoni.className} text-xl text-[#EBDAB0]`}
                                                >
                                                    ₹ {product.salePrice}
                                                </p>

                                                <p
                                                    className={`${poppins.className} text-sm text-[#F4EADE]/40 line-through`}
                                                >
                                                   ₹ {product.price}
                                                </p>

                                            </div>

                                        </div>

                                    </motion.div>

                                </Link>

                            ))}

                        </div>

                    </section>

                ))}

            </div>

            <Footer />
            <ScrollTopButton />

        </div>
    );
}