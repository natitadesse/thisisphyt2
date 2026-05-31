import React, { useState } from 'react';
import { LifeExperiencesChart as LifeExperiencesChartType } from '../utils/lifeExperiences';

interface Props {
  chart: LifeExperiencesChartType;
  currentAge: number;
}

const LifeExperiencesChart: React.FC<Props> = ({ chart, currentAge }) => {
  const [selectedCorner, setSelectedCorner] = useState<string | null>(null);
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null);

  const getCurrentPhase = () => {
    if (currentAge < 27) return 'Youth';
    if (currentAge < 54) return 'Power';
    return 'Wisdom';
  };

  return (
    <section className="space-y-12">
      <div className="mb-12 space-y-2 border-l-4 border-amber-500 pl-6">
        <span className="text-amber-500/50 font-cinzel text-xs tracking-[0.3em] uppercase">CHAMBER XII</span>
        <h3 className="text-3xl font-cinzel text-white uppercase tracking-[0.2em]">Life Experiences Chart</h3>
        <p className="text-xs text-gray-500 font-serif italic max-w-2xl">
          The three phases of human experience: Youth, Power, and Wisdom. Nine sacred age milestones chart your journey through 81 years of growth and transformation.
        </p>
      </div>

      {/* Main Chart Section */}
      <div className="card-glass p-16 rounded-[3rem] border border-amber-500/20 overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          {/* SVG Chart */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <svg viewBox="0 0 600 700" className="w-full max-w-md h-auto" preserveAspectRatio="xMidYMid meet">
              {/* Defs */}
              <defs>
                <linearGradient id="youthGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
                  <stop offset="100%" stopColor="rgba(59, 130, 246, 0.05)" />
                </linearGradient>
                <linearGradient id="powerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(168, 85, 247, 0.1)" />
                  <stop offset="100%" stopColor="rgba(168, 85, 247, 0.05)" />
                </linearGradient>
                <linearGradient id="wisdomGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(236, 72, 153, 0.1)" />
                  <stop offset="100%" stopColor="rgba(236, 72, 153, 0.05)" />
                </linearGradient>
                <filter id="chartGlow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Youth Square (0-27) */}
              <rect x="80" y="120" width="180" height="180" fill="url(#youthGradient)" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="2" filter="url(#chartGlow)" />
              <text x="170" y="185" textAnchor="middle" fontSize="28" fontWeight="bold" fill="rgba(59, 130, 246, 0.6)" fontFamily="serif">Youth</text>
              <text x="170" y="215" textAnchor="middle" fontSize="14" fill="rgba(100, 150, 255, 0.5)" fontFamily="serif">(0-27)</text>

              {/* Power Square (27-54) */}
              <rect x="340" y="340" width="180" height="180" fill="url(#powerGradient)" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="2" filter="url(#chartGlow)" />
              <text x="430" y="410" textAnchor="middle" fontSize="28" fontWeight="bold" fill="rgba(168, 85, 247, 0.6)" fontFamily="serif">Power</text>
              <text x="430" y="440" textAnchor="middle" fontSize="14" fill="rgba(168, 85, 247, 0.5)" fontFamily="serif">(27-54)</text>

              {/* Wisdom Diamond (54-81) */}
              <polygon points="300,80 520,220 430,380 140,360" fill="url(#wisdomGradient)" stroke="rgba(236, 72, 153, 0.4)" strokeWidth="2" filter="url(#chartGlow)" />
              <text x="300" y="200" textAnchor="middle" fontSize="28" fontWeight="bold" fill="rgba(236, 72, 153, 0.6)" fontFamily="serif">Wisdom</text>
              <text x="300" y="230" textAnchor="middle" fontSize="14" fill="rgba(236, 72, 153, 0.5)" fontFamily="serif">(54-81)</text>

              {/* Corner points and labels */}
              {/* A - Top (81) */}
              <g onClick={() => setSelectedCorner(selectedCorner === 'A' ? null : 'A')} style={{ cursor: 'pointer' }}>
                <circle cx="300" cy="80" r="18" fill="rgba(245, 158, 11, 0.15)" stroke="rgba(245, 158, 11, 0.8)" strokeWidth="2" filter="url(#chartGlow)" className="hover:stroke-amber-300 transition" />
                <text x="300" y="88" textAnchor="middle" fontSize="16" fontWeight="bold" fill="rgba(245, 158, 11, 1)" fontFamily="serif">A</text>
              </g>
              <text x="300" y="55" textAnchor="middle" fontSize="12" fill="rgba(245, 158, 11, 0.8)">72</text>
              <text x="300" y="40" textAnchor="middle" fontSize="10" fill="rgba(200, 200, 200, 0.7)">81</text>

              {/* B - Left top (9) */}
              <g onClick={() => setSelectedCorner(selectedCorner === 'B' ? null : 'B')} style={{ cursor: 'pointer' }}>
                <circle cx="80" cy="120" r="18" fill="rgba(245, 158, 11, 0.15)" stroke="rgba(245, 158, 11, 0.8)" strokeWidth="2" filter="url(#chartGlow)" className="hover:stroke-amber-300 transition" />
                <text x="80" y="128" textAnchor="middle" fontSize="16" fontWeight="bold" fill="rgba(245, 158, 11, 1)" fontFamily="serif">B</text>
              </g>
              <text x="30" y="125" textAnchor="middle" fontSize="12" fill="rgba(245, 158, 11, 0.8)">9</text>

              {/* C - Left bottom (18) */}
              <g onClick={() => setSelectedCorner(selectedCorner === 'C' ? null : 'C')} style={{ cursor: 'pointer' }}>
                <circle cx="80" cy="300" r="18" fill="rgba(245, 158, 11, 0.15)" stroke="rgba(245, 158, 11, 0.8)" strokeWidth="2" filter="url(#chartGlow)" className="hover:stroke-amber-300 transition" />
                <text x="80" y="308" textAnchor="middle" fontSize="16" fontWeight="bold" fill="rgba(245, 158, 11, 1)" fontFamily="serif">C</text>
              </g>
              <text x="30" y="305" textAnchor="middle" fontSize="12" fill="rgba(245, 158, 11, 0.8)">18</text>

              {/* D - Center bottom (27) */}
              <g onClick={() => setSelectedCorner(selectedCorner === 'D' ? null : 'D')} style={{ cursor: 'pointer' }}>
                <circle cx="260" cy="300" r="18" fill="rgba(245, 158, 11, 0.15)" stroke="rgba(245, 158, 11, 0.8)" strokeWidth="2" filter="url(#chartGlow)" className="hover:stroke-amber-300 transition" />
                <text x="260" y="308" textAnchor="middle" fontSize="16" fontWeight="bold" fill="rgba(245, 158, 11, 1)" fontFamily="serif">D</text>
              </g>
              <text x="260" y="330" textAnchor="middle" fontSize="12" fill="rgba(245, 158, 11, 0.8)">27</text>

              {/* E - Power bottom left (36) */}
              <g onClick={() => setSelectedCorner(selectedCorner === 'E' ? null : 'E')} style={{ cursor: 'pointer' }}>
                <circle cx="340" cy="520" r="18" fill="rgba(245, 158, 11, 0.15)" stroke="rgba(245, 158, 11, 0.8)" strokeWidth="2" filter="url(#chartGlow)" className="hover:stroke-amber-300 transition" />
                <text x="340" y="528" textAnchor="middle" fontSize="16" fontWeight="bold" fill="rgba(245, 158, 11, 1)" fontFamily="serif">E</text>
              </g>
              <text x="300" y="545" textAnchor="middle" fontSize="12" fill="rgba(245, 158, 11, 0.8)">36</text>

              {/* F - Power bottom right (45) */}
              <g onClick={() => setSelectedCorner(selectedCorner === 'F' ? null : 'F')} style={{ cursor: 'pointer' }}>
                <circle cx="520" cy="520" r="18" fill="rgba(245, 158, 11, 0.15)" stroke="rgba(245, 158, 11, 0.8)" strokeWidth="2" filter="url(#chartGlow)" className="hover:stroke-amber-300 transition" />
                <text x="520" y="528" textAnchor="middle" fontSize="16" fontWeight="bold" fill="rgba(245, 158, 11, 1)" fontFamily="serif">F</text>
              </g>
              <text x="540" y="545" textAnchor="middle" fontSize="12" fill="rgba(245, 158, 11, 0.8)">45</text>

              {/* G - Wisdom right (54) */}
              <g onClick={() => setSelectedCorner(selectedCorner === 'G' ? null : 'G')} style={{ cursor: 'pointer' }}>
                <circle cx="430" cy="380" r="18" fill="rgba(245, 158, 11, 0.15)" stroke="rgba(245, 158, 11, 0.8)" strokeWidth="2" filter="url(#chartGlow)" className="hover:stroke-amber-300 transition" />
                <text x="430" y="388" textAnchor="middle" fontSize="16" fontWeight="bold" fill="rgba(245, 158, 11, 1)" fontFamily="serif">G</text>
              </g>
              <text x="480" y="385" textAnchor="middle" fontSize="12" fill="rgba(245, 158, 11, 0.8)">54</text>

              {/* H - Wisdom top right (63) */}
              <g onClick={() => setSelectedCorner(selectedCorner === 'H' ? null : 'H')} style={{ cursor: 'pointer' }}>
                <circle cx="520" cy="220" r="18" fill="rgba(245, 158, 11, 0.15)" stroke="rgba(245, 158, 11, 0.8)" strokeWidth="2" filter="url(#chartGlow)" className="hover:stroke-amber-300 transition" />
                <text x="520" y="228" textAnchor="middle" fontSize="16" fontWeight="bold" fill="rgba(245, 158, 11, 1)" fontFamily="serif">H</text>
              </g>
              <text x="560" y="225" textAnchor="middle" fontSize="12" fill="rgba(245, 158, 11, 0.8)">63</text>

              {/* Center point - Entry (0) */}
              <g onClick={() => setSelectedCorner(selectedCorner === '0' ? null : '0')} style={{ cursor: 'pointer' }}>
                <circle cx="170" cy="210" r="16" fill="rgba(245, 158, 11, 0.1)" stroke="rgba(245, 158, 11, 0.6)" strokeWidth="2" filter="url(#chartGlow)" className="hover:stroke-amber-300 transition" />
                <text x="170" y="218" textAnchor="middle" fontSize="18" fontWeight="bold" fill="rgba(245, 158, 11, 0.8)" fontFamily="serif">0</text>
              </g>
              <text x="125" y="200" textAnchor="middle" fontSize="9" fill="rgba(200, 200, 200, 0.7)" fontStyle="italic">Enter Here</text>
            </svg>
          </div>

          {/* Information Panel */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-6">
              <p className="text-xs text-gray-500 font-serif italic">Click any corner or phase to view detailed information</p>

              {/* Current Phase Card */}
              <div className="p-8 rounded-2xl border-2 border-amber-500 bg-amber-500/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <span className="text-[10px] font-cinzel text-amber-500 uppercase tracking-[0.3em]">Current Phase</span>
                </div>
                <h4 className="text-2xl font-cinzel text-white mb-2">{getCurrentPhase()} Phase</h4>
                <p className="text-sm text-gray-300 mb-4">Age {currentAge}</p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {chart.phases.find(p => p.name === getCurrentPhase())?.description}
                </p>
              </div>

              {/* Phase Selector */}
              <div className="space-y-3">
                {chart.phases.map((phase) => (
                  <div
                    key={phase.name}
                    onClick={() => setSelectedPhase(selectedPhase === phase.name ? null : phase.name)}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                      selectedPhase === phase.name
                        ? 'border-amber-500 bg-amber-500/10'
                        : 'border-amber-500/30 bg-amber-500/5 hover:border-amber-500/60'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center flex-shrink-0">
                        <span className="text-lg font-cinzel text-amber-500 font-bold">{phase.startAge}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[10px] font-cinzel text-amber-500/60 uppercase tracking-[0.3em] mb-1">{phase.name}</h4>
                        <p className="text-sm font-cinzel text-white">Ages {phase.startAge}-{phase.endAge}</p>
                        {selectedPhase === phase.name && (
                          <p className="text-xs text-gray-300 font-serif italic mt-3 leading-relaxed">
                            {phase.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Interpretation */}
      <div className="card-glass p-12 rounded-[3rem] border border-amber-500/10 bg-gradient-to-br from-amber-500/5 to-transparent">
        <h4 className="text-[12px] font-cinzel text-amber-500 uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-amber-500"></span>
          Your Life Journey
        </h4>
        <p className="text-sm text-gray-300 leading-relaxed font-serif italic mb-8">
          {chart.interpretation}
        </p>

        <div className="pt-8 border-t border-white/5 space-y-4">
          <p className="text-xs text-gray-500 leading-relaxed">
            The Life Experiences Chart maps the complete human journey from birth (0) to age 81. Each nine-year cycle represents a completion and new beginning. The three major phases—Youth, Power, and Wisdom—encompass 27 years each, creating the sacred geometry of human development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[10px] text-gray-600">
            <div className="p-4 bg-blue-500/5 rounded-lg border border-blue-500/10">
              <p className="font-cinzel uppercase tracking-widest mb-2 text-blue-400/60">Youth Energy (0-27)</p>
              <p className="font-serif italic">Learning, discovery, foundation building, and the formation of core patterns and beliefs.</p>
            </div>
            <div className="p-4 bg-purple-500/5 rounded-lg border border-purple-500/10">
              <p className="font-cinzel uppercase tracking-widest mb-2 text-purple-400/60">Power Energy (27-54)</p>
              <p className="font-serif italic">Manifestation, action, contribution, challenge, and the fulfillment of potential through effort.</p>
            </div>
            <div className="p-4 bg-pink-500/5 rounded-lg border border-pink-500/10">
              <p className="font-cinzel uppercase tracking-widest mb-2 text-pink-400/60">Wisdom Energy (54-81)</p>
              <p className="font-serif italic">Integration, completion, reflection, teaching, and the sharing of accumulated wisdom.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeExperiencesChart;
