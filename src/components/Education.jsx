import { motion, useInView } from "framer-motion";
import { BookOpen, Calendar, GraduationCap } from "lucide-react";
import { useRef } from "react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const educationData = [
    {
      degree: "Electrical & Electronics Engineering",
      institution: "The Institute of Engineers, Bangladesh (IEB)",
      duration: "2007 - 2013",
      details: "Completed 3 Years / Relevant Coursework",
    },
    {
      degree: "Diploma in Engineering (Computer Technology)",
      institution: "Mymensingh Polytechnic Institute, Bangladesh",
      duration: "2003 - 2007",
      details: "Four years professional diploma focused on software and hardware fundamentals.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="education" className="py-24 bg-secondary/10" ref={ref}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <motion.span
            className="text-primary font-semibold tracking-wider uppercase text-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          >
            Qualifications
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.1 }}
          >
            Educational Background
          </motion.h2>
          <div className="h-1 w-20 bg-primary mt-4 rounded-full"></div>
        </div>

        {/* Education Timeline/List */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-panel p-8 rounded-2xl border border-border shadow-custom bg-card/30 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground leading-tight">
                      {edu.degree}
                    </h3>
                  </div>
                </div>

                <div className="space-y-4 flex-grow">
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
                    <p className="text-lg font-medium text-foreground/80">
                      {edu.institution}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    <span className="text-sm font-semibold px-3 py-1 bg-secondary rounded-full">
                      {edu.duration}
                    </span>
                  </div>

                  <p className="text-muted-foreground mt-4 border-t border-border pt-4 italic">
                    {edu.details}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;