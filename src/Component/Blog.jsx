import React from 'react';
// Note: Ensure your constants file is also .js or .jsx
import { BLOG_POSTS } from '../constants';

const Blog = ({ onBack, onPostSelect }) => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] lg:h-[50vh] flex items-center pt-28 pb-20 lg:pt-24 lg:pb-0 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1920" 
            alt="The Glow Blog" 
            className="w-full h-full object-cover brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-teal-950/60 to-white/10 lg:to-white"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <button 
            onClick={onBack}
            className="flex items-center cursor-pointer text-teal-200 font-bold uppercase tracking-widest text-[10px] mb-8 lg:mb-12 hover:translate-x-[-8px] transition-transform"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
            </svg>
            Back to Home
          </button>
          
          <h2 className="text-[10px] lg:text-sm font-bold text-teal-400 uppercase tracking-[0.3em] mb-4">Patient Education</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
            The Glow <br className="block lg:hidden" />
            <span className="italic font-light">Journal</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl font-light">
            Insightful articles, patient success stories, and the latest in dermatological science from our board-certified experts.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-24 -mt-10 lg:-mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {BLOG_POSTS.map((post, idx) => (
            <article 
              key={post.id}
              onClick={() => onPostSelect(post)}
              className="group bg-white rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 flex flex-col h-full animate-in fade-in slide-in-from-bottom-8"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-56 lg:h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-teal-900 shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 lg:p-10 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4 lg:mb-6">
                  <div className="w-7 h-7 rounded-full bg-teal-50 flex items-center justify-center text-teal-700">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                  </div>
                  <div className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    By {post.author} • {post.date}
                  </div>
                </div>

                <h3 className="text-xl lg:text-2xl font-serif text-teal-950 mb-4 group-hover:text-teal-700 transition-colors leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6 lg:mb-8 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Footer of Card */}
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                  <span className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-teal-600">
                    {post.readTime}
                  </span>
                  <div className="flex items-center text-teal-800 font-bold text-[9px] lg:text-[10px] uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform duration-300">
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 lg:mt-24 bg-teal-900 rounded-[2rem] lg:rounded-[3rem] p-8 lg:p-24 shadow-2xl relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-800 rounded-full blur-3xl opacity-20 -mr-32 -mt-32"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-5xl font-serif text-white mb-6 lg:mb-8 leading-tight">
              Join The Glow Newsletter
            </h2>
            <p className="text-teal-100/70 mb-8 lg:mb-12 text-base lg:text-lg max-w-2xl mx-auto font-light">
              Get exclusive clinical updates and skincare tips delivered to your inbox monthly.
            </p>
            
            <div className="max-w-md mx-auto relative flex flex-col sm:block">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/10 border border-white/20 rounded-full px-6 lg:px-8 py-4 lg:py-5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-teal-400 backdrop-blur-md transition-all mb-4 sm:mb-0"
              />
              <button className="sm:absolute cursor-pointer sm:right-2 sm:top-2 sm:bottom-2 bg-white text-teal-950 px-8 py-4 sm:py-0 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-teal-50 transition-all active:scale-95 shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;