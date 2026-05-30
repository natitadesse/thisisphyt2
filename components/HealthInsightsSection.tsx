import React from 'react';
import { HealthInsight } from '../types';

interface Props {
  healthInsights: HealthInsight[];
  soulNumber: number;
  karmaNumber: number;
}

const HealthInsightsSection: React.FC<Props> = ({ healthInsights, soulNumber, karmaNumber }) => {
  if (!healthInsights || healthInsights.length === 0) return null;

  return (
    <section className="space-y-12">
      <div className="mb-12 space-y-2 border-l-4 border-amber-500 pl-6">
        <span className="text-amber-500/50 font-cinzel text-xs tracking-[0.3em] uppercase">CHAMBER X</span>
        <h3 className="text-3xl font-cinzel text-white uppercase tracking-[0.2em]">Numerology & Health</h3>
        <p className="text-xs text-gray-500 font-serif italic max-w-2xl">
          Your health is revealed from your date of birth. Numbers govern body systems and vulnerabilities. Living the positive aspects of your numbers reduces suffering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="card-glass p-8 rounded-[2.5rem] border-white/5 text-center">
          <span className="text-[10px] text-amber-500/60 font-cinzel uppercase tracking-widest block mb-2">Soul Number</span>
          <div className="text-6xl font-cinzel text-amber-500 font-bold mb-2">{soulNumber}</div>
          <p className="text-xs text-gray-500 font-serif italic">Tendencies from previous lifetimes</p>
        </div>

        <div className="card-glass p-8 rounded-[2.5rem] border-white/5 text-center">
          <span className="text-[10px] text-amber-500/60 font-cinzel uppercase tracking-widest block mb-2">Karma/Month Number</span>
          <div className="text-6xl font-cinzel text-amber-500 font-bold mb-2">{karmaNumber}</div>
          <p className="text-xs text-gray-500 font-serif italic">Problems and struggles</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {healthInsights.map((insight, idx) => (
          <div key={idx} className="card-glass p-12 rounded-[3rem] border border-white/5 relative overflow-hidden">
            <div className="space-y-8">
              <div>
                <h4 className="text-[12px] font-cinzel text-amber-500 uppercase tracking-[0.3em] mb-6">{insight.category}</h4>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <span className="text-lg font-cinzel text-white">{insight.bodyAspect}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-[10px] font-cinzel text-red-400/80 uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-red-400"></span>
                    Vulnerabilities
                  </h5>
                  <ul className="space-y-2">
                    {insight.vulnerabilities.map((vuln, i) => (
                      <li key={i} className="text-xs text-gray-400 leading-relaxed flex items-start gap-2">
                        <span className="text-red-500/50 mt-1">•</span>
                        <span>{vuln}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-[10px] font-cinzel text-green-400/80 uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-green-400"></span>
                    Recommendations
                  </h5>
                  <ul className="space-y-2">
                    {insight.recommendations.map((rec, i) => (
                      <li key={i} className="text-xs text-gray-400 leading-relaxed flex items-start gap-2">
                        <span className="text-green-500/50 mt-1">✓</span>
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card-glass p-10 rounded-3xl border-white/5 bg-gradient-to-br from-amber-500/5 to-transparent">
        <h4 className="text-[10px] font-cinzel text-amber-500 uppercase tracking-widest mb-6">Important Notes</h4>
        <div className="space-y-4 text-xs text-gray-400 leading-relaxed font-serif">
          <p>
            Most health problems are psychosomatic in nature. The mind affects the body, and the body affects the mind. Therefore it is crucial to understand both the positive and negative effects of your numbers.
          </p>
          <p>
            You need not believe that all afflictions related to your number will occur to you. However, one or more of the mentioned health problems may manifest if you demonstrate the negative aspects of your numbers.
          </p>
          <p className="text-amber-500/60 italic pt-4 border-t border-white/5">
            If you demonstrate the positive aspects of your numbers in life, you will suffer less. Health is a reflection of vibrational alignment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HealthInsightsSection;
