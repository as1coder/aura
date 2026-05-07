"use client";

import Image from "next/image";
import Navbar from "../component/Navbar";
import Footer from "../component/footer";
import { bodoni, poppins } from "../fonts";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CartPage() {

  // =========================
  // FAKE CART DATA
  // =========================
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {

    const storedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCartItems(storedCart);

  }, []);
  // TOTAL
  // =========================
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const removeFromCart = (id, size) => {

    const updatedCart = cartItems.filter(
      (item) =>
        !(
          item.id === id &&
          item.size === size
        )
    );

    // UPDATE STATE
    setCartItems(updatedCart);

    // UPDATE LOCALSTORAGE
    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

  };
  // =========================
  // WHATSAPP MESSAGE
  // =========================
  const whatsappMessage = `
Hello, I would like to place an order:

${cartItems.map(
    (item) =>
      `${item.quantity}x ${item.name} (${item.size}) - ₹${item.price}`
  )
      .join("\n")}

Total: ₹${total}
`;

  return (
    <div className="bg-[#0B0B0B] text-[#EBDAB0] min-h-screen">

      <Navbar />
      {cartItems.length === 0 ? (

        <section className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">

          <p
            className={`${poppins.className} uppercase tracking-[0.4em] text-xs text-[#EBDAB0]/40 mb-5`}
          >
            Your Cart is Empty
          </p>

          <h2
            className={`${bodoni.className} text-4xl md:text-6xl mb-6`}
          >
            No Fragrances Added Yet
          </h2>

          <p
            className={`${poppins.className} text-[#F4EADE]/60 max-w-md mb-10`}
          >
            Discover timeless perfumes and signature attars crafted for every moment.
          </p>

          <Link
            href="/products"
            className={`${poppins.className} bg-[#EBDAB0] text-black px-8 py-4 rounded-full hover:opacity-90 transition`}
          >
            Continue Shopping
          </Link>

        </section>

      ) : (

        <>

          <section className="pt-36 pb-16 px-6 border-b border-[#EBDAB0]/10">

            <motion.p
              className={`${poppins.className} uppercase tracking-[0.4em] text-sm text-[#EBDAB0]/40 mb-4`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Your Selection
            </motion.p>

            <motion.h1
              className={`${bodoni.className} text-5xl md:text-7xl`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Shopping Cart
            </motion.h1>

          </section>

          <section className="max-w-7xl mx-auto px-6 py-20">

            <div className="grid lg:grid-cols-[1.5fr_.7fr] gap-12">

              {/* CART ITEMS */}
              <div className="space-y-8">

                {cartItems.map((item, i) => (

                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="border border-[#EBDAB0]/10 rounded-3xl overflow-hidden"
                  >

                    <div className="grid grid-cols-1 md:grid-cols-[220px_1fr]">

                      {/* IMAGE */}
                      <div className="relative h-72 md:h-full">

                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />

                      </div>

                      {/* CONTENT */}
                      <div className="p-8 flex flex-col justify-between">

                        <div>

                          <p
                            className={`${poppins.className} uppercase tracking-[0.3em] text-xs text-[#EBDAB0]/40 mb-3`}
                          >
                            Luxury Fragrance
                          </p>

                          <h2
                            className={`${bodoni.className} text-3xl md:text-4xl mb-4`}
                          >
                            {item.name}
                          </h2>

                          <div
                            className={`${poppins.className} space-y-2 text-[#F4EADE]/60`}
                          >
                            <p>Size: {item.size}</p>
                            <p>Quantity: {item.quantity}</p>
                          </div>

                        </div>

                        {/* PRICE */}
                        <div className="flex items-center justify-between mt-10">

                          <p
                            className={`${bodoni.className} text-3xl`}
                          >
                            ₹{item.price}
                          </p>

                          <button
                            onClick={() =>
                              removeFromCart(item.id, item.size)
                            }
                            className={`${poppins.className} text-sm text-[#F4EADE]/40 hover:text-red-400 transition`}
                          >
                            Remove Item
                          </button>

                        </div>

                      </div>

                    </div>

                  </motion.div>

                ))}

              </div>

              {/* SUMMARY */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                className="h-fit sticky top-28 border border-[#EBDAB0]/10 rounded-3xl p-8 bg-[#111111]"
              >

                <p
                  className={`${poppins.className} uppercase tracking-[0.3em] text-xs text-[#EBDAB0]/40 mb-4`}
                >
                  Order Summary
                </p>

                <h2
                  className={`${bodoni.className} text-4xl mb-10`}
                >
                  Checkout
                </h2>

                <div
                  className={`${poppins.className} space-y-5 border-b border-[#EBDAB0]/10 pb-8`}
                >

                  <div className="flex justify-between">
                    <span className="text-[#F4EADE]/60">
                      Subtotal
                    </span>

                    <span>
                      ₹{total}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-[#F4EADE]/60">
                      Shipping
                    </span>

                    <span>
                      Free
                    </span>
                  </div>

                </div>

                {/* TOTAL */}
                <div className="flex justify-between items-center py-8">

                  <span
                    className={`${poppins.className} text-[#F4EADE]/60`}
                  >
                    Total
                  </span>

                  <span
                    className={`${bodoni.className} text-4xl`}
                  >
                    ₹{total}
                  </span>

                </div>

                {/* BUTTON */}
                <a
                  href={`https://wa.me/918421405548?text=${encodeURIComponent(
                    whatsappMessage
                  )}`}
                  target="_blank"
                  className={`${poppins.className} w-full bg-[#EBDAB0] text-black py-4 rounded-full flex items-center justify-center hover:opacity-90 transition`}
                >
                  Proceed to WhatsApp
                </a>

                {/* NOTE */}
                <p
                  className={`${poppins.className} text-xs text-[#F4EADE]/40 text-center mt-5 leading-relaxed`}
                >
                  Your order will be confirmed directly on WhatsApp.
                </p>

              </motion.div>

            </div>

          </section>
        </>

      )}

      {/* MAIN */}


      <Footer />

    </div>
  );
}