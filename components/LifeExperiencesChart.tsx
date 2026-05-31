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
        <span className="text-amber-500/50 font-cinzel text-xs tracking-[0.3em] uppercase">CHAMBER XIII</span>
        <h3 className="text-3xl font-cinzel text-white uppercase tracking-[0.2em]">Life Experiences Chart</h3>
        <p className="text-xs text-gray-500 font-serif italic max-w-2xl">
          The sacred geometry of your 81-year journey through three life phases: Youth, Power, and Wisdom. Nine 9-year cycles of growth and transformation.
        </p>
      </div>

      {/* Main Chart - SVG Recreation of the exact image */}
      <div className="card-glass p-16 rounded-[3rem] border border-amber-500/20 overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          {/* SVG Chart - Exact layout from the image */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <svg viewBox="0 0 700 800" className="w-full max-w-md h-auto" preserveAspectRatio="xMidYMid meet">
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Youth Square - Bottom Left (0-27) */}
              <rect x="80" y="280" width="200" height="200" fill="rgba(59, 130, 246, 0.08)" stroke="rgba(150, 150, 150, 0.4)" strokeWidth="2" />
              <text x="180" y="360" textAnchor="middle" fontSize="32" fontWeight="bold" fill="rgba(150, 150, 150, 0.7)" fontFamily="serif">Youth</text>
              <text x="180" y="395" textAnchor="middle" fontSize="14" fill="rgba(150, 150, 150, 0.6)" fontFamily="serif">(0-27)</text>

              {/* Power Square - Bottom Right (27-54) */}
              <rect x="420" y="420" width="200" height="200" fill="rgba(168, 85, 247, 0.08)" stroke="rgba(150, 150, 150, 0.4)" strokeWidth="2" />
              <text x="520" y="500" textAnchor="middle" fontSize="32" fontWeight="bold" fill="rgba(150, 150, 150, 0.7)" fontFamily="serif">Power</text>
              <text x="520" y="535" textAnchor="middle" fontSize="14" fill="rgba(150, 150, 150, 0.6)" fontFamily="serif">(27-54)</text>

              {/* Wisdom Diamond - Top Right (54-81) */}
              <polygon points="350,100 550,250 450,450 250,300" fill="rgba(236, 72, 153, 0.08)" stroke="rgba(150, 150, 150, 0.4)" strokeWidth="2" />
              <text x="380" y="270" textAnchor="middle" fontSize="32" fontWeight="bold" fill="rgba(150, 150, 150, 0.7)" fontFamily="serif">Wisdom</text>
              <text x="380" y="305" textAnchor="middle" fontSize="14" fill="rgba(150, 150, 150, 0.6)" fontFamily="serif">(54-81)</text>

              {/* Center Entry Point "0" */}
              <g onClick={() => setSelectedCorner(selectedCorner === '0' ? null : '0')} style={{ cursor: 'pointer' }}>
                <circle cx="280" cy="380" r="20" fill="rgba(245, 158, 11, 0.15)" stroke="rgba(200, 150, 100, 0.8)" strokeWidth="2" filter="url(#glow)" />
                <text x="280" y="393" textAnchor="middle" fontSize="20" fontWeight="bold" fill="rgba(200, 150, 100, 1)" fontFamily="serif">0</text>
              </g>
              <text x="250" y="345" textAnchor="middle" fontSize="10" fill="rgba(150, 150, 150, 0.8)" fontStyle="italic">Enter Here</text>

              {/* Corner B - Top Left "9" */}
              <g onClick={() => setSelectedCorner(selectedCorner === 'B' ? null : 'B')} style={{ cursor: 'pointer' }}>
                <circle cx="80" cy="280" r="16" fill="rgba(245, 158, 11, 0.15)" stroke="rgba(200, 150, 100, 0.8)" strokeWidth="2" filter="url(#glow)" />
                <text x="80" y="291" textAnchor="middle" fontSize="16" fontWeight="bold" fill="rgba(200, 150, 100, 1)" fontFamily="serif">B</text>
              </g>
              <text x="40" y="260" textAnchor="middle" fontSize="14" fontWeight="bold" fill="rgba(200, 150, 100, 0.9)">9</text>

              {/* Corner C - Bottom Left "18" */}
              <g onClick={() => setSelectedCorner(selectedCorner === 'C' ? null : 'C')} style={{ cursor: 'pointer' }}>
                <circle cx="80" cy="480" r="16" fill="rgba(245, 158, 11, 0.15)" stroke="rgba(200, 150, 100, 0.8)" strokeWidth="2" filter="url(#glow)" />
                <text x="80" y="491" textAnchor="middle" fontSize="16" fontWeight="bold" fill="rgba(200, 150, 100, 1)" fontFamily="serif">C</text>
              </g>
              <text x="35" y="505" textAnchor="middle" fontSize="14" fontWeight="bold" fill="rgba(200, 150, 100, 0.9)">18</text>

              {/* Corner A - Center Top "81" + "72" */}
              <g onClick={() => setSelectedCorner(selectedCorner === 'A' ? null : 'A')} style={{ cursor: 'pointer' }}>
                <circle cx="350" cy="100" r="18" fill="rgba(245, 158, 11, 0.15)" stroke="rgba(200, 150, 100, 0.8)" strokeWidth="2" filter="url(#glow)" />
                <text x="350" y="113" textAnchor="middle" fontSize="18" fontWeight="bold" fill="rgba(200, 150, 100, 1)" fontFamily="serif">A</text>
              </g>
              <text x="350" y="60" textAnchor="middle" fontSize="14" fontWeight="bold" fill="rgba(200, 150, 100, 0.9)">72</text>
              <text x="350" y="40" textAnchor="middle" fontSize="12" fill="rgba(150, 150, 150, 0.7)" fontStyle="italic">81</text>

              {/* Corner D - Middle bottom Youth/Power transition "27" */}
              <g onClick={() => setSelectedCorner(selectedCorner === 'D' ? null : 'D')} style={{ cursor: 'pointer' }}>
                <circle cx="280" cy="480" r="16" fill="rgba(245, 158, 11, 0.15)" stroke="rgba(200, 150, 100, 0.8)" strokeWidth="2" filter="url(#glow)" />
                <text x="280" y="491" textAnchor="middle" fontSize="16" fontWeight="bold" fill="rgba(200, 150, 100, 1)" fontFamily="serif">D</text>
              </g>
              <text x="280" y="510" textAnchor="middle" fontSize="14" fontWeight="bold" fill="rgba(200, 150, 100, 0.9)">27</text>

              {/* Corner E - Power bottom left "36" */}
              <g onClick={() => setSelectedCorner(selectedCorner === 'E' ? null : 'E')} style={{ cursor: 'pointer' }}>
                <circle cx="420" cy="620" r="16" fill="rgba(245, 158, 11, 0.15)" stroke="rgba(200, 150, 100, 0.8)" strokeWidth="2" filter="url(#glow)" />
                <text x="420" y="631" textAnchor="middle" fontSize="16" fontWeight="bold" fill="rgba(200, 150, 100, 1)" fontFamily="serif">E</text>
              </g>
              <text x="380" y="650" textAnchor="middle" fontSize="14" fontWeight="bold" fill="rgba(200, 150, 100, 0.9)">36</text>

              {/* Corner F - Power bottom right "45" */}
              <g onClick={() => setSelectedCorner(selectedCorner === 'F' ? null : 'F')} style={{ cursor: 'pointer' }}>
                <circle cx="620" cy="620" r="16" fill="rgba(245, 158, 11, 0.15)" stroke="rgba(200, 150, 100, 0.8)" strokeWidth="2" filter="url(#glow)" />
                <text x="620" y="631" textAnchor="middle" fontSize="16" fontWeight="bold" fill="rgba(200, 150, 100, 1)" fontFamily="serif">F</text>
              </g>
              <text x="660" y="650" textAnchor="middle" fontSize="14" fontWeight="bold" fill="rgba(200, 150, 100, 0.9)">45</text>

              {/* Corner G - Wisdom transition point "54" */}
              <g onClick={() => setSelectedCorner(selectedCorner === 'G' ? null : 'G')} style={{ cursor: 'pointer' }}>
                <circle cx="450" cy="450" r="16" fill="rgba(245, 158, 11, 0.15)" stroke="rgba(200, 150, 100, 0.8)" strokeWidth="2" filter="url(#glow)" />
                <text x="450" y="461" textAnchor="middle" fontSize="16" fontWeight="bold" fill="rgba(200, 150, 100, 1)" fontFamily="serif">G</text>
              </g>
              <text x="500" y="460" textAnchor="middle" fontSize="14" fontWeight="bold" fill="rgba(200, 150, 100, 0.9)">54</text>

              {/* Corner H - Wisdom right "63" */}
              <g onClick={() => setSelectedCorner(selectedCorner === 'H' ? null : 'H')} style={{ cursor: 'pointer' }}>
                <circle cx="550" cy="250" r="16" fill="rgba(245, 158, 11, 0.15)" stroke="rgba(200, 150, 100, 0.8)" strokeWidth="2" filter="url(#glow)" />
                <text x="550" y="261" textAnchor="middle" fontSize="16" fontWeight="bold" fill="rgba(200, 150, 100, 1)" fontFamily="serif">H</text>
              </g>
              <text x="600" y="250" textAnchor="middle" fontSize="14" fontWeight="bold" fill="rgba(200, 150, 100, 0.9)">63</text>
            </svg>
          </div>

          {/* Information Panel */}
          <div className="w-full lg:w-1/2 space-y-8">
            <p className="text-xs text-gray-500 font-serif italic">Click any corner point to view detailed meanings</p>

            {/* Current Phase Highlight */}
            <div className="p-8 rounded-2xl border-2 border-amber-500 bg-amber-500/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <span className="text-[10px] font-cinzel text-amber-500 uppercase tracking-[0.3em]">Your Current Phase</span>
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
                      <p className="text-sm font-cinzel text-white">{phase.numeralRange}</p>
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

            {/* Selected Corner Details */}
            {selectedCorner && (
              <div className="p-6 rounded-2xl border-2 border-amber-500/50 bg-amber-500/5 animate-in fade-in">
                <p className="text-xs text-amber-500 font-cinzel uppercase tracking-widest mb-2">Point: {selectedCorner}</p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {chart.corners.find(c => c.letter === selectedCorner)?.meaning}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Nine Age Milestones Grid */}
      <div className="card-glass p-12 rounded-[3rem] border border-amber-500/10 bg-gradient-to-br from-amber-500/5 to-transparent">
        <h4 className="text-[12px] font-cinzel text-amber-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-amber-500"></span>
          Nine 9-Year Cycles: Life's Sacred Initiations
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {chart.corners.map((corner) => (
            <div key={corner.letter} className="p-6 rounded-xl border border-amber-500/20 bg-white/3 hover:bg-amber-500/8 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-cinzel text-amber-500 font-bold">{corner.letter}</span>
                </div>
                <div>
                  <p className="text-sm font-cinzel text-amber-400">Age {corner.value}</p>
                  <p className="text-[10px] text-gray-500 font-serif italic">{corner.position}</p>
                </div>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed font-serif">
                {corner.meaning}
              </p>
            </div>
          ))}
        </div>

        {/* Interpretation */}
        <div className="pt-8 border-t border-white/5">
          <p className="text-sm text-gray-300 leading-relaxed font-serif italic mb-8">
            {chart.interpretation}
          </p>

          <div className="p-6 rounded-xl bg-blue-500/5 border border-blue-500/10">
            <p className="text-[11px] text-gray-500 leading-relaxed">
              The Life Experiences Chart reveals the sacred geometry of human development. Life unfolds in three equal 27-year phases, each divided into three 9-year periods. Number 9 represents completion and wisdom in Pythagorean numerology. Every 9 years, you reach a completion point and initiate a new cycle of growth. At 81 years, you complete nine full 9-year cycles, representing the total culmination of human experience in the Pythagorean system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeExperiencesChart;
