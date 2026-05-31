import React, { useState } from 'react';
import { DivineTriangle } from '../utils/divineTriangle';

interface Props {
  triangle: DivineTriangle;
}

const DivineTriangleChart: React.FC<Props> = ({ triangle }) => {
  const [selectedSquare, setSelectedSquare] = useState<'youth' | 'power' | 'wisdom' | null>(null);

  return (
    <section className="space-y-12">
      <div className="mb-12 space-y-2 border-l-4 border-amber-500 pl-6">
        <span className="text-amber-500/50 font-cinzel text-xs tracking-[0.3em] uppercase">CHAMBER XI</span>
        <h3 className="text-3xl font-cinzel text-white uppercase tracking-[0.2em]">The Divine Triangle Blueprint</h3>
        <p className="text-xs text-gray-500 font-serif italic max-w-2xl">
          Place your birthdate and name on the Pythagorean blueprint to reveal your Life Lesson Number and the events you will experience across all 81 years of your journey.
        </p>
      </div>

      {/* Main Blueprint Chart */}
      <div className="card-glass p-8 rounded-[3rem] border border-amber-500/20 overflow-x-auto">
        <div className="flex justify-center">
          <svg viewBox="0 0 900 900" className="w-full max-w-4xl h-auto" preserveAspectRatio="xMidYMid meet">
            {/* Define styles */}
            <defs>
              <style>{`
                .blueprint-label { font-family: serif; font-size: 14px; fill: rgba(150, 150, 150, 0.9); }
                .blueprint-number { font-family: serif; font-size: 16px; font-weight: bold; fill: rgba(200, 150, 100, 0.95); }
                .blueprint-text { font-family: serif; font-size: 12px; fill: rgba(150, 150, 150, 0.8); }
                .blueprint-center { font-family: serif; font-size: 20px; font-weight: bold; fill: rgba(245, 158, 11, 0.8); }
              `}</style>
              <filter id="glow">
                <feGaussianBlur stdDeviation="1" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* YOUTH SQUARE - Left (0-27) */}
            <rect x="100" y="350" width="180" height="180" fill="rgba(59, 130, 246, 0.05)" stroke="rgba(150, 150, 150, 0.5)" strokeWidth="2" />

            {/* Youth square corners with ages */}
            {/* B - Top Left (age 9) */}
            <circle cx="100" cy="350" r="6" fill="rgba(200, 150, 100, 0.8)" />
            <text x="85" y="340" className="blueprint-number">B</text>
            <text x="85" y="360" className="blueprint-number">9</text>

            {/* A/D - Top Right (age 0) */}
            <circle cx="280" cy="350" r="6" fill="rgba(200, 150, 100, 0.8)" />
            <text x="260" y="340" className="blueprint-number">A</text>
            <text x="275" y="340" className="blueprint-number">0</text>

            {/* C - Bottom Left (age 18) */}
            <circle cx="100" cy="530" r="6" fill="rgba(200, 150, 100, 0.8)" />
            <text x="85" y="560" className="blueprint-number">C</text>
            <text x="85" y="580" className="blueprint-number">18</text>

            {/* D - Bottom Right (age 27) */}
            <circle cx="280" cy="530" r="6" fill="rgba(200, 150, 100, 0.8)" />
            <text x="265" y="560" className="blueprint-number">D</text>
            <text x="265" y="580" className="blueprint-number">27</text>

            {/* Youth Square - Labels and values */}
            <text x="190" y="380" className="blueprint-text" textAnchor="middle">Youth</text>
            <text x="190" y="400" className="blueprint-text" textAnchor="middle">(0-27)</text>

            {/* Youth Square Total in center */}
            <text x="190" y="460" className="blueprint-center" textAnchor="middle">{triangle.youthSquareTotal}</text>

            {/* Youth square sides with name letters */}
            {/* Line AB - Top */}
            <text x="155" y="330" className="blueprint-text" textAnchor="middle">{triangle.nameLettersYouth[0]?.letter || 'A'}</text>
            <text x="155" y="345" className="blueprint-text" textAnchor="middle" fontSize="11">{triangle.nameLettersYouth[0]?.value || '1'}</text>

            {/* Line BC - Left */}
            <text x="65" y="445" className="blueprint-text">{triangle.nameLettersYouth[1]?.letter || 'D'}</text>
            <text x="65" y="460" className="blueprint-text" fontSize="11">{triangle.nameLettersYouth[1]?.value || '4'}</text>

            {/* Line CD - Bottom */}
            <text x="190" y="560" className="blueprint-text" textAnchor="middle">{triangle.nameLettersYouth[2]?.letter || 'A'}</text>
            <text x="190" y="575" className="blueprint-text" textAnchor="middle" fontSize="11">{triangle.nameLettersYouth[2]?.value || '1'}</text>

            {/* CENTRAL TRIANGLE */}
            {/* Right triangle outline */}
            <line x1="280" y1="350" x2="430" y2="530" stroke="rgba(150, 150, 150, 0.5)" strokeWidth="2" />
            <line x1="430" y1="530" x2="280" y2="530" stroke="rgba(150, 150, 150, 0.5)" strokeWidth="2" />

            {/* Triangle center point */}
            <circle cx="327" cy="445" r="8" fill="rgba(245, 158, 11, 0.2)" stroke="rgba(245, 158, 11, 0.6)" strokeWidth="2" />

            {/* Life Lesson Number - Center of triangle */}
            <text x="327" y="452" className="blueprint-center" textAnchor="middle" fontSize="24">{triangle.lifeLessonNumber}</text>

            {/* Triangle side values */}
            {/* Vertical (AD) - Birth Month */}
            <text x="310" y="420" className="blueprint-number" fontSize="14">{triangle.triangleSideValues.vertical}</text>

            {/* Horizontal (DG) - Birth Day */}
            <text x="355" y="555" className="blueprint-number" fontSize="14">{triangle.triangleSideValues.horizontal}</text>

            {/* Hypotenuse (AG) - Birth Year */}
            <text x="360" y="430" className="blueprint-number" fontSize="14">{triangle.triangleSideValues.hypotenuse}</text>

            {/* POWER SQUARE - Bottom Right (27-54) */}
            <rect x="430" y="530" width="180" height="180" fill="rgba(168, 85, 247, 0.05)" stroke="rgba(150, 150, 150, 0.5)" strokeWidth="2" />

            {/* Power square corners with ages */}
            {/* D - Top Left (age 27) */}
            <circle cx="430" cy="530" r="6" fill="rgba(200, 150, 100, 0.8)" />
            <text x="415" y="520" className="blueprint-number">D</text>
            <text x="415" y="540" className="blueprint-number">27</text>

            {/* G - Top Right (age 54) */}
            <circle cx="610" cy="530" r="6" fill="rgba(200, 150, 100, 0.8)" />
            <text x="595" y="520" className="blueprint-number">G</text>
            <text x="595" y="540" className="blueprint-number">54</text>

            {/* E - Bottom Left (age 36) */}
            <circle cx="430" cy="710" r="6" fill="rgba(200, 150, 100, 0.8)" />
            <text x="410" y="740" className="blueprint-number">E</text>
            <text x="410" y="760" className="blueprint-number">36</text>

            {/* F - Bottom Right (age 45) */}
            <circle cx="610" cy="710" r="6" fill="rgba(200, 150, 100, 0.8)" />
            <text x="595" y="740" className="blueprint-number">F</text>
            <text x="595" y="760" className="blueprint-number">45</text>

            {/* Power Square - Labels and values */}
            <text x="520" y="560" className="blueprint-text" textAnchor="middle">Power</text>
            <text x="520" y="580" className="blueprint-text" textAnchor="middle">(27-54)</text>

            {/* Power Square Total in center */}
            <text x="520" y="640" className="blueprint-center" textAnchor="middle">{triangle.powerSquareTotal}</text>

            {/* Power square sides with name letters */}
            {/* Line DE - Top */}
            <text x="485" y="510" className="blueprint-text" textAnchor="middle">{triangle.nameLettersPower[0]?.letter || 'W'}</text>
            <text x="485" y="525" className="blueprint-text" textAnchor="middle" fontSize="11">{triangle.nameLettersPower[0]?.value || '23'}</text>

            {/* Line EF - Bottom */}
            <text x="520" y="740" className="blueprint-text" textAnchor="middle">{triangle.nameLettersPower[1]?.letter || 'Y'}</text>
            <text x="520" y="755" className="blueprint-text" textAnchor="middle" fontSize="11">{triangle.nameLettersPower[1]?.value || '25'}</text>

            {/* Line FG - Right */}
            <text x="640" y="625" className="blueprint-text">{triangle.nameLettersPower[2]?.letter || 'N'}</text>
            <text x="640" y="640" className="blueprint-text" fontSize="11">{triangle.nameLettersPower[2]?.value || '14'}</text>

            {/* WISDOM SQUARE - Top Right (54-81) */}
            <polygon points="280,350 610,530 450,200" fill="rgba(236, 72, 153, 0.05)" stroke="rgba(150, 150, 150, 0.5)" strokeWidth="2" />

            {/* Wisdom square corners with ages */}
            {/* A - Bottom Left (age 81) */}
            <circle cx="280" cy="350" r="6" fill="rgba(200, 150, 100, 0.8)" />

            {/* H - Right (age 63) */}
            <circle cx="610" cy="530" r="6" fill="rgba(200, 150, 100, 0.8)" />
            <text x="635" y="530" className="blueprint-number" textAnchor="start">H</text>
            <text x="645" y="530" className="blueprint-number" textAnchor="start">63</text>

            {/* I/Top - Top (age 72) */}
            <circle cx="450" cy="200" r="6" fill="rgba(200, 150, 100, 0.8)" />
            <text x="430" y="170" className="blueprint-number">I</text>
            <text x="430" y="190" className="blueprint-number">72</text>

            {/* Wisdom Square - Labels and values */}
            <text x="420" y="320" className="blueprint-text" textAnchor="middle">Wisdom</text>
            <text x="420" y="340" className="blueprint-text" textAnchor="middle">(54-81)</text>

            {/* Wisdom Square Total in center */}
            <text x="420" y="380" className="blueprint-center" textAnchor="middle">{triangle.wisdomSquareTotal}</text>

            {/* Wisdom square sides with name letters */}
            {/* Line GH - Right side of diamond */}
            <text x="665" y="380" className="blueprint-text">{triangle.nameLettersWisdom[0]?.letter || 'N'}</text>
            <text x="665" y="395" className="blueprint-text" fontSize="11">{triangle.nameLettersWisdom[0]?.value || '14'}</text>

            {/* Line HI - Top right edge */}
            <text x="540" y="240" className="blueprint-text">{triangle.nameLettersWisdom[1]?.letter || 'A'}</text>
            <text x="540" y="255" className="blueprint-text" fontSize="11">{triangle.nameLettersWisdom[1]?.value || '1'}</text>

            {/* Line IA - Top left edge */}
            <text x="340" y="260" className="blueprint-text">{triangle.nameLettersWisdom[2]?.letter || 'D'}</text>
            <text x="340" y="275" className="blueprint-text" fontSize="11">{triangle.nameLettersWisdom[2]?.value || '4'}</text>

            {/* Legend */}
            <text x="50" y="80" className="blueprint-label" fontSize="12" fontWeight="bold">Blueprint Legend:</text>
            <text x="50" y="100" className="blueprint-text" fontSize="11">Each square covers 27 years</text>
            <text x="50" y="115" className="blueprint-text" fontSize="11">Numbers on sides = name letters</text>
            <text x="50" y="130" className="blueprint-text" fontSize="11">Center number = square vibration</text>
          </svg>
        </div>
      </div>

      {/* Information Panels */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Youth Square */}
        <div
          onClick={() => setSelectedSquare(selectedSquare === 'youth' ? null : 'youth')}
          className={`p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
            selectedSquare === 'youth'
              ? 'border-blue-500 bg-blue-500/10'
              : 'border-blue-500/30 bg-blue-500/5 hover:border-blue-500/60'
          }`}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-[10px] font-cinzel text-blue-500 uppercase tracking-[0.3em]">Youth Phase</span>
          </div>
          <h4 className="text-2xl font-cinzel text-white mb-2">Ages 0-27</h4>
          <p className="text-sm text-gray-300 mb-4">Vibration: {triangle.youthSquareTotal}</p>
          {selectedSquare === 'youth' && (
            <p className="text-xs text-gray-400 leading-relaxed font-serif italic">
              The foundation period of learning, growth, and self-discovery. This vibration establishes patterns and shapes your approach to life.
            </p>
          )}
        </div>

        {/* Power Square */}
        <div
          onClick={() => setSelectedSquare(selectedSquare === 'power' ? null : 'power')}
          className={`p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
            selectedSquare === 'power'
              ? 'border-purple-500 bg-purple-500/10'
              : 'border-purple-500/30 bg-purple-500/5 hover:border-purple-500/60'
          }`}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <span className="text-[10px] font-cinzel text-purple-500 uppercase tracking-[0.3em]">Power Phase</span>
          </div>
          <h4 className="text-2xl font-cinzel text-white mb-2">Ages 27-54</h4>
          <p className="text-sm text-gray-300 mb-4">Vibration: {triangle.powerSquareTotal}</p>
          {selectedSquare === 'power' && (
            <p className="text-xs text-gray-400 leading-relaxed font-serif italic">
              The manifestation period where you apply skills and face challenges. This vibration governs your achievement and life impact.
            </p>
          )}
        </div>

        {/* Wisdom Square */}
        <div
          onClick={() => setSelectedSquare(selectedSquare === 'wisdom' ? null : 'wisdom')}
          className={`p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
            selectedSquare === 'wisdom'
              ? 'border-pink-500 bg-pink-500/10'
              : 'border-pink-500/30 bg-pink-500/5 hover:border-pink-500/60'
          }`}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 rounded-full bg-pink-500"></div>
            <span className="text-[10px] font-cinzel text-pink-500 uppercase tracking-[0.3em]">Wisdom Phase</span>
          </div>
          <h4 className="text-2xl font-cinzel text-white mb-2">Ages 54-81</h4>
          <p className="text-sm text-gray-300 mb-4">Vibration: {triangle.wisdomSquareTotal}</p>
          {selectedSquare === 'wisdom' && (
            <p className="text-xs text-gray-400 leading-relaxed font-serif italic">
              The integration period where you complete cycles and share wisdom. This vibration represents your spiritual completion.
            </p>
          )}
        </div>
      </div>

      {/* Life Lesson Number Explanation */}
      <div className="card-glass p-12 rounded-[3rem] border border-amber-500/10 bg-gradient-to-br from-amber-500/5 to-transparent">
        <h4 className="text-[12px] font-cinzel text-amber-500 uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-amber-500"></span>
          Your Life Lesson Number: {triangle.lifeLessonNumber}
        </h4>
        <p className="text-sm text-gray-300 leading-relaxed font-serif italic mb-6">
          {triangle.interpretation}
        </p>
        <div className="p-6 rounded-xl bg-blue-500/5 border border-blue-500/10">
          <p className="text-[11px] text-gray-500 leading-relaxed">
            The Life Lesson Number, found in the center of the triangle, is calculated by adding your birth month + birth day + birth year (reduced to single digits). This number represents the core spiritual lesson and purpose you came to learn in this lifetime. It appears on every line of the blueprint, making it the most influential vibration throughout your entire 81-year journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DivineTriangleChart;
