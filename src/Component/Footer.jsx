import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Footer = ({ onNavigate, onNotify, onOpenBooking }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  // REAL FORM SUBMISSION LOGIC
  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvzbqjwe"; 

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          subject: "New Newsletter Subscription: The Glow",
          email: email,
          type: "Newsletter Signup"
        })
      });

      if (response.ok) {
        onNotify(`Success! ${email} has been subscribed to The Glow.`);
        setEmail(''); // Clear input on success
      } else {
        onNotify("Subscription failed. Please try again later.");
      }
    } catch (error) {
      onNotify("Connection error. Please check your network.");
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

  // Social Media Configuration
  const socialLinks = [
    { icon: <Facebook size={18} />, label: 'Facebook', action: () => onNotify("Redirecting to Facebook...") },
    { 
      icon: <MessageCircle size={18} />, 
      label: 'Whatsapp', 
      href: 'https://wa.me/+1(808) 863-1133' 
    },
    { icon: <Instagram size={18} />, label: 'Instagram', action: () => onNotify("Redirecting to Instagram...") },
    { icon: <Linkedin size={18} />, label: 'LinkedIn', action: () => onNotify("Redirecting to LinkedIn...") },
  ];

  return (
    <footer className="bg-teal-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center mb-8 cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                 <span className="font-serif font-bold text-xl text-teal-900">J</span>
              </div>
              <h2 className="text-xl font-serif font-bold tracking-tight">Jiwoobaek Dermatology Clinic</h2>
            </div>
            <p className="text-teal-100/60 leading-relaxed mb-8 text-sm">
              Compassionate, expert dermatological care tailored to your unique skin needs. Excellence in Florida since 2009.
            </p>
            
            <div className="flex space-x-4">
               {socialLinks.map((social) => (
                 social.href ? (
                   <a 
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-teal-700 hover:text-white transition-all text-teal-200"
                   >
                     {social.icon}
                   </a>
                 ) : (
                   <button 
                    key={social.label} 
                    onClick={social.action} 
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-teal-700 hover:text-white transition-all text-teal-200"
                  >
                    {social.icon}
                   </button>
                 )
               ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-teal-400 mb-8">Practice</h3>
            <ul className="space-y-4 text-teal-100/70 text-sm font-medium">
              <li><button onClick={() => scrollTo('services')} className="hover:text-white transition-colors">Our Services</button></li>
              <li><button onClick={() => scrollTo('team')} className="hover:text-white transition-colors">Specialists</button></li>
              <li><button onClick={() => onNavigate('investment')} className="hover:text-white transition-colors text-left font-bold text-teal-300">Investment Opportunities</button></li>
              <li><button onClick={() => onNotify("Opening patient gallery...")} className="hover:text-white transition-colors text-left">Patient Stories</button></li>
              <li><button onClick={() => scrollTo('locations')} className="hover:text-white transition-colors">Clinic Locations</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-teal-400 mb-8">Resources</h3>
            <ul className="space-y-4 text-teal-100/70 text-sm font-medium">
              <li><button onClick={() => onNavigate('blog')} className="hover:text-white transition-colors text-left">Skin Care Blog</button></li>
              <li><button onClick={onOpenBooking} className="hover:text-white transition-colors text-left">Treatment Prep</button></li>
              <li><button onClick={() => onNotify("Opening FAQ modal...")} className="hover:text-white transition-colors text-left">FAQs</button></li>
              <li><button onClick={() => onNotify("Downloading HIPAA Privacy Notice...")} className="hover:text-white transition-colors text-left">HIPAA Privacy</button></li>
              <li><button onClick={() => onNavigate('new-patient')} className="hover:text-white transition-colors text-left">Insurance Accepted</button></li>
            </ul>
          </div>

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
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              />
              <button 
                type="submit"
                disabled={loading}
                className="absolute right-2 cursor-pointer top-2 bottom-2 bg-teal-600 hover:bg-teal-500 text-white px-6 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all disabled:opacity-50 min-w-[70px]"
              >
                {loading ? '...' : 'Join'}
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-teal-100/30">
            © 2025 Jiwoobaek Dermatology Clinic. All Rights Reserved.
          </p>
          <div className="flex space-x-8 text-[10px] uppercase tracking-widest text-teal-100/30 font-bold">
            <button onClick={() => onNotify("Opening Privacy Policy...")} className="hover:text-teal-400 transition-colors">Privacy Policy</button>
            <button onClick={() => onNotify("Opening Terms of Service...")} className="hover:text-teal-400 transition-colors">Terms of Service</button>
            <button onClick={() => onNotify("Opening Accessibility options...")} className="hover:text-teal-400 transition-colors">Accessibility</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;