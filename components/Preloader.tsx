import { motion } from 'motion/react';
import { Building2 } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  return (
    <motion.div
      className="fixed inset-0 bg-black z-[10000] flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 3 }}
      onAnimationComplete={onComplete}
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      />

      {/* Logo Animation */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Container */}
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "backOut" }}
        >
          <motion.div
            className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl"
            animate={{ 
              boxShadow: [
                "0 0 0 0px rgba(59, 130, 246, 0.5)",
                "0 0 0 20px rgba(59, 130, 246, 0)",
                "0 0 0 0px rgba(59, 130, 246, 0)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Building2 className="w-12 h-12 text-white" />
          </motion.div>
        </motion.div>

        {/* Company Name */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl font-bold text-white mb-2"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            style={{
              background: "linear-gradient(-45deg, #ffffff, #60a5fa, #a855f7, #ffffff)",
              backgroundSize: "400% 400%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            NOOD
          </motion.h1>
          <motion.p
            className="text-gray-300 text-lg tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            INTERNATIONAL PROPERTIES
          </motion.p>
        </motion.div>

        {/* Loading Bar */}
        <motion.div
          className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ delay: 2, duration: 1, ease: "easeOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}