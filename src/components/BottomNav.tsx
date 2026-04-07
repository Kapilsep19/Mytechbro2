import { motion } from "motion/react";
import { Home, Settings2, FolderKanban, Info } from "lucide-react";

export default function BottomNav() {
  const navItems = [
    { icon: Home, label: "Home", active: false },
    { icon: Settings2, label: "Services", active: false },
    { icon: FolderKanban, label: "Portfolio", active: false },
    { icon: Info, label: "About", active: true },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full h-20 flex justify-around items-center px-4 pb-4 bg-background/90 backdrop-blur-2xl rounded-t-xl shadow-[0px_-8px_24px_rgba(0,0,0,0.5)] z-50">
      {navItems.map((item, index) => (
        <motion.a
          key={index}
          href="#"
          whileTap={{ scale: 0.9 }}
          className={`flex flex-col items-center justify-center gap-1 transition-all duration-200 ${
            item.active ? "text-primary-container" : "text-on-background/40 hover:text-primary-container"
          }`}
        >
          <item.icon size={24} fill={item.active ? "currentColor" : "none"} />
          <span className="font-label text-[10px] uppercase tracking-widest font-medium">
            {item.label}
          </span>
        </motion.a>
      ))}
    </nav>
  );
}
