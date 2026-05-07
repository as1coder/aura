"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { bodoni, poppins } from "../fonts"
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/products" },
    { name: "Collections", href: "#collection" },
    { name: "Journal", href: "#journal" },
    { name: "Our Story", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <>
      {/* NAVBAR */}
      <div className={`${poppins.className} h-20 sticky top-0 flex items-center justify-between px-4 bg-[#0B0B0B] text-[#EBDAB0]  z-50`}>
        <motion.h3 className={`${bodoni.className} text-xl font-bold`}
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <Link href="/">Aura Perfume</Link>
        </motion.h3>

        {/* Desktop Menu */}
        <motion.ul className="hidden md:flex space-x-6" initial="hidden" animate="visible" variants={{
          hidden: { opacity: 0, x: 20 },
          visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.3 }, delayChildren: 0.5 }
        }}>
          <Link href="/cart">
            <li className="cursor-pointer hover:text-[#E0E0E0]"><FaShoppingCart className="text-2xl" /></li>
          </Link>
          {menuItems.map((item, i) => (
            <motion.li key={i} variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0, transition: { delay: i * 0.3 } }
            }} className="cursor-pointer hover:text-[#E0E0E0]">
              <Link href={item.href}>{item.name}</Link>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div className="gap-5 flex justify-center items-center md:hidden p-3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}  >
          {/* Hamburger */}
          <Link href="/cart">
            <FaShoppingCart className="text-xl md:hidden cursor-pointer" />
          </Link>
          <button onClick={() => setIsOpen(true)} className="text-xl md:hidden">
            ☰
          </button>
        </motion.div>
      </div>
      {/* OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 80 }}
        className="fixed top-0 right-0 h-full w-[75%] max-w-[300px] bg-[#0B0B0B] text-[#EBDAB0] z-50 p-6"
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="text-2xl mb-10"
        >
          ✕
        </button>

        {/* Menu Items */}
        <motion.ul
          initial="closed"
          animate="open"
          variants={{
            open: {
              transition: { staggerChildren: 0.1 }
            },
            closed: {}
          }}
          className="space-y-6 text-lg"
        >
          {menuItems.map((item, i) => (
            <motion.li
              key={i}
              variants={{
                open: { opacity: 1, x: 0 },
                closed: { opacity: 0, x: 50 }
              }}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
            >
              <Link href={item.href}>{item.name}</Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </>
  )
}