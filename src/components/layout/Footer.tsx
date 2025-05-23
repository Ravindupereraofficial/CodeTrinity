import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Mail, Phone, Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Code size={28} className="text-primary-600 dark:text-primary-400" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                CodeTrinity
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Your digital innovation partner for software solutions in Sri Lanka and beyond.
            </p>
            <div className="flex space-x-3">
              <a 
                href="#" 
                aria-label="Facebook"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                aria-label="Twitter"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                aria-label="LinkedIn"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                aria-label="Instagram"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                aria-label="GitHub"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                  Web & Mobile App Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                  AI & Automation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                  IT Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="mr-2 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" size={18} />
                <a href="mailto:contact@gmail.com" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                  contact@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="mr-2 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" size={18} />
                <div className="space-y-1">
                  <a href="tel:+94711892658" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                    +94 71 189 2658
                  </a>
                  <a href="tel:+94714148950" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                    +94 71 414 8950
                  </a>
                  <a href="tel:+94711816134" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                    +94 71 181 6134
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {currentYear} CodeTrinity. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;