import { motion } from "motion/react";
import { Briefcase } from "lucide-react";

export default function CTA() {
  return (
    <section className="mt-20 text-center pb-8">
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className="w-12 h-12 bg-primary-container/10 rounded-full flex items-center justify-center mx-auto mb-6"
      >
        <Briefcase className="text-primary-container" size={24} />
      </motion.div>
      <h3 className="text-xl font-bold mb-2">Join the Movement</h3>
      <p className="text-on-surface/60 text-sm mb-8 px-8">We are always looking for kinetic minds to join our technical collective.</p>
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-primary-container text-on-primary px-8 py-3 rounded-md font-label font-bold uppercase tracking-widest text-xs shadow-lg shadow-primary-container/20"
      >
        View Open Roles
      </motion.button>
    </section>
  );
}
