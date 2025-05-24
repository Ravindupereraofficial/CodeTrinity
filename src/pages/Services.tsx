import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { services } from '../data/services';

const Services: React.FC = () => {
  useEffect(() => {
    document.title = 'Services - CodeTrinity';
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Services
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We offer a comprehensive range of software development and IT services 
              tailored to meet your business needs.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hoverable className="h-full p-0 overflow-hidden">
                  <div className="grid md:grid-cols-2 h-full">
                    <div className="p-8">
                      <div className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 p-3 rounded-lg inline-block mb-4">
                        <service.icon size={24} />
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        {service.description}
                      </p>
                      <Button to="/contact" variant="outline" size="sm">
                        Inquire Now <ChevronRight size={16} className="ml-1" />
                      </Button>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-8 flex flex-col justify-center">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <ChevronRight size={18} className="text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Development Process"
            subtitle="We follow a structured approach to ensure efficient delivery and high-quality results."
            center
          />
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { 
                  step: '01', 
                  title: 'Discovery', 
                  description: 'We start by understanding your business, goals, and requirements.'
                },
                { 
                  step: '02', 
                  title: 'Planning', 
                  description: 'We create a detailed roadmap and technical specifications for your project.'
                },
                { 
                  step: '03', 
                  title: 'Development', 
                  description: 'Our team builds your solution using agile methodologies for transparency.'
                },
                { 
                  step: '04', 
                  title: 'Delivery', 
                  description: 'We deploy, test, and provide ongoing support for your solution.'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                    <span className="text-xl font-bold text-primary-600 dark:text-primary-400">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
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
            Ready to Start Your Project?
          </motion.h2>
          <motion.p 
            className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Contact us today for a free consultation to discuss how we can help you achieve your goals.
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
              className="bg-blue text-primary-900 hover:bg-gray-100"
            >
              Contact Us Now
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;