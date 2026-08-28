import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GitHubCalendar } from "react-github-calendar";

const GithubGraph = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section id="github" className="py-24" ref={ref}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <motion.span
            className="text-primary font-semibold tracking-wider uppercase text-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          >
            Activity
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.1 }}
          >
            GitHub Contribution Graph
          </motion.h2>
          <div className="h-1 w-20 bg-primary mt-4 rounded-full"></div>
        </div>

        <motion.div
          className="glass-panel rounded-2xl border border-border shadow-custom bg-card/30"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          <div className="p-6 sm:p-8 overflow-x-auto flex justify-center">
            <GitHubCalendar
              username="nasirmasud"
              colorScheme="dark"
              blockSize={15}
              blockMargin={4}
              fontSize={14}
              labels={{ totalCount: "{{count}} contributions in this year" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubGraph;
