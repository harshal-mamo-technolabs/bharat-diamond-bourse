import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 flex justify-center">
      {/* Card wrapper */}
      <div
        className="rounded-3xl p-10 max-w-[1350px] w-full shadow-xl"
        style={{
          background: `linear-gradient(to bottom, rgba(225, 227, 229, 0) 0%, rgba(225, 227, 229, 1) 100%)`,
        }}
      >
        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-serif font-semibold mb-4">
          ~ Welcome to Bharat Diamond Bourse ~
        </h2>

        {/* Subtitle */}
        <p className="text-center text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
          The Complex is spread over an area of 20 Acres / 0.87 Million sq. ft.
          land. The total constructed area is 2 million sq. ft. with two basements
          of additional 1 million sq. ft. There are 9 Towers, housing 2,500 offices
          of various sizes.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            {
              img: "/example3/images/trade.jpg",
              title: "Encouraging Trade",
              desc: "To establish a bourse for promotion and export of diamonds from India and to provide for this purpose, the infrastructure...",
            },
            {
              img: "/example3/images/diamond.jpg",
              title: "Facilitate Diamond Industry",
              desc: "To establish and promote an effective liaison between the diamond trade and the diamond industry...",
            },
            {
              img: "/example3/images/port.jpg",
              title: "Promoting Import & Export",
              desc: "To promote, advance, protect, and develop trade, commerce, and industry in India, while fostering transparency, innovation...",
            },
            {
              img: "/example3/images/mum.png",
              title: "Modern India",
              desc: "To develop and establish India as a modern and sophisticated diamond market in the world by establishing and maintaining...",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-4 flex flex-col"
            >
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={card.img}
                  alt={card.title}
                  width={500}
                  height={350}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="mt-5">
                <h3 className="font-serif font-semibold text-lg text-[#1a2b5f] mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center">
          <button className="bg-gradient-to-b from-blue-800 to-blue-900 text-white px-8 py-3 rounded-full shadow-lg hover:from-blue-700 hover:to-blue-800 transition-colors font-medium">
            READ MORE ABOUT US
          </button>
        </div>
      </div>
    </div>
  );
}
