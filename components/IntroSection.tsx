
import React from 'react';

const IntroSection: React.FC = () => {
  const chapters = [
    { title: "I. The Soul's Identity", items: ["1. Numerology Intro", "2. Symbolism of Numbers", "3. Understanding Numbers", "4. Basic Calculations", "21. Core Significance"] },
    { title: "II. The Core Profile", items: ["5. Life Path Number", "6. Birth Day Number", "7. Attitude Number", "8. Expression Number", "9. Soul Urge", "10. Personality"] },
    { title: "III. The Inner Engine", items: ["13. Hidden Passion", "14. Subconscious Self", "15. Balance Number", "17. Maturity Number", "18. Rational Thought"] },
    { title: "IV. The Shadow Work", items: ["11. Challenge Numbers", "12. Karmic Lessons", "16. Karmic Debt", "20. The Zero / Cipher"] },
    { title: "V. Subtle Dynamics", items: ["19. The Elements", "22. Planes of Expression", "23. Special Letters", "24. Repeated Core Frequencies"] }
  ];

  return (
    <section className="space-y-32 py-24 border-t border-white/5">
      {/* Teacher Lineage Dedication */}
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-top-4 duration-1000">
        <div className="inline-block px-8 py-2 rounded-full border border-amber-500/30 bg-amber-500/5 text-amber-500 font-cinzel text-[10px] tracking-[0.4em] uppercase mb-4">
          The Lineage of Wisdom
        </div>
        <h3 className="text-3xl md:text-5xl font-cinzel text-white tracking-widest leading-tight">
          THE TEACHINGS OF <br/>
          <span className="gold-gradient font-bold">DR SUHASINI S PINGLE</span>
        </h3>
        <p className="text-gray-500 font-serif italic text-lg max-w-2xl mx-auto leading-relaxed">
          "Numbers are not just quantities but qualities. This digital vessel translates names and dates into the map of the human experience as preserved by Dr. Pingle."
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-amber-500/50"></div>
          <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
          <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-amber-500/50"></div>
        </div>
      </div>

      {/* The 24 Points List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-4">
         {chapters.map((ch, i) => (
           <div key={i} className="space-y-6 p-8 card-glass rounded-[2rem] border-white/5 hover:border-amber-500/20 transition-all duration-700">
              <h4 className="font-cinzel text-amber-500 text-[10px] tracking-widest uppercase border-b border-amber-500/10 pb-4">{ch.title}</h4>
              <ul className="space-y-3">
                 {ch.items.map((item, j) => (
                   <li key={j} className="text-[10px] text-gray-500 font-serif italic group flex items-center gap-2">
                     <span className="w-1 h-1 rounded-full bg-amber-500/20 group-hover:bg-amber-500 transition"></span>
                     {item}
                   </li>
                 ))}
              </ul>
           </div>
         ))}
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10 p-12 card-glass rounded-[3rem] border-amber-500/10">
          <div className="space-y-4 text-center lg:text-left">
            <h3 className="text-2xl font-cinzel text-amber-500 uppercase tracking-widest">20. The Zero or Cipher</h3>
            <p className="text-gray-400 font-serif leading-relaxed text-lg">
              In the Pythagorean system, the Zero represents the <span className="text-white italic">Monad</span>—the circle of infinite potential. It amplifies any number it accompanies, acting as a gateway between the physical and metaphysical.
            </p>
          </div>

          <div className="space-y-4 text-center lg:text-left pt-10 border-t border-white/5">
            <h3 className="text-2xl font-cinzel text-amber-500 uppercase tracking-widest">Temporal Harmonics</h3>
            <p className="text-gray-400 font-serif leading-relaxed text-lg">
              Beyond the 24 core aspects, this analysis provides a <span className="text-white italic">5-Year Prediction Scroll</span> and calculates your <span className="text-white italic">Pinnacle Peaks</span>, revealing the seasonal timing of your destiny.
            </p>
          </div>
        </div>

        <div className="relative h-[400px] flex items-center justify-center">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.1)_0%,_transparent_70%)] animate-pulse"></div>
           <div className="w-64 h-64 border border-amber-500/20 rounded-full animate-[spin_20s_linear_infinite] flex items-center justify-center">
              <div className="w-48 h-48 border border-amber-500/40 rounded-full animate-[spin_15s_linear_infinite_reverse] flex items-center justify-center">
                <div className="w-32 h-32 border-2 border-amber-500/60 rounded-full flex items-center justify-center">
                   <span className="text-4xl font-cinzel gold-gradient font-bold">0</span>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
