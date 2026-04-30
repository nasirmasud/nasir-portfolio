// import { motion, useInView } from "framer-motion";
// import { BookOpen, Code, Coffee, Zap } from "lucide-react";
// import { useRef } from "react";

// const About = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: false, amount: 0.3 });

//   return (
//     <section
//       id='about'
//       data-cmp='About'
//       className='py-24 bg-card/30 overflow-hidden'
//       ref={ref}
//     >
//       <div className='max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8'>
//         <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
//           {/* Left Side: The Card with Floating Effect */}
//           <motion.div
//             className='order-2 lg:order-1 relative'
//             initial={{ opacity: 0, x: -50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             <div className='absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl blur-2xl transform rotate-3'></div>
//             <div className='relative glass-panel rounded-2xl p-8 shadow-custom border border-border bg-card/50'>
//               <motion.h3
//                 className='text-2xl font-bold mb-6 flex items-center gap-3'
//                 initial={{ opacity: 0 }}
//                 animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//                 transition={{ delay: 0.4 }}
//               >
//                 <Code className='text-primary' />
//                 The Self-Taught Journey
//               </motion.h3>

//               <div className='space-y-4 text-muted-foreground'>
//                 <p>
//                   My journey into development didn't start in a traditional
//                   classroom. It started with curiosity and a desire to build
//                   things that exist on the web.
//                 </p>
//                 <p>
//                   After countless hours of debugging, studying documentation,
//                   and building projects from scratch, But finally I joined a
//                   BootCamp on
//                   <motion.img
//                     src='/PH.png'
//                     alt='Programming Hero'
//                     className='inline-block h-8 ml-2 mr-1 -my-1'
//                     initial={{ opacity: 0, scale: 0.5 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ once: true }}
//                     transition={{
//                       type: "spring",
//                       stiffness: 400,
//                       damping: 10,
//                       delay: 1,
//                     }}
//                   />
//                   <br />
//                   This journey has not only taught me how to code but has also
//                   refined my ability to learn efficiently and adapt quickly to
//                   new technologies.
//                 </p>
//                 <p>
//                   Today, I build accessible, pixel-perfect user interfaces with
//                   React, Next.js, and JavaScript that blend performance with
//                   minimal design.
//                 </p>
//               </div>

//               {/* Stats Grid */}
//               <div className='mt-8 grid grid-cols-2 gap-4'>
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   className='p-4 bg-secondary/50 rounded-lg border border-border'
//                 >
//                   <h4 className='font-bold text-foreground text-2xl mb-1'>
//                     2+
//                   </h4>
//                   <p className='text-sm text-muted-foreground'>
//                     Years Learning
//                   </p>
//                 </motion.div>
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   className='p-4 bg-secondary/50 rounded-lg border border-border'
//                 >
//                   <h4 className='font-bold text-foreground text-2xl mb-1'>
//                     10+
//                   </h4>
//                   <p className='text-sm text-muted-foreground'>
//                     Projects Built
//                   </p>
//                 </motion.div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Right Side: Text & Features */}
//           <div className='order-1 lg:order-2'>
//             <motion.span
//               className='text-primary font-semibold tracking-wider uppercase text-sm'
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//               transition={{ duration: 0.5 }}
//             >
//               About Me
//             </motion.span>

//             <motion.h2
//               className='text-3xl sm:text-4xl font-bold mt-2 mb-6'
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//             >
//               Driven by curiosity...
//             </motion.h2>

//             <motion.p
//               className='text-lg text-muted-foreground mb-8'
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//             >
//               I believe in clean code, user-centric design, and the continuous
//               pursuit of knowledge. I'm currently expanding my expertise in
//               backend technologies to become a full-stack developer.
//             </motion.p>

