import React, { useState } from 'react';
import { LOCATIONS } from '../constants';

const Locations = ({ onNotify }) => {
  const [nearestId, setNearestId] = useState(null);

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    onNotify(`Copied ${label} to clipboard`);
  };

  const findNearest = () => {
    onNotify("Finding nearest clinic...");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        // Simple logic: Sarasota is North (higher latitude) of Englewood
        const id = lat > 27 ? 'sarasota' : 'englewood';
        setNearestId(id);
        onNotify("Found your nearest location!");
        
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
      () => {
        onNotify("Location access denied.");
      }
    );
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-teal-600 uppercase tracking-[0.3em] mb-4">Visit Us</h2>
          <p className="text-4xl md:text-5xl font-serif text-teal-950 mb-8">Prime Gulf Coast Locations</p>
          <button 
            onClick={findNearest}
            className="inline-flex items-center text-xs font-bold uppercase tracking-widest bg-teal-100 text-teal-800 px-6 py-3 rounded-full hover:bg-teal-200 transition-all"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            </svg>
            Find Clinic Near Me
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {LOCATIONS.map((loc) => {
            const encodedAddr = encodeURIComponent(loc.address);
            const directionalUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddr}`;
            const isNearest = nearestId === loc.id;
            
            return (
              <div 
                key={loc.id} 
                id={loc.id}
                className={`bg-white rounded-[3rem] shadow-sm hover:shadow-xl transition-all border group overflow-hidden relative ${isNearest ? 'ring-2 ring-teal-500' : 'border-gray-100'}`}
              >
                {/* Image & Overlay Header */}
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={loc.image} 
                    alt={loc.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-10">
                    <h3 className="text-2xl font-serif text-white">{loc.name}</h3>
                    <p className="text-teal-400 font-bold text-[10px] uppercase tracking-[0.2em]">Florida Gulf Coast</p>
                  </div>
                </div>

                {/* Location Details */}
                <div className="p-10 md:p-12">
                  <div className="space-y-6 mb-12">
                    {/* Address Line */}
                    <div className="flex items-start group/line">
                      <div className="w-5 h-5 text-teal-600 mt-1 mr-4 flex-shrink-0">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-10V4m-5 0V4h5"/>
                        </svg>
                      </div>
                      <p className="text-gray-600 leading-relaxed flex-1">{loc.address}</p>
                      <button 
                        onClick={() => copyToClipboard(loc.address, "address")} 
                        className="opacity-0 group-hover/line:opacity-100 text-teal-600 p-1 hover:bg-teal-50 rounded transition-all"
                        aria-label="Copy address"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 00-2 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/>
                        </svg>
                      </button>
                    </div>

                    {/* Phone Line */}
                    <div className="flex items-start group/line">
                      <div className="w-5 h-5 text-teal-600 mt-1 mr-4 flex-shrink-0">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                      </div>
                      <p className="text-gray-900 font-bold flex-1">{loc.phone}</p>
                      <button 
                        onClick={() => copyToClipboard(loc.phone, "phone number")} 
                        className="opacity-0 group-hover/line:opacity-100 text-teal-600 p-1 hover:bg-teal-50 rounded transition-all"
                        aria-label="Copy phone number"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                        </svg>
                      </button>
                    </div>

                    {/* Hours Line */}
                    <div className="flex items-start">
                      <div className="w-5 h-5 text-teal-600 mt-1 mr-4 flex-shrink-0">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                      <p className="text-gray-600 italic">{loc.hours}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a 
                      href={directionalUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex-1 bg-teal-800 text-white py-4 rounded-full text-center text-xs font-bold uppercase tracking-widest hover:bg-teal-900 transition-colors shadow-lg"
                    >
                      Directions
                    </a>
                    <a 
                      href={`tel:${loc.phone.replace(/\D/g, '')}`} 
                      className="flex-1 border-2 border-teal-800 text-teal-800 py-4 rounded-full text-center text-xs font-bold uppercase tracking-widest hover:bg-teal-50 transition-colors"
                    >
                      Call
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Locations;