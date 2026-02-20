import React, { useState } from 'react';

const NewPatient = ({ onBack, onBook, onNotify }) => {
  const [completedSteps, setCompletedSteps] = useState([]);
  
  // Expanded state for insurance form
  const [insuranceData, setInsuranceData] = useState({
    patientName: '',
    patientEmail: '',
    providerName: ''
  });
  const [isVerifying, setIsVerifying] = useState(false);

  const steps = [
    { title: 'Schedule', desc: 'Call our office or book online for an initial consultation.' },
    { title: 'Paperwork', desc: 'Complete your intake forms digitally via our secure portal.' },
    { title: 'Visit', desc: 'Arrive 15 minutes early for your first skin evaluation.' }
  ];

  const handleToggleStep = (idx) => {
    const newSteps = completedSteps.includes(idx) 
      ? completedSteps.filter(s => s !== idx)
      : [...completedSteps, idx];
    setCompletedSteps(newSteps);
    if (!completedSteps.includes(idx)) onNotify(`Step ${idx + 1} completed!`);
  };

  const handleDownload = (doc) => {
    onNotify(`Preparing download for: ${doc}...`);
    setTimeout(() => {
      onNotify(`${doc} downloaded successfully.`);
    }, 1500);
  };

  // REAL FORM SUBMISSION LOGIC
  const checkInsurance = async (e) => {
    e.preventDefault();
    if (!insuranceData.providerName || isVerifying) return;
    
    setIsVerifying(true);
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvzbqjwe";

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          subject: `Insurance Verification Request: ${insuranceData.providerName}`,
          ...insuranceData
        })
      });

      if (response.ok) {
        onNotify(`Verification request sent for ${insuranceData.providerName}. We will contact you shortly.`);
        setInsuranceData({ patientName: '', patientEmail: '', providerName: '' });
      } else {
        onNotify("Submission failed. Please try again.");
      }
    } catch (error) {
      onNotify("Connection error. Please check your internet.");
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="relative min-h-[50vh] lg:h-[80vh] flex items-center pt-32 pb-20 lg:pt-24 lg:pb-0 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-teal-950">
          <img 
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1920" 
            alt="Dermatology" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-teal-950/80 via-teal-950/60 to-white lg:to-white"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <button 
            onClick={onBack}
            className="flex items-center text-teal-200 cursor-pointer font-bold uppercase tracking-widest text-[10px] lg:text-xs mb-8 lg:mb-12 hover:translate-x-[-8px] transition-transform"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
            </svg>
            Back to Home
          </button>
          <h2 className="text-[10px] lg:text-sm font-bold text-teal-400 uppercase tracking-[0.3em] mb-4">Patient Care</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">Welcome to <br className="hidden md:block"/> Our Practice</h1>
          <p className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl font-light">
            We are dedicated to providing a seamless onboarding experience. Follow the journey below to get started.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-24 -mt-10 lg:-mt-20 relative z-20">
        {/* Progress Bar Container */}
        <div className="mb-12 lg:mb-20 max-w-4xl mx-auto">
           <div className="w-full h-1.5 bg-gray-100 rounded-full mb-8 lg:mb-12 relative overflow-hidden">
             <div 
               className="absolute top-0 left-0 h-full bg-teal-600 shadow-[0_0_15px_rgba(13,148,136,0.5)] transition-all duration-700" 
               style={{ width: `${(completedSteps.length / steps.length) * 100}%` }}
             ></div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, idx) => {
              const isDone = completedSteps.includes(idx);
              return (
                <div 
                  key={idx} 
                  onClick={() => handleToggleStep(idx)}
                  className={`relative p-8 lg:p-10 rounded-[2rem] lg:rounded-[2.5rem] border-2 transition-all cursor-pointer group shadow-lg lg:shadow-xl ${isDone ? 'bg-teal-50 border-teal-200' : 'bg-white border-gray-100 hover:border-teal-100'}`}
                >
                  <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center mb-6 lg:mb-8 transition-all ${isDone ? 'bg-teal-600 text-white shadow-lg shadow-teal-200' : 'bg-gray-50 text-gray-400 group-hover:bg-teal-100 group-hover:text-teal-600'}`}>
                    {isDone ? (
                      <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                      </svg>
                    ) : (
                      <span className="font-serif font-bold text-xl lg:text-2xl">{idx + 1}</span>
                    )}
                  </div>
                  <h3 className={`text-xl font-serif mb-3 lg:mb-4 ${isDone ? 'text-teal-900' : 'text-teal-950'}`}>{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Insurance Check Tool - UPDATED WITH FORM SUBMIT */}
        <div className="bg-teal-950 rounded-[2.5rem] lg:rounded-[3rem] p-8 lg:p-16 mb-16 lg:mb-24 shadow-2xl overflow-hidden relative group max-w-5xl mx-auto">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-serif text-white mb-4 text-center">Insurance Quick-Check</h3>
            <p className="text-teal-100/70 text-sm mb-8 text-center">Enter your details and our billing team will verify your coverage.</p>
            
            <form onSubmit={checkInsurance} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  required
                  type="text" 
                  value={insuranceData.patientName}
                  onChange={e => setInsuranceData({...insuranceData, patientName: e.target.value})}
                  placeholder="Your Full Name"
                  className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-teal-400 backdrop-blur-md transition-all"
                />
                <input 
                  required
                  type="email" 
                  value={insuranceData.patientEmail}
                  onChange={e => setInsuranceData({...insuranceData, patientEmail: e.target.value})}
                  placeholder="Email Address"
                  className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-teal-400 backdrop-blur-md transition-all"
                />
              </div>
              <div className="relative">
                <input 
                  required
                  type="text" 
                  value={insuranceData.providerName}
                  onChange={e => setInsuranceData({...insuranceData, providerName: e.target.value})}
                  placeholder="Insurance Provider (e.g. BlueCross, Aetna)"
                  className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-teal-400 backdrop-blur-md transition-all"
                />
              </div>
              <button 
                type="submit"
                disabled={isVerifying}
                className="w-full bg-teal-500 text-white py-5 rounded-full font-bold uppercase tracking-widest hover:bg-teal-400 transition-all disabled:bg-gray-600 flex items-center justify-center gap-3"
              >
                {isVerifying ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : 'Submit Verification Request'}
              </button>
            </form>
            <p className="text-[9px] uppercase tracking-[0.3em] text-teal-100/30 text-center mt-6">A staff member will contact you within 24 hours.</p>
          </div>
        </div>

        {/* Downloads Grid */}
        <div className="bg-gray-50 rounded-[2.5rem] lg:rounded-[3rem] p-8 lg:p-16 border border-gray-100 mb-16 lg:mb-20 relative overflow-hidden max-w-5xl mx-auto">
          <h3 className="text-2xl lg:text-3xl font-serif text-teal-950 mb-8 lg:mb-12 text-center">Essential Paperwork</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8">
            {['Patient Registration', 'Medical History', 'HIPAA Notice', 'Insurance Verification'].map(doc => (
              <button 
                key={doc} 
                onClick={() => handleDownload(doc)}
                className="flex items-center p-5 lg:p-8 bg-white rounded-[1.5rem] lg:rounded-3xl shadow-sm border border-gray-100 group hover:border-teal-400 hover:shadow-xl transition-all text-left"
              >
                <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-teal-100 flex items-center justify-center text-teal-700 mr-4 lg:mr-6 shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2h-1"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[11px] lg:text-sm font-bold text-teal-950 uppercase tracking-widest block mb-1 truncate">{doc}</span>
                  <span className="text-[9px] text-gray-400 uppercase tracking-widest">Digital PDF</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <button 
            onClick={onBook}
            className="w-full sm:w-auto bg-teal-800 text-white px-16 py-6 rounded-full text-base lg:text-lg font-bold hover:bg-teal-900 transition-all shadow-2xl active:scale-95"
          >
            Schedule Your Visit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPatient;