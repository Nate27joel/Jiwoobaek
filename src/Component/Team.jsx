import React from 'react';
import { DOCTORS } from '../constants';

const Team = ({ onDoctorSelect, onBook }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold text-teal-600 uppercase tracking-[0.3em] mb-4">
              Board-Certified Specialists
            </h2>
            <p className="text-4xl md:text-5xl font-serif text-teal-950 leading-tight">
              Meet the Experts Behind Your Care
            </p>
          </div>
          <p className="text-gray-500 max-w-sm">
            Our clinicians bring decades of combined experience from the nation's top medical institutions.
          </p>
        </div>

        {/* Doctor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {DOCTORS.map((doctor) => (
            <div 
              key={doctor.id}
              className="flex flex-col lg:flex-row gap-8 items-center bg-teal-50/30 rounded-[2.5rem] p-8 md:p-12 hover:bg-teal-50 transition-colors cursor-pointer group"
              onClick={() => onDoctorSelect(doctor)}
            >
              {/* Doctor Image Container */}
              <div className="w-74 h-80 flex-shrink-10 overflow-hidden rounded-12xl shadow-xl relative">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
               
              </div>

              {/* Doctor Info */}
              <div className="flex-1">
                <h3 className="text-3xl font-serif text-teal-950 mb-1">{doctor.name}</h3>
                <p className="text-teal-600 font-bold text-sm tracking-widest uppercase mb-6">
                  {doctor.title}
                </p>
                
                <div className="space-y-4 mb-8">
                  {doctor.specialties.map((spec) => (
                    <div key={spec} className="flex items-center text-sm text-gray-600 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mr-3"></div>
                      {spec}
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <button 
                    onClick={(e) => { 
                      e.stopPropagation(); 
                      onDoctorSelect(doctor); 
                    }}
                    className="bg-white cursor-pointer border border-teal-100 text-teal-900 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-teal-100 transition-colors"
                  >
                    Profile
                  </button>
                  <button 
                    onClick={(e) => { 
                      e.stopPropagation(); 
                      onBook(); 
                    }}
                    className="flex-1 bg-teal-800 cursor-pointer text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-teal-950 transition-colors shadow-lg"
                  >
                    Schedule
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;