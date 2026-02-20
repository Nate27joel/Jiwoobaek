import React, { useState, useEffect } from 'react';
import { SERVICES } from '../constants'

const Services = ({ onServiceSelect, onNotify }) => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState([]);

  // Load favorites from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('Jiwoobaek_favs');
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  const toggleFavorite = (e, id) => {
    e.stopPropagation();
    const isFav = favorites.includes(id);
    const newFavs = isFav 
      ? favorites.filter(f => f !== id) 
      : [...favorites, id];
    
    setFavorites(newFavs);
    localStorage.setItem('Jiwoobaek_favs', JSON.stringify(newFavs));
    onNotify(isFav ? "Removed from favorites" : "Added to favorites");
  };

  const shareService = (e, title) => {
    e.stopPropagation();
    const shareUrl = `${window.location.origin}/#services?name=${encodeURIComponent(title)}`;
    navigator.clipboard.writeText(shareUrl);
    onNotify(`Share link copied for ${title}`);
  };

  const filteredServices = SERVICES.filter(s => {
    const matchesCategory = filter === 'all' || s.category === filter;
    const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          s.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Controls */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-teal-600 uppercase tracking-[0.3em] mb-4">Our Expertise</h2>
          <p className="text-4xl md:text-5xl font-serif text-teal-950">Comprehensive Skin Services</p>
          
          <div className="mt-12 max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-4">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <input 
                type="text" 
                placeholder="Search treatments (e.g. Mohs, Botox)..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-teal-100 rounded-full px-8 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm transition-all"
              />
              <svg className="w-5 h-5 absolute right-6 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
            
            {/* Filter Toggle */}
            <div className="flex p-1 bg-white rounded-full border border-teal-50 shadow-sm">
              {['all', 'medical', 'cosmetic'].map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-6 py-2.5 cursor-pointer rounded-full text-xs font-bold transition-all uppercase tracking-widest ${filter === f ? 'bg-teal-800 text-white' : 'text-teal-800 hover:bg-teal-50'}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredServices.map((service, idx) => (
              <div 
                key={service.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-4 hover:scale-[1.02] cursor-pointer border border-gray-100 animate-in fade-in slide-in-from-bottom-8"
                style={{ animationDelay: `${idx * 100}ms` }}
                onClick={() => onServiceSelect(service)}
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                  />
                  
                  {/* Floating Action Buttons */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-500 ease-out">
                    <button 
                      onClick={(e) => toggleFavorite(e, service.id)}
                      className={`w-10 h-10 rounded-full cursor-pointer shadow-lg flex items-center justify-center transition-all ${favorites.includes(service.id) ? 'bg-rose-500 text-white' : 'bg-white text-gray-400 hover:text-rose-500'}`}
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                      </svg>
                    </button>
                    <button 
                      onClick={(e) => shareService(e, service.title)}
                      className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-400 hover:text-teal-600 transition-all"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                      </svg>
                    </button>
                  </div>

                  {/* Category Tag */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${service.category === 'medical' ? 'bg-teal-100/90 backdrop-blur-sm text-teal-800' : 'bg-rose-100/90 backdrop-blur-sm text-rose-800'}`}>
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <h3 className="text-xl font-serif text-teal-950 mb-3 group-hover:text-teal-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex items-center text-teal-800 font-bold text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300">
                    View Details
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20 bg-white rounded-[3rem] border-2 border-dashed border-teal-50">
            <p className="text-gray-400 font-serif text-xl italic mb-4">
              No treatments found matching "{searchQuery}"
            </p>
            <button 
              onClick={() => {setSearchQuery(''); setFilter('all');}}
              className="text-teal-700 cursor-pointer font-bold uppercase tracking-widest text-xs underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;