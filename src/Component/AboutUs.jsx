import React from 'react';

const AboutUs = ({ onMeetTeam }) => {
  return (
    <section id="about" className="py-24 bg-teal-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Side */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" 
                alt="Clinical Precision" 
                className="rounded-[3rem] shadow-2xl w-full h-[600px] object-cover"
              />
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[2.5rem] shadow-xl max-w-xs hidden md:block border border-teal-50">
                <p className="text-teal-800 font-serif text-xl italic mb-2">
                  "Skin health is the foundation of confidence."
                </p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-teal-600">
                  — Jiwoo Kyung Baek
                </p>
              </div>
            </div>
            {/* Decorative background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-teal-100/20 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-teal-600 uppercase tracking-[0.3em] mb-6">Our Legacy</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-teal-950 mb-8 leading-tight">
              Founded on the principle of precision & care.
            </h3>
            
            <div className="space-y-8 text-gray-600 leading-relaxed mb-10">
              <p>
                Established in 2009, Jiwoobaek Dermatology Clinic began with a singular vision: 
                to bring world-class dermatological expertise to the Chipyeong-dong, Seo-gu, Gwangju Coast without 
                sacrificing the personal touch of a boutique practice.
              </p>
              
              <div>
                <h4 className="text-teal-900 font-bold uppercase tracking-widest text-xs mb-4">The Philosophy</h4>
                <p>
                  We believe that dermatology is both a science and an art. Our philosophy centers on 
                  "The Balanced Glow"—treating medical concerns with absolute clinical precision 
                  while approaching aesthetic enhancements with a conservative, natural-focused eye. 
                  We don't just treat skin; we care for the person behind it.
                </p>
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-teal-600 mr-4 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="block font-bold text-teal-950 text-xs uppercase tracking-widest mb-1">Evidence Based</span>
                    <span className="text-xs text-gray-500">Only the latest FDA-approved technologies.</span>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-teal-600 mr-4 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="block font-bold text-teal-950 text-xs uppercase tracking-widest mb-1">Compassionate Care</span>
                    <span className="text-xs text-gray-500">Personalized treatment plans for every patient.</span>
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={onMeetTeam}
              className="bg-teal-800 text-white px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-teal-950 transition-all shadow-lg hover:-translate-y-1"
            >
              Meet Our Consultants
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;