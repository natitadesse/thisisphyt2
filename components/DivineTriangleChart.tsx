import React, { useState } from 'react';
import { DivineTriangle } from '../utils/divineTriangle';

interface Props {
  triangle: DivineTriangle;
}

const DivineTriangleChart: React.FC<Props> = ({ triangle }) => {
  const [selectedPoint, setSelectedPoint] = useState<'cornerstone' | 'firstVowel' | 'capstone' | null>(null);

  return (
    <section className="space-y-12">
      <div className="mb-12 space-y-2 border-l-4 border-amber-500 pl-6">
        <span className="text-amber-500/50 font-cinzel text-xs tracking-[0.3em] uppercase">CHAMBER XI</span>
        <h3 className="text-3xl font-cinzel text-white uppercase tracking-[0.2em]">The Divine Triangle Chart</h3>
        <p className="text-xs text-gray-500 font-serif italic max-w-2xl">
          The Pythagorean Trinity reveals how you approach life, what motivates your inner self, and how you conclude your endeavors. Your sacred geometric signature.
        </p>
      </div>

      {/* Main Divine Chart */}
      <div className="card-glass p-16 rounded-[3rem] border border-amber-500/20 overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          {/* SVG Triangle Visualization */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <svg
              viewBox="0 0 500 600"
              className="w-full max-w-sm h-auto"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Defs */}
              <defs>
                <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(245, 158, 11, 0.25)" />
                  <stop offset="100%" stopColor="rgba(245, 158, 11, 0.08)" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Main Triangle */}
              <polygon
                points="250,80 50,520 450,520"
                fill="url(#triangleGradient)"
                stroke="rgba(245, 158, 11, 0.4)"
                strokeWidth="2"
                filter="url(#glow)"
              />

              {/* Inner lines creating sacred geometry */}
              <line x1="250" y1="80" x2="50" y2="520" stroke="rgba(245, 158, 11, 0.15)" strokeWidth="1" strokeDasharray="8,4" />
              <line x1="250" y1="80" x2="450" y2="520" stroke="rgba(245, 158, 11, 0.15)" strokeWidth="1" strokeDasharray="8,4" />
              <line x1="50" y1="520" x2="450" y2="520" stroke="rgba(245, 158, 11, 0.15)" strokeWidth="1" strokeDasharray="8,4" />

              {/* Center lines to center point */}
              <line x1="250" y1="80" x2="250" y2="350" stroke="rgba(245, 158, 11, 0.1)" strokeWidth="1" />
              <line x1="50" y1="520" x2="250" y2="350" stroke="rgba(245, 158, 11, 0.1)" strokeWidth="1" />
              <line x1="450" y1="520" x2="250" y2="350" stroke="rgba(245, 158, 11, 0.1)" strokeWidth="1" />

              {/* Top Corner - First Vowel */}
              <g
                onClick={() => setSelectedPoint(selectedPoint === 'firstVowel' ? null : 'firstVowel')}
                style={{ cursor: 'pointer' }}
              >
                <circle cx="250" cy="80" r="50" fill="rgba(245, 158, 11, 0.15)" stroke="rgba(245, 158, 11, 0.6)" strokeWidth="3" filter="url(#glow)" className="hover:stroke-amber-400 transition" />
                <text
                  x="250"
                  y="88"
                  textAnchor="middle"
                  fontSize="48"
                  fontWeight="bold"
                  fill="rgba(245, 158, 11, 1)"
                  fontFamily="serif"
                >
                  {triangle.firstVowelValue}
                </text>
              </g>
              <text x="250" y="160" textAnchor="middle" fontSize="14" fill="rgba(245, 158, 11, 0.8)" fontFamily="sans-serif" fontWeight="bold">
                #{triangle.firstVowel}
              </text>
              <text x="250" y="180" textAnchor="middle" fontSize="12" fill="rgba(200, 200, 200, 0.7)" fontFamily="sans-serif">
                Inner Motivation
              </text>

              {/* Bottom Left - Cornerstone */}
              <g
                onClick={() => setSelectedPoint(selectedPoint === 'cornerstone' ? null : 'cornerstone')}
                style={{ cursor: 'pointer' }}
              >
                <circle cx="50" cy="520" r="50" fill="rgba(245, 158, 11, 0.15)" stroke="rgba(245, 158, 11, 0.6)" strokeWidth="3" filter="url(#glow)" className="hover:stroke-amber-400 transition" />
                <text
                  x="50"
                  y="528"
                  textAnchor="middle"
                  fontSize="48"
                  fontWeight="bold"
                  fill="rgba(245, 158, 11, 1)"
                  fontFamily="serif"
                >
                  {triangle.cornerstoneValue}
                </text>
              </g>
              <text x="50" y="590" textAnchor="middle" fontSize="14" fill="rgba(245, 158, 11, 0.8)" fontFamily="sans-serif" fontWeight="bold">
                #{triangle.cornerstone}
              </text>
              <text x="50" y="610" textAnchor="middle" fontSize="12" fill="rgba(200, 200, 200, 0.7)" fontFamily="sans-serif">
                Your Approach
              </text>

              {/* Bottom Right - Capstone */}
              <g
                onClick={() => setSelectedPoint(selectedPoint === 'capstone' ? null : 'capstone')}
                style={{ cursor: 'pointer' }}
              >
                <circle cx="450" cy="520" r="50" fill="rgba(245, 158, 11, 0.15)" stroke="rgba(245, 158, 11, 0.6)" strokeWidth="3" filter="url(#glow)" className="hover:stroke-amber-400 transition" />
                <text
                  x="450"
                  y="528"
                  textAnchor="middle"
                  fontSize="48"
                  fontWeight="bold"
                  fill="rgba(245, 158, 11, 1)"
                  fontFamily="serif"
                >
                  {triangle.capstoneValue}
                </text>
              </g>
              <text x="450" y="590" textAnchor="middle" fontSize="14" fill="rgba(245, 158, 11, 0.8)" fontFamily="sans-serif" fontWeight="bold">
                #{triangle.capstone}
              </text>
              <text x="450" y="610" textAnchor="middle" fontSize="12" fill="rgba(200, 200, 200, 0.7)" fontFamily="sans-serif">
                Your Conclusion
              </text>

              {/* Center Sacred Point */}
              <circle cx="250" cy="350" r="6" fill="rgba(245, 158, 11, 0.8)" filter="url(#glow)" />
              <circle cx="250" cy="350" r="12" fill="none" stroke="rgba(245, 158, 11, 0.3)" strokeWidth="1" />
              <circle cx="250" cy="350" r="18" fill="none" stroke="rgba(245, 158, 11, 0.2)" strokeWidth="0.5" />
            </svg>
          </div>

          {/* Chart Legend and Information */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-6">
              {/* Click Instructions */}
              <p className="text-xs text-gray-500 font-serif italic">Click any corner of the triangle to view detailed information</p>

              {/* Cornerstone Card */}
              <div
                onClick={() => setSelectedPoint(selectedPoint === 'cornerstone' ? null : 'cornerstone')}
                className={`p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                  selectedPoint === 'cornerstone'
                    ? 'border-amber-500 bg-amber-500/10'
                    : 'border-amber-500/30 bg-amber-500/5 hover:border-amber-500/60'
                }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-cinzel text-amber-500 font-bold">{triangle.cornerstoneValue}</span>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-cinzel text-amber-500/60 uppercase tracking-[0.3em] mb-1">Cornerstone</h4>
                    <p className="text-sm font-cinzel text-white">Your Approach</p>
                    <p className="text-xs text-gray-400">Number {triangle.cornerstone}</p>
                  </div>
                </div>
                {selectedPoint === 'cornerstone' && (
                  <p className="text-sm text-gray-300 font-serif italic leading-relaxed">
                    {triangle.cornerstoneMeaning}
                  </p>
                )}
              </div>

              {/* First Vowel Card */}
              <div
                onClick={() => setSelectedPoint(selectedPoint === 'firstVowel' ? null : 'firstVowel')}
                className={`p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                  selectedPoint === 'firstVowel'
                    ? 'border-amber-500 bg-amber-500/10'
                    : 'border-amber-500/30 bg-amber-500/5 hover:border-amber-500/60'
                }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-cinzel text-amber-500 font-bold">{triangle.firstVowelValue}</span>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-cinzel text-amber-500/60 uppercase tracking-[0.3em] mb-1">First Vowel</h4>
                    <p className="text-sm font-cinzel text-white">Inner Motivation</p>
                    <p className="text-xs text-gray-400">Number {triangle.firstVowel}</p>
                  </div>
                </div>
                {selectedPoint === 'firstVowel' && (
                  <p className="text-sm text-gray-300 font-serif italic leading-relaxed">
                    {triangle.firstVowelMeaning}
                  </p>
                )}
              </div>

              {/* Capstone Card */}
              <div
                onClick={() => setSelectedPoint(selectedPoint === 'capstone' ? null : 'capstone')}
                className={`p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                  selectedPoint === 'capstone'
                    ? 'border-amber-500 bg-amber-500/10'
                    : 'border-amber-500/30 bg-amber-500/5 hover:border-amber-500/60'
                }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-cinzel text-amber-500 font-bold">{triangle.capstoneValue}</span>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-cinzel text-amber-500/60 uppercase tracking-[0.3em] mb-1">Capstone</h4>
                    <p className="text-sm font-cinzel text-white">Your Conclusion</p>
                    <p className="text-xs text-gray-400">Number {triangle.capstone}</p>
                  </div>
                </div>
                {selectedPoint === 'capstone' && (
                  <p className="text-sm text-gray-300 font-serif italic leading-relaxed">
                    {triangle.capstoneMeaning}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overall Interpretation */}
      <div className="card-glass p-12 rounded-[3rem] border border-amber-500/10 bg-gradient-to-br from-amber-500/5 to-transparent">
        <h4 className="text-[12px] font-cinzel text-amber-500 uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-amber-500"></span>
          The Sacred Trinity Integration
        </h4>
        <p className="text-sm text-gray-300 leading-relaxed font-serif italic mb-6">
          {triangle.interpretation}
        </p>
        <div className="pt-8 border-t border-white/5 space-y-4">
          <p className="text-xs text-gray-500 leading-relaxed">
            The Divine Triangle is the Pythagorean Trinity of numerology - three points that define your spiritual geometry. These three numbers work together in perfect harmony to create your unique soul signature.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[10px] text-gray-600">
            <div className="p-4 bg-white/5 rounded-lg">
              <p className="font-cinzel uppercase tracking-widest mb-2 text-amber-500/60">Cornerstone Energy</p>
              <p className="font-serif italic">How you initiate and approach new situations with purpose and determination.</p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg">
              <p className="font-cinzel uppercase tracking-widest mb-2 text-amber-500/60">Vowel Energy</p>
              <p className="font-serif italic">Your inner motivation and the driving force that propels you forward spiritually.</p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg">
              <p className="font-cinzel uppercase tracking-widest mb-2 text-amber-500/60">Capstone Energy</p>
              <p className="font-serif italic">How you conclude and finalize endeavors with grace and wisdom.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DivineTriangleChart;
