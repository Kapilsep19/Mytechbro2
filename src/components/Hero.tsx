import { motion } from "motion/react";

export default function Hero() {
  return (
    <header className="mb-12">
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-label text-[10px] uppercase tracking-widest text-primary-container mb-2 block font-bold"
      >
        Origin Story
      </motion.span>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-4xl font-black tracking-tight mb-6 font-headline leading-[0.9]"
      >
        Architecting the <span className="text-primary-container">Future</span>.
      </motion.h1>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full h-64 rounded-xl overflow-hidden mb-8 relative"
      >
        <img 
          className="w-full h-full object-cover" 
          alt="Modern minimalist office space" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJHpWNVwFIfUT1WfTm014bYwm3qSzXrvyvCTQsychKaMUI5dWcbu0jqcqfeSYQlo2zc6ZKJ4L18DXxBoKb4-Zd7jd-6N3K5T_Ghf7T8j8dFPLrizdNgHjo6gXaXKU3TR03KQ_o70l5O-O0vhX704CrLfYZyKyg7b6UP1es2wu69IJ_CcUrlsfBGGhU1vuU30n9LioRYZEsgu9BHsDI-pi8CsJEyZExx9AqnV8lRV2G5UgCN7GdsPeCbb3WR5qc9RrL_lr8CmzosIc"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </motion.div>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg leading-relaxed text-on-surface/80"
      >
        MytechBro emerged from a single lines of code and a vision to bridge the gap between complex engineering and intuitive user experiences. We don't just build apps; we engineer digital legacies.
      </motion.p>
    </header>
  );
}
