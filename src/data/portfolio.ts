export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  highlights: string[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'CeylonTravel Tourism Platform',
    category: 'Web Development',
    description: 'A comprehensive tourism platform connecting travelers with local experiences across Sri Lanka. Features include interactive maps, booking system, and personalized itineraries.',
    image: 'https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
    highlights: [
      'Increased bookings by 45% within first quarter',
      'Seamless integration with local payment gateways',
      'Mobile-responsive design with offline capabilities',
      'Advanced filtering and recommendation system'
    ]
  },
  {
    id: 2,
    title: 'MediConnect Healthcare App',
    category: 'Mobile App Development',
    description: 'A telemedicine application connecting patients with healthcare providers for virtual consultations, prescription management, and health monitoring.',
    image: 'https://images.pexels.com/photos/8853537/pexels-photo-8853537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React Native', 'Firebase', 'Node.js', 'WebRTC'],
    highlights: [
      'HIPAA-compliant secure video consultations',
      'Integrated prescription and pharmacy services',
      'Real-time health metrics dashboard',
      'Multilingual support for Sinhala, Tamil, and English'
    ]
  },
  {
    id: 3,
    title: 'AgriSmart Farm Management System',
    category: 'AI & Automation',
    description: 'An intelligent farm management system using IoT sensors and AI to optimize crop yields, water usage, and resource allocation for small to medium farms.',
    image: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Python', 'TensorFlow', 'IoT', 'React', 'AWS'],
    highlights: [
      'Predictive analytics for crop yield optimization',
      'Automated irrigation based on soil moisture and weather data',
      'Pest and disease detection through image recognition',
      'Mobile app for real-time monitoring and alerts'
    ]
  },
  {
    id: 4,
    title: 'UrbanSync City Platform',
    category: 'Smart City Solutions',
    description: 'A comprehensive smart city platform helping local governments manage urban services more efficiently through data analytics and citizen engagement.',
    image: 'https://images.pexels.com/photos/599982/pexels-photo-599982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Angular', 'Express.js', 'PostgreSQL', 'Azure'],
    highlights: [
      'Integrated public transportation tracking',
      'Smart waste management and collection optimization',
      'Citizen reporting system with real-time updates',
      'Energy consumption monitoring and optimization'
    ]
  }
];