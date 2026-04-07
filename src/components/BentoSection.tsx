import { motion } from "motion/react";
import { Rocket, Eye } from "lucide-react";

export default function BentoSection() {
  return (
    <section className="grid grid-cols-1 gap-4 mb-16">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-surface-container-low p-8 rounded-xl border border-white/[0.03]"
      >
        <div className="flex items-center gap-3 mb-4">
          <Rocket className="text-primary-container" size={20} />
          <h3 className="font-label font-bold uppercase tracking-widest text-xs">Our Mission</h3>
        </div>
        <p className="text-on-surface/90 text-sm leading-relaxed">
          To empower innovators with high-performance digital tools that disrupt traditional markets through kinetic design and technical precision.
        </p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-surface-container-high p-8 rounded-xl border border-white/[0.03]"
      >
        <div className="flex items-center gap-3 mb-4">
          <Eye className="text-primary-container" size={20} />
          <h3 className="font-label font-bold uppercase tracking-widest text-xs">Our Vision</h3>
        </div>
        <p className="text-on-surface/90 text-sm leading-relaxed">
          Becoming the global standard for high-fidelity technical solutions where aesthetic beauty meets mathematical perfection.
        </p>
      </motion.div>
    </section>
  );
}
