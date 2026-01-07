
import React, { useState } from 'react';
import { getInterpretation } from '../services/geminiService';
import { InterpretationResponse } from '../types';

interface Props {
  title: string;
  value: number;
  description: string;
  mini?: boolean;
}

const InterpretationCard: React.FC<Props> = ({ title, value, description, mini = false }) => {
  const [data, setData] = useState<InterpretationResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchInterpretation = async () => {
    setLoading(true);
    try {
      const result = await getInterpretation(title, value, description);
      setData(result);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  if (mini) {
    return (
      <div className="space-y-2">
        {!data && !loading && (
           <button 
             onClick={fetchInterpretation}
             className="w-full py-2 text-[9px] font-cinzel tracking-[0.3em] text-amber-500/60 border border-amber-500/10 rounded-xl hover:bg-amber-500/10 transition uppercase"
           >
             Seek Insight
           </button>
        )}
        {loading && <div className="h-1 bg-amber-500/20 animate-pulse rounded-full"></div>}
        {data && (
          <p className="text-[11px] text-gray-400 font-serif leading-relaxed italic border-l-2 border-amber-500/30 pl-3">"{data.summary}"</p>
        )}
      </div>
    );
  }

  return (
    <div className="group card-glass p-10 rounded-[2.5rem] border border-white/5 hover:border-amber-500/30 transition-all duration-700 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition pointer-events-none">
        <div className="text-8xl font-cinzel font-bold text-white select-none">{value}</div>
      </div>
      
      <div className="relative z-10 space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-cinzel text-amber-500 text-[10px] tracking-[0.4em] uppercase mb-1">{title}</h4>
            <div className="text-5xl font-bold text-white tracking-tighter">{value}</div>
          </div>
          <button 
            onClick={fetchInterpretation}
            disabled={loading}
            className="text-[10px] font-cinzel tracking-widest text-gray-500 hover:text-amber-400 transition uppercase underline decoration-dotted underline-offset-8"
          >
            {loading ? 'Consulting Stars...' : data ? 'Re-Sync' : 'Reveal Wisdom'}
          </button>
        </div>
        
        {!data && !loading && (
          <p className="text-sm text-gray-400 font-serif leading-relaxed italic opacity-70">"{description}"</p>
        )}

        {loading && (
          <div className="space-y-4 animate-pulse pt-4">
            <div className="h-4 bg-white/5 rounded-full w-full"></div>
            <div className="h-4 bg-white/5 rounded-full w-4/5"></div>
            <div className="h-4 bg-white/5 rounded-full w-3/4"></div>
          </div>
        )}

        {data && !loading && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-1000">
            <p className="text-base text-gray-300 leading-relaxed font-serif italic border-l-2 border-amber-500/50 pl-6 py-1">"{data.summary}"</p>
            
            <div className="space-y-4">
              <span className="text-[10px] text-amber-500/60 font-cinzel uppercase tracking-[0.3em]">Vibrational Qualities</span>
              <div className="flex flex-wrap gap-2">
                {data.traits.map(t => (
                  <span key={t} className="text-[10px] px-3 py-1.5 rounded-full bg-white/5 text-gray-300 border border-white/10 hover:border-amber-500/30 transition cursor-default">{t}</span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/5">
              <p className="text-[11px] text-gray-500 leading-relaxed uppercase tracking-widest font-cinzel">{data.guidance}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InterpretationCard;