//             {/* Features List with Stagger Effect */}
//             <div className='space-y-6'>
//               <Feature
//                 index={0}
//                 isInView={isInView}
//                 icon={<Zap className='w-5 h-5 text-accent' />}
//                 title='Performance First'
//                 description='I prioritize loading speeds and optimization in every application I build.'
//               />
//               <Feature
//                 index={1}
//                 isInView={isInView}
//                 icon={<BookOpen className='w-5 h-5 text-accent' />}
//                 title='Continuous Learner'
//                 description='Staying updated with the latest React features and development improvements.'
//               />
//               <Feature
//                 index={2}
//                 isInView={isInView}
//                 icon={<Coffee className='w-5 h-5 text-accent' />}
//                 title='Problem Solver'
//                 description='I enjoy breaking down complex challenges into manageable, logical components.'
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const Feature = ({ icon, title, description, index, isInView }) => (
//   <motion.div
//     className='flex gap-4'
//     initial={{ opacity: 0, x: 30 }}
//     animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
//     transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
//   >
//     <div className='flex-shrink-0 w-10 h-10 rounded-lg bg-secondary flex items-center justify-center border border-border'>
//       {icon}
//     </div>
//     <div>
//       <h3 className='font-bold text-foreground'>{title}</h3>
//       <p className='text-sm text-muted-foreground mt-1'>{description}</p>
//     </div>
//   </motion.div>
// );

// export default About;

import { motion, useInView } from "framer-motion";
import { BookOpen, Briefcase, Code, Coffee, Heart, Zap } from "lucide-react";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section
      id='about'
      data-cmp='About'
      className='py-24 bg-card/30 overflow-hidden'
      ref={ref}
    >
      <div className='max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Main Content: Hero Style About */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24'>
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
                  My journey into development didn't start in a traditional
                  classroom. It started with curiosity and a desire to build
                  things that exist on the web.
                </p>
                <p>
                  After countless hours of debugging, studying documentation,
                  and building projects from scratch, But finally I joined a
                  BootCamp on
                  <motion.img
                    src='/PH.png'
                    alt='Programming Hero'
                    className='inline-block h-8 ml-2 mr-1 -my-1'
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 10,
                      delay: 1,
                    }}
                  />
                  <br />
                  This journey has not only taught me how to code but has also
                  refined my ability to learn efficiently and adapt quickly to
                  new technologies.
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
                  <h4 className='font-bold text-foreground text-2xl mb-1'>2+</h4>
                  <p className='text-sm text-muted-foreground'>Years Learning</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className='p-4 bg-secondary/50 rounded-lg border border-border'
                >
                  <h4 className='font-bold text-foreground text-2xl mb-1'>10+</h4>
                  <p className='text-sm text-muted-foreground'>Projects Built</p>
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
              Driven by curiosity...
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

        {/* Experience & Hobbies Section */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16 border-t border-border/50'>

          {/* Work Experience - 8 columns on large screens */}
          <motion.div
            className='lg:col-span-6 space-y-8'
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className='text-2xl font-bold flex items-center gap-3 text-foreground'>
              <Briefcase className='text-primary' /> Work Experience
            </h3>

            <div className='space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-border before:to-transparent'>

              {/* Job 1 */}
              <div className='relative pl-12 group'>
                <div className='absolute left-0 top-1 w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center z-10 group-hover:border-primary transition-colors'>
                  <div className='w-3 h-3 bg-primary rounded-full'></div>
                </div>
                <div>
                  <h4 className='text-xl font-bold text-foreground'>Agency Regional Coordinator</h4>
                  <p className='text-primary font-medium'>Integrated Marketing Services (Banglalink Project)</p>
                  <p className='text-sm text-muted-foreground mt-1 italic'>February 2018 — Present</p>
                </div>
              </div>

              {/* Job 2 */}
              <div className='relative pl-12 group'>
                <div className='absolute left-0 top-1 w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center z-10 group-hover:border-primary/50 transition-colors'>
                  <div className='w-3 h-3 bg-muted-foreground/30 rounded-full'></div>
                </div>
                <div>
                  <h4 className='text-xl font-bold text-foreground'>Territory Manager</h4>
                  <p className='text-primary/80 font-medium'>Fair Distributions Ltd. (Samsung Mobile)</p>
                  <p className='text-sm text-muted-foreground mt-1 italic'>August 2015 — January 2018</p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Hobbies - 4 columns on large screens */}
          <motion.div
            className='lg:col-span-6 space-y-6'
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.7 }}
          >
            <h3 className='text-2xl font-bold flex items-center gap-3 text-foreground'>
              <Heart className='text-primary' /> Hobbies
            </h3>
            <div className='bg-card/50 border border-border rounded-2xl p-6 shadow-sm'>
              <p className='text-muted-foreground mb-4 leading-relaxed'>
                When I'm not coding, I'm usually diving into books or exploring new perspectives.
              </p>
              <div className='flex flex-wrap gap-2'>
                {["Sci-Fi", "Fantasy", "Biography", "Geo-political", "Islamic History"].map((hobby) => (
                  <span
                    key={hobby}
                    className='px-3 py-1 bg-secondary text-foreground text-xs font-semibold rounded-full border border-border/50 hover:border-primary/50 transition-colors cursor-default'
                  >
                    {hobby}
                  </span>
                ))}
              </div>
              <div className='mt-6 flex items-center gap-3 text-sm text-muted-foreground italic'>
                <BookOpen size={16} className='text-primary' />
                <span>Currently Interested: Islamic History</span>
              </div>
            </div>
          </motion.div>

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