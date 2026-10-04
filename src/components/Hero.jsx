import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import DarkGradientBg from "./DarkGradientBg";
import HeroImage from "./HeroImage";

const Hero = () => {
  // এনিমেশন ভেরিয়েন্ট (কোড ক্লিন রাখার জন্য)
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
  };

  return (
    <div
      data-cmp='Hero'
      className='relative flex min-h-[100dvh] flex-col overflow-hidden md:h-full md:min-h-0'
    >
      <DarkGradientBg className='absolute inset-0 min-h-0' />

      {/* Top padding is generous on the landing section: pt-40 on top of the region's
          py-8 gives 192px, keeping the hero clear of the fixed Navbar
          (Navbar.jsx h-20) with plenty of room to breathe. The max-height
          fallback scales down proportionally to pt-28 so the hero still fits
          one viewport on short screens. pb-20 keeps the bottom balanced. */}
      <div className='relative z-10 flex w-full flex-1 flex-col pt-40 pb-20 [@media(max-height:800px)]:pt-28'>
        <div className='flex flex-1 px-4 py-8 sm:px-6 lg:px-8'>
          <div className='m-auto flex w-full max-w-[1440px] flex-col items-center text-center'>
            <motion.div
              initial='initial'
              animate='animate'
              variants={{
                animate: { transition: { staggerChildren: 0.05 } },
              }}
            >
              {/* Hero Image with Scale effect */}
              <motion.div variants={fadeInUp}>
                <HeroImage />
              </motion.div>

              {/* Badge */}
              <motion.div
                variants={fadeInUp}
                className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/70 border border-border text-xs font-medium text-violet-300 mb-4 md:mb-6 [@media(max-height:800px)]:mb-3'
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
                className='text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 md:mb-6 [@media(max-height:800px)]:mb-3'
              >
                Building digital <br />
                <motion.span
                  className='text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary'
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  experiences that matter.
                </motion.span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={fadeInUp}
                className='max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-6 md:mb-10 [@media(max-height:800px)]:mb-5'
              >
                I'm a self-taught FrontEnd Focused Full-Stack developer passionate about
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
                className='mt-8 flex items-center justify-center gap-6 md:mt-12 [@media(max-height:800px)]:mt-6'
              >
                <SocialLink
                  href='https://github.com/nasirmasud/'
                  icon={<Github className='w-5 h-5' />}
                  label='GitHub'
                />
                <SocialLink
                  href='https://www.linkedin.com/in/mohammadnasirmasud/'
                  icon={<Linkedin className='w-5 h-5' />}
                  label='LinkedIn'
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
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
