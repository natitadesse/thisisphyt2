
import React, { useState } from 'react';
import { calculateProfile } from './utils/numerology';
import { NumerologyProfile, NumerologyResult } from './types';
import CalculationForm from './components/CalculationForm';
import Dashboard from './components/Dashboard';
import IntroSection from './components/IntroSection';

const App: React.FC = () => {
  const [profile, setProfile] = useState<NumerologyProfile | null>(null);
  const [results, setResults] = useState<NumerologyResult | null>(null);
  const [view, setView] = useState<'intro' | 'results'>('intro');

  const handleCalculate = (data: NumerologyProfile) => {
    const calc = calculateProfile(data.fullName, data.birthDate);
    setProfile(data);
    setResults(calc as any);
    setView('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-gray-200 flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0c0c0e]/80 backdrop-blur-md border-b border-white/5 py-4">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('intro')}>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-200 flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.3)]">
              <span className="text-black font-bold text-xs">P</span>
            </div>
            <h1 className="font-cinzel text-xl tracking-widest gold-gradient">CELESTIAL</h1>
          </div>
          <div className="flex gap-6 text-sm font-medium tracking-wide uppercase">
            <button onClick={() => setView('intro')} className={`hover:text-amber-400 transition ${view === 'intro' ? 'text-amber-400' : ''}`}>Wisdom</button>
            {results && (
              <button onClick={() => setView('results')} className={`hover:text-amber-400 transition ${view === 'results' ? 'text-amber-400' : ''}`}>Your Profile</button>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-20 px-6 flex-grow">
        <div className="max-w-6xl mx-auto">
          {view === 'intro' ? (
            <div className="space-y-12 animate-in fade-in duration-700">
              <header className="text-center space-y-4 py-12">
                <h2 className="text-5xl md:text-7xl font-cinzel gold-gradient font-bold leading-tight">Master Your Numbers</h2>
                <p className="text-lg md:text-xl text-gray-400 font-serif italic max-w-2xl mx-auto">
                  "Numbers are the highest degree of knowledge. It is knowledge itself." — Plato
                </p>
              </header>

              <div className="max-w-md mx-auto">
                 <CalculationForm onCalculate={handleCalculate} initialData={profile || undefined} />
              </div>

              <IntroSection />
            </div>
          ) : (
            <div className="animate-in slide-in-from-bottom-4 duration-500">
              {results && profile && (
                <Dashboard profile={profile} results={results} onReset={() => setView('intro')} />
              )}
            </div>
          )}
        </div>
      </main>

      {/* Enhanced Footer with Lineage Credits */}
      <footer className="border-t border-white/5 py-16 bg-black/60 mt-auto backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-center md:text-left">
              <h4 className="font-cinzel text-amber-500 text-xs tracking-[0.4em] uppercase">Lineage & Wisdom</h4>
              <p className="text-gray-400 font-serif italic leading-relaxed">
                Pythagorean wisdom shared through the teachings of <br/>
                <span className="text-white font-cinzel tracking-wider not-italic">DR SUHASINI S PINGLE</span>
              </p>
            </div>
            <div className="space-y-4 text-center md:text-right">
              <h4 className="font-cinzel text-amber-500 text-xs tracking-[0.4em] uppercase">Craftsmanship</h4>
              <p className="text-gray-400 font-serif italic leading-relaxed">
                App architectural design and development by <br/>
                <span className="text-white font-cinzel tracking-wider not-italic uppercase">her student</span>
              </p>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-600 text-[10px] font-cinzel tracking-widest uppercase">© 2025 Celestial Numerology. Everything is Number.</p>
            <div className="flex gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500/20"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500/40"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500/20"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
