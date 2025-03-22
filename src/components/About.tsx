
import React from 'react';
import { GraduationCap, BookOpen, Award, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mx-auto">Dedicated to providing exceptional pediatric dental care with a gentle touch.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Pediatric Dentist" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dental-blue/30 to-transparent"></div>
            </div>
            
            {/* Experience card */}
            <div className="absolute -bottom-8 -right-8 glass p-6 rounded-2xl shadow-lg max-w-[220px]">
              <div className="flex items-center mb-3">
                <Clock className="w-5 h-5 text-dental-blue mr-2" />
                <h3 className="font-bold text-lg">Experience</h3>
              </div>
              <p className="text-sm text-muted-foreground">Over 2+ years of specialized pediatric dental experience.</p>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-dental-mint animate-pulse-gentle"></div>
          </div>
          
          <div>
            <h3 className="text-3xl font-serif font-bold mb-6">Hi, I'm Dr. Portfolio</h3>
            <p className="text-muted-foreground mb-6">
              I am a dedicated pediatric dentist with a passion for creating positive dental experiences for children. With a focus on preventive care and gentle treatment approaches, I strive to establish a foundation for lifelong oral health.
            </p>
            <p className="text-muted-foreground mb-8">
              Beyond my clinical practice, I actively contribute to pediatric dental research and enjoy creative writing that helps children understand dental care in an engaging way.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-dental-light-blue mr-4 mt-1 flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-dental-blue" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Education</h4>
                  <p className="text-sm text-muted-foreground">Bachelor in Dental Surgery<br/>Masters in Pediatric Dentistry (Ongoing)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-dental-light-blue mr-4 mt-1 flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-dental-blue" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Internship</h4>
                  <p className="text-sm text-muted-foreground">2 years of specialized pediatric dental practice at leading institutions</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-dental-light-blue mr-4 mt-1 flex-shrink-0">
                  <Award className="w-5 h-5 text-dental-blue" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Specialization</h4>
                  <p className="text-sm text-muted-foreground">Pediatric dental care with focus on behavior management and preventive approaches</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-dental-light-blue mr-4 mt-1 flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-dental-blue" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Current Study</h4>
                  <p className="text-sm text-muted-foreground">Masters in Pediatric Dentistry at BPKHS (2024)</p>
                </div>
              </div>
            </div>
            
            <a href="#contact" className="btn-primary inline-block">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
