import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, CheckCircle, TrendingUp, Globe, Lightbulb, Shield } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';

const About: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us - CodeTrinity';
  }, []);

  const coreValues = [
    {
      title: 'Innovation',
      description: 'We constantly push boundaries to find creative solutions that drive real value.',
      icon: Lightbulb
    },
    {
      title: 'Quality',
      description: 'We are committed to excellence in everything we do, delivering products that exceed expectations.',
      icon: CheckCircle
    },
    {
      title: 'Transparency',
      description: 'We believe in open communication and honesty in all our client and team interactions.',
      icon: Shield
    },
    {
      title: 'Growth',
      description: 'We are dedicated to continuous learning and helping our clients and team members grow.',
      icon: TrendingUp
    },
    {
      title: 'Global Perspective',
      description: 'We bring international expertise while understanding local market needs.',
      icon: Globe
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients to ensure their vision becomes reality.',
      icon: Users
    }
  ];

  const teamMembers = [
    {
      name: 'Arjun Mendis',
      position: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Priya Jayawardena',
      position: 'CTO',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Kumara Rajapakse',
      position: 'Creative Director',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                About CodeTrinity
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-700 dark:text-gray-300 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                We're a team of passionate developers, designers, and strategists dedicated to creating 
                innovative digital solutions that transform businesses.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team collaboration" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Story" center />
          
          <div className="max-w-3xl mx-auto text-center">
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
            >
              Founded in 2020, CodeTrinity began as a small team of developers with a big vision: to create 
              software that makes a difference. What started as a passion project quickly grew into a full-service 
              software development company serving clients across Asia and beyond.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Today, we're proud to have a diverse team of technology experts who bring their unique perspectives 
              and skills to every project. Our growth has been fueled by our commitment to quality, innovation, 
              and client satisfaction.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card hoverable className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To empower businesses through innovative technology solutions that drive growth, efficiency, 
                and competitive advantage. We aim to be the bridge that connects complex technical challenges 
                with simple, elegant solutions.
              </p>
            </Card>
            
            <Card hoverable className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To be recognized as the leading software development company in Sri Lanka and a trusted 
                technology partner for businesses worldwide. We envision a future where our solutions help 
                shape a more connected, efficient, and innovative world.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Core Values" 
            subtitle="These principles guide everything we do and help us deliver exceptional results."
            center
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hoverable className="p-6 h-full">
                  <div className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 p-3 rounded-lg inline-block mb-4">
                    <value.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Leadership Team" 
            subtitle="Meet the people who drive our vision and lead our talented team."
            center
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hoverable className="overflow-hidden text-center">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400">
                      {member.position}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;