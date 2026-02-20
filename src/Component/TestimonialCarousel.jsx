import React, { useState } from 'react';
import { TESTIMONIALS } from '../constants';

const TestimonialCarousel = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="py-32 bg-teal-950 text-white overflow-hidden relative">
      {/* Decorative Background Grid */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 0 L100 0 L100 100 L0 100 Z" fill="url(#grid)" />
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        {/* Rating Section */}
        <div className="mb-12">
          <div className="flex justify-center space-x-1 mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg 
                key={star} 
                className="w-6 h-6 text-teal-400 fill-current" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
          </div>
          <h2 className="text-sm font-bold text-teal-400 uppercase tracking-[0.4em] mb-4">
            Patient Voices
          </h2>
        </div>

        {/* Testimonial Content */}
        <div className="relative min-h-[300px] flex flex-col items-center justify-center">
          <div 
            key={activeIdx} 
            className="animate-in fade-in duration-700 text-3xl md:text-5xl font-serif leading-tight italic mb-12"
          >
            "{TESTIMONIALS[activeIdx].text}"
          </div>
          
          <div>
            <p className="text-xl font-serif text-white">{TESTIMONIALS[activeIdx].author}</p>
            <p className="text-teal-400 text-xs font-bold uppercase tracking-[0.2em] mt-2">
              Verified Patient • {TESTIMONIALS[activeIdx].location}
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center cursor-pointer space-x-6 mt-16">
          <button 
            onClick={prev} 
            className="w-14 h-14 cursor-pointer rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <button 
            onClick={next} 
            className="w-14 h-14 cursor-pointer rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;