import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Personal Portfolio Webpage",
    description: "A highly modern, visually stunning personal portfolio utilizing React, Tailwind CSS, and Framer Motion. Features a dark theme with glassmorphism aesthetics and smooth scroll animations.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    github: "#",
    live: "#"
  },
  {
    title: "E-Commerce Dashboard",
    description: "An analytical dashboard for e-commerce platforms. Includes real-time data visualization, user management, and sales tracking to optimize business performance.",
    tech: ["React", "Chart.js", "Node.js", "Express"],
    github: "#",
    live: "#"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application allowing teams to organize projects, assign tasks, and track progress with real-time updates.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    github: "#",
    live: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary md:mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-3xl overflow-hidden group flex flex-col h-full border border-white/10 hover:border-primary/50 transition-all duration-300 relative"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="p-8 flex-grow flex flex-col relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">0{index + 1}</span>
                  </div>
                  <div className="flex gap-3">
                    <a href={project.github} className="text-slate-400 hover:text-white transition-colors">
                      <FaGithub className="w-5 h-5" />
                    </a>
                    <a href={project.live} className="text-slate-400 hover:text-white transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs font-medium text-slate-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
