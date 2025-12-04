// "use client";

// import Link from "next/link";
// import { Sora } from 'next/font/google';
// import localFont from 'next/font/local';
// import { FaMapMarkerAlt, FaPhoneAlt , FaEnvelope } from 'react-icons/fa';
// import { FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';

// // Load Sora font
// const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '700'] });

// // Load Gotham from OTF (replaces Carentro)
// const gotham = localFont({
//   src: '../../../public/fonts/Gotham.otf',
//   weight: '400',
//   style: 'normal',
// });

// /** Small inline wrapper for the icons/emoji so they always render consistently */
// function FieldIcon({ children }) {
//     return (
//         <span className="inline-flex items-center justify-center w-5 h-5 rounded-[6px] bg-[#0E234E]/8 text-[#0E234E] mr-3 shrink-0">
//       {children}
//     </span>
//     );
// }

// export default function Footer() {
//     // Navigation links with proper routes
//     const navigationLinks = [
//         { name: "Home", href: "/v4" },
//         { name: "About Us", href: "/v3/about" },
//         { name: "Gallery", href: "/gallery" },
//         { name: "Facilities", href: "/v3/facilities" },
//         { name: "BDB Circulars", href: "/v3/circulars" },
//         { name: "Member's Directory", href: "/v3/members-directory" },
//         // { name: "BDB Forms", href: "/forms" },
//         { name: "News & Events", href: "/v3/news&events" },
//         { name: "Contact Us", href: "/v3/contact-us" },
//         // { name: "Privacy Policy", href: "/privacy-policy" },
//         // { name: "Cookie Policy", href: "/cookie-policy" },
//     ];

//     // Facilities links - you can create individual pages or use anchor links
//     const facilitiesLinks = [
//         { name: "Banks", href: "/facilities#banks" },
//         { name: "Internet Telecom", href: "/facilities#internet-telecom" },
//         { name: "Restaurants", href: "/v3/resturants" },
//         { name: "Online Trading", href: "/facilities#online-trading" },
//         { name: "Bus Services", href: "/facilities#bus-services" },
//         { name: "Testing Laboratories", href: "/facilities#testing-labs" },
//         { name: "Diamond Equipments", href: "/facilities#equipments" },
//         { name: "Trading Hall", href: "/facilities#trading-hall" },
//         { name: "Travel Agents", href: "/facilities#travel-agents" },
//     ];

//     // Social media links
//     const socialLinks = [
//         { 
//             name: "You Tube", 
//             href: "https://youtube.com/@bharatdiamondbourse?si=Gmf8Og-vbMyfJ6-o", 
//             icon: <FaYoutube className="w-6 h-6" />,
//             ariaLabel: "You Tube"
//         },
//         { 
//             name: "Instagram", 
//             href: "https://www.instagram.com/bharatdiamondbourse/?hl=en", 
//             icon: <FaInstagram className="w-6 h-6" />,
//             ariaLabel: "Instagram"
//         },
//         { 
//             name: "LinkedIn", 
//             href: "https://in.linkedin.com/company/bharat-diamond-bourse", 
//             icon: <FaLinkedin className="w-6 h-6" />,
//             ariaLabel: "LinkedIn"
//         },
//     ];

//     return (
//         <footer className={`w-full pb-0 ${sora.className} relative overflow-hidden`}>
//             {/* Animated Background with Diamond Video */}
//             <div className="absolute inset-0 z-0">
//                 {/* Diamond Video Background */}
//                 <video 
//                     autoPlay 
//                     muted 
//                     loop 
//                     playsInline
//                     className="w-full h-full object-cover opacity-60"
//                 >
//                     <source src="/diamond-video-1.webm" type="video/webm" />
//                     <source src="/diamond-video-1.mp4" type="video/mp4" />
//                     Your browser does not support the video tag.
//                 </video>
                
//                 {/* Animated Gradient Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-[#0A1A3A]/90 via-[#0E234E]/80 to-[#152A5B]/90">
//                     {/* Animated Sparkle Effects */}
//                     <div className="absolute inset-0 overflow-hidden">
//                         <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse opacity-30"></div>
//                         <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-pulse opacity-40"></div>
//                         <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-200 rounded-full animate-pulse opacity-25"></div>
//                         <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse opacity-35"></div>
//                         <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-blue-200 rounded-full animate-pulse opacity-20"></div>
//                     </div>
                    
//                     {/* Moving Gradient Orbs */}
//                     <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-r from-[#1E3A8A]/20 to-[#3B82F6]/10 rounded-full blur-3xl animate-float"></div>
//                     <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-[#0EA5E9]/15 to-[#0369A1]/10 rounded-full blur-3xl animate-float-slow"></div>
//                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#8B5CF6]/10 to-[#A78BFA]/15 rounded-full blur-3xl animate-pulse-slow"></div>
//                 </div>
//             </div>

