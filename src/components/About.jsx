import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary md:mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Placeholder with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-2/5"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-3xl rotate-6 opacity-50 blur-lg" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-3xl -rotate-6 opacity-30" />
              <div className="absolute inset-0 glass-card rounded-3xl border border-white/20 overflow-hidden flex items-center justify-center relative group">
                {/* Fallback pattern if no image */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-50" />
                <span className="text-8xl font-bold text-white/10 group-hover:scale-110 transition-transform duration-500">KC</span>
                {/* Add <img src="..." alt="Khushi Chopade" className="w-full h-full object-cover relative z-10" /> here when available */}
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-3/5 space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">
              Hello! I'm Khushi Chopade.
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              I am a dedicated Computer Science Student pursuing my B.Tech in CSE. I am passionate about technology and its potential to solve real-world problems. With a solid academic foundation and a drive for continuous learning, I am constantly exploring new domains in web development and software engineering.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Beyond coding, I strongly believe in the power of effective communication and team management. My experiences outside the classroom have shaped me into a well-rounded individual capable of adapting to diverse challenges.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <div className="glass-card p-6 rounded-2xl flex gap-4 items-start hover:-translate-y-1 transition-transform duration-300">
                <div className="p-3 bg-primary/20 rounded-xl text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Education</h4>
                  <p className="text-sm text-slate-400">B.Tech CSE</p>
                  <p className="text-sm font-medium text-primary mt-1">CGPA: 7.5</p>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl flex gap-4 items-start hover:-translate-y-1 transition-transform duration-300">
                <div className="p-3 bg-secondary/20 rounded-xl text-secondary">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Extra-Curriculars</h4>
                  <p className="text-sm text-slate-400">Theatre & Acting</p>
                  <p className="text-sm text-slate-400 mt-1">Elocution Winner</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
