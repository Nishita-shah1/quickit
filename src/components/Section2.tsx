'use client';

import Image from 'next/image';

const benefits = [
  { title: "Proof of Delivery", image: "/pod.png" },
  { title: "Transparent Pricing", image: "/tp.png" },
  { title: "Order Scheduling", image: "/os.png" },
  { title: "Multi-Drop Shipments", image: "/multi.png" },
  { title: "24×7 Support", image: "/support.png" },
  { title: "Live Tracking", image: "/track.png" },
];

export default function Section2() {
  return (
    <section className="text-center py-12 bg-gray-100 px-5 md:px-[200px]">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-black">Benefits of using QuickIt</h2>
      <p className="text-gray-600 mt-2">
        We at QuickIt believe in service satisfaction
      </p>

      {/* Benefits Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 mt-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={benefit.image}
              alt={benefit.title}
              width={100}
              height={100}
              className="mb-2 max-w-full"
            />
            <p className="text-black font-medium">{benefit.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
