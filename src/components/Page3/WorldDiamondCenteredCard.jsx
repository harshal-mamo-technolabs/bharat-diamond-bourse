// components/WorldDiamondCenterCard.jsx
import Image from "next/image";

export default function WorldDiamondCenterCard() {
  return (
    <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow border border-gray-200 flex flex-col md:flex-row overflow-hidden">
      {/* Left Image */}
      <div className="w-full md:w-1/2 p-6 flex items-center justify-center">
        <Image
          src="/example3/diamond-building.jpg" // replace with your actual image path
          alt="Diamond Center"
          width={800}
          height={600}
          className="object-cover w-full h-full rounded-2xl"
        />
      </div>

      {/* Right Content with Gradient */}
      <div
        className="w-full md:w-1/2 p-8 flex flex-col justify-center"
        style={{
          background: "linear-gradient(to right, rgba(231,232,234,0) 0%, #E7E8EA 100%)",
        }}
      >
        <h2 className="text-3xl font-serif mb-4">
          <span className="mr-2">~</span>World’s Diamond Center
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Our Journey started at Bandra-Kurla Complex in Mumbai from 2010, now with over 4,000 members engaged in import and export, manufacturing and marketing of rough and polished diamonds, BDB has created a business framework to conduct their transactions in maximum convenience and security.
        </p>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Rooted in a commitment to sustainability, BDB operates its own solar power plants and ensures that 80% of its water is recycled through an advanced Sewage Treatment Plant (STP). Additionally, the bourse harvests up to 2.7 million liters of rainwater annually, further reducing its environmental footprint.
        </p>
        <button className="self-start bg-gradient-to-r from-blue-900 to-blue-600 text-white font-semibold tracking-wider px-6 py-3 rounded-full shadow hover:opacity-90 transition">
          READ MORE ABOUT US
        </button>
      </div>
    </div>
  );
}
