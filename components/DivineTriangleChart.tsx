import React from 'react';
import { DivineTriangle } from '../utils/divineTriangle';

interface Props {
  triangle: DivineTriangle;
}

const DivineTriangleChart: React.FC<Props> = ({ triangle }) => {
  return (
    <section className="space-y-12">
      <div className="mb-12 space-y-2 border-l-4 border-amber-500 pl-6">
        <span className="text-amber-500/50 font-cinzel text-xs tracking-[0.3em] uppercase">CHAMBER XI</span>
        <h3 className="text-3xl font-cinzel text-white uppercase tracking-[0.2em]">The Divine Triangle</h3>
        <p className="text-xs text-gray-500 font-serif italic max-w-2xl">
          The Pythagorean Trinity reveals how you approach life, what motivates your inner self, and how you conclude your endeavors. Your sacred geometric signature.
        </p>
      </div>

      {/* SVG Triangle Visualization */}
      <div className="card-glass p-12 rounded-[3rem] border border-amber-500/20 flex flex-col items-center justify-center min-h-[600px] relative overflow-hidden">
        <svg
          viewBox="0 0 400 500"
          className="w-full max-w-md h-auto"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Background gradient defs */}
          <defs>
            <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(245, 158, 11, 0.15)" />
              <stop offset="100%" stopColor="rgba(245, 158, 11, 0.05)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Main Triangle */}
          <polygon
            points="200,50 80,450 320,450"
            fill="url(#triangleGradient)"
            stroke="url(#triangleGradient)"
            strokeWidth="2"
            filter="url(#glow)"
          />

          {/* Triangle outline */}
          <line x1="200" y1="50" x2="80" y2="450" stroke="rgba(245, 158, 11, 0.3)" strokeWidth="1" strokeDasharray="5,5" />
          <line x1="200" y1="50" x2="320" y2="450" stroke="rgba(245, 158, 11, 0.3)" strokeWidth="1" strokeDasharray="5,5" />
          <line x1="80" y1="450" x2="320" y2="450" stroke="rgba(245, 158, 11, 0.3)" strokeWidth="1" strokeDasharray="5,5" />

          {/* Top Corner (First Vowel - Inner Motivation) */}
          <circle cx="200" cy="50" r="35" fill="rgba(245, 158, 11, 0.1)" stroke="rgba(245, 158, 11, 0.5)" strokeWidth="2" filter="url(#glow)" />
          <text
            x="200"
            y="55"
            textAnchor="middle"
            fontSize="32"
            fontWeight="bold"
            fill="rgba(245, 158, 11, 1)"
            fontFamily="serif"
          >
            {triangle.firstVowelValue}
          </text>
          <text
            x="200"
            y="90"
            textAnchor="middle"
            fontSize="12"
            fill="rgba(245, 158, 11, 0.7)"
            fontFamily="sans-serif"
            fontWeight="bold"
          >
            {triangle.firstVowel}
          </text>
          <text
            x="200"
            y="110"
            textAnchor="middle"
            fontSize="10"
            fill="rgba(200, 200, 200, 0.6)"
            fontFamily="sans-serif"
          >
            Inner Motivation
          </text>

          {/* Bottom Left Corner (Cornerstone - Approach) */}
          <circle cx="80" cy="450" r="35" fill="rgba(245, 158, 11, 0.1)" stroke="rgba(245, 158, 11, 0.5)" strokeWidth="2" filter="url(#glow)" />
          <text
            x="80"
            y="455"
            textAnchor="middle"
            fontSize="32"
            fontWeight="bold"
            fill="rgba(245, 158, 11, 1)"
            fontFamily="serif"
          >
            {triangle.cornerstoneValue}
          </text>
          <text
            x="80"
            y="495"
            textAnchor="middle"
            fontSize="12"
            fill="rgba(245, 158, 11, 0.7)"
            fontFamily="sans-serif"
            fontWeight="bold"
          >
            {triangle.cornerstone}
          </text>
          <text
            x="80"
            y="515"
            textAnchor="middle"
            fontSize="10"
            fill="rgba(200, 200, 200, 0.6)"
            fontFamily="sans-serif"
          >
            Your Approach
          </text>

          {/* Bottom Right Corner (Capstone - Conclusion) */}
          <circle cx="320" cy="450" r="35" fill="rgba(245, 158, 11, 0.1)" stroke="rgba(245, 158, 11, 0.5)" strokeWidth="2" filter="url(#glow)" />
          <text
            x="320"
            y="455"
            textAnchor="middle"
            fontSize="32"
            fontWeight="bold"
            fill="rgba(245, 158, 11, 1)"
            fontFamily="serif"
          >
            {triangle.capstoneValue}
          </text>
          <text
            x="320"
            y="495"
            textAnchor="middle"
            fontSize="12"
            fill="rgba(245, 158, 11, 0.7)"
            fontFamily="sans-serif"
            fontWeight="bold"
          >
            {triangle.capstone}
          </text>
          <text
            x="320"
            y="515"
            textAnchor="middle"
            fontSize="10"
            fill="rgba(200, 200, 200, 0.6)"
            fontFamily="sans-serif"
          >
            Your Conclusion
          </text>

          {/* Center point */}
          <circle cx="200" cy="280" r="3" fill="rgba(245, 158, 11, 0.5)" />
        </svg>
      </div>

      {/* Detailed Interpretations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* First Vowel */}
        <div className="card-glass p-8 rounded-[2.5rem] border border-amber-500/20 relative">
          <div className="absolute top-6 right-6 w-16 h-16 flex items-center justify-center border-2 border-amber-500/30 rounded-full">
            <span className="text-4xl font-cinzel text-amber-500 font-bold">{triangle.firstVowelValue}</span>
          </div>
          <div className="space-y-4">
            <div>
              <span className="text-[10px] font-cinzel text-amber-500/60 uppercase tracking-[0.3em] block mb-2">First Vowel</span>
              <h4 className="text-lg font-cinzel text-white mb-2">Inner Motivation</h4>
              <span className="text-sm text-amber-500 font-bold">Number {triangle.firstVowel}</span>
            </div>
            <p className="text-sm text-gray-400 font-serif italic leading-relaxed">
              {triangle.firstVowelMeaning}
            </p>
          </div>
        </div>

        {/* Cornerstone */}
        <div className="card-glass p-8 rounded-[2.5rem] border border-amber-500/20 relative">
          <div className="absolute top-6 right-6 w-16 h-16 flex items-center justify-center border-2 border-amber-500/30 rounded-full">
            <span className="text-4xl font-cinzel text-amber-500 font-bold">{triangle.cornerstoneValue}</span>
          </div>
          <div className="space-y-4">
            <div>
              <span className="text-[10px] font-cinzel text-amber-500/60 uppercase tracking-[0.3em] block mb-2">Cornerstone</span>
              <h4 className="text-lg font-cinzel text-white mb-2">Your Approach</h4>
              <span className="text-sm text-amber-500 font-bold">Number {triangle.cornerstone}</span>
            </div>
            <p className="text-sm text-gray-400 font-serif italic leading-relaxed">
              {triangle.cornerstoneMeaning}
            </p>
          </div>
        </div>

        {/* Capstone */}
        <div className="card-glass p-8 rounded-[2.5rem] border border-amber-500/20 relative">
          <div className="absolute top-6 right-6 w-16 h-16 flex items-center justify-center border-2 border-amber-500/30 rounded-full">
            <span className="text-4xl font-cinzel text-amber-500 font-bold">{triangle.capstoneValue}</span>
          </div>
          <div className="space-y-4">
            <div>
              <span className="text-[10px] font-cinzel text-amber-500/60 uppercase tracking-[0.3em] block mb-2">Capstone</span>
              <h4 className="text-lg font-cinzel text-white mb-2">Your Conclusion</h4>
              <span className="text-sm text-amber-500 font-bold">Number {triangle.capstone}</span>
            </div>
            <p className="text-sm text-gray-400 font-serif italic leading-relaxed">
              {triangle.capstoneMeaning}
            </p>
          </div>
        </div>
      </div>

      {/* Overall Interpretation */}
      <div className="card-glass p-12 rounded-[3rem] border border-amber-500/10 bg-gradient-to-br from-amber-500/5 to-transparent">
        <h4 className="text-[12px] font-cinzel text-amber-500 uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-amber-500"></span>
          The Sacred Trinity
        </h4>
        <p className="text-sm text-gray-300 leading-relaxed font-serif italic">
          {triangle.interpretation}
        </p>
        <div className="mt-8 pt-8 border-t border-white/5">
          <p className="text-xs text-gray-500 leading-relaxed">
            The Divine Triangle is the Pythagorean Trinity of numerology - three points that define your spiritual geometry. These three numbers work together in perfect harmony to create your unique soul signature. Understanding how you begin (Cornerstone), what drives you from within (First Vowel), and how you complete (Capstone) gives you insight into your divine purpose and soul's journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DivineTriangleChart;
