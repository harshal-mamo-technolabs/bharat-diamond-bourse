'use client';

import { useState } from 'react';
import { FaTwitter, FaFacebook, FaEnvelope, FaUserCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import localFont from 'next/font/local';
import { Sora } from 'next/font/google';
import Link from 'next/link';

const gotham = localFont({
    src: '../../../../public/fonts/Gotham.otf',
    weight: '400',
    style: 'normal',
});

const gothamLight = localFont({
    src: "../../../../public/fonts/Gotham Medium.otf",
    weight: "400",
    style: "normal",
});

const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

// Mock data for the article
const articleData = {
    title: "The Future of Diamond Trading in Digital Era",
    publishedDate: "Published Wed, Nov 12 2025 4:02 AM EST",
    updatedDate: "Updated Wed, Nov 12 2025 11:50 PM EST",
    author: "Sarah Johnson",
    image: "/events/image-1.jpg",
    imageDescription: "Digital diamond trading platform interface showing real-time transactions and analytics. Artificial intelligence is playing a crucial role in diamond valuation and grading.",
    keyPoints: [
        "Blockchain technology revolutionizing diamond certification. The Future of Diamond Trading in Digital Era.",
        "AI-powered valuation systems increasing market transparency.",
        "Virtual try-on features enhancing customer experience. The Future of Diamond Trading in Digital Era."
    ],
    paragraphs: [
        "The diamond industry is undergoing a significant digital transformation that is reshaping traditional trading practices. With the advent of blockchain technology and artificial intelligence, market participants are experiencing unprecedented levels of transparency and efficiency in their operations.",
        "Blockchain-based certification systems have emerged as a game-changer, providing immutable records of diamond provenance and characteristics. This technology ensures that each diamond's journey from mine to market is securely documented, reducing the risk of fraud and increasing consumer confidence in the authenticity of their purchases.",
        "Artificial intelligence is playing a crucial role in diamond valuation and grading. Advanced algorithms can now analyze multiple parameters simultaneously, providing more accurate and consistent valuations than traditional human-based assessment methods. This technological advancement is particularly valuable in standardizing pricing across global markets.",
        "Looking ahead, the integration of virtual and augmented reality technologies promises to further revolutionize the industry. Virtual try-on capabilities and immersive viewing experiences are making remote diamond purchasing more accessible and reliable, opening new markets and opportunities for growth in the digital landscape."
    ]
};

// Mock data for right side cards
const mostDiscussedArticles = [
    {
        id: 1,
        title: "DIAMOND PRICES SURGE",
        description: "Market analysis shows 15% increase in premium stones.",
        image: "/events/image-1.jpg"
    },
    {
        id: 2,
        title: "NEW MINING DISCOVERY",
        description: "Major diamond deposit found in Canada.",
        image: "/events/image-1.jpg"
    },
    {
        id: 3,
        title: "SUSTAINABLE PRACTICES",
        description: "Industry shifts towards eco-friendly mining.",
        image: "/events/image-1.jpg"
    }
];

const latestArticles = [
    {
        id: 1,
        title: "Rio Tinto’s Final Beyond Rare Tender Marks the End of a Diamond Era",
        subtitle: "How technology is reshaping customer experiences Market analysis shows...",
        image: "/events/image-1.jpg"
    },
    {
        id: 2,
        title: "Rio Tinto’s Final Beyond Rare Tender Marks the End of a Diamond Era",
        subtitle: "Market share reaches record levels Market analysis shows...",
        image: "/events/image-1.jpg"
    },
    {
        id: 3,
        title: "Rio Tinto’s Final Beyond Rare Tender Marks the End of a Diamond Era",
        subtitle: "Portfolio diversification strategies Market analysis shows...",
        image: "/events/image-1.jpg"
    },
    {
        id: 4,
        title: "Rio Tinto’s Final Beyond Rare Tender Marks the End of a Diamond Era",
        subtitle: "2026 predictions and analysis Market analysis shows...",
        image: "/events/image-1.jpg"
    }
];

export default function NewsDetail() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % latestArticles.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + latestArticles.length) % latestArticles.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <section className="relative w-full bg-white py-10">
            {/* White background with top border radius */}
            <div className="absolute top-0 left-0 w-full h-24 md:h-32 bg-white rounded-t-[30px] md:rounded-t-[40px] -translate-y-6 md:-translate-y-8 z-10"></div>
            
            <div className="relative z-20 w-full mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
                {/* Breadcrumb */}
                <motion.div
                    className="mb-6 sm:mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h6 className={`text-[#36465e] text-[14px] sm:text-[16px] ${gothamLight.className}`}>
                        <Link href="/v3" className="">
                            HOME
                        </Link>{' '} / NEWS / ARTICLE DETAIL
                    </h6>
                </motion.div>

                {/* Main Content Grid */}
                <div className="flex flex-col lg:flex-row gap-20">
                    {/* Left Side - 60% on md+ */}
                    <div className="lg:w-[70%]">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                        >
                            {/* Title */}
                            <motion.h1 
                                variants={itemVariants}
                                className={`text-[40px] md:text-[55px] leading-tight text-[#05183A] mb-2 ${gothamLight.className}`}
                            >
                                {articleData.title}
                            </motion.h1>

                            {/* Date Information */}
                            <motion.div 
                                variants={itemVariants}
                                className={`uppercase text-gray-600 font-semibold text-[13px] mb-6 ${sora.className}`}
                            >
                                <span>{articleData.publishedDate}</span>
                                <span className="ml-2">{articleData.updatedDate}</span>
                            </motion.div>

                            {/* Author */}
                            <motion.div 
                                variants={itemVariants}
                                className="flex items-center gap-3 mb-6"
                            >
                                <FaUserCircle className="w-6 h-6 text-[#05183A]" />
                                <span className={`text-[#05183A] text-[14px] ${sora.className}`}>
                                    By {articleData.author}
                                </span>
                            </motion.div>

                            
                            {/* Main Image */}
                            <motion.div 
                                variants={itemVariants}
                                className="relative h-64 md:h-[400px] w-full mb-2 rounded-md overflow-hidden"
                            >
                                <Image
                                    src={articleData.image}
                                    alt={articleData.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 60vw"
                                />
                            </motion.div>

                            {/* Image Description */}
                            <motion.p 
                                variants={itemVariants}
                                className="text-[11px] font-bold text-gray-600 mb-2"
                            >
                                {articleData.imageDescription}
                            </motion.p>

                            {/* Share Section */}
                            <motion.div 
                                variants={itemVariants}
                                className="flex items-center justify-between py-4 mb-2"
                            >
                                <span className={`text-[#05183A] text-sm md:text-[15px] font-semibold ${sora.className}`}>
                                    Share this article
                                </span>
                                
                                <div className="h-px w-[60%] bg-gray-300"></div>
                                
                                <div className="flex items-center gap-2">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                                    >
                                        <FaTwitter className="w-4 h-4" />
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                                    >
                                        <FaFacebook className="w-4 h-4" />
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                                    >
                                        <FaEnvelope className="w-4 h-4" />
                                    </motion.button>
                                </div>
                            </motion.div>


                            {/* Key Points and Content */}
                            <div className="flex flex-col md:flex-row gap-8 ">
                                {/* Key Points - 20% */}
                                <div className="md:w-[20%]">
                                    <motion.h3 
                                        variants={itemVariants}
                                        className={`uppercase font-bold text-[#05183A] mb-2 text-sm md:text-[30px] ${sora.className}`}
                                    >
                                        KEY POINTS
                                    </motion.h3>
                                </div>

                                {/* Content - 80% */}
                                <div className="md:w-[80%]">
                                    {/* Key Points List */}
                                    <motion.ul 
                                        variants={itemVariants}
                                        className="space-y-8 mb-6"
                                    >
                                        {articleData.keyPoints.map((point, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 bg-[#05183A] rounded-full mt-1 flex-shrink-0"></span>
                                                <span className={`text-[#05183A] text-sm md:text-[13px] font-semibold text-justify ${sora.className}`}>
                                                    {point}
                                                </span>
                                            </li>
                                        ))}
                                    </motion.ul>

                                     {/* Horizontal Line */}
                            <motion.div 
                                variants={itemVariants}
                                className="h-0.5 bg-gray-300 mb-8"
                            ></motion.div>

                                    {/* Paragraphs */}
                                    <motion.div 
                                        variants={containerVariants}
                                        className="space-y-6"
                                    >
                                        {articleData.paragraphs.map((paragraph, index) => (
                                            <motion.p 
                                                key={index}
                                                variants={itemVariants}
                                                className={`text-[#05183A] leading-relaxed text-sm md:text-[14px] text-justify ${sora.className}`}
                                            >
                                                {paragraph}
                                            </motion.p>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                                {/* Share Section */}
                                <motion.div 
                                variants={itemVariants}
                                className="flex items-center justify-between py-4 mb-2"
                            >
                                <span className={`text-[#05183A] text-sm md:text-[15px] font-semibold ${sora.className}`}>
                                    Share this article
                                </span>
                                
                                <div className="h-px w-[60%] bg-gray-300"></div>
                                
                                <div className="flex items-center gap-2">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                                    >
                                        <FaTwitter className="w-4 h-4" />
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                                    >
                                        <FaFacebook className="w-4 h-4" />
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                                    >
                                        <FaEnvelope className="w-4 h-4" />
                                    </motion.button>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Side - 40% on md+ */}
                    <div className="lg:w-[30%] space-y-6">
                       {/* Subscribe Card */}
<motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="bg-white border border-[#05183A] rounded-md p-6 relative pt-16" // Added pt-16 for top padding to accommodate fixed title
>
    {/* Fixed Title */}
    <div className="absolute top-0 left-0 right-0 bg-gray-200 py-2 mx-15 rounded-b-md">
        <h3 className={`text-black text-center text-xs md:text-xs ${gothamLight.className}`}>
            SUBSCRIBE TO OUR MAILING LIST
        </h3>
    </div>
    
    {/* Content */}
    <div className="space-y-4 px-3">
        <input
            type="email"
            placeholder="Your email"
            className="w-full border border-[#05183A] rounded-none px-3 py-2.5 text-[#05183A] placeholder-gray-500 focus:outline-none focus:border-[#05183A] text-sm md:text-sm"
        />
        <div className="flex justify-center"> {/* Centering container for the button */}
            <button className={`w-[60%] border-2 bg-[#05183A] rounded-md py-2 text-white hover:bg-white hover:border-[#05183A] hover:text-[#05183A] transition-colors text-sm md:text-sm ${sora.className}`}>
                Subscribe Now
            </button>
        </div>
    </div>
</motion.div>

                        {/* Most Discussed Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white"
                        >
                            <h3 className={`text-[13px] md:text-[13px] text-[#05183A] underline mb-4 ${gothamLight.className}`}>
                                Most Discussed
                            </h3>
                            <div className="space-y-4">
                                {mostDiscussedArticles.map((article) => (
                                    <div key={article.id} className="flex gap-3">
                                        <div className="relative h-20 md:h-[100px] w-20 md:w-1/3 flex-shrink-0 rounded-md overflow-hidden">
                                            <Image
                                                src={article.image}
                                                alt={article.title}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 80px, 150px"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className={`uppercase text-[#05183A] text-xs upppercase md:text-xs font-semibold mb-1 ${gothamLight.className}`}>
                                                {article.title}
                                            </h4>
                                            <p className={`text-[10px] md:text-[13px] text-gray-600 ${sora.className}`}>
                                                {article.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                   {/* Latest Articles Card */}
<motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.4 }}
    className="bg-white border border-[#05183A] rounded-md p-6 relative pt-16" // Added pt-16 and relative
>
    {/* Fixed Title */}
    <div className="absolute top-0 left-0 right-0 bg-gray-200 py-2 mx-30 rounded-b-md">
        <h3 className={`text-black text-center text-xs md:text-xs ${gothamLight.className}`}>
            LATEST
        </h3>
    </div>
    
    {/* Image Slider */}
    <div className="relative mb-4">
        <AnimatePresence mode="wait">
            <motion.div
                key={currentSlide}
                custom={currentSlide}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                }}
                className="relative h-48 md:h-[220px] w-full rounded-md overflow-hidden"
            >
                <Image
                    src={latestArticles[currentSlide].image}
                    alt={latestArticles[currentSlide].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                />
            </motion.div>
        </AnimatePresence>
    </div>

    {/* Slide Content */}
    <div className="text-center">
        <h4 className={`text-[28px] md:text-[30px] text-[#05183A] mb-2 leading-none ${gothamLight.className}`}>
            {latestArticles[currentSlide].title}
        </h4>
        <p className={`text-[16px] md:text-[16px] text-gray-600 mb-4 ${sora.className}`}>
            {latestArticles[currentSlide].subtitle}
        </p>
        
        {/* Navigation Dots */}
        <div className="flex justify-center gap-2">
            {latestArticles.map((_, index) => (
                <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-[#05183A]' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>
    </div>
</motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}