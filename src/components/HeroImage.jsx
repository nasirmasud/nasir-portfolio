import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <div className='flex items-center justify-center ml-24 pb-12 mx-auto relative'>
      {/* Profile Picture */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.1,
        }}
        className='w-24 h-24 overflow-hidden rounded-full border-4 border-gray-200 shadow-xl'
      >
        <img
          src='/proPic.jpeg'
          alt='Profile Picture'
          width='96'
          height='96'
          className='object-cover'
        />
      </motion.div>

      {/* Name Badge with Floating Animation */}
      <motion.div
        initial={{ x: 20, opacity: 0, rotate: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          rotate: -15,
          y: [0, -5, 0],
        }}
        transition={{
          opacity: { duration: 0.4, delay: 0.3 },
          rotate: { duration: 0.4, delay: 0.3 },
          x: { duration: 0.4, delay: 0.3 },
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        whileHover={{ scale: 1.1, rotate: -5 }}
        className='absolute z-10 bg-white text-black left-[55%] top-4 py-1 px-3 rounded-full shadow-lg cursor-pointer text-sm font-bold flex items-center border border-gray-100 select-none'
      >
        nasirMasud
        {/* Continuous Waving Hand Animation */}
        <motion.span
          className='ml-1 text-sm inline-block'
          animate={{ rotate: [0, 20, 0, 20, 0] }} // হাতটি ডানে-বামে দুলবে
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "bottom right" }} // হাতের কবজি থেকে দুলবে
        >
          👋
        </motion.span>
      </motion.div>
    </div>
  );
}
