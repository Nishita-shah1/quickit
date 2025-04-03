import Image from 'next/image';

export default function Section5() {
  return (
    <section className="flex flex-col md:flex-row-reverse items-center justify-between p-8 bg-white">
      {/* Text Section */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold text-gray-900">
          Say bye to more <span className="text-green-600">Carbon Footprints...</span>
        </h2>
        <p className="text-gray-700 mt-3 max-w-md leading-relaxed">
          At QuickIt, we are committed to reducing our carbon footprint by optimizing delivery routes, using eco-friendly packaging, and promoting sustainable transportation.
        </p>
        <button className="mt-4 bg-orange-500 text-white px-5 py-2 rounded-md shadow-md hover:bg-orange-600 transition">
          Calculate now!
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <Image src="/carbon.png" alt="Carbon Footprints" width={350} height={250} className="rounded-md shadow-lg" />
      </div>
    </section>
  );
}
