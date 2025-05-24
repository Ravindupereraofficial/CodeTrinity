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
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgGWEj5nwKgrETOHyunVzPtbkjMtBi-Vz-JA&s',
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
    title: 'Grocery Delivery E-Commerce Platform',
    category: 'E-Commerce',
    description: 'A modern grocery delivery platform with cart functionality, seller admin panel, and secure online payments.',
    image: 'https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Stripe'],
    highlights: [
      'User-friendly cart and order management',
      'Seller admin panel with product control',
      'Secure payment integration with Stripe',
      'RESTful APIs for seamless data operations'
    ]
  },
 {
    id: 3,
    title: ' Burger POS System',
    category: 'Enterprise Application',
    description: 'A scalable POS system for Mos Burger developed with secure backend and intuitive frontend for enhanced business operations and analytics.',
    image: 'https://images.pexels.com/photos/1346132/pexels-photo-1346132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Spring Boot', 'JPA', 'Jasypt', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    highlights: [
      'Spring Boot backend with JPA for high-traffic handling',
      'Jasypt encryption for secure customer data',
      'Responsive UI with improved load time and engagement',
      'Real-time data visualization using Chart.js'
    ]
  },
  {
    id: 4,
    title: 'Askify - Online English Learning Platform',
    category: 'AI Transformation',
    description: 'A gamified and AI-driven platform for learning English with real-time grammar correction and conversation practice.',
    image: 'https://images.pexels.com/photos/4143796/pexels-photo-4143796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Three.js', 'Gemini API'],
    highlights: [
      'Gamified English learning experience',
      'Real-time grammar correction and feedback',
      'Conversational AI integration',
      'Cross-device responsive and accessible UI'
    ]
  }
];