//             {/* Main Content */}
//             <div className="relative z-10 mx-auto rounded-b-[22px] overflow-hidden">
//                 {/* Navigation & Facilities Section */}
//                 <div className="px-4 md:px-8 lg:px-16 xl:px-32 py-8 relative z-20">
//                     {/* Navigation */}
//                     <div className="mb-6">
//                         <h4 className={`${gotham.className} text-[#A6AFBE] tracking-[2px] uppercase text-[13px] mb-4`}>
//                             Navigation
//                         </h4>
//                         <div className="flex flex-wrap gap-4 md:gap-6 text-white/90 text-[14px]">
//                             {navigationLinks.map((link) => (
//                                 <Link 
//                                     key={link.name}
//                                     href={link.href} 
//                                     className="hover:text-white hover:underline transition-all duration-200 px-2 py-1 rounded backdrop-blur-sm bg-white/5 hover:bg-white/10"
//                                 >
//                                     {link.name}
//                                 </Link>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Big Dash Line */}
//                     <div className="border-t border-[#3A4A76] my-6"></div>

//                     {/* Office & Facilities */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                         {/* Office Information */}
//                         <div>
//                             <h4 className={`${gotham.className} text-[#A6AFBE] tracking-[2px] uppercase text-[13px] mb-4`}>
//                                 Office
//                             </h4>
//                             <div className="space-y-4 text-white/85 text-[14px]">
//                                 <div className="flex items-start gap-3 backdrop-blur-sm bg-white/5 rounded-lg p-3">
//                                     <Link 
//                                         href="https://maps.google.com/?q=G+Block+BKC+Bandra+Kurla+Complex+Bandra+East+Mumbai+Maharashtra+400051" 
//                                         target="_blank" 
//                                         rel="noopener noreferrer"
//                                         aria-label="View location on Google Maps" 
//                                         className="hover:opacity-80 shrink-0 mt-0.5"
//                                     >
//                                         <FaMapMarkerAlt className="w-5 h-5 text-white" />
//                                     </Link>
//                                     <p className="leading-[1.6]">
//                                         G Block BKC, Bandra Kurla Complex, Bandra East, Mumbai,
//                                         Maharashtra 400051
//                                     </p>
//                                 </div>

//                                 <div className="flex items-center gap-3 backdrop-blur-sm bg-white/5 rounded-lg p-3">
//                                     <Link 
//                                         href="tel:+912233921500" 
//                                         aria-label="Call +91 22 3392 1500" 
//                                         className="hover:opacity-80 shrink-0"
//                                     >
//                                         <FaPhoneAlt  className="w-5 h-5 text-white" />
//                                     </Link>
//                                     <Link href="tel:+912233921500" className="hover:underline hover:text-white transition-colors">
//                                         +91 22 3392 1500
//                                     </Link>
//                                 </div>

//                                 <div className="flex items-center gap-3 backdrop-blur-sm bg-white/5 rounded-lg p-3">
//                                     <Link 
//                                         href="mailto:support@bdbindia.org" 
//                                         aria-label="Email support@bdbindia.org" 
//                                         className="hover:opacity-80 shrink-0"
//                                     >
//                                         <FaEnvelope className="w-5 h-5 text-white" />
//                                     </Link>
//                                     <Link href="mailto:support@bdbindia.org" className="hover:underline hover:text-white transition-colors">
//                                         support@bdbindia.org
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Facilities */}
//                         <div>
//                             <h4 className={`${gotham.className} text-[#A6AFBE] tracking-[2px] uppercase text-[13px] mb-4`}>
//                                 Facilities
//                             </h4>
//                             <div className="grid grid-cols-2 gap-2 text-white/85 text-[14px]">
//                                 {facilitiesLinks.map((facility) => (
//                                     <Link 
//                                         key={facility.name}
//                                         href={facility.href} 
//                                         className="hover:text-white hover:underline transition-colors duration-200 px-3 py-2 rounded backdrop-blur-sm bg-white/5 hover:bg-white/10"
//                                     >
//                                         {facility.name}
//                                     </Link>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>

//                     {/* Big Dash Line */}
//                     <div className="border-t border-[#3A4A76] my-6"></div>

//                     {/* Stay Connected Section */}
//                     <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 backdrop-blur-sm bg-white/5 rounded-2xl p-6">
//                         {/* Stay Connected Text */}
//                         <div className="flex-1">
//                             <h4 className={`${gotham.className} text-[#A6AFBE] tracking-[2px] uppercase text-[13px] mb-4`}>
//                                 Stay Connected
//                             </h4>
//                             <p className="text-white/80 text-[14px]">
//                                 Follow us on social media for the latest updates and news
//                             </p>
//                         </div>

//                         {/* Social Icons */}
//                         <div className="flex items-center gap-6">
//                             {socialLinks.map((social) => (
//                                 <Link 
//                                     key={social.name}
//                                     href={social.href}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     aria-label={social.ariaLabel}
//                                     className="hover:scale-110 transition-transform duration-200 p-3 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm"
//                                 >
//                                     <div className="text-white">
//                                         {social.icon}
//                                     </div>
//                                 </Link>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Big Dash Line */}
//                     <div className="border-t border-[#3A4A76] my-6"></div>

