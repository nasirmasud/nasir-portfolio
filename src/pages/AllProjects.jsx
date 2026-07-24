import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProjectCard from "@/components/ProjectCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects = [
  {
    title: "GameHub | Modern Video Game Discovery App",
    description:
      "This high-performance Single Page Application allows users to explore a massive database of over 500,000 games. The application prioritizes a seamless user experience through real-time search capabilities and dynamic filtering by genre or platform. Built with a modular, service-based architecture, it utilizes custom hooks for efficient data management and clean fetching logic. To ensure a polished look across all devices, the interface features a fully responsive grid layout, optimized image delivery, integrated critic scores, and a toggleable dark/light mode.",
    image: "/game-hub.png",
    tags: ["React", "TypeScript", "Tailwind", "Vite", "Chakra UI"],
    demoLink: "https://rawg-game-hub-api.netlify.app/",
    repoLink: "https://github.com/nasirmasud/gameHub/",
  },
  {
    title: "Next Properties | A Modern Real Estate Platform",
    description:
      "Next Properties is a full-stack property rental and sales platform built with Next.js. It allows users to browse, search, and manage properties, save their favorites, and communicate with property owners through an integrated messaging system. The app features user authentication, detailed property profiles with image galleries, location-based maps, and a user-friendly interface for both buyers/renters and property managers.",
    image: "/next-properties.png",
    tags: ["Next.js", "MongoDB", "NextAuth.js", "Tailwind", "Cloudinary"],
    demoLink: "https://next-properties-seven.vercel.app/",
    repoLink: "https://github.com/nasirmasud/next-properties/",
  },
  {
    title: "Next Weather | A Weather Application",
    description:
      "A weather application that allows users to search for locations, view current weather conditions with detailed information, and explore forecasts. The app displays temperature, wind speed, and other meteorological data with a clean, responsive interface.",
    image: "/next-weather.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Radix UI",
      "Zod",
      "NextAuth.js",
      "Prisma ORM",
      "PostgreSQL",
    ],
    demoLink: "https://next-weather-gold.vercel.app/",
    repoLink: "https://github.com/nasirmasud/next-weather/",
  },
  {
    title: "Next Ecommerce | A FullStack eCommerce Platform",
    description:
      "Next Ecommerce is a comprehensive, full-stack commerce solution designed to provide a seamless end-to-end shopping experience through a high-performance, server-side rendered storefront. The platform bridges the gap between customer engagement and operational management, featuring a dynamic product catalog with real-time cart calculations, integrated user reviews, and a secure multi-step checkout process. Beyond the consumer interface, it includes a robust administrative dashboard for real-time analytics, order tracking, and inventory control. Built with a focus on modern UX standards, the application ensures high accessibility and performance across all devices, complete with automated email notifications, secure payment processing, and native dark mode support.",
    image: "/next-ecommerce.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Radix UI",
      "Zod",
      "NextAuth.js",
      "Prisma ORM",
      "PostgreSQL",
    ],
    demoLink: "https://next-ecommerce-coral-rho.vercel.app/",
    repoLink: "https://github.com/nasirmasud/next-ecommerce/",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AllProjects = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-white'>
      <Navbar />
      <main className='py-24'>
        <div className='max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='mb-12'
          >
            <Link
              to='/'
              className='text-primary hover:underline font-semibold text-sm mb-4 inline-block'
            >
              &larr; Back to Home
            </Link>
            <h1 className='text-3xl sm:text-4xl font-bold'>All Projects</h1>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AllProjects;
