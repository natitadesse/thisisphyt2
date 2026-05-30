import React from 'react';
import { MasterNumberInfo } from '../types';

interface Props {
  masterNumbers: MasterNumberInfo[];
}

const MasterNumbersSection: React.FC<Props> = ({ masterNumbers }) => {
  if (!masterNumbers || masterNumbers.length === 0) return null;

  return (
    <section className="space-y-12">
      <div className="mb-12 space-y-2 border-l-4 border-amber-500 pl-6">
        <span className="text-amber-500/50 font-cinzel text-xs tracking-[0.3em] uppercase">CHAMBER IX</span>
        <h3 className="text-3xl font-cinzel text-white uppercase tracking-[0.2em]">Master Number Frequencies</h3>
        <p className="text-xs text-gray-500 font-serif italic max-w-2xl">
          Highly charged vibrational patterns requiring time, maturity, and effort to integrate. Paradoxical in nature - representing both great potential and intense inner tension.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {masterNumbers.map((mn, idx) => (
          <div key={idx} className="card-glass p-12 rounded-[3rem] border border-amber-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 text-amber-500/5 font-cinzel text-9xl pointer-events-none">{mn.number}</div>

            <div className="relative z-10 space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-amber-500/60 font-cinzel text-xs tracking-[0.3em] uppercase block mb-2">{mn.context}</span>
                  <div className="flex items-baseline gap-4">
                    <h4 className="text-6xl font-cinzel text-amber-500 font-bold">{mn.number}</h4>
                    <span className="text-gray-500 font-cinzel text-sm">Reduces to {mn.reducedValue}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-8 border-t border-white/10">
                <div>
                  <h5 className="text-[10px] font-cinzel text-amber-500/80 uppercase tracking-[0.3em] mb-3">Essence</h5>
                  <p className="text-sm text-gray-300 font-serif italic leading-relaxed">{mn.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-red-500/5 border border-red-500/10 rounded-2xl">
                    <h5 className="text-[10px] font-cinzel text-red-400/80 uppercase tracking-[0.3em] mb-3">Challenges</h5>
                    <p className="text-xs text-gray-400 leading-relaxed">{mn.challenges}</p>
                  </div>

                  <div className="p-6 bg-green-500/5 border border-green-500/10 rounded-2xl">
                    <h5 className="text-[10px] font-cinzel text-green-400/80 uppercase tracking-[0.3em] mb-3">Potential</h5>
                    <p className="text-xs text-gray-400 leading-relaxed">{mn.potential}</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5">
                <p className="text-[10px] text-gray-600 font-cinzel uppercase tracking-widest text-center">
                  Master numbers are not reduced to single digits - they are meant to be lived at their highest value
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card-glass p-10 rounded-3xl border-white/5">
        <h4 className="text-[10px] font-cinzel text-amber-500 uppercase tracking-widest mb-6">Understanding Master Numbers</h4>
        <div className="space-y-4 text-xs text-gray-400 leading-relaxed font-serif">
          <p>
            Master numbers represent vibrations of ever-increasing and ever-perfecting powers. They are highly paradoxical - possessing great potential and highly developed ability, while simultaneously representing great inner tension from the desire to achieve high ideals.
          </p>
          <p>
            These powerful energies strain the nervous system and create a "pressure cooker" effect. Understanding and using a Master Number is a gradual process. You take full control only after maturity, when the number becomes truly rewarding.
          </p>
          <p className="text-amber-500/60 italic">
            "When not focused on a goal beyond itself, a Master Number can turn inward to create fear and phobias."
          </p>
        </div>
      </div>
    </section>
  );
};

export default MasterNumbersSection;
