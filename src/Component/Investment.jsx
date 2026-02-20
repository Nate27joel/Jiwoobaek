import React, { useState } from 'react';

const Investment = ({ onBack, onNotify }) => {
  const [inquiry, setInquiry] = useState({ 
    name: '', 
    organization: '', 
    amount: '5M+', 
    email: '',
    purpose: '' // Added purpose to state
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
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
          subject: `New Investment Inquiry from ${inquiry.organization}`,
          ...inquiry
        })
      });

      if (response.ok) {
        onNotify("Confidential inquiry submitted. Our partnership team will contact you within 48 hours.");
        // Reset form including the new purpose field
        setInquiry({ name: '', organization: '', amount: '5M+', email: '', purpose: '' });
      } else {
        onNotify("There was an error submitting your request. Please try again.");
      }
    } catch (error) {
      onNotify("Connection error. Please check your internet and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    onNotify("Downloading 2025 Strategic Expansion Deck (Confidential)...");
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] lg:h-[100vh] flex items-center pt-32 pb-20 lg:pt-24 lg:pb-0 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920" 
            alt="Clinical Corporate" 
            className="w-full h-full object-cover brightness-[0.25] lg:brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-teal-950/90 via-teal-950/60 to-white lg:to-white"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <button 
            onClick={onBack}
            className="flex items-center text-teal-200 font-bold uppercase tracking-widest text-[10px] lg:text-xs mb-8 lg:mb-12 hover:translate-x-[-8px] transition-transform"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
            </svg>
            Back to Home
          </button>
          
          <div className="max-w-3xl">
            <h2 className="text-[10px] lg:text-sm font-bold text-teal-400 uppercase tracking-[0.3em] mb-4">Strategic Partnership</h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 lg:mb-8 leading-tight">
              The Future of <br className="hidden md:block" />
              <span className="italic font-light">Gulf Coast Dermatology.</span>
            </h1>
            <p className="text-lg lg:text-2xl text-white/80 leading-relaxed mb-10 lg:mb-12 font-light">
              Capitalizing on Florida's shifting demographics and the increasing demand for high-acuity medical dermatology and premium aesthetics.
            </p>
            <button 
              onClick={handleDownload}
              className="w-full sm:w-auto bg-white text-teal-950 px-10 py-5 rounded-full text-[10px] lg:text-sm font-bold uppercase tracking-widest hover:bg-teal-50 transition-all shadow-2xl flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Download Pitch Deck
            </button>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto px-6 pb-24 -mt-16 lg:-mt-24 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20 lg:mb-24">
          {[
            { label: 'Market Opportunity', val: '22% YoY', desc: 'Growth in specialized skin cancer treatment demand.' },
            { label: 'Patient Retention', val: '94.2%', desc: 'Industry-leading continuity of care across locations.' },
            { label: 'Asset Value', val: 'Proprietary', desc: 'Customized clinical workflows and EMR optimizations.' }
          ].map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 lg:p-12 rounded-[2rem] lg:rounded-[2.5rem] shadow-xl lg:shadow-2xl border border-teal-50 group hover:border-teal-400 transition-all animate-in slide-in-from-bottom-8" 
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <p className="text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.3em] text-teal-600 mb-6">{stat.label}</p>
              <h3 className="text-4xl lg:text-5xl font-serif text-teal-950 mb-4 group-hover:translate-x-2 transition-transform origin-left">{stat.val}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Scalability and Form Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-24">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-serif text-teal-950 mb-8 leading-tight">Clinical Scalability & Vision</h2>
            <div className="space-y-6 lg:space-y-8">
              {[
                { title: 'Regional Monopoly', text: 'Securing prime real estate in high-growth Florida coastal corridors.' },
                { title: 'Specialized High-Margin', text: 'Focus on Mohs surgery and advanced laser aesthetics creates unique EBITDA leverage.' },
                { title: 'Tech-First Operations', text: 'Fully integrated digital patient journey reducing overhead and improving throughput.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 lg:gap-6">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-teal-900 flex items-center justify-center text-white flex-shrink-0 font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-serif text-lg lg:text-xl text-teal-900 mb-2">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-teal-950 p-8 lg:p-12 rounded-[2rem] lg:rounded-[3rem] shadow-2xl text-white">
              <h3 className="text-2xl lg:text-3xl font-serif mb-8">Confidential Inquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-5 lg:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
                  <div className="space-y-2">
                    <label className="text-[9px] lg:text-[10px] uppercase font-bold tracking-widest text-teal-400">Principal Name</label>
                    <input 
                      required
                      type="text" 
                      value={inquiry.name}
                      onChange={e => setInquiry({...inquiry, name: e.target.value})}
                      placeholder="e.g. Robert Vance"
                      className="w-full bg-white/10 border border-white/20 rounded-xl lg:rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] lg:text-[10px] uppercase font-bold tracking-widest text-teal-400">Inquiry Range</label>
                    <div className="relative">
                      <select 
                        value={inquiry.amount}
                        onChange={e => setInquiry({...inquiry, amount: e.target.value})}
                        className="w-full bg-white/10 cursor-pointer border border-white/20 rounded-xl lg:rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all appearance-none text-white"
                      >
                        <option value="1M - 5M" className="bg-teal-950">1M - 5M</option>
                        <option value="5M - 15M" className="bg-teal-950">5M - 15M</option>
                        <option value="15M+" className="bg-teal-950">15M+</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-teal-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[9px] lg:text-[10px] uppercase font-bold tracking-widest text-teal-400">Organization / Fund</label>
                  <input 
                    required
                    type="text" 
                    value={inquiry.organization}
                    onChange={e => setInquiry({...inquiry, organization: e.target.value})}
                    placeholder="Venture Capital Group"
                    className="w-full bg-white/10 border border-white/20 rounded-xl lg:rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] lg:text-[10px] uppercase font-bold tracking-widest text-teal-400">Direct Email</label>
                  <input 
                    required
                    type="email" 
                    value={inquiry.email}
                    onChange={e => setInquiry({...inquiry, email: e.target.value})}
                    placeholder="principal@firm.com"
                    className="w-full bg-white/10 border border-white/20 rounded-xl lg:rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all text-white"
                  />
                </div>

                {/* NEW FIELD: Purpose of Inquiry */}
                <div className="space-y-2">
                  <label className="text-[9px] lg:text-[10px] uppercase font-bold tracking-widest text-teal-400">Purpose of Inquiry</label>
                  <textarea 
                    required
                    rows="3"
                    value={inquiry.purpose}
                    onChange={e => setInquiry({...inquiry, purpose: e.target.value})}
                    placeholder="Briefly describe the nature of your interest or specific strategic questions..."
                    className="w-full bg-white/10 border border-white/20 rounded-xl lg:rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all text-white resize-none placeholder:text-white/30"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-white cursor-pointer text-teal-950 py-4 lg:py-5 rounded-full font-bold uppercase tracking-widest text-[10px] lg:text-sm hover:bg-teal-50 transition-all disabled:opacity-50 flex items-center justify-center gap-3 active:scale-[0.98]"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-teal-900/30 border-t-teal-900 rounded-full animate-spin"></div>
                  ) : 'Submit Letter of Intent'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investment;