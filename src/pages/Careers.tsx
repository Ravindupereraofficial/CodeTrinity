import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Compass, Book } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Careers: React.FC = () => {
  useEffect(() => {
    document.title = 'Careers - CodeTrinity';
  }, []);

  const benefits = [
    {
      title: 'Flexible Work Hours',
      description: 'Set your own schedule and work when you\'re most productive.',
      icon: Clock
    },
    {
      title: 'Remote Work Options',
      description: 'Work from home or our office in Colombo - it\'s your choice.',
      icon: Compass
    },
    {
      title: 'Continuous Learning',
      description: 'We invest in your growth with training, workshops, and certifications.',
      icon: Book
    },
    {
      title: 'Health Benefits',
      description: 'Comprehensive medical coverage for you and your family.',
      icon: CheckCircle
    }
  ];

  const openPositions = [
    {
      title: 'Senior Full Stack Developer',
      type: 'Full-time',
      location: 'Colombo / Remote',
      description: 'We\'re looking for an experienced Full Stack Developer proficient in React, Node.js, and cloud technologies to lead development on client projects.'
    },
    {
      title: 'UI/UX Designer',
      type: 'Full-time',
      location: 'Colombo / Remote',
      description: 'Join our design team to create intuitive and engaging user experiences for web and mobile applications. Experience with Figma and user research required.'
    },
    {
      title: 'DevOps Engineer',
      type: 'Full-time',
      location: 'Remote',
      description: 'Help us build and maintain our cloud infrastructure and CI/CD pipelines. Experience with AWS, Docker, and Kubernetes is essential.'
    }
  ];

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
              Join Our Team
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Become part of a dynamic team that's shaping the future of technology in Sri Lanka and beyond.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Why Join CodeTrinity?"
            subtitle="We offer more than just a job - we offer a career where you can grow, innovate, and make an impact."
            center
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hoverable className="p-6 h-full text-center">
                  <div className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 p-3 rounded-full inline-flex items-center justify-center mb-4">
                    <benefit.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Culture */}
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
                Our Culture
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                At CodeTrinity, we believe in fostering a culture of innovation, collaboration, and continuous learning. 
                We value diversity of thought and background, and we're committed to creating an inclusive environment 
                where everyone can thrive.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Our team members are encouraged to share ideas, take ownership of their work, and push the boundaries 
                of what's possible. We celebrate successes together and learn from challenges as a team.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                If you're passionate about technology and want to work in a supportive, dynamic environment, 
                we'd love to hear from you.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7 }}
            >
              <img 
                src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team culture" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Current Openings"
            subtitle="We're always looking for talented individuals to join our team."
            center
          />
          
          <div className="max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-6"
              >
                <Card className="p-6 md:p-8">
                  <div className="md:flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 mb-4">
                        <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 px-3 py-1 rounded-full text-sm">
                          {position.type}
                        </span>
                        <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                          {position.location}
                        </span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-6 md:mb-0">
                        {position.description}
                      </p>
                    </div>
                    <div className="md:ml-6 md:flex-shrink-0">
                      <Button variant="outline" href="mailto:contact@gmail.com">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="max-w-4xl mx-auto mt-12 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Don't see a position that fits your skills?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              We're always interested in hearing from talented individuals. Send your CV to us and we'll keep you in mind for future opportunities.
            </p>
            <Button href="mailto:contact@gmail.com">
              Send Your CV
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;