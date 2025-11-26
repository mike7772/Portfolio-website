'use client';

import React, { useState } from 'react';
import { ChevronDown, Code, Layout, Server, Database, GitCommit, ArrowUpRight, Image as ImageIcon } from 'lucide-react';
import { Badge, Button, Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/Primitives';
import { Project } from '../types';

interface ProjectWithScreenshots extends Project {
  screenshots?: string[];
  fullDescription?: string;
  features?: string[];
}

const projects: ProjectWithScreenshots[] = [
  {
    id: 'p_esx',
    name: 'ESX Crowdfunding Platform',
    company: '360Ground / ESX',
    role: 'System Architect',
    year: 'Ongoing',
    stack: ['Microservices', 'Node.js', 'React', 'PostgreSQL', 'Finance'],
    metric: 'Secure Trading Architecture',
    description: 'A comprehensive crowdfunding platform for the Ethiopian Securities Exchange.',
    fullDescription: 'Designed the system architecture and implemented a comprehensive crowdfunding platform for ESX. The platform acts as a critical bridge facilitating secure interactions between investors, share providers, companies, and campaigns, ensuring compliance and data integrity.',
    features: ['Investor/Campaign Portals', 'Real-time Share Tracking', 'Secure Document Handling', 'Regulatory Compliance Tools', 'Dynamic Reporting']
  },
  {
    id: 'p1',
    name: 'Permit Issuance System',
    company: '360Ground',
    role: 'Lead Developer',
    year: '2023',
    stack: ['Node.js', 'React', 'Microservices', 'Form Engine'],
    metric: 'Dynamic Form Creation',
    description: 'A comprehensive permit issuance platform for the Ethiopian government.',
    fullDescription: 'Architected a notification microservice to streamline user communications via email and SMS. Developed an admin panel that allows non-technical staff to create dynamic forms on the fly, reducing processing time by 25%.',
    features: ['Dynamic Form Builder', 'SMS/Email Notifications', 'Role-based Access Control', 'Automated Workflows']
  },
  {
    id: 'p2',
    name: 'JEGS Digitization',
    company: 'Govt. of Ethiopia',
    role: 'Full Stack',
    year: '2023',
    stack: ['React', 'D3.js', 'Python', 'Interactive UI'],
    metric: 'Graphical Org Chart',
    description: 'Digitization of the national Job Evaluation and Grading System.',
    fullDescription: 'Digitized Ethiopia\'s Job Evaluation and Grading System, improving evaluation accuracy and speed by 50% with a custom graphical organizational chart builder. This tool allows HR professionals to visually restructure departments via drag-and-drop.',
    features: ['Drag-and-drop Org Chart', 'Real-time Grading Calculation', 'Exportable Reports', 'Version Control for Charts']
  },
  {
    id: 'p3',
    name: 'Recruitment Automation',
    company: 'Mereb Tech',
    role: 'Tech Lead',
    year: '2025',
    stack: ['Node.js', 'AI Integration', 'React', 'CV Parsing'],
    metric: 'AI Interview Flow',
    description: 'Automated developer hiring platform with AI capabilities.',
    fullDescription: 'Worked on a recruitment automation system that streamlined developer hiring by sending automated coding challenges, conducting AI-powered interviews, and parsing CVs for skill/experience matching. Improved hiring efficiency by reducing manual screening.',
    features: ['Automated Coding Challenges', 'Video Interview Recording', 'AI Resume Scoring', 'ATS Integration']
  },
  {
    id: 'p4',
    name: 'MedaPay Gateway',
    company: '360Ground',
    role: 'Contributor',
    year: '2023',
    stack: ['Django', 'React', 'Docker', 'Fintech'],
    metric: 'Payment Widget SDK',
    description: 'Seamlessly integratable payment gateway for Ethiopian merchants.',
    fullDescription: 'Contributed to the development of MedaPay, focusing on the frontend SDK widget that allows merchants to easily embed payment forms. Ensured the backend transaction processing was secure, idempotent, and compliant with local financial regulations.',
    features: ['Embeddable Payment Widget', 'Idempotent Transactions', 'Merchant Dashboard', 'Webhook System']
  }
];

export const ProjectLog: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(projects[0].id);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectWithScreenshots | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const openModal = (project: ProjectWithScreenshots, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section id="projects" className="py-12 relative">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
         <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Selected Projects</h2>
            <p className="text-muted-foreground text-sm mt-1">A mix of complex backend logic and interactive frontend tools.</p>
         </div>
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className={`group rounded-xl border transition-all duration-300 overflow-hidden ${
                expandedId === project.id 
                ? 'bg-card border-indigo-500/50 ring-1 ring-indigo-500/20 shadow-lg' 
                : 'bg-card/50 border-border hover:border-primary/20 hover:bg-accent/50'
            }`}
          >
            <div 
              className="flex flex-col md:flex-row md:items-center gap-6 p-5 cursor-pointer"
              onClick={() => toggleExpand(project.id)}
            >
              {/* Icon / Year */}
              <div className="hidden md:flex flex-col items-center gap-2 min-w-[60px]">
                 <div className={`p-2 rounded-lg transition-colors ${expandedId === project.id ? 'bg-indigo-500/10 text-indigo-500' : 'bg-secondary text-muted-foreground group-hover:text-foreground'}`}>
                    <Code size={20} />
                 </div>
                 <span className="text-[10px] font-mono text-muted-foreground">{project.year}</span>
              </div>

              {/* Main Info */}
              <div className="flex-1">
                 <div className="flex items-center justify-between mb-2">
                    <h3 className={`font-semibold text-lg ${expandedId === project.id ? 'text-foreground' : 'text-foreground/80'}`}>
                        {project.name}
                    </h3>
                    <Badge variant="outline" className="md:hidden border-border text-muted-foreground">{project.year}</Badge>
                 </div>
                 
                 <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1.5">
                       <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600"></span>
                       {project.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                       <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600"></span>
                       {project.role}
                    </span>
                 </div>

                 {/* Tags */}
                 <div className="flex flex-wrap gap-2">
                    {project.stack.slice(0, expandedId === project.id ? undefined : 3).map(tech => (
                        <Badge key={tech} variant="secondary" className="bg-secondary text-secondary-foreground font-normal border-transparent">
                           {tech}
                        </Badge>
                    ))}
                    {expandedId !== project.id && project.stack.length > 3 && (
                        <span className="text-xs text-muted-foreground py-1">+ {project.stack.length - 3}</span>
                    )}
                 </div>
              </div>

              {/* Action/Metric */}
              <div className="flex items-center justify-between md:justify-end gap-4 md:min-w-[140px]">
                 <div className="text-right hidden md:block">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono mb-1">Key Feature</div>
                    <div className="text-xs font-medium text-emerald-600 dark:text-emerald-400">{project.metric}</div>
                 </div>
                 <div className={`transition-transform duration-300 ${expandedId === project.id ? 'rotate-180' : ''}`}>
                    <ChevronDown size={18} className="text-muted-foreground" />
                 </div>
              </div>
            </div>

            {/* Expanded Content */}
            <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${expandedId === project.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
               <div className="overflow-hidden">
                  <div className="px-5 pb-6 md:pl-[104px] pt-0">
                     <div className="p-5 rounded-lg bg-secondary/30 border border-border grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="flex flex-col justify-between">
                           <div>
                              <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-3">Project Scope</h4>
                              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                 {project.description}
                              </p>
                           </div>
                           
                           <Button 
                              variant="default" 
                              className="w-fit text-xs font-mono gap-2" 
                              onClick={(e) => openModal(project, e)}
                           >
                              <ArrowUpRight size={14} /> VIEW CASE STUDY
                           </Button>
                        </div>
                        
                        <div className="space-y-4">
                            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-3">Technical Highlights</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                   <Layout size={14} className="text-indigo-500" />
                                   <span>Interactive UI / Dashboard</span>
                                </div>
                                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                   <Server size={14} className="text-emerald-500" />
                                   <span>Microservices Arch.</span>
                                </div>
                                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                   <Database size={14} className="text-blue-500" />
                                   <span>Optimized Data Layer</span>
                                </div>
                                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                   <GitCommit size={14} className="text-purple-500" />
                                   <span>Automated CI/CD</span>
                                </div>
                            </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent onClose={() => setModalOpen(false)} className="sm:max-w-[800px]">
           <DialogHeader>
              <div className="flex items-center gap-3 mb-2">
                 <Badge variant="outline">{selectedProject?.year}</Badge>
                 <span className="text-xs font-mono text-muted-foreground">{selectedProject?.company}</span>
              </div>
              <DialogTitle>{selectedProject?.name}</DialogTitle>
              <DialogDescription>{selectedProject?.metric}</DialogDescription>
           </DialogHeader>

           <div className="mt-4 space-y-6">
              {/* Screenshots Placeholder Carousel */}
              <div className="grid grid-cols-2 gap-3 h-48 sm:h-64">
                 <div className="col-span-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-border flex flex-col items-center justify-center p-4 text-center">
                    <ImageIcon className="h-8 w-8 text-zinc-300 dark:text-zinc-600 mb-2" />
                    <span className="text-xs text-muted-foreground">Dashboard UI Mockup</span>
                 </div>
                 <div className="col-span-1 grid grid-rows-2 gap-3">
                    <div className="rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-border flex items-center justify-center">
                       <span className="text-[10px] text-muted-foreground">Mobile View</span>
                    </div>
                    <div className="rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-border flex items-center justify-center">
                       <span className="text-[10px] text-muted-foreground">Admin Panel</span>
                    </div>
                 </div>
              </div>

              {/* Deep Dive Text */}
              <div className="space-y-4">
                 <h4 className="text-sm font-semibold">Architectural Overview</h4>
                 <p className="text-sm text-muted-foreground leading-relaxed">
                    {selectedProject?.fullDescription || selectedProject?.description}
                 </p>
                 
                 <h4 className="text-sm font-semibold">Key Features Delivered</h4>
                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject?.features?.map((feature, i) => (
                       <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          {feature}
                       </li>
                    ))}
                 </ul>
              </div>

              <div className="pt-4 flex justify-end">
                 <Button onClick={() => setModalOpen(false)}>Close Project Log</Button>
              </div>
           </div>
        </DialogContent>
      </Dialog>

    </section>
  );
};