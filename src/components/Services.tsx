
import React from 'react';
import { Smile, Shield, Activity, HeartPulse, Stethoscope, BarChart3 } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Smile className="w-10 h-10 text-dental-blue" />,
      title: "Preventive Dentistry",
      description: "Comprehensive preventive care including cleanings, sealants, and fluoride treatments tailored for children."
    },
    {
      icon: <Shield className="w-10 h-10 text-dental-blue" />,
      title: "Gentle Restorative Care",
      description: "Child-friendly restorative procedures including fillings and crowns using minimal-anxiety techniques."
    },
    {
      icon: <Activity className="w-10 h-10 text-dental-blue" />,
      title: "Behavior Management",
      description: "Specialized approaches to help children feel comfortable and confident during dental visits."
    },
    {
      icon: <HeartPulse className="w-10 h-10 text-dental-blue" />,
      title: "Special Needs Dentistry",
      description: "Accommodative care for children with special healthcare needs in a supportive environment."
    },
    {
      icon: <Stethoscope className="w-10 h-10 text-dental-blue" />,
      title: "Emergency Dental Care",
      description: "Prompt and compassionate emergency dental services for children with urgent dental needs."
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-dental-blue" />,
      title: "Growth & Development",
      description: "Monitoring and guidance for proper dental and facial development throughout childhood."
    }
  ];

  return (
    <section id="services" className="relative py-16 bg-dental-mint/30"> {/* Reduced padding from py-24 to py-16 */}
      <div className="dental-blob bg-dental-peach/40 w-[400px] h-[400px] rounded-full -right-[200px] top-[10%]"></div>
      <div className="dental-blob bg-dental-light-blue/40 w-[350px] h-[350px] rounded-full -left-[150px] bottom-[10%]"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12"> {/* Reduced margin from mb-16 to mb-12 */}
          <h2 className="section-title">My Services</h2>
          <p className="section-subtitle mx-auto">Specialized pediatric dental services delivered with expertise and compassion.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Reduced gap from gap-8 to gap-6 */}
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass dental-card p-6 hover:translate-y-[-8px] transition-all duration-300" /* Reduced padding from p-8 to p-6 */
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-dental-light-blue mb-4"> {/* Reduced margin from mb-6 to mb-4 */}
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3> {/* Reduced margin from mb-4 to mb-3 */}
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center"> {/* Reduced margin from mt-16 to mt-12 */}
          <a href="#contact" className="btn-primary">Schedule a Consultation</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
