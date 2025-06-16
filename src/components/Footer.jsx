import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            SportZilla_Store
          </h2>
          <p className="mt-2 text-sm">
            Premium sports gear for athletes, fitness lovers, and rising stars.
            Unleash your potential with SportZilla.
          </p>
          <div className="flex space-x-4 mt-4">
            <a  aria-label="Facebook">
              <FaFacebookF className="hover:text-blue-500 text-lg" />
            </a>
            <a  aria-label="Instagram">
              <FaInstagram className="hover:text-pink-500 text-lg" />
            </a>
            <a  aria-label="Twitter">
              <FaTwitter className="hover:text-sky-400 text-lg" />
            </a>
            <a  aria-label="YouTube">
              <FaYoutube className="hover:text-red-500 text-lg" />
            </a>
          </div>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Shop
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a  className="hover:text-blue-500">
                All Products
              </a>
            </li>
            <li>
              <a  className="hover:text-blue-500">
                Cricket
              </a>
            </li>
            <li>
              <a  className="hover:text-blue-500">
                Fitness Gear
              </a>
            </li>
            <li>
              <a  className="hover:text-blue-500">
                Accessories
              </a>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Company
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a  className="hover:text-blue-500">
                About Us
              </a>
            </li>
            <li>
              <a  className="hover:text-blue-500">
                Careers
              </a>
            </li>
            <li>
              <a  className="hover:text-blue-500">
                Blog
              </a>
            </li>
            <li>
              <a  className="hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Contact
          </h3>
          <ul className="space-y-2 text-sm">
            <li>📍 123 Sports Lane, Dhaka, Bangladesh</li>
            <li>📞 +880 123 456 7890</li>
            <li>📧 contact@sportzilla.store</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-300 dark:border-gray-700 py-4 text-center text-sm text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} SportZilla_Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
