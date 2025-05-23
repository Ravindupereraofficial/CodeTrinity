import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Mail, Phone, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import { services } from '../data/services';
import { portfolioItems } from '../data/portfolio';
import { testimonials } from '../data/testimonials';

const backgroundImages = [
  'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
];

const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    document.title = 'CodeTrinity - Innovating Tomorrow, Today';

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 to-primary-800/70 z-10"></div>
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
          />
        </AnimatePresence>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Innovating Tomorrow, Today – CodeTrinity
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Your digital innovation partner.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Button to="/contact" size="lg">
                Start a Project <ChevronRight size={20} className="ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
        
        {/* Contact Info Card */}
        <motion.div 
          className="absolute right-0 bottom-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-tl-3xl z-20 max-w-sm shadow-2xl hidden md:block"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Let's Connect</h3>
          <div className="space-y-4">
            <div className="flex items-start group">
              <Mail className="text-primary-600 dark:text-primary-400 mr-4 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={24} />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Email Us</p>
                <a 
                  href="mailto:contact@gmail.com" 
                  className="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  contact@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start group">
              <Phone className="text-primary-600 dark:text-primary-400 mr-4 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={24} />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Call Us</p>
                <div className="space-y-1">
                  <a 
                    href="tel:+94711892658" 
                    className="block text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    +94 71 189 2658
                  </a>
                  <a 
                    href="tel:+94714148950" 
                    className="block text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    +94 71 414 8950
                  </a>
                  <a 
                    href="tel:+94711816134" 
                    className="block text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    +94 71 181 6134
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Button to="/contact" variant="primary" className="w-full mt-6">
            Get in Touch
          </Button>
        </motion.div>
      </section>

      {/* About Section Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                We Build Digital Solutions That Transform Businesses
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                CodeTrinity is a leading software development company based in Sri Lanka, 
                specializing in creating innovative digital solutions for businesses across 
                various industries. Our team of expert developers, designers, and consultants 
                are dedicated to delivering high-quality software that drives growth and 
                efficiency.
              </p>
              <div className="space-y-3 mb-8">
                {['Customer-centric approach', 'Cutting-edge technologies', 'Agile development process', 'Commitment to excellence'].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="text-primary-600 dark:text-primary-400 mr-3 flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-700 dark:text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
              <Button to="/about" variant="outline">
                Learn More About Us
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team collaboration" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-lg font-semibold">5+ Years</p>
                <p className="text-sm">of Industry Experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Services"
            subtitle="We offer a comprehensive range of software development and IT services to help your business thrive in the digital age."
            center
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service) => (
              <Card key={service.id} hoverable className="h-full">
                <div className="p-6 h-full flex flex-col">
                  <div className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 p-3 rounded-lg inline-block mb-4">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="text-primary-600 dark:text-primary-400 font-medium inline-flex items-center mt-2 hover:underline"
                  >
                    Learn More
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button to="/services" variant="outline">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Latest Projects"
            subtitle="Take a look at some of our recent work that demonstrates our expertise and capabilities."
            center
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioItems.slice(0, 2).map((item) => (
              <Card key={item.id} hoverable className="overflow-hidden h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-2 block">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {item.description}
                  </p>
                  <Link
                    to="/portfolio"
                    className="text-primary-600 dark:text-primary-400 font-medium inline-flex items-center hover:underline"
                  >
                    View Project
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button to="/portfolio" variant="outline">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Don't just take our word for it. Here's what our clients have to say about working with us."
            center
          />
          
          <div className="max-w-4xl mx-auto">
            <Card animate={false} className="p-0 overflow-visible">
              <div className="p-8 md:p-10 relative">
                <div className="text-primary-600 dark:text-primary-400 text-6xl font-serif absolute top-4 left-6">
                  "
                </div>
                <motion.blockquote
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7 }}
                >
                  <p className="text-gray-700 dark:text-gray-300 text-lg italic mb-6 relative z-10 pl-6">
                    {testimonials[0].content}
                  </p>
                  <footer className="flex items-center">
                    <img 
                      src={testimonials[0].image} 
                      alt={testimonials[0].name} 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {testimonials[0].name}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonials[0].position}, {testimonials[0].company}
                      </p>
                    </div>
                  </footer>
                </motion.blockquote>
              </div>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button to="/testimonials" variant="outline">
              Read More Testimonials
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Contact us today to discuss how we can help you achieve your digital goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button 
              to="/contact" 
              variant="secondary" 
              size="lg" 
              className="bg-white text-primary-900 hover:bg-gray-100"
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;