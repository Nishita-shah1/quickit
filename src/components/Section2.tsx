'use client';

import Image from 'next/image';

const benefits = [
  { title: "Proof of Delivery", image: "/proof-of-delivery.png" },
  { title: "Transparent Pricing", image: "/transparent-pricing.png" },
  { title: "Order Scheduling", image: "/order-scheduling.png" },
  { title: "Multi-Drop Shipments", image: "/multi-drop-shipments.png" },
  { title: "24×7 Support", image: "/24x7-support.png" },
  { title: "Live Tracking", image: "/live-tracking.png" },
];

export default function Section2() {
  return (
    <section className="text-center py-12 bg-white">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-black">Benefits of using QuickIt</h2>
      <p className="text-gray-600 mt-2">
        We at QuickIt believe in service satisfaction
      </p>

      {/* Benefits Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 px-4 md:px-16">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={benefit.image}
              alt={benefit.title}
              width={80}
              height={80}
              className="mb-2"
            />
            <p className="text-black font-medium">{benefit.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
