
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Achievements from '@/components/Achievements';
import CreativeWorks from '@/components/CreativeWorks';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll implementation for the navigation links
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 80, // Adjust for navbar height
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <div className="space-y-12"> {/* Added a container with reduced spacing */}
        <About />
        <Services />
        <Achievements />
        <CreativeWorks />
        <Blog />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
