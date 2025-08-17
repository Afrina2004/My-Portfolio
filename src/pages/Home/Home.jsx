import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import Banner from '../Banner/Banner';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';
import About from '../About/About';
import { Helmet } from 'react-helmet';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="bg-black">
      <Helmet>
        <title>Mossammat Afrina Khanam</title>
      </Helmet>

      <Navbar />

      <div className="max-w-6xl mx-auto space-y-10 pt-12 ">
        
        <section id="introduction">
          <Banner />
        </section>

<div className="border-b" />
        <section id="about">
          <About />
        </section>
    
  <div className="border-b px-2" />
        <section id="skills">
          <Skills />
        </section>

  <div className="border-b" />
        <section id="projects">
          <Projects />
        </section>

  <div className="border-b" />
        <section id="contact">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Home;
