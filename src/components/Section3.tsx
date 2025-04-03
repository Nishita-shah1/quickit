'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const changingWords = [
  "COD Orders",
  "E-commerce Deliveries",
  "Instant Deliveries",
  "Personal Deliveries",
  "On-Demand Delivery"
];

export default function Section3() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % changingWords.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-12 px-6 md:px-16 bg-white">
      {/* Left Text Section */}
      <div className="md:w-1/2 text-left">
        <h2 className="text-3xl font-bold text-black ml-30">
          A Wide Range of Servicing Offering
        </h2>

        {/* Animated Text */}
        <motion.p
          key={index}
          className="text-2xl font-bold text-orange-500 mt-3 ml-30"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          {changingWords[index]}
        </motion.p>

        <p className="text-gray-600 mt-2 max-w-md ml-30 leading-relaxed">
          We offer all hyperlocal delivery solutions you are looking for,
          including <span className="font-medium">E-commerce deliveries, Instant deliveries, Personal deliveries,</span> 
          and on-demand services — all under one roof.
        </p>

        {/* Learn More Button */}
        <button className="mt-4 ml-30 bg-orange-500 text-white px-5 py-2 rounded-md shadow-md hover:bg-orange-600 transition">
          Learn more
        </button>
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <Image
          src="/delivery-service.png" // Replace with your actual image path
          alt="Delivery Service"
          width={400}
          height={250}
          className="rounded-md shadow-lg"
        />
      </div>
    </section>
  );
}
