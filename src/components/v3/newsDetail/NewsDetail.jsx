'use client';

import { useState, useEffect, useMemo } from 'react';
import { FaFacebook, FaEnvelope, FaUserCircle, FaBookOpen, FaEye } from 'react-icons/fa';
import { FaXTwitter, FaLink  } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import localFont from 'next/font/local';
import { Sora } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

const defaultCommentsData = [
    {
        id: 1,
        name: "Anjali Patel",
        comment: "Insightful coverage! Excited to see how BDB continues to lead the digital transition in the diamond space.",
        date: "2025-11-12T10:00:00.000Z"
    },
    {
        id: 2,
        name: "Mark Feldman",
        comment: "Loved the focus on AI-powered valuations. Transparency is the future of global trade.",
        date: "2025-11-13T08:15:00.000Z"
    }
];

export default function NewsDetail() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [shareUrl, setShareUrl] = useState('');
    const pathname = usePathname();
    const [viewCount, setViewCount] = useState(0);
    const [comments, setComments] = useState([]);
    const [commentForm, setCommentForm] = useState({ name: '', comment: '' });
    const [formError, setFormError] = useState('');

    const viewsStorageKey = useMemo(() => `bdb-news-views-${articleData.title}`, []);
    const commentsStorageKey = useMemo(() => `bdb-news-comments-${articleData.title}`, []);

    // Get the full URL for sharing
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setShareUrl(window.location.href);
        }
    }, [pathname]);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const storedCount = Number(window.localStorage.getItem(viewsStorageKey)) || 0;
        const updatedCount = storedCount + 1;
        window.localStorage.setItem(viewsStorageKey, updatedCount.toString());
        setViewCount(updatedCount);
    }, [viewsStorageKey]);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const storedComments = window.localStorage.getItem(commentsStorageKey);
        if (storedComments) {
            setComments(JSON.parse(storedComments));
        } else {
            setComments(defaultCommentsData);
        }
    }, [commentsStorageKey]);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        if (comments.length) {
            window.localStorage.setItem(commentsStorageKey, JSON.stringify(comments));
        }
    }, [comments, commentsStorageKey]);

    const resolvedShareUrl = useMemo(() => {
        if (shareUrl) return shareUrl;
        if (typeof window !== 'undefined') return window.location.href;
        return '';
    }, [shareUrl]);

    const shareMessage = `Discover what's happening at Bharat Diamond Bourse – "${articleData.title}" highlights the latest from the global diamond trade.`;
    const encodedShareUrl = encodeURIComponent(resolvedShareUrl);
    const encodedMessage = encodeURIComponent(shareMessage);
    const emailBody = encodeURIComponent(`${shareMessage}\n\nRead more: ${resolvedShareUrl}`);

    const twitterShareLink = `https://twitter.com/intent/tweet?text=${encodedMessage}&url=${encodedShareUrl}`;
    const facebookShareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedShareUrl}&quote=${encodedMessage}`;
    const gmailShareLink = `https://mail.google.com/mail/?view=cm&fs=1&su=${encodedMessage}&body=${emailBody}&ui=2&tf=1`;

    const readingTimeMinutes = useMemo(() => {
        const articleText = [articleData.title, ...articleData.keyPoints, ...articleData.paragraphs].join(' ');
        const words = articleText.trim().split(/\s+/).filter(Boolean).length;
        return Math.max(1, Math.ceil(words / 200));
    }, []);

    const formatCommentDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    const handleCommentChange = (field, value) => {
        setCommentForm((prev) => ({ ...prev, [field]: value }));
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (!commentForm.name.trim() || !commentForm.comment.trim()) {
            setFormError('Please add both your name and a comment.');
            return;
        }

        const newComment = {
            id: Date.now(),
            name: commentForm.name.trim(),
            comment: commentForm.comment.trim(),
            date: new Date().toISOString()
        };

        setComments((prev) => [newComment, ...prev]);
        setCommentForm({ name: '', comment: '' });
        setFormError('');
    };

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
                    className="mb-4 sm:mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h6 className={`text-[#0E1425]/70 text-[13px] sm:text-[14px] font-medium ${gotham.className}`}>
                        <Link href="/v3" className="hover:text-[#0E234E] transition-colors">
                            HOME
                        </Link>{' '} / <Link href="/v3/news&events" className="hover:text-[#0E234E] transition-colors">NEWS & EVENTS</Link>{' '} / ARTICLE DETAIL
                    </h6>
                </motion.div>

                {/* Main Content Grid */}
                <div className="flex flex-col lg:flex-row gap-5 sm:gap-20">
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
                                className={`text-[32px] md:text-[42px] lg:text-[48px] leading-tight text-[#0E234E] mb-4 ${gothamLight.className}`}
                            >
                                {articleData.title}
                            </motion.h1>

                            {/* Date Information with Reading Time and Views */}
                            <motion.div 
                                variants={itemVariants}
                                className="flex flex-wrap items-center justify-between gap-3 mb-4"
                            >
                                <div className={`text-[#36465e] font-medium text-[12px] md:text-[13px] ${sora.className}`}>
                                    <span>{articleData.publishedDate}</span>
                                    <span className="mx-2">•</span>
                                    <span>{articleData.updatedDate}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className={`flex items-center gap-2 text-[#36465e] text-[12px] md:text-[13px] ${sora.className}`}>
                                        <FaEye className="w-3.5 h-3.5" />
                                        <span>{viewCount.toLocaleString('en-IN')} views</span>
                                    </div>
                                    <div className={`flex items-center gap-2 text-[#36465e] text-[12px] md:text-[13px] ${sora.className}`}>
                                        <FaBookOpen className="w-3.5 h-3.5" />
                                        <span>{readingTimeMinutes} min read</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Author */}
                            <motion.div 
                                variants={itemVariants}
                                className="flex items-center gap-3 mb-4"
                            >
                                <FaUserCircle className="w-6 h-6 text-[#0E234E]" />
                                <span className={`text-[#0E234E] text-[14px] font-medium ${sora.className}`}>
                                    By {articleData.author}
                                </span>
                            </motion.div>

                            
                            {/* Main Image */}
                            <motion.div 
                                variants={itemVariants}
                                className="relative h-64 md:h-[400px] w-full mb-2 rounded-[6px] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
                            >
                                <Image
                                    src={articleData.image}
                                    alt={articleData.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 60vw"
                                    priority
                                />
                            </motion.div>

                            {/* Image Description */}
                            <motion.p 
                                variants={itemVariants}
                                className={`text-[11px] md:text-[12px] text-[#0E1425]/60 mb-4 italic ${sora.className}`}
                            >
                                {articleData.imageDescription}
                            </motion.p>

                            {/* Share Section */}
                            <motion.div 
                                variants={itemVariants}
                                className="flex items-center justify-between mb-4"
                            >
                                <span className={`text-[#0E234E] text-sm md:text-[15px] font-semibold ${sora.className}`}>
                                    Share this article
                                </span>
                                
                                <div className="h-px flex-1 mx-4 bg-gray-300"></div>
                                
                                <div className="flex items-center gap-2">
                                    <motion.a
                                        href={twitterShareLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="p-2 rounded-md bg-white border border-[#0E234E]/20 hover:bg-[#0E234E] hover:text-white text-[#0E234E] transition-all duration-200"
                                        aria-label="Share on Twitter"
                                        title="Share on Twitter"
                                    >
                                        <FaXTwitter className="w-4 h-4" />
                                    </motion.a>
                                    <motion.a
                                        href={facebookShareLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="p-2 rounded-md bg-white border border-[#0E234E]/20 hover:bg-[#0E234E] hover:text-white text-[#0E234E] transition-all duration-200"
                                        aria-label="Share on Facebook"
                                        title="Share on Facebook"
                                    >
                                        <FaFacebook className="w-4 h-4" />
                                    </motion.a>
                                    <motion.a
                                        href={gmailShareLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="p-2 rounded-md bg-white border border-[#0E234E]/20 hover:bg-[#0E234E] hover:text-white text-[#0E234E] transition-all duration-200"
                                        aria-label="Share via Gmail"
                                        title="Share via Gmail"
                                    >
                                        <FaEnvelope className="w-4 h-4" />
                                    </motion.a>
                                    <motion.a
                                        href={twitterShareLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="p-2 rounded-md bg-white border border-[#0E234E]/20 hover:bg-[#0E234E] hover:text-white text-[#0E234E] transition-all duration-200"
                                        aria-label="Share on Twitter"
                                        title="Share on Twitter"
                                    >
                                        <FaLink className="w-4 h-4" />
                                    </motion.a>
                                </div>
                            </motion.div>


                            {/* Key Points and Content */}
                            <div className="flex flex-col md:flex-row gap-4 sm:gap-8">
                                {/* Key Points - 20% */}
                                <div className="md:w-[20%]">
                                    <motion.h3 
                                        variants={itemVariants}
                                        className={`font-bold text-[#0E234E] mb-2 text-[14px] md:text-[16px] uppercase tracking-wide ${gotham.className}`}
                                    >
                                        KEY POINTS
                                    </motion.h3>
                                </div>

                                {/* Content - 80% */}
                                <div className="md:w-[80%]">
                                    {/* Key Points List */}
                                    <motion.ul 
                                        variants={itemVariants}
                                        className="space-y-4 mb-4"
                                    >
                                        {articleData.keyPoints.map((point, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <span className="w-1.5 h-1.5 bg-[#0E234E] rounded-full mt-2 flex-shrink-0"></span>
                                                <span className={`text-[#0E1425]/70 text-[14px] md:text-[15px] leading-relaxed ${sora.className}`}>
                                                    {point}
                                                </span>
                                            </li>
                                        ))}
                                    </motion.ul>

                                     {/* Horizontal Line */}
                            <motion.div 
                                variants={itemVariants}
                                className="h-px bg-gray-200 mb-4"
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
                                                className={`text-[#0E1425]/70 leading-relaxed text-[14px] md:text-[16px] ${sora.className}`}
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
                                className="flex items-center justify-between py-4 mb-4"
                            >
                                <span className={`text-[#0E234E] text-sm md:text-[15px] font-semibold ${sora.className}`}>
                                    Share this article
                                </span>
                                
                                <div className="h-px flex-1 mx-4 bg-gray-300"></div>
                                
                                <div className="flex items-center gap-2">
                                    <motion.a
                                        href={twitterShareLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="p-2 rounded-md bg-white border border-[#0E234E]/20 hover:bg-[#0E234E] hover:text-white text-[#0E234E] transition-all duration-200"
                                        aria-label="Share on Twitter"
                                        title="Share on Twitter"
                                    >
                                        <FaXTwitter className="w-4 h-4" />
                                    </motion.a>
                                    <motion.a
                                        href={facebookShareLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="p-2 rounded-md bg-white border border-[#0E234E]/20 hover:bg-[#0E234E] hover:text-white text-[#0E234E] transition-all duration-200"
                                        aria-label="Share on Facebook"
                                        title="Share on Facebook"
                                    >
                                        <FaFacebook className="w-4 h-4" />
                                    </motion.a>
                                    <motion.a
                                        href={gmailShareLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="p-2 rounded-md bg-white border border-[#0E234E]/20 hover:bg-[#0E234E] hover:text-white text-[#0E234E] transition-all duration-200"
                                        aria-label="Share via Gmail"
                                        title="Share via Gmail"
                                    >
                                        <FaEnvelope className="w-4 h-4" />
                                    </motion.a>
                                    <motion.a
                                        href={twitterShareLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="p-2 rounded-md bg-white border border-[#0E234E]/20 hover:bg-[#0E234E] hover:text-white text-[#0E234E] transition-all duration-200"
                                        aria-label="Share on Twitter"
                                        title="Share on Twitter"
                                    >
                                        <FaLink className="w-4 h-4" />
                                    </motion.a>
                                </div>
                            </motion.div>

                            {/* Comment Section */}
                            <motion.div 
                                variants={itemVariants}
                                className="border border-[#0E234E]/10 rounded-[8px] mb-4 p-6 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
                            >
                                <h3 className={`text-[20px] md:text-[22px] text-[#0E234E] font-semibold mb-2 ${gothamLight.className}`}>
                                    Join the conversation
                                </h3>
                                <p className={`text-sm text-[#0E1425]/70 mb-6 ${sora.className}`}>
                                    Share your perspective or ask a question about this story.
                                </p>

                                <form onSubmit={handleCommentSubmit} className="space-y-4 mb-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            value={commentForm.name}
                                            onChange={(e) => handleCommentChange('name', e.target.value)}
                                            placeholder="Your name"
                                            className={`w-full border border-gray-300 rounded-md px-4 py-2.5 text-[#0E234E] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0E234E]/30 focus:border-[#0E234E] text-[14px] transition-all duration-200 ${sora.className}`}
                                        />
                                        <input
                                            type="email"
                                            placeholder="Email (optional)"
                                            className={`w-full border border-gray-200 rounded-md px-4 py-2.5 text-[#0E234E] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0E234E]/20 focus:border-[#0E234E]/40 text-[14px] transition-all duration-200 ${sora.className}`}
                                        />
                                    </div>
                                    <textarea
                                        value={commentForm.comment}
                                        onChange={(e) => handleCommentChange('comment', e.target.value)}
                                        placeholder="Add your comment..."
                                        rows={4}
                                        className={`w-full border border-gray-300 rounded-md px-4 py-3 text-[#0E234E] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0E234E]/30 focus:border-[#0E234E] text-[14px] transition-all duration-200 ${sora.className}`}
                                    />
                                    {formError && (
                                        <p className="text-sm text-red-500">{formError}</p>
                                    )}
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                                        <p className={`text-xs text-[#0E1425]/60 ${sora.className}`}>
                                            By sharing, you agree to follow BDB community guidelines.
                                        </p>
                                        <motion.button
                                            whileHover={{ y: -1 }}
                                            whileTap={{ scale: 0.98 }}
                                            type="submit"
                                            className={`inline-flex items-center justify-center bg-[#0E234E] text-white px-6 py-2.5 rounded-md text-[14px] font-medium hover:bg-[#0E234E]/90 transition-all duration-200 ${sora.className}`}
                                        >
                                            Post comment
                                        </motion.button>
                                    </div>
                                </form>

                                <div className="space-y-5">
                                    {comments.length === 0 ? (
                                        <p className={`text-sm text-[#0E1425]/60 ${sora.className}`}>
                                            Be the first to add a comment.
                                        </p>
                                    ) : (
                                        comments.map((comment) => (
                                            <div
                                                key={comment.id}
                                                className="border border-gray-100 rounded-md p-4 bg-[#F9FBFC]"
                                            >
                                                <div className="flex items-center justify-between mb-2">
                                                    <p className={`text-[15px] font-semibold text-[#0E234E] ${sora.className}`}>
                                                        {comment.name}
                                                    </p>
                                                    <span className={`text-xs text-[#0E1425]/60 ${sora.className}`}>
                                                        {formatCommentDate(comment.date)}
                                                    </span>
                                                </div>
                                                <p className={`text-[14px] text-[#0E1425]/80 leading-relaxed ${sora.className}`}>
                                                    {comment.comment}
                                                </p>
                                            </div>
                                        ))
                                    )}
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
    className="bg-white border border-[#0E234E]/20 rounded-[6px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden mb-4"
>
    {/* Fixed Title */}
    <div className="bg-[#EFF3F6] py-3 px-6">
        <h3 className={`text-[#0E234E] text-center text-[11px] md:text-[12px] font-semibold tracking-wider ${gotham.className}`}>
            SUBSCRIBE TO OUR MAILING LIST
        </h3>
    </div>
    
    {/* Content */}
    <div className="space-y-4 p-6">
        <input
            type="email"
            placeholder="Enter your email"
            className={`w-full border border-gray-300 rounded-md px-4 py-2.5 text-[#0E234E] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0E234E]/30 focus:border-[#0E234E] text-[14px] transition-all duration-200 ${sora.className}`}
        />
        <motion.button 
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full bg-[#0E234E] rounded-md py-2.5 text-white hover:bg-[#0E234E]/90 transition-all duration-200 text-[14px] font-medium shadow-sm ${sora.className}`}
        >
            Subscribe Now
        </motion.button>
    </div>
</motion.div>

                        {/* Most Discussed Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white mb-4"
                        >
                            <h3 className={`text-[14px] md:text-[15px] text-[#0E234E] font-semibold mb-4 pb-2 border-b-2 border-[#0E234E] tracking-wide ${gotham.className}`}>
                                MOST DISCUSSED
                            </h3>
                            <div className="space-y-5">
                                {mostDiscussedArticles.map((article) => (
                                    <motion.div 
                                        key={article.id} 
                                        className="flex gap-3 group cursor-pointer"
                                        whileHover={{ x: 2 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="relative h-20 md:h-[100px] w-20 md:w-1/3 flex-shrink-0 rounded-[6px] overflow-hidden">
                                            <Image
                                                src={article.image}
                                                alt={article.title}
                                                fill
                                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                sizes="(max-width: 768px) 80px, 150px"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className={`text-[#0E234E] text-[12px] md:text-[13px] font-semibold mb-1 leading-tight group-hover:text-[#0E234E]/80 transition-colors ${gotham.className}`}>
                                                {article.title}
                                            </h4>
                                            <p className={`text-[11px] md:text-[12px] text-[#0E1425]/70 leading-relaxed ${sora.className}`}>
                                                {article.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                   {/* Latest Articles Card */}
<motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.4 }}
    className="bg-white border mb-4 border-[#0E234E]/20 rounded-[6px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden"
>
    {/* Fixed Title */}
    <div className="bg-[#EFF3F6] py-3 px-6">
        <h3 className={`text-[#0E234E] text-center text-[11px] md:text-[12px] font-semibold tracking-wider ${gotham.className}`}>
            LATEST ARTICLES
        </h3>
    </div>
    
    <div className="p-6">
        {/* Image Slider */}
        <Link 
            href={`/v3/news&events/${latestArticles[currentSlide].id}`}
            className="block group"
        >
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
                        className="relative h-48 md:h-[220px] w-full rounded-[6px] overflow-hidden cursor-pointer"
                    >
                        <Image
                            src={latestArticles[currentSlide].image}
                            alt={latestArticles[currentSlide].title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 40vw"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Slide Content */}
            <div className="text-center">
                <h4 className={`text-[20px] md:text-[22px] text-[#0E234E] mb-3 leading-tight group-hover:text-[#0E234E]/80 transition-colors duration-200 ${gothamLight.className}`}>
                    {latestArticles[currentSlide].title}
                </h4>
                <p className={`text-[14px] md:text-[15px] text-[#0E1425]/70 mb-4 leading-relaxed ${sora.className}`}>
                    {latestArticles[currentSlide].subtitle}
                </p>
            </div>
        </Link>
        
        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-5">
            {latestArticles.map((_, index) => (
                <motion.button
                    key={index}
                    onClick={() => goToSlide(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentSlide ? 'bg-[#0E234E] w-6' : 'bg-gray-300 hover:bg-gray-400'
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