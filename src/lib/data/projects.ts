export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  year: string;
  stack: string[];
  image: string; 
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: '001',
    title: 'REA AI',
    slug: 'rea-ai',
    description: 'A spiritual companion leveraging LLMs to help users engage with the Word of God daily. Faith meets technology.',
    year: '2025',
    stack: ['Next.js', 'TypeScript'],
    image: '/images/projects/Rea.png', 
    link: 'https://reabible.app/'
  },
  {
    id: '002',
    title: 'Zero Meal Waste Planner',
    slug: 'zero-meal-waste',
    description: 'AI-powered meal orchestration. Inventories your fridge and generates recipes with real-time NGN/USD currency conversion.',
    year: '2026',
    stack: ['React', 'AI API', 'Node.js'],
    image: '/images/projects/Fridgewise.png',
    link: 'https://fridgewise-ruddy.vercel.app/sign-in'
  },
  {
    id: '003',
    title: 'Market Intelligence',
    slug: 'market-intel',
    description: 'High-frequency data dashboard utilizing the Yahoo Finance API to track market volatility and stock trends.',
    year: '2026',
    stack: ['React', 'RapidAPI', 'Chart.js'],
    image: '/images/projects/MarketIntelligence.png',
    link: 'https://market-intelligent-dashboard.vercel.app/'
  },
  {
    id: '004',
    title: 'AI Finance Advisor',
    slug: 'finance-advisor',
    description: 'Personalized fiscal oversight. Analyzing spending patterns through machine learning to provide actionable wealth-building advice.',
    year: '2026',
    stack: ['React', 'Typescript'],
    image: '/images/projects/finance.jpg',
    link: 'https://ai-finance-advisor-dun.vercel.app/'
  }
];