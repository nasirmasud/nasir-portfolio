import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer
      data-cmp='Footer'
      className='py-8 border-t border-border bg-card/30'
    >
      {/* max-w-[1440px] সরিয়ে w-full ব্যবহার করা হয়েছে এবং px-12 দেওয়া হয়েছে */}
      <motion.div
        className='w-full px-4 sm:px-12 lg:px-20 flex flex-col sm:flex-row justify-between items-center gap-6'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Left Side */}
        <div className='flex-1 flex justify-start'>
          <p className='text-muted-foreground text-sm flex items-center gap-1.5'>
            Built with{" "}
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Heart className='w-4 h-4 text-red-500 fill-red-500' />
            </motion.span>{" "}
            using React, Tailwind & Framer Motion
          </p>
        </div>

        {/* Right Side */}
        <div className='flex-1 flex justify-end'>
          <p className='text-muted-foreground text-sm text-center sm:text-right'>
            !© {new Date().getFullYear()} nasirMasud. Nothing is reserved, you
            can use anything you like.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
