
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Bookmark, Trophy, Music, Palette, BookMarked } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Achievements: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation for the floating tooth
    const tooth = document.querySelector('.animated-tooth') as HTMLElement;
    if (tooth) {
      let direction = 1;
      let position = 0;
      const animate = () => {
        if (position > 20) direction = -1;
        if (position < 0) direction = 1;
        position += direction * 0.2;
        tooth.style.transform = `translateY(${position}px)`;
        requestAnimationFrame(animate);
      };
      animate();
    }
  }, []);

  const educationItems = [
    {
      title: "Master's in Pediatric Dentistry",
      institution: "BPKHS",
      year: "2024 - Present",
      description: "Specialized study in pediatric dental care and management"
    },
    {
      title: "Bachelor in Dental Surgery",
      institution: "Dental College",
      year: "Completed",
      description: "Comprehensive dental education with focus on general dentistry"
    },
    {
      title: "Internship",
      institution: "Dental Hospital",
      year: "2 Years",
      description: "Hands-on practical experience in various dental procedures and patient care"
    }
  ];

  const certifications = [
    {
      title: "Pediatric Dental Management",
      issuer: "Dental Association",
      year: "2023"
    },
    {
      title: "Child Psychology in Dental Care",
      issuer: "Psychology Institute",
      year: "2022"
    },
    {
      title: "Advanced Pediatric Oral Techniques",
      issuer: "International Dental Federation",
      year: "2021"
    }
  ];

  const hobbies = [
    {
      name: "Writing Poetry",
      icon: <BookMarked className="w-5 h-5 text-dental-blue" />,
      description: "Creating verses that express emotions and observations about life"
    },
    {
      name: "Composing Songs",
      icon: <Music className="w-5 h-5 text-dental-blue" />,
      description: "Writing lyrics and melodies for my own enjoyment and sometimes performances"
    },
    {
      name: "Painting",
      icon: <Palette className="w-5 h-5 text-dental-blue" />,
      description: "Creating visual art, especially watercolors depicting nature and people"
    }
  ];

  const achievements = [
    {
      title: "Excellence in Pediatric Care",
      organization: "Dental Society",
      year: "2023"
    },
    {
      title: "Best Dental Research Paper",
      organization: "Dental Research Conference",
      year: "2022"
    },
    {
      title: "Outstanding Intern Award",
      organization: "University Hospital",
      year: "2021"
    }
  ];

  return (
    <section id="achievements" className="relative py-20 bg-dental-mint/30">
      {/* Interactive cartoon tooth animation */}
      <div className="absolute top-10 right-10 animated-tooth">
        <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 10C40 10 30 15 25 25C20 35 15 50 20 65C25 80 35 90 50 90C65 90 75 80 80 65C85 50 80 35 75 25C70 15 60 10 50 10Z" fill="#FFFFFF" stroke="#62B6CB" strokeWidth="3" />
          <path d="M40 40C42 42 48 42 50 40" stroke="#62B6CB" strokeWidth="2" strokeLinecap="round" />
          <path d="M60 40C58 42 52 42 50 40" stroke="#62B6CB" strokeWidth="2" strokeLinecap="round" />
          <path d="M50 50C55 55 55 60 50 65C45 60 45 55 50 50Z" fill="#FEC6A1" />
        </svg>
      </div>

      {/* Bouncing toothbrush animation */}
      <motion.div 
        className="absolute bottom-10 left-10 hidden lg:block"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="60" height="15" rx="5" fill="#BEE9E8" />
          <rect x="50" y="20" width="40" height="15" rx="1" fill="#62B6CB" />
          <rect x="20" y="35" width="5" height="45" fill="#62B6CB" />
        </svg>
      </motion.div>

      <div className="section-container" ref={containerRef}>
        <div className="text-center mb-16">
          <h2 className="section-title">Achievements & Interests</h2>
          <p className="section-subtitle mx-auto">My educational journey, professional accomplishments, and personal hobbies.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6 flex items-center">
              <BookOpen className="mr-3 text-dental-blue" /> Education & Qualifications
            </h3>
            <div className="space-y-6">
              {educationItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-5 rounded-lg shadow-md"
                >
                  <h4 className="font-bold text-lg">{item.title}</h4>
                  <div className="flex justify-between text-sm text-muted-foreground mb-2">
                    <span>{item.institution}</span>
                    <span>{item.year}</span>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-bold mb-6 flex items-center">
              <Award className="mr-3 text-dental-blue" /> Certifications & Achievements
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start bg-white p-4 rounded-lg shadow-md"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-dental-light-blue mr-4 flex-shrink-0">
                    <Bookmark className="w-5 h-5 text-dental-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold">{cert.title}</h4>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{cert.issuer}</span>
                      <span>{cert.year}</span>
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="border-t border-gray-200 my-6 pt-6">
                <h4 className="text-xl font-serif font-bold mb-4 flex items-center">
                  <Trophy className="mr-2 text-dental-blue" /> Awards & Honors
                </h4>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-dental-cream p-4 rounded-lg"
                    >
                      <h5 className="font-bold">{achievement.title}</h5>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{achievement.organization}</span>
                        <span>{achievement.year}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-serif font-bold mb-8 text-center">My Hobbies & Interests</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center p-4">
                      <div className="w-16 h-16 rounded-full bg-dental-light-blue flex items-center justify-center mb-4">
                        {hobby.icon}
                      </div>
                      <h4 className="font-bold text-lg mb-2">{hobby.name}</h4>
                      <p className="text-muted-foreground">{hobby.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
