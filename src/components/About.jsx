import { motion, useInView } from "framer-motion";
import { BookOpen, Code, Coffee, Zap } from "lucide-react";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section
      id='about'
      data-cmp='About'
      className='py-24 bg-card/30 overflow-hidden'
      ref={ref}
    >
      <div className='max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          {/* Left Side: The Card with Floating Effect */}
          <motion.div
            className='order-2 lg:order-1 relative'
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className='absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl blur-2xl transform rotate-3'></div>
            <div className='relative glass-panel rounded-2xl p-8 shadow-custom border border-border bg-card/50'>
              <motion.h3
                className='text-2xl font-bold mb-6 flex items-center gap-3'
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Code className='text-primary' />
                The Self-Taught Journey
              </motion.h3>

              <div className='space-y-4 text-muted-foreground'>
                <p>
                  My journey into development didn't start in a computer science
                  classroom. It started with curiosity and a desire to build
                  things that exist on the web.
                </p>
                <p>
                  I've spent countless late nights debugging, reading
                  documentation, and building projects from scratch. This path
                  has taught me not just how to code, but how to learn
                  efficiently and adapt quickly to new technologies.
                </p>
                <p>
                  Today, I build accessible, pixel-perfect user interfaces with
                  React, Next.js, and JavaScript that blend performance with
                  minimal design.
                </p>
              </div>

              {/* Stats Grid */}
              <div className='mt-8 grid grid-cols-2 gap-4'>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className='p-4 bg-secondary/50 rounded-lg border border-border'
                >
                  <h4 className='font-bold text-foreground text-2xl mb-1'>
                    2+
                  </h4>
                  <p className='text-sm text-muted-foreground'>
                    Years Learning
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className='p-4 bg-secondary/50 rounded-lg border border-border'
                >
                  <h4 className='font-bold text-foreground text-2xl mb-1'>
                    15+
                  </h4>
                  <p className='text-sm text-muted-foreground'>
                    Projects Built
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Text & Features */}
          <div className='order-1 lg:order-2'>
            <motion.span
              className='text-primary font-semibold tracking-wider uppercase text-sm'
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              About Me
            </motion.span>

            <motion.h2
              className='text-3xl sm:text-4xl font-bold mt-2 mb-6'
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Driven by curiosity, <br />
              fuelled by coffee.
            </motion.h2>

            <motion.p
              className='text-lg text-muted-foreground mb-8'
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I believe in clean code, user-centric design, and the continuous
              pursuit of knowledge. I'm currently expanding my expertise in
              backend technologies to become a full-stack developer.
            </motion.p>

            {/* Features List with Stagger Effect */}
            <div className='space-y-6'>
              <Feature
                index={0}
                isInView={isInView}
                icon={<Zap className='w-5 h-5 text-accent' />}
                title='Performance First'
                description='I prioritize loading speeds and optimization in every application I build.'
              />
              <Feature
                index={1}
                isInView={isInView}
                icon={<BookOpen className='w-5 h-5 text-accent' />}
                title='Continuous Learner'
                description='Staying updated with the latest React features and development improvements.'
              />
              <Feature
                index={2}
                isInView={isInView}
                icon={<Coffee className='w-5 h-5 text-accent' />}
                title='Problem Solver'
                description='I enjoy breaking down complex challenges into manageable, logical components.'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Feature = ({ icon, title, description, index, isInView }) => (
  <motion.div
    className='flex gap-4'
    initial={{ opacity: 0, x: 30 }}
    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
  >
    <div className='flex-shrink-0 w-10 h-10 rounded-lg bg-secondary flex items-center justify-center border border-border'>
      {icon}
    </div>
    <div>
      <h3 className='font-bold text-foreground'>{title}</h3>
      <p className='text-sm text-muted-foreground mt-1'>{description}</p>
    </div>
  </motion.div>
);

export default About;
