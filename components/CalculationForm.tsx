
import React, { useState } from 'react';
import { NumerologyProfile } from '../types';

interface Props {
  onCalculate: (data: NumerologyProfile) => void;
  initialData?: NumerologyProfile;
}

const CalculationForm: React.FC<Props> = ({ onCalculate, initialData }) => {
  const [fullName, setFullName] = useState(initialData?.fullName || '');
  const [birthDate, setBirthDate] = useState(initialData?.birthDate || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fullName && birthDate) {
      onCalculate({ fullName, birthDate });
    }
  };

  return (
    <div className="card-glass p-12 rounded-[2.5rem] shadow-2xl border border-white/10 relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-50"></div>
      
      <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
        <div className="space-y-2">
          <label className="block text-[10px] font-cinzel tracking-[0.4em] text-amber-500 uppercase mb-4">The Name of the Soul</label>
          <input
            type="text"
            required
            placeholder="FULL BIRTH NAME"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 text-white font-cinzel tracking-widest focus:outline-none focus:border-amber-500/50 focus:bg-white/[0.05] transition-all placeholder:text-gray-700 placeholder:font-cinzel"
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-[10px] font-cinzel tracking-[0.4em] text-amber-500 uppercase mb-4">The Date of Arrival</label>
          <input
            type="date"
            required
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-amber-500/50 focus:bg-white/[0.05] transition-all [color-scheme:dark] font-cinzel tracking-widest"
          />
        </div>

        <button
          type="submit"
          className="w-full py-6 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-400 text-black font-cinzel font-bold uppercase tracking-[0.3em] text-xs hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 shadow-2xl shadow-amber-500/20"
        >
          Reveal My Divine Destiny
        </button>
      </form>
      
      <div className="mt-8 text-center">
        <p className="text-[10px] text-gray-600 font-cinzel tracking-widest uppercase opacity-50 group-hover:opacity-100 transition duration-1000">"Everything is numbers." — Pythagoras</p>
      </div>
    </div>
  );
};

export default CalculationForm;
