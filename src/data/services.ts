import { Smartphone, Layout, Cloud, Cpu, BrainCircuit } from 'lucide-react';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: any;
  features: string[];
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Web & Mobile App Development',
    description: 'We build responsive web applications and mobile apps that deliver exceptional user experiences across all devices.',
    icon: Smartphone,
    features: [
      'Custom web application development',
      'Progressive Web Apps (PWAs)',
      'Native and cross-platform mobile apps',
      'E-commerce solutions',
      'Responsive design implementation'
    ]
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: 'Our designers create intuitive, engaging interfaces that delight users and enhance your brand experience.',
    icon: Layout,
    features: [
      'User research and testing',
      'Wireframing and prototyping',
      'Visual design and branding',
      'Interaction design',
      'Usability optimization'
    ]
  },
  {
    id: 3,
    title: 'Cloud Solutions',
    description: 'We implement scalable, secure cloud infrastructure to power your applications and business operations.',
    icon: Cloud,
    features: [
      'Cloud migration strategies',
      'AWS, Azure, and Google Cloud solutions',
      'Serverless architecture implementation',
      'Cloud-native application development',
      'DevOps and CI/CD pipeline setup'
    ]
  },
  {
    id: 4,
    title: 'AI & Automation',
    description: 'Leverage cutting-edge AI and automation to streamline operations and gain competitive advantages.',
    icon: Cpu,
    features: [
      'Machine learning model development',
      'Natural language processing (NLP)',
      'Predictive analytics',
      'Business process automation',
      'AI-powered chatbots and assistants'
    ]
  },
  {
    id: 5,
    title: 'IT Consulting',
    description: 'Our expert consultants provide strategic guidance to help you navigate complex technological challenges.',
    icon: BrainCircuit,
    features: [
      'Digital transformation strategy',
      'Technology stack assessment',
      'IT roadmap development',
      'Security audits and recommendations',
      'Performance optimization'
    ]
  }
];