//                     {/* Join the World Section */}
//                     <div className="text-center backdrop-blur-sm bg-white/5 rounded-2xl p-8">
//                         <h3 className={`${gotham.className} text-white text-[26px] md:text-[34px] leading-tight mb-6`}>
//                             Join the World of Diamond Trade
//                         </h3>

//                         {/* Email Input */}
//                         <form
//                             onSubmit={(e) => e.preventDefault()}
//                             className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto"
//                         >
//                             <input
//                                 type="email"
//                                 required
//                                 placeholder="Enter your email address"
//                                 className="flex-1 w-full sm:max-w-md bg-white/10 border border-[#3A4A76] rounded-[14px] px-6 py-4 text-white placeholder:text-white/60 outline-none focus:border-[#5A6BA8] transition-colors backdrop-blur-sm"
//                             />
//                             <button
//                                 type="submit"
//                                 className="inline-flex items-center justify-center h-[56px] px-8 rounded-[14px] text-white text-[14px] font-semibold uppercase tracking-[0.5px] bg-gradient-to-r from-[#1E3A8A] to-[#1E40AF] hover:from-[#1E40AF] hover:to-[#051a54] active:scale-95 transition-all duration-300 ease-out shadow-lg hover:shadow-xl"
//                             >
//                                 SUBMIT
//                             </button>
//                         </form>
//                     </div>
//                 </div>

//                 {/* Copyright Section */}
//                 <div className="bg-[#0A1A3A]/80 backdrop-blur-sm px-4 md:px-8 lg:px-16 xl:px-32 py-4 border-t border-[#3A4A76] relative z-20">
//                     <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//                         <p className="text-[14px] text-white/60 text-center md:text-left">
//                             © 2025 Bharat Diamond Bourse. All Rights Reserved.
//                         </p>
//                         <div className="flex items-center justify-center md:justify-end gap-6 text-[14px] text-white/60">
//                             <Link href="/privacy-policy" className="hover:text-white hover:underline transition-colors">
//                                 Privacy Policy
//                             </Link>
//                             <Link href="/cookie-policy" className="hover:text-white hover:underline transition-colors">
//                                 Cookie Policy
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Add custom animations to global CSS */}
//             <style jsx global>{`
//                 @keyframes float {
//                     0%, 100% { transform: translateY(0px) rotate(0deg); }
//                     50% { transform: translateY(-20px) rotate(180deg); }
//                 }
//                 @keyframes float-slow {
//                     0%, 100% { transform: translateX(0px) translateY(0px); }
//                     33% { transform: translateX(20px) translateY(-15px); }
//                     66% { transform: translateX(-15px) translateY(10px); }
//                 }
//                 @keyframes pulse-slow {
//                     0%, 100% { opacity: 0.1; transform: scale(1); }
//                     50% { opacity: 0.2; transform: scale(1.1); }
//                 }
//                 .animate-float {
//                     animation: float 15s ease-in-out infinite;
//                 }
//                 .animate-float-slow {
//                     animation: float-slow 20s ease-in-out infinite;
//                 }
//                 .animate-pulse-slow {
//                     animation: pulse-slow 8s ease-in-out infinite;
//                 }
//             `}</style>
//         </footer>
//     );
// }

// "use client";

// import Link from "next/link";
// import { Sora } from 'next/font/google';
// import localFont from 'next/font/local';
// import { FaMapMarkerAlt, FaPhoneAlt , FaEnvelope } from 'react-icons/fa';
// import { FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';

// // Load Sora font
// const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '700'] });

// // Load Gotham from OTF (replaces Carentro)
// const gotham = localFont({
//   src: '../../../public/fonts/Gotham.otf',
//   weight: '400',
//   style: 'normal',
// });

// /** Small inline wrapper for the icons/emoji so they always render consistently */
// function FieldIcon({ children }) {
//     return (
//         <span className="inline-flex items-center justify-center w-5 h-5 rounded-[6px] bg-[#0E234E]/8 text-[#0E234E] mr-3 shrink-0">
//       {children}
//     </span>
//     );
// }

// export default function Footer() {
//     // Navigation links with proper routes
//     const navigationLinks = [
//         { name: "Home", href: "/v4" },
//         { name: "About Us", href: "/v3/about" },
//         { name: "Gallery", href: "/gallery" },
//         { name: "Facilities", href: "/v3/facilities" },
//         { name: "BDB Circulars", href: "/v3/circulars" },
//         { name: "Member's Directory", href: "/v3/members-directory" },
//         // { name: "BDB Forms", href: "/forms" },
//         { name: "News & Events", href: "/v3/news&events" },
//         { name: "Contact Us", href: "/v3/contact-us" },
//         // { name: "Privacy Policy", href: "/privacy-policy" },
//         // { name: "Cookie Policy", href: "/cookie-policy" },
//     ];

