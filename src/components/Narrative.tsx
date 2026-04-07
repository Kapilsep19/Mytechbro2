import { motion } from "motion/react";

export default function Narrative() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold font-headline mb-6 tracking-tight">The Narrative</h2>
      <div className="space-y-6 text-on-surface/70 leading-relaxed font-body">
        <p>
          Founded in 2021, MytechBro started in a garage focused on optimizing server-side architectures. We realized quickly that the world didn't just need faster servers—it needed a more kinetic way to interact with data.
        </p>
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          className="pl-4 border-l-2 border-primary-container origin-left"
        >
          <p className="italic text-on-surface font-medium">
            "Precision is not just a metric; it's our philosophy. Every pixel, every endpoint, every interaction is intentional."
          </p>
        </motion.div>
        <p>
          Today, we are a distributed team of engineers, designers, and strategists obsessed with the details. We treat every project like a monolith—solid, enduring, and powerful.
        </p>
      </div>
    </section>
  );
}
