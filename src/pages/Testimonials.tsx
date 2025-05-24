import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import { testimonials } from '../data/testimonials';

const Testimonials: React.FC = () => {
  useEffect(() => {
    document.title = 'Testimonials - CodeTrinity';
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
              Client Testimonials
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 relative h-full">
                  <div className="text-primary-600 dark:text-primary-400 text-6xl font-serif absolute top-4 left-6">
                    "
                  </div>
                  <div className="flex flex-col h-full">
                    <blockquote className="relative z-10 pl-4 mb-6 flex-grow">
                      <p className="text-gray-700 dark:text-gray-300 text-lg italic">
                        {testimonial.content}
                      </p>
                    </blockquote>
                    <footer className="flex items-center mt-auto">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </footer>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionHeading
              title="Our Track Record"
              subtitle="Numbers that speak for themselves"
              center
            />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '15+', label: 'Completed Projects' },
                { value: '15+', label: 'Happy Clients' },
                { value: '1+', label: 'Years Experience' },
                { value: '99%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {stat.label}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Join our growing list of satisfied clients and see how we can help transform your business with custom software solutions.
            </p>
            <a 
              href="/contact" 
              className="bg-white text-primary-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;