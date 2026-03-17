import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import HeroImage from "./HeroImage";

const Hero = () => {
  // এনিমেশন ভেরিয়েন্ট (কোড ক্লিন রাখার জন্য)
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <div
      data-cmp='Hero'
      className='relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16'
    >
      {/* Background decoration with Floating Animation */}
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden -z-10'>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className='absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-[128px]'
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className='absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-[128px]'
        />
      </div>

      <div className='max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center'>
        <motion.div
          initial='initial'
          animate='animate'
          variants={{
            animate: { transition: { staggerChildren: 0.1 } }, // একের পর এক এলিমেন্ট আসবে
          }}
        >
          {/* Hero Image with Scale effect */}
          <motion.div variants={fadeInUp}>
            <HeroImage />
          </motion.div>

          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border text-xs font-medium text-primary mb-6'
          >
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-primary'></span>
            </span>
            Available for new projects
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className='text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6'
          >
            Building digital <br />
            <motion.span
              className='text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent'
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              experiences that matter.
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className='max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed'
          >
            I'm a self-taught React & Next.js developer passionate about
            creating intuitive, dynamic user interfaces. I turn complex problems
            into elegant code.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={fadeInUp}
            className='flex flex-col sm:flex-row items-center justify-center gap-4'
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href='#projects'
              className='w-full sm:w-auto px-8 py-3.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-bold transition-all shadow-custom flex items-center justify-center gap-2 group'
            >
              View My Work
              <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
            </motion.a>

            <motion.a
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(var(--secondary), 0.9)",
              }}
              whileTap={{ scale: 0.95 }}
              href='#contact'
              className='w-full sm:w-auto px-8 py-3.5 bg-secondary hover:bg-secondary/80 text-secondary-foreground border border-border rounded-lg font-bold transition-all flex items-center justify-center'
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Social Links with Stagger */}
          <motion.div
            variants={fadeInUp}
            className='mt-12 flex items-center justify-center gap-6'
          >
            <SocialLink
              href='https://github.com'
              icon={<Github className='w-5 h-5' />}
              label='GitHub'
            />
            <SocialLink
              href='https://linkedin.com'
              icon={<Linkedin className='w-5 h-5' />}
              label='LinkedIn'
            />
            <SocialLink
              href='https://twitter.com'
              icon={<Twitter className='w-5 h-5' />}
              label='Twitter'
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const SocialLink = ({ href, icon, label }) => (
  <motion.a
    whileHover={{ y: -5, scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    className='p-3 bg-secondary/50 hover:bg-secondary border border-border rounded-full text-muted-foreground hover:text-foreground transition-all'
    aria-label={label}
  >
    {icon}
  </motion.a>
);

export default Hero;
