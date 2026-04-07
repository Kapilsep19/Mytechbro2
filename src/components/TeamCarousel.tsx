import { motion } from "motion/react";

const team = [
  {
    name: "Alex Chen",
    role: "Chief Architect",
    tag: "Founder",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9tlYZCnhxOOLgfiiXjO4vVMLT7KOJMcaqcr0kLx7qD1TPW05TI9hwwhR7RI5FYsdp4nk0V3GzXxYYVfYEAgTLVnjIbwcyzRpzZcrkhentvj35nl3R2Oc-EH9AreHjFincDFB6OSM6v7Xn-YwA6od3DXZbqv60hLnq5eWPm72aFKfgUptS_K2EVRPfDP4gMsYBDEt_jynB3C8vH6Uz1VxvHUgCw3VKKfjIhjtCO3nToXh5DdhnYJaovvrRjlLUiXXaPQkbflwX-x0"
  },
  {
    name: "Sarah Vane",
    role: "Creative Director",
    tag: "Design",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUUakrok5Ch-ZuJcfUuaWhE-P3mZ3eJ_5cNU6TLVZguBkpG7QYWYFFp_aRBn5tnyYcYXXDWAgKZiKMrvMOjl2FzdT_zSqX3ZIX3LYr_yGtPlO3OzISEE6Ay3tNWSl3pJGwa2RXf4VAsbI-XjhJu5zz6wDtLv0xkayRXSZnSM5dZGW4qF606Jr7ZhUSzRpJUgD7xGrHyrZV3JTfi8Fj5okU3fHq9mA29Ea-cex8w24w1aZ-UvNx1J_JIS7fAdr6b4oCkAk9iSJvMeU"
  },
  {
    name: "Marcus Thorne",
    role: "Lead Developer",
    tag: "Engineering",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhBCOaJMxpH1AnRF9pVB2ftJeQkK-EwzIs6XjslHpfJghp-7kPFHHSp-RszTPYJx1c-URvuJzwndVyQ8yJXX4PbOBTN8BB07ygWUGMNwybQx9_Lg3Jvw4F3ozSaR9L3QxS9QxY6L3T_5SRNvUJnLLvTWFVyqJy6usGHLsKqow-dc_FPo-BImE249AOQklo0Fri5WYsT6Lt_yvfcLTdIvPzVxy4yFiz-LBMlRAe4OhicBn2HxD8wP81xy3C-nhbSv_19cjpfCv9OgY"
  }
];

export default function TeamCarousel() {
  return (
    <section className="mb-8">
      <div className="flex justify-between items-end mb-6">
        <div>
          <span className="font-label text-[10px] uppercase tracking-widest text-primary-container mb-1 block font-bold">Founding Collective</span>
          <h2 className="text-2xl font-bold font-headline tracking-tight">Meet the Team</h2>
        </div>
        <div className="flex gap-2 mb-1">
          <div className="w-8 h-1 bg-primary-container rounded-full"></div>
          <div className="w-2 h-1 bg-surface-container-highest rounded-full"></div>
          <div className="w-2 h-1 bg-surface-container-highest rounded-full"></div>
        </div>
      </div>
      
      <div className="flex overflow-x-auto gap-4 hide-scrollbar snap-x pb-4">
        {team.map((member, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="min-w-[260px] snap-center"
          >
            <div className="relative rounded-xl overflow-hidden aspect-[4/5] mb-4 bg-surface-container-lowest group">
              <img 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                alt={member.name} 
                src={member.image}
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent">
                <span className={`px-2 py-0.5 rounded text-[10px] font-label font-bold uppercase ${
                  member.tag === "Founder" ? "bg-primary-container text-on-primary" : "bg-surface-container-highest text-on-surface"
                }`}>
                  {member.tag}
                </span>
              </div>
            </div>
            <h4 className="font-bold font-headline text-lg">{member.name}</h4>
            <p className="text-on-surface/50 font-label text-xs uppercase tracking-wider">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
