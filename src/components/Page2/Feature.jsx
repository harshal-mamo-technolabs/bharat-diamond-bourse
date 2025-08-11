'use client';
import Image from 'next/image';

export default function GoalsSection() {
  const cards = [
    {
      img: '/example2/feature/trade.jpg',
      title: 'ENCOURAGING TRADE',
      text: 'To establish a bourse for promotion and export of diamonds from India and to provide for this purpose, the infrastructure...',
      titleColor: 'text-orange-500',
    },
    {
      img: '/example2/feature/diamond.jpg',
      title: 'FACILITATE DIAMOND INDUSTRY',
      text: 'To establish and promote an effective liaison between the diamond trade and the diamond industry, fostering collaboration, transparency...',
      titleColor: 'text-black',
    },
    {
      img: '/example2/feature/import.jpg',
      title: 'PROMOTING IMPORT & EXPORT',
      text: 'To promote and protect trade, commerce, and industry in India—driving innovation, partnerships, and growth...',
      titleColor: 'text-black',
    },
    {
      img: '/example2/feature/modern.jpg',
      title: 'MODERN INDIA',
      text: 'To develop and establish India as a modern and sophisticated diamond market in the world by establishing and maintaining...',
      titleColor: 'text-black',
    },
  ];

  return (
    <section className="mx-auto px-12 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col">
            <div className="w-full h-56 relative">
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>
            <h3
              className={`mt-4 font-semibold text-lg uppercase ${card.titleColor}`}
            >
              {card.title}
            </h3>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
