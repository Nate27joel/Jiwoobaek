import React, { useState } from 'react';
import Header from './Component/Header'
import Hero from './Component/Hero';
import Services from './Component/Services';
import Team from './Component/Team';
import Locations from './Component/Locations';
import Footer from './Component/Footer';
import NewPatient from './Component/NewPatient';


import { 
  BookingModal, 
  PortalModal, 
  ServiceDetailModal, 
  DoctorProfileModal 
} from './Component/Modals';

const App = () => {
  // --- State Management ---
  const [view, setView] = useState('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // --- Handlers ---
  const openBooking = () => setIsBookingOpen(true);
  const openPortal = () => setIsPortalOpen(true);
  const openService = (service) => setSelectedService(service);
  const openDoctor = (doctor) => setSelectedDoctor(doctor);
  
  const handleNavigate = (newView) => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <Header 
        onBook={openBooking} 
        onPortal={openPortal} 
        onNavigate={handleNavigate} 
      />
      
      <main>
        {view === 'home' ? (
          <div className="animate-in fade-in duration-500">
            {/* 1. Hero Section */}
            <Hero 
              onBook={openBooking} 
              onTeam={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })} 
            />
            
            {/* 2. Key Stats Section */}
            <section className="py-12 bg-white border-b border-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <p className="text-3xl font-serif text-teal-800">20k+</p>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mt-2">Patients Treated</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-serif text-teal-800">15+</p>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mt-2">Years of Excellence</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-serif text-teal-800">2</p>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mt-2">State-of-Art Clinics</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-serif text-teal-800">98%</p>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mt-2">Patient Satisfaction</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Services Grid */}
            <Services onServiceSelect={openService} />
            
            {/* 4. Cosmetic CTA Image Section */}
            <section className="relative py-32 overflow-hidden group">
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1920&h=600" 
                  alt="Skin Rejuvenation" 
                  className="w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-teal-950/40"></div>
              </div>
              <div className="relative max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Rediscover Your Glow</h2>
                <p className="text-xl text-white/80 mb-10 leading-relaxed">
                  Experience our curated suite of cosmetic treatments designed to enhance your natural beauty. 
                  From anti-aging solutions to texture refinement.
                </p>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-teal-900 px-10 py-4 rounded-full text-lg font-bold hover:bg-teal-50 transition-all shadow-2xl"
                >
                  Explore Cosmetic Menu
                </button>
              </div>
            </section>

            {/* 5. Team Section */}
            <Team onDoctorSelect={openDoctor} />
            
            {/* 6. Testimonials */}

            {/* 7. Locations Section */}
            <Locations />
            
            {/* 8. Final Call-to-Action */}
            <section className="py-24 bg-white">
              <div className="max-w-5xl mx-auto px-4 text-center bg-teal-50 rounded-[3rem] p-12 md:p-20 shadow-sm border border-teal-100">
                <h2 className="text-3xl md:text-5xl font-serif text-teal-950 mb-6">Ready to schedule your consultation?</h2>
                <p className="text-teal-800/60 mb-10 text-lg">We welcome new patients at both our Sarasota and Englewood locations.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button 
                    onClick={openBooking}
                    className="bg-teal-800 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-teal-900 transition-all shadow-xl"
                  >
                    Book Online Now
                  </button>
                  <a 
                    href="tel:9419244400"
                    className="bg-white text-teal-800 border-2 border-teal-800 px-10 py-4 rounded-full text-lg font-bold hover:bg-teal-50 transition-all text-center"
                  >
                    Call (941) 924-4400
                  </a>
                </div>
              </div>
            </section>
          </div>
        ) : (
          /* New Patient View */
          <NewPatient onBack={() => handleNavigate('home')} onBook={openBooking} />
        )}
      </main>
      
      {/* Footer & Floating AI */}
      <Footer onNavigate={handleNavigate} />
      
      
      {/* --- Modals --- */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
      
      <PortalModal 
        isOpen={isPortalOpen} 
        onClose={() => setIsPortalOpen(false)} 
      />
      
      <ServiceDetailModal 
        isOpen={!!selectedService} 
        service={selectedService} 
        onClose={() => setSelectedService(null)} 
        onBook={openBooking} 
      />
      
      <DoctorProfileModal
        isOpen={!!selectedDoctor}
        doctor={selectedDoctor}
        onClose={() => setSelectedDoctor(null)}
        onBook={openBooking}
      />
    </div>
  );
};

export default App;