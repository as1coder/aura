"use client"

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import sections from "../data/products";
import { bodoni, poppins } from "../fonts";
import Navbar from "../component/Navbar";
import Footer from "../component/footer";
import { motion } from "framer-motion";

export default function ProductPage() {


  const params = useParams();

  // ALL PRODUCTS
  const allProducts = sections.flatMap(
    (section) => section.products
  );

  // FIND PRODUCT
  const product = allProducts.find(
    (item) => item.productId === params.id
  );

  // =========================
  // PRODUCT NOT FOUND
  // =========================
  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Product Not Found
      </div>
    );
  }

  // =========================
  // RELATED PRODUCTS
  // =========================
  const relatedProducts = allProducts
    .filter(
      (item) =>
        item.productId !== product.productId
    )
    .slice(0, 4);

  // =========================
  // SIZE STATE
  // =========================
  const sizes = Object.keys(product.size);

  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const [quantity, setQuantity] = useState(1);

  const [cartValues, setcartValues] = useState("")

const addToCart = () => {

  const cartItem = {
    id: product.productId,

    name: product.name,

    image: product.image,

    size: selectedSize,

    quantity: quantity,

    price: Number(
      product.size[selectedSize]*quantity
    ),
  };

  // EXISTING CART
  const existingCart =
    JSON.parse(localStorage.getItem("cart")) || [];

  // CHECK SAME PRODUCT
  const existingProduct = existingCart.find(
    (item) =>
      item.id === cartItem.id &&
      item.size === cartItem.size
  );

  // IF EXISTS
  if (existingProduct) {

    existingProduct.quantity += quantity;

    alert("Quantity Updated In Cart 😏");

  } else {

    existingCart.push(cartItem);

    alert("Added To Cart 🛒");

  }

  // SAVE
  localStorage.setItem(
    "cart",
    JSON.stringify(existingCart)
  );

};
  return (
    <div className="bg-[#0B0B0B] text-[#EBDAB0] min-h-screen">

      <Navbar />

      {/* MAIN SECTION */}
      <section className="max-w-7xl mx-auto px-6 pt-36 pb-20">

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}
      
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative w-full h-[500px] md:h-[700px] overflow-hidden rounded-3xl"
          >


            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover hover:scale-105 transition duration-700"
            />

          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            {/* CATEGORY */}
            <p
              className={`${poppins.className} uppercase tracking-[0.3em] text-sm text-[#EBDAB0]/40 mb-4`}
            >
              Luxury Fragrance
            </p>

            {/* NAME */}
            <h1
              className={`${bodoni.className} text-4xl md:text-5xl leading-none mb-6`}
            >
              {product.name}
            </h1>

            {/* DESCRIPTION */}
            <p
              className={`${poppins.className} text-[#F4EADE]/70 leading-relaxed text-lg mb-8`}
            >
              {product.desc}
            </p>

            {/* PRICE */}
            <div className="flex items-center gap-4 mb-10">

              <p
                className={`${bodoni.className} text-3xl`}
              >
                ₹{product.size[selectedSize]*quantity}
              </p>

              <p
                className={`${poppins.className} text-[#F4EADE]/40 line-through`}
              >
                ₹{product.price}
              </p>

            </div>

            {/* SIZE SELECTOR */}
            <div className="mb-10">

              <p
                className={`${poppins.className} text-sm uppercase tracking-[0.2em] text-[#EBDAB0]/50 mb-4`}
              >
                Select Size
              </p>

              <div className="flex gap-4">

                {sizes.map((size, i) => (

                  <button
                    key={i}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 rounded-full border transition ${selectedSize === size
                        ? "bg-[#EBDAB0] text-black border-[#EBDAB0]"
                        : "border-[#EBDAB0]/20 text-[#F4EADE]/70 hover:border-[#EBDAB0]"
                      }`}
                  >
                    {size}
                  </button>

                ))}

              </div>

            </div>

            {/* QUANTITY */}
            <div className="mb-10">

              <p
                className={`${poppins.className} text-sm uppercase tracking-[0.2em] text-[#EBDAB0]/50 mb-4`}
              >
                Quantity
              </p>

              <div className="flex items-center gap-5 border border-[#EBDAB0]/20 w-fit px-5 py-3 rounded-full">

                <button
                  onClick={() =>
                    quantity > 1 &&
                    setQuantity(quantity - 1)
                  }
                  className="text-xl"
                >
                  -
                </button>

                <span
                  className={`${poppins.className}`}
                >
                  {quantity}
                </span>

                <button
                  onClick={() =>
                    setQuantity(quantity + 1)
                  }
                  className="text-xl"
                >
                  +
                </button>

              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">

              <button
                className={`${poppins.className} bg-[#EBDAB0] text-black px-8 py-4 rounded-full hover:opacity-90 transition`}
                onClick={addToCart}
              >
                Add to Cart
              </button>

              <a
                href={`https://wa.me/918421405548?text=Hello, I want to order:

Product: ${product.name}
Size: ${selectedSize}
Quantity: ${quantity}
Price: ₹ ${product.size[selectedSize]*quantity}`}
                target="_blank"
                className={`${poppins.className} border border-[#EBDAB0]/20 px-8 py-4 rounded-full hover:border-[#EBDAB0] transition text-center`}
              >
                Order on WhatsApp
              </a>

            </div>

          </motion.div>

        </div>

      </section>

      {/* RELATED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="mb-12">

          <p
            className={`${poppins.className} uppercase tracking-[0.3em] text-sm text-[#EBDAB0]/40 mb-3`}
          >
            You May Also Like
          </p>

          <h2
            className={`${bodoni.className} text-4xl md:text-5xl`}
          >
            Related Fragrances
          </h2>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {relatedProducts.map((item, i) => (

            <Link
              key={i}
              href={`/${item.productId}`}
              className="group"
            >

              <div className="relative h-72 overflow-hidden rounded-2xl">

                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />

              </div>

              <div className="pt-4">

                <h3
                  className={`${bodoni.className} text-2xl`}
                >
                  {item.name}
                </h3>

                <p
                  className={`${poppins.className} text-[#F4EADE]/50 text-sm`}
                >
                  {item.price}
                </p>

              </div>

            </Link>

          ))}

        </div>

      </section>

      <Footer />

    </div>
  );
}