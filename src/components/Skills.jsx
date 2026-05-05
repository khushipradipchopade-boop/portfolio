import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Shuffle, MessageCircle } from 'lucide-react';

const skills = [
  { name: "HTML", icon: <Code className="w-6 h-6" />, category: "Technical", level: 90 },
  { name: "Communication", icon: <MessageCircle className="w-6 h-6" />, category: "Soft Skills", level: 95 },
  { name: "Team Management", icon: <Users className="w-6 h-6" />, category: "Soft Skills", level: 85 },
  { name: "Multitasking", icon: <Shuffle className="w-6 h-6" />, category: "Soft Skills", level: 88 }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-secondary/5 rounded-full filter blur-[120px] -z-10" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-secondary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary md:mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-3xl text-center group border border-white/5 hover:border-secondary/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Animated hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto rounded-full bg-dark-200 border border-white/10 flex items-center justify-center mb-6 relative">
                  {/* Outer glowing ring on hover */}
                  <div className="absolute inset-0 rounded-full border-2 border-secondary scale-[1.15] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-[spin_4s_linear_infinite]" />
                  <div className="text-secondary group-hover:text-primary transition-colors duration-300">
                    {skill.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
                <p className="text-sm text-slate-400 mb-6">{skill.category}</p>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-dark-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                    className="h-full bg-gradient-to-r from-secondary to-primary rounded-full relative"
                  >
                    {/* Shimmer effect */}
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                  </motion.div>
                </div>
                <div className="mt-2 text-right">
                  <span className="text-xs font-semibold text-primary">{skill.level}%</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
