import Image from 'next/image';

export default function Section4() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8 bg-white">
      {/* Text Section */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold text-pink-700">Empower Women!</h2>
        <p className="text-gray-700 mt-3">
          At QuickIt, we empower women by ensuring the majority of deliveries are handled by women. We prioritize their safety with secure same-day deliveries, providing a secure and supportive work environment.
        </p>
        <button className="mt-4 bg-pink-700 text-white px-5 py-2 rounded-md shadow-md hover:bg-pink-800 transition">
          Empower Women
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <Image src="/women-delivery.jpg" alt="Empower Women" width={350} height={250} className="rounded-md shadow-lg" />
      </div>
    </section>
  );
}
