import Image from "next/image";
import { FaYoutube, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import logo from "../../../public/example3/bdb-logo.png"; // update path to your logo

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      {/* Top Section - Stay Updated */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 border-b border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="text-2xl font-bold tracking-wide uppercase">
            Stay Updated with BDB
          </h2>
          <div className="flex items-center w-full md:w-auto border border-gray-200 rounded-full overflow-hidden shadow-sm">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-4 py-3 outline-none text-gray-700 placeholder-gray-400"
            />
            <button className="bg-gradient-to-r from-blue-900 to-blue-500 text-white font-semibold uppercase text-sm tracking-wide px-6 py-3 rounded-full shadow-md hover:opacity-90 transition">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Middle Section - Contact, Facilities, Navigation */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Office */}
        <div>
          <h3 className="font-bold uppercase text-blue-900 tracking-wide mb-2">
            @ Office
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed border-t border-gray-200 pt-2">
            Bharat Diamond Bourse Administrative Office (Basement) Near Gate
            No. 4 'G' Block Bandra-Kurla Complex Bandra (East), Mumbai - 400 051
            Maharashtra, India.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold uppercase text-blue-900 tracking-wide mb-2">
            @ Contact
          </h3>
          <div className="border-t border-gray-200 pt-2">
            <p className="text-lg font-bold text-blue-900">+91 22 3392 1500</p>
            <p className="text-sm text-gray-700">support@bdbindia.org</p>
          </div>
        </div>

        {/* Facilities */}
        <div>
          <h3 className="font-bold uppercase text-blue-900 tracking-wide mb-2">
            @ Facilities
          </h3>
          <ul className="border-t border-gray-200 pt-2 space-y-1 text-sm text-gray-700">
            <li>Banks</li>
            <li>Internet Telecom</li>
            <li>Restaurants</li>
            <li>Online Trading</li>
            <li>Bus Services</li>
            <li>Testing Laboratories</li>
            <li>Diamond Equipments</li>
            <li>Trading Hall</li>
            <li>Travel Agents</li>
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-bold uppercase text-blue-900 tracking-wide mb-2">
            @ Navigation
          </h3>
          <ul className="border-t border-gray-200 pt-2 space-y-1 text-sm text-gray-700">
            <li>Home</li>
            <li>About Us</li>
            <li>Gallery</li>
            <li>Facilities</li>
            <li>BDB Circulars</li>
            <li>Member’s Directory</li>
            <li>BDB Forms</li>
            <li>News & Events</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>

      {/* Logo */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-8">
        <Image src={logo} alt="Bharat Diamond Bourse Logo" width={200} />
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-900 text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between py-4">
          <p>© 2025 Bharat Diamond Bourse. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="bg-white text-blue-900 p-2 rounded-full flex items-center justify-center"
            >
              <FaYoutube size={18} />
            </a>
            <a
              href="#"
              className="bg-white text-blue-900 p-2 rounded-full flex items-center justify-center"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="#"
              className="bg-white text-blue-900 p-2 rounded-full flex items-center justify-center"
            >
              <FaFacebookF size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
