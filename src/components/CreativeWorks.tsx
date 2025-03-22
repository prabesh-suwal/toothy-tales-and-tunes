
import React, { useState } from 'react';
import { BookOpen, Music, PenTool, ChevronRight } from 'lucide-react';

const CreativeWorks: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'poems' | 'songs' | 'stories'>('poems');
  
  const creativeWorks = {
    poems: [
      {
        title: "Toothy Adventures",
        excerpt: "A journey through the land of smiles, where teeth shine bright for miles and miles...",
        date: "June 2023"
      },
      {
        title: "Brave Little Molars",
        excerpt: "Standing strong through thick and thin, these mighty molars always win...",
        date: "April 2023"
      },
      {
        title: "The Dental Fairy",
        excerpt: "With gentle wings and caring heart, the dental fairy plays her part...",
        date: "January 2023"
      }
    ],
    songs: [
      {
        title: "Brush, Brush, Smile",
        excerpt: "A catchy tune about the importance of brushing twice a day with proper technique.",
        date: "May 2023"
      },
      {
        title: "The Flossing Dance",
        excerpt: "An engaging song that teaches children the correct flossing technique through movement.",
        date: "March 2023"
      },
      {
        title: "Healthy Teeth, Happy Me",
        excerpt: "A cheerful melody celebrating the connection between oral health and overall wellbeing.",
        date: "December 2022"
      }
    ],
    stories: [
      {
        title: "Captain Molar's First Visit",
        excerpt: "Join Captain Molar on his first adventure to the dental kingdom, where he discovers the importance of regular check-ups.",
        date: "July 2023"
      },
      {
        title: "The Case of the Missing Toothbrush",
        excerpt: "A dental detective story about solving the mystery of the disappearing toothbrush and the importance of dental hygiene.",
        date: "February 2023"
      },
      {
        title: "Incisors in Space",
        excerpt: "An imaginative tale about teeth traveling through space and learning about different foods and their effects on dental health.",
        date: "October 2022"
      }
    ]
  };
  
  const tabIcons = {
    poems: <PenTool className="w-5 h-5" />,
    songs: <Music className="w-5 h-5" />,
    stories: <BookOpen className="w-5 h-5" />
  };

  return (
    <section id="creative" className="relative py-16 bg-white"> {/* Reduced padding from py-24 to py-16 */}
      <div className="dental-blob bg-dental-cream/60 w-[300px] h-[300px] rounded-full -left-[100px] top-[20%]"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12"> {/* Reduced margin from mb-16 to mb-12 */}
          <h2 className="section-title">Creative Works</h2>
          <p className="section-subtitle mx-auto">Explore my collection of dental-themed creative writings that make oral health education engaging for children.</p>
        </div>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8"> {/* Reduced margin from mb-12 to mb-8 */}
          {(['poems', 'songs', 'stories'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center px-6 py-3 rounded-full transition-all ${
                activeTab === tab
                  ? 'bg-dental-blue text-white shadow-md'
                  : 'bg-dental-light-blue/30 text-dental-blue hover:bg-dental-light-blue'
              }`}
            >
              <span className="mr-2">{tabIcons[tab]}</span>
              <span className="capitalize">{tab}</span>
            </button>
          ))}
        </div>
        
        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Reduced gap from gap-8 to gap-6 */}
          {creativeWorks[activeTab].map((work, index) => (
            <div 
              key={index}
              className="dental-card overflow-hidden group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-36 bg-gradient-to-r from-dental-blue to-dental-light-blue flex items-center justify-center p-8"> {/* Reduced height from h-40 to h-36 */}
                <div className="text-4xl text-white font-serif font-bold">{work.title.charAt(0)}</div>
              </div>
              <div className="p-5"> {/* Reduced padding from p-6 to p-5 */}
                <span className="inline-block px-3 py-1 rounded-full bg-dental-mint text-dental-blue text-xs font-medium mb-2"> {/* Reduced margin from mb-3 to mb-2 */}
                  {activeTab.charAt(0).toUpperCase() + activeTab.slice(1, -1)}
                </span>
                <h3 className="text-xl font-bold mb-2">{work.title}</h3> {/* Reduced margin from mb-3 to mb-2 */}
                <p className="text-muted-foreground text-sm mb-3">{work.excerpt}</p> {/* Reduced margin from mb-4 to mb-3 */}
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">{work.date}</span>
                  <button className="flex items-center text-dental-blue hover:text-opacity-80 text-sm font-medium transition-all">
                    Read more
                    <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center"> {/* Reduced margin from mt-16 to mt-12 */}
          <a href="#" className="btn-primary">View All Works</a>
        </div>
      </div>
    </section>
  );
};

export default CreativeWorks;
