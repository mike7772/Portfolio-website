import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'p_esx',
    name: 'ESX Crowdfunding Platform',
    company: '360Ground / ESX',
    role: 'System Architect & Lead Developer',
    year: 'Ongoing',
    stack: ['Microservices', 'Node.js', 'React', 'PostgreSQL', 'Finance'],
    metric: 'Secure Trading Arch.',
    description: 'A comprehensive crowdfunding platform for the Ethiopian Securities Exchange.',
    fullDescription: 'Designed the system architecture and implemented a comprehensive crowdfunding platform for ESX. The platform acts as a critical bridge facilitating secure interactions between investors, share providers, companies, and campaigns, ensuring compliance and data integrity.',
    features: ['Investor/Campaign Portals', 'Real-time Share Tracking', 'Secure Document Handling', 'Regulatory Compliance Tools', 'Dynamic Reporting'],
    url: 'https://esx.et', 
    screenshots: [
        'https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 'p1',
    name: 'Permit Issuance System',
    company: '360Ground',
    role: 'System Architect & Lead Developer',
    year: '2023',
    stack: ['Node.js', 'React', 'Microservices', 'Form Engine'],
    metric: 'Dynamic Form Engine',
    description: 'National Business Portal for the Ethiopian government.',
    fullDescription: 'Architected a notification microservice to streamline user communications via email and SMS. Developed an admin panel that allows non-technical staff to create dynamic forms on the fly, reducing processing time by 25%.',
    features: ['Dynamic Form Builder', 'SMS/Email Notifications', 'Role-based Access Control', 'Automated Workflows'],
    url: 'http://new.business.gov.et',
    screenshots: [
        'https://images.unsplash.com/photo-1555421689-492a18d9c3ad?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 'p2',
    name: 'JEGS Digitization',
    company: 'Civil Service of Ethiopia',
    role: 'System Architect & Lead Developer',
    year: '2023',
    stack: ['React', 'D3.js', 'Python', 'Interactive UI'],
    metric: 'Graphical Org Chart',
    description: 'Digitization of the national Job Evaluation and Grading System.',
    fullDescription: 'Digitized Ethiopia\'s Job Evaluation and Grading System, improving evaluation accuracy and speed by 50% with a custom graphical organizational chart builder. This tool allows HR professionals to visually restructure departments via drag-and-drop.',
    features: ['Drag-and-drop Org Chart', 'Real-time Grading Calculation', 'Exportable Reports', 'Version Control for Charts'],
    url: null,
    screenshots: [
        'https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 'p_rec',
    name: 'Recruitment Automation',
    company: 'Mereb Tech',
    role: 'Tech Lead',
    year: '2025',
    stack: ['Node.js', 'AI Integration', 'React', 'CV Parsing'],
    metric: 'AI Interview Flow',
    description: 'Automated developer hiring platform with AI capabilities.',
    fullDescription: 'Worked on a recruitment automation system that streamlined developer hiring by sending automated coding challenges, conducting AI-powered interviews, and parsing CVs for skill/experience matching. Improved hiring efficiency by reducing manual screening.',
    features: ['Automated Coding Challenges', 'AI Interview', 'AI Resume Scoring'],
    url: 'https://talent.mereb.tech',
    screenshots: [
        'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: 'p_meda',
    name: 'MedaPay Gateway',
    company: '360Ground',
    role: 'Full Stack Developer',
    year: '2024',
    stack: ['Nest', 'Next.js', 'MongoDB', 'Docker', 'Fintech'],
    metric: 'Payment Widget SDK',
    description: 'Seamlessly integratable payment gateway for Ethiopian merchants.',
    fullDescription: 'Contributed to the development of MedaPay, focusing on the frontend SDK widget that allows merchants to easily embed payment forms. Ensured the backend transaction processing was secure, idempotent, and compliant with local financial regulations.',
    features: ['Embeddable Payment Widget', 'Idempotent Transactions', 'Merchant Dashboard', 'Webhook System'],
    url: null,
    screenshots: [
        'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000'
    ]
  }
];