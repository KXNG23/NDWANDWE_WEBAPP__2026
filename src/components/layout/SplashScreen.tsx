import { motion } from "motion/react";

const LOGO_URL = "https://lh3.googleusercontent.com/d/1EVfCt7yLEnHxNX2yxAy4TQ9T7XIUY6bf";

export default function SplashScreen() {
  return (
    <motion.div
      key="splash"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <img 
          src={LOGO_URL} 
          alt="Ndwandwe Engineering Logo" 
          className="w-72 md:w-96 h-auto mb-8"
          referrerPolicy="no-referrer"
        />
        <motion.div 
          className="w-48 h-1 bg-gray-100 rounded-full overflow-hidden"
        >
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-full bg-[#76b07d]"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
