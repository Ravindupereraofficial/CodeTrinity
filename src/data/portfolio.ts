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
  title: 'BOC Bank Digital Assistance & Feedback System',
  category: 'Web Development',
  description: `Designed and deployed three responsive web apps for BOC Bank Monaragala Branch, including ATM/CRM guidance, a QR-based feedback system, and a real-time admin dashboard for managers.`,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt_AIQu7xp08jWtZ9XMAcAr7F1hnwfJCgijw&s',
  technologies: ['React.js', 'Supabase', 'Chart.js', 'Netlify'],
  highlights: [
    'Deployed 3 separate applications now in use at BOC Bank Monaragala Branch',
    'Implemented QR-based tutorials for ATM/CRM guidance',
    'Built a section-based QR feedback system integrated with Supabase',
    'Created a real-time admin dashboard with analytics via Chart.js',
    'Fully responsive design deployed on Netlify'
  ]
}
,
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