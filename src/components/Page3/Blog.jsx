'use client';

import Image from "next/image";
import img1 from "../../../public/example3/blog/blog1.png";
import img2 from "../../../public/example3/blog/blog2.png";
import img3 from "../../../public/example3/blog/blog3.png";

export default function Blog() {
  const blogs = [
    {
      img: img1,
      date: "12 OCTOBER 2023",
      title: "5 Key Trends Shaping The Global Diamond Trade In 2025",
    },
    {
      img: img2,
      date: "12 OCTOBER 2023",
      title: "Why Diamond Certification Matters: A Guide For Traders",
    },
    {
      img: img3,
      date: "12 OCTOBER 2023",
      title: "Inauguration Of Turf & Launch Party Of Bharat Diamond Sports League-2",
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Section heading */}
        <h2 className="text-3xl lg:text-4xl font-serif">
          <span className="text-2xl">~</span> From the World of Diamonds{" "}
          <span className="text-2xl">~</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mt-4">
          Explore expert insights, updates, and stories from the heart of the
          diamond industry. Our blog features valuable content for traders,
          gemologists, and professionals looking to stay ahead in this dynamic
          global market.
        </p>

        {/* Blog cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <div key={idx} className="flex flex-col items-start">
              <div className="relative w-full h-64 rounded-2xl overflow-hidden">
                <Image
                  src={blog.img}
                  alt={blog.title}
                  className="object-cover w-full h-full"
                />
                {/* Date badge */}
                <div className="absolute bottom-0 left-0 bg-white text-gray-800 text-xs font-semibold tracking-widest uppercase px-3 py-2 w-[45%] rounded-tr-lg">
                  {blog.date}
                </div>
              </div>

              <h3 className="mt-4 text-lg font-medium text-blue-900 text-left">
                {blog.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