//     // Facilities links - you can create individual pages or use anchor links
//     const facilitiesLinks = [
//         { name: "Banks", href: "/facilities#banks" },
//         { name: "Internet Telecom", href: "/facilities#internet-telecom" },
//         { name: "Restaurants", href: "/v3/resturants" },
//         { name: "Online Trading", href: "/facilities#online-trading" },
//         { name: "Bus Services", href: "/facilities#bus-services" },
//         { name: "Testing Laboratories", href: "/facilities#testing-labs" },
//         { name: "Diamond Equipments", href: "/facilities#equipments" },
//         { name: "Trading Hall", href: "/facilities#trading-hall" },
//         { name: "Travel Agents", href: "/facilities#travel-agents" },
//     ];

//     // Social media links
//     const socialLinks = [
//         { 
//             name: "You Tube", 
//             href: "https://youtube.com/@bharatdiamondbourse?si=Gmf8Og-vbMyfJ6-o", 
//             icon: <FaYoutube className="w-6 h-6" />,
//             ariaLabel: "You Tube"
//         },
//         { 
//             name: "Instagram", 
//             href: "https://www.instagram.com/bharatdiamondbourse/?hl=en", 
//             icon: <FaInstagram className="w-6 h-6" />,
//             ariaLabel: "Instagram"
//         },
//         { 
//             name: "LinkedIn", 
//             href: "https://in.linkedin.com/company/bharat-diamond-bourse", 
//             icon: <FaLinkedin className="w-6 h-6" />,
//             ariaLabel: "LinkedIn"
//         },
//     ];

//     return (
//         <footer className={`w-full pb-0 ${sora.className} relative overflow-hidden`}>
//             {/* Animated Background with Diamond Video */}
//             <div className="absolute inset-0 z-0">
//                 {/* Diamond Video Background */}
//                 <video 
//                     autoPlay 
//                     muted 
//                     loop 
//                     playsInline
//                     className="w-full h-full object-cover opacity-60"
//                 >
//                     <source src="/diamond-video-1.webm" type="video/webm" />
//                     <source src="/diamond-video-1.mp4" type="video/mp4" />
//                     Your browser does not support the video tag.
//                 </video>
                
//                 {/* Animated Gradient Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-[#0A1A3A]/90 via-[#0E234E]/80 to-[#152A5B]/90">
//                     {/* Animated Sparkle Effects */}
//                     <div className="absolute inset-0 overflow-hidden">
//                         <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse opacity-30"></div>
//                         <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-pulse opacity-40"></div>
//                         <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-200 rounded-full animate-pulse opacity-25"></div>
//                         <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse opacity-35"></div>
//                         <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-blue-200 rounded-full animate-pulse opacity-20"></div>
//                     </div>
                    
//                     {/* Moving Gradient Orbs */}
//                     <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-r from-[#1E3A8A]/20 to-[#3B82F6]/10 rounded-full blur-3xl animate-float"></div>
//                     <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-[#0EA5E9]/15 to-[#0369A1]/10 rounded-full blur-3xl animate-float-slow"></div>
//                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#8B5CF6]/10 to-[#A78BFA]/15 rounded-full blur-3xl animate-pulse-slow"></div>
//                 </div>
//             </div>

//             {/* Main Content */}
//             <div className="relative z-10 mx-auto rounded-b-[22px] overflow-hidden">
//                 {/* Navigation & Facilities Section */}
//                 <div className="px-4 md:px-8 lg:px-16 xl:px-32 py-8 relative z-20">
//                     {/* Navigation */}
//                     <div className="mb-6">
//                         <h4 className={`${gotham.className} text-[#A6AFBE] tracking-[2px] uppercase text-[13px] mb-4`}>
//                             Navigation
//                         </h4>
//                         <div className="flex flex-wrap gap-4 md:gap-6 text-white/90 text-[14px]">
//                             {navigationLinks.map((link) => (
//                                 <Link 
//                                     key={link.name}
//                                     href={link.href} 
//                                     className="hover:text-white hover:underline transition-all duration-200 px-2 py-1 rounded backdrop-blur-sm bg-white/5 hover:bg-white/10"
//                                 >
//                                     {link.name}
//                                 </Link>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Big Dash Line */}
//                     <div className="border-t border-[#3A4A76] my-6"></div>

//                     {/* Office & Facilities */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                         {/* Office Information */}
//                         <div>
//                             <h4 className={`${gotham.className} text-[#A6AFBE] tracking-[2px] uppercase text-[13px] mb-4`}>
//                                 Office
//                             </h4>
//                             <div className="space-y-4 text-white/85 text-[14px]">
//                                 <div className="flex items-start gap-3 backdrop-blur-sm bg-white/5 rounded-lg p-3">
//                                     <Link 
//                                         href="https://maps.google.com/?q=G+Block+BKC+Bandra+Kurla+Complex+Bandra+East+Mumbai+Maharashtra+400051" 
//                                         target="_blank" 
//                                         rel="noopener noreferrer"
//                                         aria-label="View location on Google Maps" 
//                                         className="hover:opacity-80 shrink-0 mt-0.5"
//                                     >
//                                         <FaMapMarkerAlt className="w-5 h-5 text-white" />
//                                     </Link>
//                                     <p className="leading-[1.6]">
//                                         G Block BKC, Bandra Kurla Complex, Bandra East, Mumbai,
//                                         Maharashtra 400051
//                                     </p>
//                                 </div>

