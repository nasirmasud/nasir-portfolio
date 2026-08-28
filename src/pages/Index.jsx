import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import GithubGraph from "@/components/GithubGraph";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skill from "@/components/Skill";
import TechStack from "@/components/TechStack";

const Index = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-white'>
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Skill />
        <Projects />
        <About />
        <Education />
        <GithubGraph />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
