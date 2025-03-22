
import React from 'react';
import { Heart, Instagram, Twitter, Linkedin, FacebookIcon } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dental-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6">Dr. Portfolio</h3>
            <p className="text-dental-light-blue mb-6">
              Specialized pediatric dental care with a focus on creating positive experiences for children.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-dental-light-blue hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-dental-light-blue hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#services" className="text-dental-light-blue hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#creative" className="text-dental-light-blue hover:text-white transition-colors">Creative Works</a>
              </li>
              <li>
                <a href="#blog" className="text-dental-light-blue hover:text-white transition-colors">Blog & Research</a>
              </li>
              <li>
                <a href="#contact" className="text-dental-light-blue hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-dental-light-blue hover:text-white transition-colors">Preventive Dentistry</a>
              </li>
              <li>
                <a href="#" className="text-dental-light-blue hover:text-white transition-colors">Restorative Care</a>
              </li>
              <li>
                <a href="#" className="text-dental-light-blue hover:text-white transition-colors">Behavior Management</a>
              </li>
              <li>
                <a href="#" className="text-dental-light-blue hover:text-white transition-colors">Special Needs Dentistry</a>
              </li>
              <li>
                <a href="#" className="text-dental-light-blue hover:text-white transition-colors">Emergency Care</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="text-dental-light-blue">
                BPKHS Dental Department<br/>
                Dharan, Nepal
              </li>
              <li className="text-dental-light-blue">
                contact@pedodontistportfolio.com
              </li>
              <li className="text-dental-light-blue">
                +977 123 456 7890
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-dental-light-blue text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Dr. Portfolio. All rights reserved.
          </p>
          <p className="text-dental-light-blue text-sm flex items-center">
            Made with <Heart className="w-4 h-4 mx-1 text-dental-peach" /> for children's dental health
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