//                                 <div className="flex items-center gap-3 backdrop-blur-sm bg-white/5 rounded-lg p-3">
//                                     <Link 
//                                         href="tel:+912233921500" 
//                                         aria-label="Call +91 22 3392 1500" 
//                                         className="hover:opacity-80 shrink-0"
//                                     >
//                                         <FaPhoneAlt  className="w-5 h-5 text-white" />
//                                     </Link>
//                                     <Link href="tel:+912233921500" className="hover:underline hover:text-white transition-colors">
//                                         +91 22 3392 1500
//                                     </Link>
//                                 </div>

//                                 <div className="flex items-center gap-3 backdrop-blur-sm bg-white/5 rounded-lg p-3">
//                                     <Link 
//                                         href="mailto:support@bdbindia.org" 
//                                         aria-label="Email support@bdbindia.org" 
//                                         className="hover:opacity-80 shrink-0"
//                                     >
//                                         <FaEnvelope className="w-5 h-5 text-white" />
//                                     </Link>
//                                     <Link href="mailto:support@bdbindia.org" className="hover:underline hover:text-white transition-colors">
//                                         support@bdbindia.org
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Facilities */}
//                         <div>
//                             <h4 className={`${gotham.className} text-[#A6AFBE] tracking-[2px] uppercase text-[13px] mb-4`}>
//                                 Facilities
//                             </h4>
//                             <div className="grid grid-cols-2 gap-2 text-white/85 text-[14px]">
//                                 {facilitiesLinks.map((facility) => (
//                                     <Link 
//                                         key={facility.name}
//                                         href={facility.href} 
//                                         className="hover:text-white hover:underline transition-colors duration-200 px-3 py-2 rounded backdrop-blur-sm bg-white/5 hover:bg-white/10"
//                                     >
//                                         {facility.name}
//                                     </Link>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>

//                     {/* Big Dash Line */}
//                     <div className="border-t border-[#3A4A76] my-6"></div>

//                     {/* Stay Connected Section */}
//                     <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 backdrop-blur-sm bg-white/5 rounded-2xl p-6">
//                         {/* Stay Connected Text */}
//                         <div className="flex-1">
//                             <h4 className={`${gotham.className} text-[#A6AFBE] tracking-[2px] uppercase text-[13px] mb-4`}>
//                                 Stay Connected
//                             </h4>
//                             <p className="text-white/80 text-[14px]">
//                                 Follow us on social media for the latest updates and news
//                             </p>
//                         </div>

//                         {/* Social Icons */}
//                         <div className="flex items-center gap-6">
//                             {socialLinks.map((social) => (
//                                 <Link 
//                                     key={social.name}
//                                     href={social.href}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     aria-label={social.ariaLabel}
//                                     className="hover:scale-110 transition-transform duration-200 p-3 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm"
//                                 >
//                                     <div className="text-white">
//                                         {social.icon}
//                                     </div>
//                                 </Link>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Big Dash Line */}
//                     <div className="border-t border-[#3A4A76] my-6"></div>

//                     {/* Join the World Section */}
//                     <div className="text-center backdrop-blur-sm bg-white/5 rounded-2xl p-8">
//                         <h3 className={`${gotham.className} text-white text-[26px] md:text-[34px] leading-tight mb-6`}>
//                             Join the World of Diamond Trade
//                         </h3>

//                         {/* Email Input */}
//                         <form
//                             onSubmit={(e) => e.preventDefault()}
//                             className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto"
//                         >
//                             <input
//                                 type="email"
//                                 required
//                                 placeholder="Enter your email address"
//                                 className="flex-1 w-full sm:max-w-md bg-white/10 border border-[#3A4A76] rounded-[14px] px-6 py-4 text-white placeholder:text-white/60 outline-none focus:border-[#5A6BA8] transition-colors backdrop-blur-sm"
//                             />
//                             <button
//                                 type="submit"
//                                 className="inline-flex items-center justify-center h-[56px] px-8 rounded-[14px] text-white text-[14px] font-semibold uppercase tracking-[0.5px] bg-gradient-to-r from-[#1E3A8A] to-[#1E40AF] hover:from-[#1E40AF] hover:to-[#051a54] active:scale-95 transition-all duration-300 ease-out shadow-lg hover:shadow-xl"
//                             >
//                                 SUBMIT
//                             </button>
//                         </form>
//                     </div>
//                 </div>

