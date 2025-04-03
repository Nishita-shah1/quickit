import Image from 'next/image';

export default function Section6() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-30 p-8 bg-gray-100">
      {/* Text Section */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold text-black ml-37.5">Powered by technology</h2>
        <p className="text-gray-700 mt-3 ml-37.5">
          Our AI-powered batching system optimizes deliveries by grouping orders efficiently, reducing travel distance and fuel consumption. This smart technology ensures faster, more cost-effective deliveries while minimizing our carbon footprint.
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <Image src="/powerbytech.png" alt="Technology Delivery" width={350} height={250} className="rounded-md shadow-lg" />
      </div>
    </section>
  );
}
