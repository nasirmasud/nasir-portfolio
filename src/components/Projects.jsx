import { motion } from "framer-motion"; // Framer Motion ইম্পোর্ট করা হয়েছে
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description:
        "A comprehensive analytics dashboard for online retailers with real-time data visualization and inventory management features.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      tags: ["React", "TypeScript", "Tailwind", "Recharts"],
      demoLink: "#",
      repoLink: "#",
    },
    {
      title: "Task Master",
      description:
        "A drag-and-drop kanban style task management application. Features sticky notes, categorization, and local storage persistence.",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2372&auto=format&fit=crop",
      tags: ["React", "DND Kit", "Zustand", "Vite"],
      demoLink: "#",
      repoLink: "#",
    },
    {
      title: "Crypto Tracker",
      description:
        "Live cryptocurrency price tracking application using the CoinGecko API. Includes historical charts and portfolio simulation.",
      image:
        "https://images.unsplash.com/photo-1621504450168-b8c4375361aa?q=80&w=2369&auto=format&fit=crop",
      tags: ["Next.js", "React Query", "Chart.js", "API"],
      demoLink: "#",
      repoLink: "#",
    },
  ];

  // Container এনিমেশন ভ্যারিয়েন্ট
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // প্রতিটি কার্ড ০.২ সেকেন্ড পর পর আসবে
      },
    },
  };

  // প্রতিটি কার্ডের জন্য ভ্যারিয়েন্ট
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id='projects' data-cmp='Projects' className='py-24 bg-card/30'>
      <div className='max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4'
        >
          <div>
            <span className='text-primary font-semibold tracking-wider uppercase text-sm'>
              Portfolio
            </span>
            <h2 className='text-3xl sm:text-4xl font-bold mt-2'>
              Featured Projects
            </h2>
          </div>
          <motion.a
            whileHover={{ x: 5 }}
            href='#'
            className='text-muted-foreground hover:text-primary transition-colors flex items-center gap-1'
          >
            View all projects &rarr;
          </motion.a>
        </motion.div>

        {/* Project Cards Grid with Stagger Effect */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }} // ২০% স্ক্রিনে আসলেই এনিমেশন শুরু হবে
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