//                 {/* Copyright Section */}
//                 <div className="bg-[#0A1A3A]/80 backdrop-blur-sm px-4 md:px-8 lg:px-16 xl:px-32 py-4 border-t border-[#3A4A76] relative z-20">
//                     <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//                         <p className="text-[14px] text-white/60 text-center md:text-left">
//                             © 2025 Bharat Diamond Bourse. All Rights Reserved.
//                         </p>
//                         <div className="flex items-center justify-center md:justify-end gap-6 text-[14px] text-white/60">
//                             <Link href="/privacy-policy" className="hover:text-white hover:underline transition-colors">
//                                 Privacy Policy
//                             </Link>
//                             <Link href="/cookie-policy" className="hover:text-white hover:underline transition-colors">
//                                 Cookie Policy
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Add custom animations to global CSS */}
//             <style jsx global>{`
//                 @keyframes float {
//                     0%, 100% { transform: translateY(0px) rotate(0deg); }
//                     50% { transform: translateY(-20px) rotate(180deg); }
//                 }
//                 @keyframes float-slow {
//                     0%, 100% { transform: translateX(0px) translateY(0px); }
//                     33% { transform: translateX(20px) translateY(-15px); }
//                     66% { transform: translateX(-15px) translateY(10px); }
//                 }
//                 @keyframes pulse-slow {
//                     0%, 100% { opacity: 0.1; transform: scale(1); }
//                     50% { opacity: 0.2; transform: scale(1.1); }
//                 }
//                 .animate-float {
//                     animation: float 15s ease-in-out infinite;
//                 }
//                 .animate-float-slow {
//                     animation: float-slow 20s ease-in-out infinite;
//                 }
//                 .animate-pulse-slow {
//                     animation: pulse-slow 8s ease-in-out infinite;
//                 }
//             `}</style>
//         </footer>
//     );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { Sora } from 'next/font/google';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Load Sora font
const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

// Animation variants - Unique names for each type
const footerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut"
    }
  }
};

const gridStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const columnReveal = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 20,
      mass: 1,
      duration: 1
    }
  }
};

const linkItem = {
  hidden: { x: -15, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
  hover: {
    x: 6,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
      duration: 0.3
    }
  }
};

const socialButton = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 18,
      duration: 0.8
    }
  },
  hover: {
    scale: 1.1,
    rotate: [0, 5, -5, 0],
    transition: {
      scale: {
        type: "spring",
        stiffness: 400,
        damping: 10
      },
      rotate: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  }
};

const contactButton = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      duration: 0.7
    }
  },
  hover: {
    scale: 1.05,
    y: -2,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: { scale: 0.98 }
};

const sectionSlideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const iconGlow = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.3,
    rotate: 360,
    transition: {
      rotate: {
        duration: 0.8,
        ease: "easeInOut"
      },
      scale: {
        duration: 0.3
      }
    }
  }
};

const backgroundSparkle = {
  animate: {
    opacity: [0.1, 0.7, 0.1],
    scale: [1, 1.4, 1],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatDelay: 2,
      ease: "easeInOut"
    }
  }
};

