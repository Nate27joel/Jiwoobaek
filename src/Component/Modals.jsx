import React, { useState } from 'react';

// Base Modal Component used by all specific modals
const BaseModal = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-teal-950/60 backdrop-blur-sm" 
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 max-h-[90vh] flex flex-col">
        <div className="p-8 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
          <h3 className="text-2xl font-serif text-teal-950">{title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

// Appointment Booking Modal
export const BookingModal = ({ isOpen, onClose, onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    location: 'Sarasota Clinic' 
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      onSuccess();
      onClose();
      setFormData({ name: '', email: '', phone: '', location: 'Sarasota Clinic' });
    }, 1500);
  };

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="Request Appointment">
      <form onSubmit={handleSubmit} className="space-y-6">
        <p className="text-gray-500 text-sm">
          Fill out the form below and our scheduling team will contact you shortly.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-teal-700">Full Name</label>
            <input 
              required
              type="text" 
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
              className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-teal-500" 
              placeholder="Jane Doe" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-teal-700">Email Address</label>
            <input 
              required
              type="email" 
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
              className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-teal-500" 
              placeholder="jane@example.com" 
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-teal-700">Phone Number</label>
          <input 
            required
            type="tel" 
            value={formData.phone}
            onChange={e => setFormData({...formData, phone: e.target.value})}
            className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-teal-500" 
            placeholder="(941) 000-0000" 
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] cursor-pointer font-bold uppercase tracking-widest text-teal-700">Preferred Location</label>
          <select 
            value={formData.location}
            onChange={e => setFormData({...formData, location: e.target.value})}
            className="w-full bg-gray-50 cursor-pointer border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-teal-500"
          >
            <option>Sarasota Clinic</option>
            <option>Englewood Annex</option>
          </select>
        </div>
        <button 
          type="submit"
          disabled={loading}
          className="w-full bg-teal-800 text-white py-5 cursor-pointer rounded-full font-bold uppercase tracking-widest text-sm hover:bg-teal-900 shadow-xl transition-all disabled:opacity-50 flex items-center justify-center gap-3"
        >
          {loading ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Processing...
            </>
          ) : 'Submit Request'}
        </button>
      </form>
    </BaseModal>
  );
};

// Patient Portal Modal
export const PortalModal = ({ isOpen, onClose, onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState({ user: '', pass: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSuccess();
      onClose();
      setAuth({ user: '', pass: '' });
    }, 1200);
  };

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="Patient Portal Login">
      <form onSubmit={handleLogin} className="space-y-8 py-4">
        <div className="text-center">
           <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6 text-teal-700">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
           </div>
           <p className="text-gray-500 max-w-xs mx-auto text-sm leading-relaxed">
             Access your medical records, test results, and communicate securely with our clinical team.
           </p>
        </div>
        <div className="space-y-4">
          <input 
            required
            type="text" 
            value={auth.user}
            onChange={e => setAuth({...auth, user: e.target.value})}
            className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-teal-500" 
            placeholder="Username" 
          />
          <input 
            required
            type="password" 
            value={auth.pass}
            onChange={e => setAuth({...auth, pass: e.target.value})}
            className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-teal-500" 
            placeholder="Password" 
          />
        </div>
        <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-teal-700">
          <label className="flex items-center cursor-pointer">
            <input type="checkbox" className="mr-2 rounded cursor-pointer text-teal-800" /> Remember Me
          </label>
          <button type="button" className="hover:text-teal-900 cursor-pointer underline">Forgot Password?</button>
        </div>
        <button 
          type="submit"
          disabled={loading}
          className="w-full bg-teal-800 text-white py-5 rounded-full font-bold uppercase tracking-widest text-sm shadow-xl hover:bg-teal-900 transition-all disabled:opacity-50 flex items-center justify-center gap-3"
        >
          {loading ? (
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          ) : 'Secure Login'}
        </button>
      </form>
    </BaseModal>
  );
};

// Service Details Modal
export const ServiceDetailModal = ({ isOpen, service, onClose, onBook }) => {
  if (!service) return null;
  
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title={service.title}>
      <div className="space-y-8">
        <div className="h-64 rounded-3xl overflow-hidden shadow-inner">
          <img src={service.image} className="w-full h-full object-cover" alt={service.title} />
        </div>
        <div>
           <p className="text-gray-600 leading-relaxed mb-8">{service.longDescription}</p>
           <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-teal-800 mb-6">Treatment Benefits</h4>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             {service.benefits?.map(b => (
               <div key={b} className="flex items-center text-sm text-gray-700 bg-teal-50/50 p-4 rounded-xl">
                 <svg className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                 </svg>
                 {b}
               </div>
             ))}
           </div>
        </div>
        <button 
          onClick={() => { onClose(); onBook(); }} 
          className="w-full bg-teal-800 text-white py-5 rounded-full font-bold uppercase tracking-widest text-sm shadow-xl hover:bg-teal-900 transition-all"
        >
          Inquire About {service.title}
        </button>
      </div>
    </BaseModal>
  );
};

// Doctor Profile Modal
export const DoctorProfileModal = ({ isOpen, doctor, onClose, onBook }) => {
  if (!doctor) return null;
  
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title={doctor.name}>
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
          <div className="w-40 h-40 rounded-full overflow-hidden shadow-xl flex-shrink-0 border-4 border-teal-50">
            <img src={doctor.image} className="w-full h-full object-cover grayscale" alt={doctor.name} />
          </div>
          <div>
            <p className="text-teal-600 font-bold uppercase tracking-widest text-xs mb-4">{doctor.title}</p>
            <p className="text-gray-600 leading-relaxed italic">"{doctor.bio}"</p>
          </div>
        </div>
        
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-teal-800 mb-6">Education & Credentials</h4>
          <ul className="space-y-4">
            {doctor.education.map((edu, idx) => (
              <li key={idx} className="flex items-start text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
                 <div className="w-2 h-2 rounded-full bg-teal-400 mt-1.5 mr-4 flex-shrink-0"></div>
                 {edu}
              </li>
            ))}
          </ul>
        </div>
        
        <button 
          onClick={() => { onClose(); onBook(); }} 
          className="w-full bg-teal-800 cursor-pointer text-white py-5 rounded-full font-bold uppercase tracking-widest text-sm shadow-xl hover:bg-teal-900 transition-all"
        >
          Request Consult with {doctor.name.split(' ').pop()}
        </button>
      </div>
    </BaseModal>
  );
};