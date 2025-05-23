export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Samantha Perera',
    position: 'CEO',
    company: 'LankaRetail',
    content: 'CodeTrinity transformed our business with their exceptional e-commerce platform. Their team understood our unique needs and delivered a solution that increased our online sales by 120% in just six months. Their continued support and innovative approach keep us ahead of the competition.',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'Arun Rajaratnam',
    position: 'Director of Innovation',
    company: 'HealthTech Lanka',
    content: 'Working with CodeTrinity on our healthcare app was a seamless experience. Their technical expertise, especially in ensuring data security and compliance, was impressive. The app has received outstanding feedback from both patients and doctors for its intuitive design and reliability.',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Nimal Fernando',
    position: 'Operations Manager',
    company: 'Colombo Logistics',
    content: 'The automation solution developed by CodeTrinity revolutionized our logistics operations. We\'ve seen a 35% reduction in processing time and significant cost savings. Their team\'s deep understanding of our industry challenges and commitment to finding the right solutions make them a valued partner.',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];