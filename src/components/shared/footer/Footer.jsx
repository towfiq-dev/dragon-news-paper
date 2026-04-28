import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#F3F3F3] pt-12 pb-8 mt-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Brand and Description */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-old-london">The Dragon News</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Your trusted source for the latest news. We stay by your side with up-to-the-minute updates and in-depth analysis from home and abroad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><Link href="/" className="hover:text-red-500 transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-red-500 transition">About Us</Link></li>
              <li><Link href="/category/international" className="hover:text-red-500 transition">International</Link></li>
              <li><Link href="/contact" className="hover:text-red-500 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Categories</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><Link href="#" className="hover:text-red-500 transition">Breaking News</Link></li>
              <li><Link href="#" className="hover:text-red-500 transition">Sports</Link></li>
              <li><Link href="#" className="hover:text-red-500 transition">Entertainment</Link></li>
              <li><Link href="#" className="hover:text-red-500 transition">Technology</Link></li>
            </ul>
          </div>

          {/* Social and Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Follow Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 text-xl"><FaFacebook /></a>
              <a href="#" className="text-gray-600 hover:text-blue-400 text-xl"><FaTwitter /></a>
              <a href="#" className="text-gray-600 hover:text-pink-600 text-xl"><FaInstagram /></a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-xl"><FaGithub /></a>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-sm text-gray-600">Subscribe for updates:</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="px-3 py-2 text-sm border rounded-l-md outline-none w-full"
                />
                <button className="bg-[#403F3F] cursor-pointer text-white px-4 py-2 text-sm rounded-r-md hover:bg-black transition">
                  Join
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Section */}
        <div className="border-t border-gray-300 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} <span className="font-semibold">The Dragon News</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;