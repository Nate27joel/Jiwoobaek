import React, { useState, useEffect } from 'react';

const Header = ({ onBook, onPortal, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Our Team', href: '#team' },
    { label: 'Blog', action: () => onNavigate('blog') },
    { label: 'Investment', action: () => onNavigate('investment') },
    { label: 'New Patient', action: () => onNavigate('new-patient') },
  ];

  const handleNavClick = (item) => {
    if (item.href) {
      onNavigate('home');
      setTimeout(() => {
        const el = document.querySelector(item.href);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (item.action) {
      item.action();
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-1' : 'bg-transparent py-6'}`}>
      <div className="max-w-17xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center cursor-pointer group" onClick={() => onNavigate('home')}>
          <div className={`w-7 h-7 rounded-full flex items-center justify-center mr-3 transition-colors ${isScrolled ? 'bg-teal-700' : 'bg-white'}`}>
             <span className={`font-serif font-bold text-xl ${isScrolled ? 'text-white' : 'text-teal-900'}`}>J</span>
          </div>
          <div>
            <h1 className={`text-xl font-serif font-bold tracking-tight transition-colors ${isScrolled ? 'text-teal-950' : 'text-white'}`}>
              Jiwoobaek
            </h1>
            <p className={`text-[10px] uppercase tracking-[0.2em] font-semibold transition-colors ${isScrolled ? 'text-teal-600' : 'text-teal-50'}`}>
              Dermatology Clinic
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center cursor-pointer space-x-10">
          {navItems.map((item) => (
            <button 
              key={item.label} 
              onClick={() => handleNavClick(item)} 
              className={`text-sm font-bold uppercase cursor-pointer tracking-widest hover:text-teal-500 transition-colors ${isScrolled ? 'text-teal-900' : 'text-white'}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Buttons (Desktop) */}
        <div className="flex items-center cursor-pointer space-x-4">
          <button 
            onClick={onPortal}
            className={`hidden md:block text-xs cursor-pointer font-bold uppercase tracking-widest border px-6 py-2.5 rounded-full transition-all ${isScrolled ? 'border-teal-900 text-teal-900 hover:bg-teal-900 hover:text-white' : 'border-white text-white hover:bg-white hover:text-teal-950'}`}
          >
            Patient Portal
          </button>
          
          {/* Hidden on Mobile/Tablet, visible on Desktop */}
          <button 
            onClick={onBook}
            className={`hidden lg:block text-xs font-bold uppercase cursor-pointer tracking-widest px-8 py-2.5 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 ${isScrolled ? 'bg-teal-700 text-white hover:bg-teal-800' : 'bg-white text-teal-950 hover:bg-teal-50'}`}
          >
            Book Appointment
          </button>
          
          {/* Burger Menu Button */}
          <button className="lg:hidden cursor-pointer p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
             <svg className={`w-8 h-8 ${isScrolled ? 'text-teal-900' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
               {mobileMenuOpen ? (
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
               ) : (
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
               )}
             </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl p-6 transition-all">
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <button 
                key={item.label} 
                onClick={() => handleNavClick(item)} 
                className="text-left cursor-pointer text-lg font-serif text-teal-950 border-b border-gray-100 pb-2"
              >
                {item.label}
              </button>
            ))}
            
            {/* Action Buttons in Mobile Menu */}
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => { onPortal(); setMobileMenuOpen(false); }} 
                className="text-center text-sm font-bold uppercase tracking-widest text-teal-700 border border-teal-700 py-3 rounded-full"
              >
                Patient Portal
              </button>
              <button 
                onClick={() => { onBook(); setMobileMenuOpen(false); }} 
                className="text-center text-sm font-bold uppercase tracking-widest bg-teal-700 text-white py-4 rounded-full shadow-lg shadow-teal-200"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;