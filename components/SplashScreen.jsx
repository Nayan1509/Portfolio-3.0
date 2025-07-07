import { motion } from "framer-motion";
import { useEffect } from "react";

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5, duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0f0f12] text-white"
    >
      <div className="absolute inset-0 animate-pulse opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00ff94]/30 via-transparent to-transparent" />

      <motion.h1 layoutId="logo-text" className="text-4xl font-bold z-10">
        Nayan<span className="text-accent">.</span>
      </motion.h1>
    </motion.div>
  );
};

export default SplashScreen;
