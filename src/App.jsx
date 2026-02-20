import React, { useState, useEffect } from 'react';
import Header from './Component/Header'
import Hero from './Component/Hero';
import AboutUs from './Component/AboutUs';
import Services from './Component/Services';
import Team from './Component/Team';
import Locations from './Component/Locations';
import Footer from './Component/Footer';
import NewPatient from './Component/NewPatient';
import Blog from './Component/Blog';
import Investment from './Component/Investment';
import TestimonialCarousel from './Component/TestimonialCarousel';
import { BookingModal } from './Component/Modals';
import './App.css'

import { SERVICES, DOCTORS } from './constants';

const App = () => {
  const [view, setView] = useState('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState(null);
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 4000);
  };

  const openBooking = () => setIsBookingOpen(true);
  const openPortal = () => setIsPortalOpen(true);
  const openService = (service) => setSelectedService(service);
  const openDoctor = (doctor) => setSelectedDoctor(doctor);
  
  const handleNavigate = (newView) => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToId = (id) => {
    if (view !== 'home') {
      setView('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white selection:bg-teal-100 selection:text-teal-900">
      {/* Dynamic Notification Toast - Responsive width */}
      {notification && (
        <div className="fixed top-20 lg:top-24 left-1/2 -translate-x-1/2 z-[300] w-[90%] max-w-md animate-in slide-in-from-top-4 duration-300">
          <div className={`px-6 py-4 rounded-2xl lg:rounded-full shadow-2xl flex items-center gap-3 border ${notification.type === 'success' ? 'bg-teal-900 border-teal-700 text-white' : 'bg-white border-teal-100 text-teal-900'}`}>
            <div className={`w-2 h-2 rounded-full shrink-0 ${notification.type === 'success' ? 'bg-teal-400' : 'bg-teal-600'} animate-pulse`}></div>
            <span className="text-xs lg:text-sm font-bold tracking-tight">{notification.message}</span>
          </div>
        </div>
      )}

      <Header onBook={openBooking} onPortal={openPortal} onNavigate={handleNavigate} />
      
      <main>
        {view === 'home' && (
          <div className="animate-in fade-in duration-500">
            <Hero onBook={openBooking} onTeam={() => scrollToId('team')} />
            
            {/* Stats Section */}
            <section className="py-16 lg:py-24 bg-white overflow-hidden border-b border-gray-50">
              <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                  <div className="w-full lg:w-1/2 order-2 lg:order-1">
                    <h2 className="text-[10px] lg:text-sm font-bold text-teal-600 uppercase tracking-[0.3em] mb-4 lg:mb-6">Unmatched Excellence</h2>
                    <h3 className="text-3xl lg:text-5xl font-serif text-teal-950 mb-8 lg:mb-10 leading-tight">Trusted by the Gulf Coast for over a decade.</h3>
                    <div className="grid grid-cols-2 gap-x-6 lg:gap-x-12 gap-y-8 lg:gap-y-10">
                      {[
                        { val: '20k+', label: 'Patients Treated' },
                        { val: '15+', label: 'Years in Practice' },
                        { val: '2', label: 'Modern Facilities' },
                        { val: '98%', label: 'Satisfaction Rate' }
                      ].map((stat) => (
                        <button key={stat.label} onClick={() => scrollToId('about')} className="group text-left focus:outline-none">
                          <p className="text-3xl lg:text-5xl font-serif text-teal-800 transition-transform group-hover:scale-105 mb-1">{stat.val}</p>
                          <p className="text-[9px] lg:text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold">{stat.label}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 relative order-1 lg:order-2">
                    <div className="absolute inset-0 bg-teal-50 rounded-[2rem] lg:rounded-[3rem] translate-x-3 translate-y-3"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000" 
                      alt="Modern Clinic Lobby" 
                      className="relative z-10 w-full h-[300px] lg:h-[500px] object-cover rounded-[2rem] lg:rounded-[3rem] shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </section>

            <AboutUs onMeetTeam={() => scrollToId('team')} />

            <div id="services">
              <Services onServiceSelect={openService} onNotify={(m) => showNotification(m, 'info')} />
            </div>
            
            {/* Mid-Page CTA Section */}
            <section className="relative py-24 lg:py-48 overflow-hidden group">
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1920" 
                  alt="Skin Rejuvenation" 
                  className="w-full h-full object-cover brightness-[0.4] group-hover:scale-105 transition-transform duration-[3s]" 
                />
              </div>
              <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
                <span className="text-teal-200 uppercase tracking-[0.3em] text-[10px] lg:text-sm font-bold mb-4 block">The Cosmetic Collection</span>
                <h2 className="text-4xl lg:text-7xl font-serif mb-6 lg:mb-8 leading-tight">Rediscover Your Glow</h2>
                <p className="text-base lg:text-xl text-white/80 mb-10 lg:mb-12 leading-relaxed max-w-2xl mx-auto font-light">
                  Experience our curated suite of cosmetic treatments designed to enhance your natural beauty. 
                </p>
                <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center">
                  <button onClick={() => scrollToId('services')} className="w-full sm:w-auto bg-white text-teal-950 px-10 py-4 lg:py-5 rounded-full text-base font-bold hover:bg-teal-50 transition-all shadow-xl active:scale-95">
                    Explore Treatment Menu
                  </button>
                  <button onClick={openBooking} className="w-full sm:w-auto bg-teal-600 text-white border-2 border-teal-500/50 px-10 py-4 lg:py-5 rounded-full text-base font-bold flex items-center justify-center gap-2 active:scale-95">
                    Book Now
                  </button>
                </div>
              </div>
            </section>

            <div id="team">
              <Team onDoctorSelect={openDoctor} onBook={openBooking} />
            </div>
            
            <TestimonialCarousel />

            {/* Atmosphere Gallery */}
            <section className="py-16 lg:py-24 bg-white">
              <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="text-center mb-10 lg:mb-16">
                  <h2 className="text-[10px] lg:text-sm font-bold text-teal-600 uppercase tracking-[0.3em] mb-3">Atmosphere</h2>
                  <p className="text-3xl lg:text-5xl font-serif text-teal-950">Where Science Meets Serenity</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                  <div className="md:col-span-2 h-[250px] lg:h-[400px] rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden group cursor-pointer" onClick={() => scrollToId('locations')}>
                    <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="h-[250px] lg:h-[400px] rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden group cursor-pointer" onClick={() => scrollToId('services')}>
                    <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="h-[250px] lg:h-[400px] rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden group cursor-pointer" onClick={() => scrollToId('team')}>
                    <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="md:col-span-2 h-[250px] lg:h-[400px] rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden group cursor-pointer" onClick={() => handleNavigate('new-patient')}>
                    <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                </div>
              </div>
            </section>

            <div id="locations">
              <Locations onNotify={(m) => showNotification(m, 'info')} />
            </div>
            
            {/* Final CTA Card */}
            <section className="py-16 lg:py-32 bg-white">
              <div className="max-w-6xl mx-auto px-6 sm:px-8">
                <div className="bg-teal-900 rounded-[2rem] lg:rounded-[3rem] p-10 lg:p-24 shadow-2xl relative overflow-hidden text-center">
                  <div className="relative z-10 text-white">
                    <h2 className="text-3xl lg:text-6xl font-serif mb-6 lg:mb-8 leading-tight">Begin Your Skin Journey</h2>
                    <p className="text-teal-100/70 mb-10 lg:mb-12 text-lg font-light max-w-2xl mx-auto">We welcome new patients at both our Sarasota and Englewood locations.</p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 lg:gap-6">
                      <button onClick={openBooking} className="w-full sm:w-auto bg-white text-teal-950 px-10 py-5 rounded-full text-base font-bold shadow-xl active:scale-95">
                        Book Online Now
                      </button>
                      <a href="tel:9419244400" className="w-full sm:w-auto text-white border-2 border-white/20 px-10 py-4.5 rounded-full text-base font-bold flex items-center justify-center gap-2 active:scale-95">
                        (806) 231-4316
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
        
        {/* Conditional Sub-Views */}
        {view === 'new-patient' && (
          <NewPatient onBack={() => handleNavigate('home')} onBook={openBooking} onNotify={(m) => showNotification(m, 'info')} />
        )}
        {view === 'blog' && (
          <Blog onBack={() => handleNavigate('home')} onPostSelect={(post) => { setSelectedBlogPost(post); showNotification(`Opening: ${post.title}`, 'info'); }} />
        )}
        {view === 'investment' && (
          <Investment onBack={() => handleNavigate('home')} onNotify={(m) => showNotification(m)} />
        )}
      </main>
      
      <Footer onNavigate={handleNavigate} onNotify={(m) => showNotification(m)} onOpenBooking={openBooking} />
      
      {/* Modals Container */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} onSuccess={() => showNotification("Appointment request sent successfully!")} />
    </div>
  );
};

export default App;