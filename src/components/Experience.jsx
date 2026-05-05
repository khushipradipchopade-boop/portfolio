import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "SEO Intern",
    company: "Digital Techists Consulting",
    duration: "2023 - Present",
    description: "Optimized website performance and search rankings, executing comprehensive keyword research and implementing on-page/off-page SEO strategies to drive organic traffic growth.",
  },
  {
    role: "Digital Marketing Intern",
    company: "SkillCraft Technology",
    duration: "2023 - 2023",
    description: "Assisted in managing digital marketing campaigns, analyzing social media metrics, and creating engaging content that enhanced brand visibility across multiple platforms.",
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-secondary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary md:mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row gap-8 items-start relative ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-14 h-14 bg-dark-300 rounded-full border-4 border-primary z-10 flex items-center justify-center md:-translate-x-1/2 shrink-0 hidden md:flex">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-3rem)] glass-card p-8 rounded-3xl hover:border-primary/50 transition-colors duration-300 ${
                  index % 2 === 0 ? 'md:text-right' : ''
                }`}>
                  <div className="flex items-center gap-4 md:hidden mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                       <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  <div className="hidden md:block mb-4">
                    <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full">
                      {exp.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                  <h4 className="text-lg font-medium text-slate-300 mb-4">{exp.company}</h4>
                  <p className="text-slate-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
