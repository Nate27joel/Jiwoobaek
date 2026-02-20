import React from 'react';
import derma from '../assets/Dematology pic.jfif'

const Hero = ({ onBook, onTeam }) => {
  return (
    <section className="relative min-h-[90vh] lg:h-[95vh] w-full flex items-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={derma} 
          alt="Modern Clinic" 
          className="w-full h-full object-cover brightness-[0.65] lg:brightness-75 animate-[ken-burns_24s_ease-in-out_infinite]"
        />
        {/* Responsive Gradient: Darker on mobile for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-teal-950/80 via-teal-950/50 to-teal-950/80 lg:bg-gradient-to-r lg:from-teal-950/90 lg:via-teal-950/40 lg:to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-white pt-20 lg:pt-0">
        <div className="max-w-3xl animate-in fade-in slide-in-from-left-8 duration-1000">
          
          <span className="inline-block text-teal-200 text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase mb-6 bg-teal-900/40 backdrop-blur-md px-3 py-2 rounded-lg border border-teal-500/20">
            Est. 2009 in Jiwoobaek
          </span>
          
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-serif mb-6 lg:mb-8 leading-[1.1] tracking-tight">
            Advanced Care <br />
            <span className="italic font-light">for your skin.</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-10 lg:mb-12 leading-relaxed font-light max-w-xl">
            Board-certified expertise in medical, surgical, and cosmetic dermatology across the Florida Gulf Coast.
          </p>
          
          {/* Action Buttons: Stack on mobile, side-by-side on tablet+ */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
            <button 
              onClick={onBook}
              className="bg-white text-teal-950 cursor-pointer px-8 lg:px-12 py-4 lg:py-5 rounded-full text-base lg:text-lg font-bold hover:bg-teal-50 transition-all shadow-2xl flex items-center justify-center group"
            >
              Start Consultation
              <svg 
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </button>
            
            <button 
              onClick={onTeam}
              className="bg-transparent cursor-pointer text-white border-2 border-white/30 hover:border-white px-8 lg:px-12 py-4 lg:py-5 rounded-full text-base lg:text-lg font-bold hover:bg-white/10 transition-all flex items-center justify-center"
            >
              Meet Our Consultants
            </button>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator for Desktop */}
      <div className="hidden lg:block absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
         <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full"></div>
         </div>
      </div>
      
      {/* Animation Styles */}
      <style>{`
        @keyframes ken-burns {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default Hero;