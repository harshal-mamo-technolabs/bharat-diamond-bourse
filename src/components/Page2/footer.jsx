// components/Footer.jsx
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import localFont from 'next/font/local';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400', '700'] });

// Load Carentro from OTF
const carentro = localFont({
  src: '../../../public/fonts/Carentro.otf',
  weight: '400',
  style: 'normal',
});

export default function Footer() {
  return (
    <footer className={`bg-black text-white text-sm ${spaceGrotesk.className}`}>
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Left Column - Logo + Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <img src="/example2/logo.png" alt="Bharat Diamond Bourse" className="h-16 w-auto" />
          </div>
          <p className="text-gray-300 text-[14px] leading-relaxed">
            Bharat Diamond Bourse is committed to promoting transparent, secure, and world-class diamond trade from the heart of Mumbai.
          </p>
          <p className="text-gray-400 text-[12px]">
            Bharat Diamond Bourse Administrative Office (Basement)<br />
            Near Gate No. 4 ‘G’ Block Bandra-Kurla Complex Bandra (East), Mumbai - 400 051 Maharashtra, India.
          </p>
          <p className="text-[#AD8B3A] font-semibold text-2xl">+91 22 3392 1500</p>
          <p className="text-gray-300">support@bdbindia.org</p>
        </div>

        {/* Sitemap */}
        <div>
          <h3 className="font-semibold mb-4">Sitemap</h3>
          <ul className="space-y-4">
            {["Home", "About Us", "Facilities", "BDB Circulars", "Member’s Directory", "BDB Forms", "News & Events", "Gallery", "Contact Us"].map((item) => (
              <li key={item} className="flex items-center space-x-2 hover:text-yellow-500 cursor-pointer">
                <span className="text-[#AD8B3A]">➤</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Facilities */}
        <div>
          <h3 className="font-semibold mb-4">Facilities</h3>
          <ul className="space-y-4">
            {["Banks", "Internet Telecom", "Restaurants", "Online Trading", "Bus Services", "Testing Laboratories", "Diamond Equipments", "Trading Hall", "Travel Agents"].map((item) => (
              <li key={item} className="flex items-center space-x-2 hover:text-yellow-500 cursor-pointer">
                <span className="text-[#AD8B3A]">➤</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow + Subscribe */}
        <div className="space-y-4">
          <h3 className="font-semibold">Follow</h3>
          <div className="flex items-center space-x-4 text-xl">
            <FaXTwitter className="hover:text-yellow-500 cursor-pointer" />
            <FaInstagram className="hover:text-yellow-500 cursor-pointer" />
            <FaLinkedinIn className="hover:text-yellow-500 cursor-pointer" />
            <FaWhatsapp className="hover:text-yellow-500 cursor-pointer" />
          </div>

          <div className="bg-[#AD8B3A] p-4 space-y-3">
            <p className="font-semibold">Stay Connected with BDB</p>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-3 py-2 bg-white text-black text-sm"
            />
            <button className="bg-transparent border border-black px-4 py-2 text-black hover:bg-black hover:text-white transition">
              Contact Us →
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-4 px-6 flex flex-col md:flex-row justify-between text-gray-400 text-xs">
        <p>© 2025 Bharat Diamond Bourse. All Rights Reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <span className="hover:text-yellow-500 cursor-pointer">Terms of Services</span>
          <span className="hover:text-yellow-500 cursor-pointer">Privacy Policy</span>
          <span className="hover:text-yellow-500 cursor-pointer">Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
}
