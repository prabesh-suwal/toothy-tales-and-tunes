
import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: "Advancements in Pediatric Dental Anesthesia",
      excerpt: "Exploring the latest techniques and safety protocols in pediatric dental anesthesia for anxiety-free treatment experiences.",
      category: "Research",
      author: "Dr. Portfolio",
      date: "August 15, 2023",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      title: "The Impact of Diet on Early Childhood Caries",
      excerpt: "A comprehensive analysis of dietary factors contributing to early childhood caries and evidence-based prevention strategies.",
      category: "Clinical Study",
      author: "Dr. Portfolio",
      date: "July 3, 2023",
      image: "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      title: "Behavior Management Techniques for Special Needs Children",
      excerpt: "Effective approaches to creating positive dental experiences for children with special healthcare needs.",
      category: "Clinical Practice",
      author: "Dr. Portfolio",
      date: "June 21, 2023",
      image: "https://images.unsplash.com/photo-1559000357-f6b52ddfbe37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
    }
  ];
  
  const featuredPost = {
    title: "Innovations in Preventive Pediatric Dentistry: A Review of Current Evidence",
    excerpt: "This comprehensive review examines the latest innovations in preventive pediatric dentistry, including novel remineralization agents, advanced diagnostic technologies, and minimally invasive treatment approaches. The paper synthesizes current evidence to provide clinical recommendations for contemporary preventive practice in pediatric dental care.",
    category: "Featured Research",
    author: "Dr. Portfolio",
    date: "September 5, 2023",
    image: "https://images.unsplash.com/photo-1574336307441-129665de4a8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1679&q=80"
  };

  return (
    <section id="blog" className="relative py-24 bg-dental-cream/20">
      <div className="dental-blob bg-dental-mint/40 w-[350px] h-[350px] rounded-full -right-[150px] bottom-[10%]"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">Blog & Research</h2>
          <p className="section-subtitle mx-auto">Insights, research findings, and practical information on pediatric dental health.</p>
        </div>
        
        {/* Featured Post */}
        <div className="dental-card overflow-hidden mb-16 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-dental-blue text-white text-xs font-medium">
                  {featuredPost.category}
                </span>
                <div className="flex items-center text-muted-foreground text-xs">
                  <User className="w-3 h-3 mr-1" />
                  {featuredPost.author}
                </div>
                <div className="flex items-center text-muted-foreground text-xs">
                  <Calendar className="w-3 h-3 mr-1" />
                  {featuredPost.date}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
              <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
              <a 
                href="#" 
                className="inline-flex items-center text-dental-blue hover:text-opacity-80 font-medium"
              >
                Read Full Paper
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Recent Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={index} 
              className="dental-card overflow-hidden group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <span className="px-3 py-1 rounded-full bg-dental-blue text-white text-xs font-medium m-4">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 transition-colors group-hover:text-dental-blue">{post.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-dental-blue hover:text-opacity-80 text-sm font-medium"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="btn-primary">View All Publications</a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
