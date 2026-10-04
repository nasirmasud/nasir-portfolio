import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import GithubGraph from "@/components/GithubGraph";
import HorizontalScroll from "@/components/HorizontalScroll";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-clip selection:bg-primary/30 selection:text-white'>
      <Navbar />
      <main>
        <HorizontalScroll />
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
