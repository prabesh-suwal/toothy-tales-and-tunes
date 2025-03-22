
import React, { useEffect, useRef } from 'react';
import { Smile, Heart, BadgeCheck } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      const moveX = (x - 0.5) * 20;
      const moveY = (y - 0.5) * 20;
      
      const elements = heroRef.current.querySelectorAll('.floating-element');
      elements.forEach((element, index) => {
        const factor = (index + 1) * 0.1;
        const htmlElement = element as HTMLElement;
        htmlElement.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden" ref={heroRef}>
      {/* Background decorative elements */}
      <div className="dental-blob floating-element bg-dental-light-blue w-[500px] h-[500px] rounded-full -left-[200px] -top-[100px]"></div>
      <div className="dental-blob floating-element bg-dental-mint w-[400px] h-[400px] rounded-full -right-[100px] -bottom-[100px]"></div>
      <div className="dental-blob floating-element bg-dental-peach w-[300px] h-[300px] rounded-full right-[15%] top-[20%]"></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="inline-block px-3 py-1 rounded-full bg-dental-light-blue text-dental-blue font-medium mb-6 animate-scale-in">
              Pediatric Dental Specialist
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6">
              Creating <span className="text-dental-blue">Healthy Smiles</span> For Children
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Specialized pediatric dental care with a compassionate approach, making dental visits a positive experience for your child.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Book Appointment
              </a>
              <a href="#about" className="px-6 py-3 rounded-full border border-dental-blue text-dental-blue hover:bg-dental-blue hover:text-white transition-all">
                Learn More
              </a>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-6">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-dental-light-blue mr-3">
                  <Smile className="w-5 h-5 text-dental-blue" />
                </div>
                <span className="font-medium">Kid-Friendly Approach</span>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-dental-light-blue mr-3">
                  <Heart className="w-5 h-5 text-dental-blue" />
                </div>
                <span className="font-medium">Compassionate Care</span>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-dental-light-blue mr-3">
                  <BadgeCheck className="w-5 h-5 text-dental-blue" />
                </div>
                <span className="font-medium">Specialized Expertise</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative animate-float">
            <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-dental-blue/20 to-dental-peach/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="Pediatric Dentist with Child" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
                <p className="text-white font-medium">Dedicated to children's dental health</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-dental-peach animate-pulse-gentle"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-dental-mint animate-pulse-gentle" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="shape-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
