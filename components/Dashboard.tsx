
import React, { useState } from 'react';
import { NumerologyProfile, NumerologyResult } from '../types';
import InterpretationCard from './InterpretationCard';
import { getExpressionDescription } from '../utils/numerology';
import { generateSoulManuscript } from '../utils/pdfGenerator';

interface Props {
  profile: NumerologyProfile;
  results: NumerologyResult;
  onReset: () => void;
}

const Dashboard: React.FC<Props> = ({ profile, results, onReset }) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = () => {
    setIsGenerating(true);
    setTimeout(() => {
      generateSoulManuscript(results, profile);
      setIsGenerating(false);
    }, 500);
  };

  const SectionHeader = ({ title, subtitle, number }: { title: string, subtitle: string, number: string }) => (
    <div className="mb-12 space-y-2 border-l-4 border-amber-500 pl-6">
      <span className="text-amber-500/50 font-cinzel text-xs tracking-[0.3em] uppercase">{number}</span>
      <h3 className="text-3xl font-cinzel text-white uppercase tracking-[0.2em]">{title}</h3>
      <p className="text-xs text-gray-500 font-serif italic max-w-2xl">{subtitle}</p>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto space-y-24 animate-in fade-in duration-1000">
      {/* HEADER */}
      <header className="relative py-16 text-center card-glass rounded-[3rem] border-white/10">
        <div className="absolute top-6 right-8">
           <button 
             onClick={handleDownload}
             disabled={isGenerating}
             className="px-8 py-3 rounded-full bg-amber-500 text-black font-cinzel text-[10px] font-bold uppercase tracking-widest hover:bg-amber-400 transition shadow-[0_0_20px_rgba(245,158,11,0.3)]"
           >
             {isGenerating ? 'Drafting PDF...' : 'Download Full Soul Analysis (PDF)'}
           </button>
        </div>
        <div className="space-y-6 pt-16 md:pt-0">
          <div className="flex justify-center items-center gap-4">
             <div className="h-[1px] w-12 bg-amber-500/30"></div>
             <p className="text-amber-500 font-cinzel text-xs tracking-[0.5em] uppercase">Vibrational Signature</p>
             <div className="h-[1px] w-12 bg-amber-500/30"></div>
          </div>
          <h2 className="text-5xl md:text-8xl font-cinzel gold-gradient font-bold tracking-tight">{profile.fullName}</h2>
          <p className="text-gray-500 font-serif italic text-lg">Teachings of Dr. Suhasini S. Pingle</p>
          
          <div className="flex justify-center items-center gap-12 mt-12 flex-wrap">
            <div className="text-center">
              <span className="block text-[10px] text-gray-500 font-cinzel uppercase tracking-widest mb-1">4. Soul Key</span>
              <span className="text-4xl text-white font-cinzel">{results.elements.keyNumber}</span>
            </div>
            <div className="text-center">
              <span className="block text-[10px] text-gray-500 font-cinzel uppercase tracking-widest mb-1">19. Dominant Element</span>
              <span className="text-4xl text-white font-cinzel">{results.elements.dominant}</span>
            </div>
            <div className="text-center">
              <span className="block text-[10px] text-gray-500 font-cinzel uppercase tracking-widest mb-1">20. The Cipher</span>
              <span className="text-4xl text-white font-cinzel">∞</span>
            </div>
          </div>
        </div>
      </header>

      {/* COLOR ANALYSIS */}
      <section className="space-y-12">
        <SectionHeader number="CHAMBER VI" title="Vibrational Color Spectrum" subtitle="The specific chromatic frequencies associated with your core vibrations." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { label: "25. Life Path Color", data: results.colorAnalysis.lifePathColor },
             { label: "26. Expression Color", data: results.colorAnalysis.expressionColor },
             { label: "27. Soul Urge Color", data: results.colorAnalysis.soulUrgeColor }
           ].map((item, i) => (
             <div key={i} className="card-glass p-10 rounded-[2.5rem] border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 blur-3xl opacity-20 transition-all group-hover:opacity-40" style={{ backgroundColor: item.data.hex }}></div>
                <h4 className="text-[10px] font-cinzel text-amber-500 uppercase tracking-widest mb-6">{item.label}</h4>
                <div className="flex items-center gap-6 mb-8">
                   <div className="w-16 h-16 rounded-2xl shadow-xl border border-white/10" style={{ backgroundColor: item.data.hex }}></div>
                   <div>
                      <div className="text-2xl text-white font-cinzel font-bold">{item.data.colorName}</div>
                      <div className="text-[10px] text-gray-500 font-mono">{item.data.hex}</div>
                   </div>
                </div>
                <p className="text-xs text-gray-400 font-serif italic leading-relaxed">"{item.data.meaning}"</p>
             </div>
           ))}
        </div>
      </section>

      {/* CORE 24 POINTS */}
      <section>
        <SectionHeader number="PHASE I" title="The 24 Points of Analysis" subtitle="The primary pillars of your existence as defined in the Pythagorean lineage." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <InterpretationCard title="5. Life Path" value={results.lifePath} description="The road you travel and your primary life mission." />
          <InterpretationCard title="8. Expression" value={results.expression} description={getExpressionDescription(results.expression)} />
          <InterpretationCard title="9. Soul Urge" value={results.soulUrge} description="The internal motivation that drives your soul's happiness." />
          <InterpretationCard title="10. Personality" value={results.personality} description="The 'outer shell' or social persona you present to the world." />
          <InterpretationCard title="6. Birth Day" value={results.birthDay} description="A specific innate talent meant to assist you in this life." />
          <InterpretationCard title="7. Attitude" value={results.attitude} description="Your default response to life's events." />
          <InterpretationCard title="13. Hidden Passion" value={results.hiddenPassion} description="A concentrated talent pushing you toward excellence." />
          <InterpretationCard title="14. Subconscious Self" value={results.subconsciousSelf} description="Your instinctual response during crisis." />
          <InterpretationCard title="15. Balance Number" value={results.balance} description="Your stability anchor during emotional storms." />
          <InterpretationCard title="17. Maturity Number" value={results.maturity} description="Your focus and fulfillment in later life." />
          <InterpretationCard title="18. Rational Thought" value={results.rationalThought} description="How you process data and logic." />
        </div>
      </section>

      {/* SHADOWS & HARMONICS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <SectionHeader number="CHAMBER III" title="Shadow & Evolution" subtitle="Evolutionary hurdles and karmic lessons." />
          <div className="grid grid-cols-1 gap-6">
            <div className="card-glass p-8 rounded-3xl border-white/5 space-y-4">
              <h4 className="text-[10px] font-cinzel text-amber-500 uppercase tracking-widest">11. Challenge Numbers</h4>
              <div className="flex gap-4">
                {results.challenges.map((c, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-cinzel text-white">{c}</div>
                ))}
              </div>
            </div>
            <div className="card-glass p-8 rounded-3xl border-white/5 space-y-4">
              <h4 className="text-[10px] font-cinzel text-amber-500 uppercase tracking-widest">12. Karmic Lessons</h4>
              <div className="flex flex-wrap gap-2">
                {results.karmicLessons.length > 0 ? results.karmicLessons.map((l, i) => (
                  <div key={i} className="w-8 h-8 rounded bg-red-500/10 border border-red-500/20 flex items-center justify-center font-cinzel text-red-400 text-sm">{l}</div>
                )) : <span className="text-xs text-green-500/60 font-cinzel uppercase">Full Integrity</span>}
              </div>
            </div>
            <div className="card-glass p-8 rounded-3xl border-white/5 space-y-4">
              <h4 className="text-[10px] font-cinzel text-amber-500 uppercase tracking-widest">16. Karmic Debt</h4>
              <div className="flex gap-2">
                {results.karmicDebts.length > 0 ? results.karmicDebts.map((d, i) => (
                  <div key={i} className="px-3 py-1 rounded bg-amber-500/20 border border-amber-500/40 font-cinzel text-amber-500 text-sm">{d}</div>
                )) : <span className="text-xs text-gray-500 font-cinzel uppercase">None</span>}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <SectionHeader number="CHAMBER IV" title="Harmonic Bridges" subtitle="Bridging the gaps between your core numbers." />
          <div className="space-y-6">
            {results.bridgeNumbers.map((b, i) => (
              <div key={i} className="card-glass p-8 rounded-3xl border-white/5 flex justify-between items-center group">
                <div className="space-y-1">
                  <h5 className="text-[10px] font-cinzel text-gray-500 uppercase">{b.title}</h5>
                  <p className="text-[11px] text-gray-400 font-serif italic">"{b.description}"</p>
                </div>
                <div className="text-4xl font-cinzel text-amber-500 group-hover:scale-110 transition">{b.value}</div>
              </div>
            ))}
            <div className="card-glass p-8 rounded-3xl border-white/5">
              <h4 className="text-[10px] font-cinzel text-amber-500 uppercase tracking-widest mb-4">22. Planes of Expression</h4>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(results.planesOfExpression).map(([plane, count]) => (
                  <div key={plane} className="flex justify-between items-center text-xs">
                    <span className="text-gray-500 font-cinzel uppercase">{plane}</span>
                    <span className="text-white font-cinzel">{count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEMPORAL HARMONICS */}
      <section className="space-y-16">
        <SectionHeader number="CHAMBER VII" title="Temporal Harmonics" subtitle="Transits and the current vibration of your years." />
        
        <div className="card-glass p-12 rounded-[3rem] border-amber-500/20 glow-amber relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 text-amber-500/5 font-cinzel text-9xl pointer-events-none uppercase">Essence</div>
           <h4 className="text-[12px] font-cinzel text-amber-500 uppercase tracking-[0.4em] mb-10">Current Age {results.currentAge} Transits</h4>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-center">
              <div className="text-center space-y-2">
                 <span className="text-[9px] font-cinzel text-gray-500 uppercase">Physical</span>
                 <div className="text-6xl text-white font-cinzel">{results.transits.current.physical.letter}</div>
                 <p className="text-[9px] text-gray-500 font-serif italic">"{results.transits.current.physical.description}"</p>
              </div>
              <div className="text-center space-y-2">
                 <span className="text-[9px] font-cinzel text-gray-500 uppercase">Mental</span>
                 <div className="text-6xl text-white font-cinzel">{results.transits.current.mental.letter}</div>
                 <p className="text-[9px] text-gray-500 font-serif italic">"{results.transits.current.mental.description}"</p>
              </div>
              <div className="text-center space-y-2">
                 <span className="text-[9px] font-cinzel text-gray-500 uppercase">Spiritual</span>
                 <div className="text-6xl text-white font-cinzel">{results.transits.current.spiritual.letter}</div>
                 <p className="text-[9px] text-gray-500 font-serif italic">"{results.transits.current.spiritual.description}"</p>
              </div>
              <div className="text-center p-8 bg-amber-500/10 rounded-3xl border border-amber-500/20">
                 <span className="text-[10px] font-cinzel text-amber-500 uppercase">Essence Vibration</span>
                 <div className="text-7xl text-amber-500 font-cinzel font-bold">{results.transits.current.essence}</div>
                 <p className="text-[10px] text-gray-400 font-serif italic mt-2">Overall Cycle Power</p>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
           {results.pinnacles.map((p, i) => (
             <div key={i} className={`p-8 rounded-[2rem] border transition-all duration-700 relative overflow-hidden ${p.isCurrent ? 'bg-amber-500/10 border-amber-500/40' : 'card-glass border-white/5'}`}>
                {p.isCurrent && <div className="absolute top-0 left-0 w-full h-1 bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,1)]"></div>}
                <span className="text-[9px] font-cinzel text-amber-500/60 uppercase block mb-4">{p.title}</span>
                <div className="flex items-end gap-2 mb-4">
                   <span className="text-4xl font-cinzel text-white font-bold">{p.number}</span>
                   <span className="text-[10px] text-gray-500 font-serif italic mb-1">Ages {p.startAge}-{p.endAge}</span>
                </div>
                <p className="text-[11px] text-gray-400 font-serif leading-relaxed italic">"{p.baseMeaning}"</p>
             </div>
           ))}
        </div>
      </section>

      {/* ORACLE FORECASTS */}
      <section className="space-y-16">
        <SectionHeader number="CHAMBER VIII" title="The Oracle Scroll" subtitle="Your personalized temporal map for the days, weeks, and months ahead." />
        
        <div className="card-glass p-12 rounded-[3rem] border-white/10">
           <h4 className="text-[12px] font-cinzel text-amber-500 uppercase tracking-[0.4em] mb-10">Daily Prophetic Rhythm</h4>
           <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
              {results.personalDayForecast.map((day, i) => (
                <div key={i} className={`p-6 rounded-2xl border ${i === 0 ? 'bg-amber-500/10 border-amber-500/40' : 'bg-white/5 border-white/5'} text-center group hover:bg-amber-500/5 transition`}>
                   <div className="text-[9px] font-cinzel text-gray-500 uppercase mb-2">{day.label}</div>
                   <div className="text-3xl font-cinzel text-white mb-2 group-hover:scale-110 transition">{day.number}</div>
                   <div className="text-[8px] text-amber-500/60 font-serif italic uppercase tracking-tighter">{day.description}</div>
                </div>
              ))}
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="card-glass p-10 rounded-[3rem] border-white/10">
              <h4 className="text-[12px] font-cinzel text-amber-500 uppercase tracking-[0.4em] mb-8">Weekly Waves</h4>
              <div className="space-y-6">
                 {results.personalWeekForecast.map((wk, i) => (
                   <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4">
                      <div>
                         <div className="text-[10px] font-cinzel text-gray-400 uppercase">{wk.label}</div>
                         <div className="text-[11px] text-gray-500 font-serif italic">{wk.description}</div>
                      </div>
                      <div className="text-3xl font-cinzel text-amber-500">{wk.number}</div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="card-glass p-10 rounded-[3rem] border-white/10">
              <h4 className="text-[12px] font-cinzel text-amber-500 uppercase tracking-[0.4em] mb-8">Monthly Cycles</h4>
              <div className="grid grid-cols-2 gap-6">
                 {results.personalMonthForecast.map((m, i) => (
                   <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-amber-500/20 transition">
                      <div className="text-[10px] font-cinzel text-gray-400 uppercase mb-1">{m.label}</div>
                      <div className="text-3xl font-cinzel text-white mb-2">{m.number}</div>
                      <div className="text-[9px] text-gray-500 font-serif italic leading-tight">{m.description}</div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        <div className="card-glass p-12 rounded-[3rem] border-white/10">
           <h4 className="text-[12px] font-cinzel text-amber-500 uppercase tracking-[0.4em] mb-12">5-Year Visionary Forecast</h4>
           <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {results.personalYearForecast.map((year, i) => (
                <div key={i} className="space-y-4 group">
                   <div className="text-xs font-cinzel text-gray-500 tracking-widest">{year.year}</div>
                   <div className="text-5xl font-cinzel gold-gradient font-bold group-hover:scale-110 transition duration-500 origin-left">{year.number}</div>
                   <div className="h-0.5 w-6 bg-amber-500/30 group-hover:w-full transition-all duration-700"></div>
                   <p className="text-[10px] text-gray-400 font-serif leading-relaxed italic opacity-0 group-hover:opacity-100 transition duration-500">
                     {year.description}
                   </p>
                </div>
              ))}
           </div>
        </div>
      </section>

      <footer className="text-center pt-12 pb-24 border-t border-white/5">
        <button onClick={onReset} className="px-16 py-5 border border-amber-500/50 text-amber-500 font-cinzel rounded-full hover:bg-amber-500 hover:text-black transition-all duration-700 uppercase tracking-[0.4em] text-xs">Analyze New Soul</button>
      </footer>
    </div>
  );
};

export default Dashboard;
