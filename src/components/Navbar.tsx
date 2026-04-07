import { motion } from "motion/react";
import { Bell } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl flex justify-between items-center px-6 h-16">
      <div className="flex items-center gap-3">
        <img 
          alt="Mytechbro Logo" 
          className="h-8 w-auto object-contain" 
          src="https://lh3.googleusercontent.com/aida/ADBb0uiTq5HAF28fGVEljifgJPk9Bp7bbPc2oY9SY56KUxjU8wme-_B6YDXZbX0L6-GoQs_LOOPBUoyOLym3Vja1TWMkgnMNg-BozaNWRiUD-IuhqxqJQiIthQiGYTNPRB9ZXBLmS2cdRh_o83bmmAIQKvOTh9rnfGYPy8S5w_6JNvoL-6anVF94ICwzmbCfAXFpvBwoUtde6aBy9XJhjOXMINqN1maFxoW2T9Ya6bB1V_Vfv5D4y7mWOTn3RhqWh6v9EpmrMYvwIfDw"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex items-center gap-4">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-on-background/60 hover:text-primary-container transition-colors duration-300"
        >
          <Bell size={24} />
        </motion.button>
      </div>
    </nav>
  );
}
