import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import ContactForm from '../components/ui/ContactForm';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us - CodeTrinity';
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
              Contact Us
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Have a question or want to discuss a project? We'd love to hear from you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Details and Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Get In Touch
              </h2>
              
              <div className="space-y-8 mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start"
                >
                  <div className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 p-3 rounded-lg mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Email
                    </h3>
                    <a 
                      href="mailto:contact.codetrinity@gmail.com
" 
                      className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      contact.codetrinity@gmail.com

                    </a>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex items-start"
                >
                  <div className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 p-3 rounded-lg mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Phone
                    </h3>
                    <div className="space-y-1">
                      <a 
                        href="tel:+94711892658" 
                        className="block text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        +94 71 189 2658
                      </a>
                      <a 
                        href="tel:+94714148950" 
                        className="block text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        +94 71 414 8950
                      </a>
                      <a 
                        href="tel:+94711816134" 
                        className="block text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        +94 71 181 6134
                      </a>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-start"
                >
                  <div className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 p-3 rounded-lg mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Location
                    </h3>
                    <address className="text-gray-700 dark:text-gray-300 not-italic">
                      You Can Meet Us Around,<br />
                      Colombo And Monaragala,<br />
                      Sri Lanka
                    </address>
                  </div>
                </motion.div>
              </div>
              
              {/* Google Map */}
              <div className="rounded-lg overflow-hidden shadow-md h-80 bg-gray-200 dark:bg-gray-700">
                <iframe
                  title="CodeTrinity Location"
                  className="w-full h-full border-0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31689.038577516845!2d79.83938904513133!3d6.917249337677811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259254a3d0d67%3A0x8f0cc8567063f5bb!2sColombo%2007%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1632131321217!5m2!1sen!2sus"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-6 md:p-8 h-full">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Send Us a Message
                </h2>
                <ContactForm />
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our services and processes."
            center
          />
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: 'What is your typical project timeline?',
                answer: 'Project timelines vary depending on scope and complexity. A simple website might take 4-6 weeks, while a complex application could take 3-6 months. We\'ll provide a detailed timeline during our initial consultation.'
              },
              {
                question: 'Do you provide ongoing support after project completion?',
                answer: 'Yes, we offer flexible maintenance and support packages to keep your application running smoothly. Our support includes bug fixes, security updates, and minor enhancements.'
              },
              {
                question: 'How do you handle project communication?',
                answer: 'We believe in transparent, regular communication. Depending on your preference, we can set up weekly or bi-weekly progress meetings, and you\'ll have access to project management tools to track progress in real-time.'
              },
              {
                question: 'What are your payment terms?',
                answer: 'For most projects, we use a milestone-based payment structure. Typically, this includes an initial deposit, payments at key project milestones, and a final payment upon project completion and acceptance.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-6"
              >
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;