const backgroundFloat = {
  animate: {
    y: [0, -40, 0],
    x: [0, 20, 0],
    rotate: [0, 90, 180, 270, 360],
    transition: {
      duration: 30,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

const backgroundFloatSlow = {
  animate: {
    y: [0, -30, 10, 0],
    x: [0, 30, -20, 0],
    transition: {
      duration: 40,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const backgroundPulse = {
  animate: {
    opacity: [0.08, 0.18, 0.08],
    scale: [1, 1.2, 1],
    transition: {
      duration: 15,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const titleGlide = {
  hidden: { y: 25, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  }
};

const bottomBarReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut"
    }
  }
};

const copyrightFade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeOut"
    }
  }
};

export default function Footer() {
    // Navigation items from header (Main Navigation)
    const navItems = [
        { href: '/v3', label: 'Home' },
        { href: '/v3/about', label: 'About Us' },
        { href: '/v3/facilities', label: 'Facilities' },
        { href: '/v3/news&events', label: 'News & Events' },
        { href: '/v3/sustainability', label: 'Sustainability' },
    ];

    // Top navigation items from header (Quick Links)
    const topNavItems = [
        { href: '/v3/circulars', label: 'Circulars' },
        { href: '/v3/members-directory', label: 'Member\'s directory' },
        { href: '/v3/contact-us', label: 'Contact us' },
        { href: '/v3/careers', label: 'Careers' },
    ];

    // Facilities subnavigation items from header
    const facilitiesSubnavItems = [
        'Banks',
        'Internet Telecom',
        'Resturants',
        'Online Trading',
        'Bus Services',
        'Testing Laboratories',
        'Diamond Equipments',
        'Trading Hall',
        'Travel Agents',
    ];

    // Social media links
    const socialLinks = [
        { 
            name: "LinkedIn", 
            href: "https://in.linkedin.com/company/bharat-diamond-bourse",
            icon: <FaLinkedin className="w-5 h-5" />
        },
        { 
            name: "YouTube", 
            href: "https://youtube.com/@bharatdiamondbourse?si=Gmf8Og-vbMyfJ6-o",
            icon: <FaYoutube className="w-5 h-5" />
        },
        { 
            name: "Instagram", 
            href: "https://www.instagram.com/bharatdiamondbourse/?hl=en",
            icon: <FaInstagram className="w-5 h-5" />
        },
    ];

    return (
        <motion.footer 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={footerContainer}
            className={`bg-[#0C1A32] text-white ${sora.className} overflow-hidden`}
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Sparkle Effects */}
                <motion.div 
                    variants={backgroundSparkle}
                    animate="animate"
                    className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full"
                />
                <motion.div 
                    variants={backgroundSparkle}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{ delay: 1, duration: 6, repeat: Infinity, repeatDelay: 2 }}
                    className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-300 rounded-full"
                />
                <motion.div 
                    variants={backgroundSparkle}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.4, 0] }}
                    transition={{ delay: 2, duration: 6, repeat: Infinity, repeatDelay: 2 }}
                    className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-cyan-200 rounded-full"
                />

                {/* Floating Gradient Orbs */}
                <motion.div 
                    variants={backgroundFloat}
                    animate="animate"
                    className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-r from-[#1E3A8A]/10 to-[#3B82F6]/5 rounded-full blur-3xl"
                />
                <motion.div 
                    variants={backgroundFloatSlow}
                    animate="animate"
                    className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-[#0EA5E9]/8 to-[#0369A1]/5 rounded-full blur-3xl"
                />
                <motion.div 
                    variants={backgroundPulse}
                    animate="animate"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#8B5CF6]/10 to-[#A78BFA]/8 rounded-full blur-3xl"
                />
            </div>

            {/* Main Footer Content */}
            <div className="relative z-10 mx-auto px-4 md:px-8 lg:px-16 xl:px-32 py-12">
                {/* Grid Layout */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={gridStagger}
                    className="grid grid-cols-1 md:grid-cols-6 gap-8"
                >
                    {/* Column 1: Quick Links */}
                    <motion.div 
                        variants={columnReveal}
                        className="md:col-span-1"
                    >
                        <motion.h4 
                            variants={titleGlide}
                            whileHover={{ scale: 1.02 }}
                            className="text-white font-semibold text-sm mb-6 uppercase tracking-wider"
                        >
                            Quick Links
                        </motion.h4>
                        <ul className="space-y-3">
                            {topNavItems.map((item, index) => (
                                <motion.li 
                                    key={item.href}
                                    variants={linkItem}
                                    custom={index}
                                    whileHover="hover"
                                >
                                    <Link 
                                        href={item.href} 
                                        className="text-[#94A3B8] hover:text-white text-sm transition-colors duration-300 block"
                                    >
                                        {item.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Column 2: Main Navigation */}
                    <motion.div 
                        variants={columnReveal}
                        className="md:col-span-1"
                    >
                        <motion.h4 
                            variants={titleGlide}
                            whileHover={{ scale: 1.02 }}
                            className="text-white font-semibold text-sm mb-6 uppercase tracking-wider"
                        >
                            Navigation
                        </motion.h4>
                        <ul className="space-y-3">
                            {navItems.map((item, index) => (
                                <motion.li 
                                    key={item.href}
                                    variants={linkItem}
                                    custom={index}
                                    whileHover="hover"
                                >
                                    <Link 
                                        href={item.href} 
                                        className="text-[#94A3B8] hover:text-white text-sm transition-colors duration-300 block"
                                    >
                                        {item.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Column 3: Facilities */}
                    <motion.div 
                        variants={columnReveal}
                        className="md:col-span-1"
                    >
                        <motion.h4 
                            variants={titleGlide}
                            whileHover={{ scale: 1.02 }}
                            className="text-white font-semibold text-sm mb-6 uppercase tracking-wider"
                        >
                            Facilities
                        </motion.h4>
                        <ul className="space-y-3">
                            {facilitiesSubnavItems.slice(0, 4).map((item, index) => (
                                <motion.li 
                                    key={index}
                                    variants={linkItem}
                                    custom={index}
                                    whileHover="hover"
                                >
                                    <Link 
                                        href={`/v3/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                                        className="text-[#94A3B8] hover:text-white text-sm transition-colors duration-300 block"
                                    >
                                        {item}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Column 4: More Facilities */}
                    <motion.div 
                        variants={columnReveal}
                        className="md:col-span-1"
                    >
                        <motion.h4 
                            variants={titleGlide}
                            whileHover={{ scale: 1.02 }}
                            className="text-white font-semibold text-sm mb-6 uppercase tracking-wider"
                        >
                            Facilities
                        </motion.h4>
                        <ul className="space-y-3">
                            {facilitiesSubnavItems.slice(4).map((item, index) => (
                                <motion.li 
                                    key={index}
                                    variants={linkItem}
                                    custom={index}
                                    whileHover="hover"
                                >
                                    <Link 
                                        href={`/v3/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                                        className="text-[#94A3B8] hover:text-white text-sm transition-colors duration-300 block"
                                    >
                                        {item}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Column 5: Office Information */}
                    <motion.div 
                        variants={columnReveal}
                        className="md:col-span-2"
                    >
                        <motion.h4 
                            variants={titleGlide}
                            whileHover={{ scale: 1.02 }}
                            className="text-white font-semibold text-sm mb-6 uppercase tracking-wider"
                        >
                            Office
                        </motion.h4>
                        <div className="space-y-4">
                            {/* Address */}
                            <motion.div 
                                variants={linkItem}
                                whileHover={{ x: 5 }}
                                className="flex items-start gap-3"
                            >
                                <motion.div 
                                    variants={iconGlow}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    whileHover="hover"
                                    className="shrink-0 mt-0.5"
                                >
                                    <FaMapMarkerAlt className="w-4 h-4 text-[#94A3B8]" />
                                </motion.div>
                                <p className="text-[#94A3B8] text-sm leading-relaxed">
                                    G Block BKC, Bandra Kurla Complex, Bandra East, Mumbai,
                                    Maharashtra 400051
                                </p>
                            </motion.div>

                            {/* Phone */}
                            <motion.div 
                                variants={linkItem}
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-3"
                            >
                                <motion.div 
                                    variants={iconGlow}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    whileHover="hover"
                                    className="shrink-0"
                                >
                                    <FaPhoneAlt className="w-4 h-4 text-[#94A3B8]" />
                                </motion.div>
                                <Link 
                                    href="tel:+912233921500" 
                                    className="text-[#94A3B8] hover:text-white text-sm transition-colors duration-300"
                                >
                                    +91 22 3392 1500
                                </Link>
                            </motion.div>

                            {/* Email */}
                            <motion.div 
                                variants={linkItem}
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-3"
                            >
                                <motion.div 
                                    variants={iconGlow}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    whileHover="hover"
                                    className="shrink-0"
                                >
                                    <FaEnvelope className="w-4 h-4 text-[#94A3B8]" />
                                </motion.div>
                                <Link 
                                    href="mailto:support@bdbindia.org" 
                                    className="text-[#94A3B8] hover:text-white text-sm transition-colors duration-300"
                                >
                                    support@bdbindia.org
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* How can we help section */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={sectionSlideUp}
                    className="mt-12 pt-8 border-t border-[#2D4A6B]"
                >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <motion.h3 
                                variants={titleGlide}
                                whileHover={{ scale: 1.01 }}
                                className="text-white text-xl font-semibold mb-2"
                            >
                                How can we help?
                            </motion.h3>
                            <motion.p 
                                variants={titleGlide}
                                whileHover={{ x: 5 }}
                                className="text-[#94A3B8] text-sm"
                            >
                                Get in touch with our team for any queries or assistance
                            </motion.p>
                        </div>
                        <motion.div
                            variants={contactButton}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <Link 
                                href="/v3/contact-us"
                                className="bg-white text-[#0C1A32] font-semibold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap inline-block"
                            >
                                Contact Us
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Logo section */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={sectionSlideUp}
                    className="mt-10 pt-8 border-t border-[#2D4A6B]"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div>
                            <motion.div
                                variants={contactButton}
                                whileHover="hover"
                                className="inline-block"
                            >
                                <Image
                                    src="/bdb-logo-white.png"
                                    alt="Bharat Diamond Bourse"
                                    width={140}
                                    height={45}
                                    className="h-auto w-40"
                                    priority
                                />
                            </motion.div>
                            <motion.p 
                                variants={titleGlide}
                                whileHover={{ x: 5 }}
                                className="text-[#94A3B8] text-sm mt-2"
                            >
                                World's largest diamond trading hub
                            </motion.p>
                        </div>
                        
                        {/* Social Media */}
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={gridStagger}
                            className="flex space-x-4"
                        >
                            {socialLinks.map((social, index) => (
                                <motion.div
                                    key={social.name}
                                    variants={socialButton}
                                    custom={index}
                                    whileHover="hover"
                                >
                                    <Link
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        className="w-10 h-10 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
                                    >
                                        <div className="text-white">
                                            {social.icon}
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Footer Bar */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={bottomBarReveal}
                className="bg-[#091526] py-6"
            >
                <div className="mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
                    {/* Terms and Copyright */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={gridStagger}
                            className="flex flex-wrap justify-center gap-6"
                        >
                            {['Privacy policy', 'Cookie policy', 'Terms of use', 'Accessibility'].map((item, index) => (
                                <motion.div
                                    key={item}
                                    variants={linkItem}
                                    custom={index}
                                    whileHover="hover"
                                >
                                    <Link 
                                        href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                                        className="text-[#94A3B8] hover:text-white text-sm transition-colors duration-300"
                                    >
                                        {item}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                        
                        <motion.p 
                            variants={copyrightFade}
                            whileHover={{ scale: 1.01 }}
                            className="text-[#94A3B8] text-sm"
                        >
                            © {new Date().getFullYear()} Bharat Diamond Bourse. All Rights Reserved.
                        </motion.p>
                    </div>
                </div>
            </motion.div>
        </motion.footer>
    );
}