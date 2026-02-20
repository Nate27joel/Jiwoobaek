import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin, Phone, Mail } from 'lucide-react';

// Custom WhatsApp Brand Icon SVG
const WhatsAppIcon = ({ size = 18 }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.628 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Footer = ({ onNavigate, onNotify, onOpenBooking }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const response = await fetch("https://formspree.io/f/mvzbqjwe", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ email, type: "Newsletter Signup" })
      });
      if (response.ok) {
        onNotify(`Success! Subscribed to The Glow.`);
        setEmail('');
      }
    } catch (error) {
      onNotify("Connection error.");
    } finally {
      setLoading(false);
    }
  };

  const scrollTo = (id) => {
    onNavigate('home');
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="bg-teal-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Column 1: Info & Contact */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center mb-8 cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                 <span className="font-serif font-bold text-xl text-teal-900">J</span>
              </div>
              <h2 className="text-xl font-serif font-bold tracking-tight">Jiwoobaek Dermatology</h2>
            </div>
            
            <p className="text-teal-100/60 leading-relaxed mb-8 text-sm">
              Compassionate, expert dermatological care tailored to your unique skin needs. Excellence in Florida since 2009.
            </p>

            {/* DIRECT CONTACT INFO */}
            <div className="mb-8 space-y-4">
              <a 
                href="tel:8062314316" 
                className="flex items-center gap-3 text-teal-100/70 hover:text-teal-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-teal-700/50 transition-all">
                  <Phone size={14} className="text-teal-400" />
                </div>
                <span className="text-sm font-medium tracking-wide">(806) 231-4316</span>
              </a>

              <a 
                href="mailto:info@jiwoobaek.com" 
                className="flex items-center gap-3 text-teal-100/70 hover:text-teal-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-teal-700/50 transition-all">
                  <Mail size={14} className="text-teal-400" />
                </div>
                <span className="text-sm font-medium tracking-wide">info@jiwoobaek.com</span>
              </a>
            </div>
            
            {/* WHATSAPP WITH TEXT */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://wa.me/+18088631133"
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-5 rounded-full bg-white/5 flex items-center gap-3 hover:bg-[#25D366] hover:text-white transition-all text-teal-200 border border-white/5 hover:border-transparent"
              >
                <WhatsAppIcon size={20} />
                <span className="text-[11px] font-bold uppercase tracking-widest">WhatsApp</span>
              </a>

              {/* Other socials can remain as circles */}
         
            </div>
          </div>

          {/* Practice Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-teal-400 mb-8">Practice</h3>
            <ul className="space-y-4 text-teal-100/70 text-sm font-medium">
              <li><button onClick={() => scrollTo('services')} className="hover:text-white transition-colors">Our Services</button></li>
              <li><button onClick={() => scrollTo('team')} className="hover:text-white transition-colors">Specialists</button></li>
              <li><button onClick={() => onNavigate('investment')} className="hover:text-white transition-colors text-left font-bold text-teal-300">Investment Opportunities</button></li>
              <li><button onClick={() => scrollTo('locations')} className="hover:text-white transition-colors">Clinic Locations</button></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-teal-400 mb-8">Resources</h3>
            <ul className="space-y-4 text-teal-100/70 text-sm font-medium">
              <li><button onClick={() => onNavigate('blog')} className="hover:text-white transition-colors text-left">Skin Care Blog</button></li>
              <li><button onClick={onOpenBooking} className="hover:text-white transition-colors text-left">Treatment Prep</button></li>
              <li><button onClick={() => onNavigate('new-patient')} className="hover:text-white transition-colors text-left">Insurance Accepted</button></li>
              <li><button onClick={() => onNotify("Downloading HIPAA Privacy Notice...")} className="hover:text-white transition-colors text-left">HIPAA Privacy</button></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-teal-400 mb-8">The Glow Newsletter</h3>
            <p className="text-teal-100/60 text-sm mb-6">Receive curated skin tips and clinic updates directly in your inbox.</p>
            <form onSubmit={handleSubscribe} className="relative">
              <input 
                required
                type="email" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="email@example.com" 
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
              />
              <button 
                type="submit"
                disabled={loading}
                className="absolute right-2 top-2 bottom-2 bg-teal-600 hover:bg-teal-500 text-white px-6 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all disabled:opacity-50"
              >
                {loading ? '...' : 'Join'}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-teal-100/30">
            © 2025 Jiwoobaek Dermatology Clinic. All Rights Reserved.
          </p>
          <div className="flex space-x-8 text-[10px] uppercase tracking-widest text-teal-100/30 font-bold">
            <button onClick={() => onNotify("Opening Privacy Policy...")} className="hover:text-teal-400 transition-colors">Privacy Policy</button>
            <button onClick={() => onNotify("Opening Terms of Service...")} className="hover:text-teal-400 transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;