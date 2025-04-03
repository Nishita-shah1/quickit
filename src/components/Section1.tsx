'use client';

import Image from 'next/image';

export default function Section1() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 bg-white">
      {/* Left Side: Text Content */}
      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-black leading-tight">
          Reliable <br /> Delivery, Every Time!
        </h1>
        <p className="text-gray-600 mt-3">
          Fast intracity courier delivery service. <br />
          We make delivery for your business easier.
        </p>
        <button className="mt-5 px-6 py-3 bg-orange-500 text-white font-medium rounded-lg shadow-md hover:bg-orange-600 transition">
          Deliver now
        </button>
      </div>

      {/* Right Side: Image */}
      <div className="mt-6 md:mt-0">
        <Image
          src="/image.png" // Make sure the image is in the "public" folder
          alt="Delivery Woman"
          width={300} // Adjust size as needed
          height={300}
          className="rounded-lg shadow-md"
        />
      </div>
    </section>
  );
}
