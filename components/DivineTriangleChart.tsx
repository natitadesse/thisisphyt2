import React, { useState } from 'react';
import { DivineTriangle } from '../utils/divineTriangle';

interface Props {
  triangle: DivineTriangle;
}

const DivineTriangleChart: React.FC<Props> = ({ triangle }) => {
  const [selectedSquare, setSelectedSquare] = useState<'left' | 'bottom' | 'hypotenuse' | null>(null);

  return (
    <section className="space-y-12">
      <div className="mb-12 space-y-2 border-l-4 border-amber-500 pl-6">
        <span className="text-amber-500/50 font-cinzel text-xs tracking-[0.3em] uppercase">CHAMBER XI</span>
        <h3 className="text-3xl font-cinzel text-white uppercase tracking-[0.2em]">The Divine Triangle Blueprint</h3>
        <p className="text-xs text-gray-500 font-serif italic max-w-2xl">
          The Pythagorean theorem rendered as your life blueprint: a central right triangle with three squares built on its sides, revealing your numerological destiny across 81 years.
        </p>
      </div>

      {/* Main Blueprint Chart */}
      <div className="card-glass p-8 rounded-[3rem] border border-amber-500/20 bg-gradient-to-br from-amber-100/5 to-amber-50/5 overflow-hidden">
        <div className="flex justify-center bg-gradient-to-b from-amber-50/10 to-transparent rounded-2xl p-6">
          <svg
            viewBox="0 0 1000 1000"
            className="w-full max-w-5xl h-auto"
            preserveAspectRatio="xMidYMid meet"
            style={{ backgroundColor: 'rgba(245, 240, 230, 0.3)' }}
          >
            <defs>
              <style>{`
                .blueprint-line { stroke: rgba(80, 80, 80, 0.7); stroke-width: 2.5; fill: none; }
                .blueprint-text { font-family: "Helvetica", "Arial", sans-serif; font-size: 18px; font-weight: 500; fill: rgba(50, 50, 50, 0.85); text-anchor: middle; }
                .blueprint-label { font-family: "Helvetica", "Arial", sans-serif; font-size: 16px; font-weight: 600; fill: rgba(60, 60, 60, 0.9); text-anchor: middle; }
                .blueprint-center { font-family: "Helvetica", "Arial", sans-serif; font-size: 32px; font-weight: bold; fill: rgba(80, 100, 140, 0.85); text-anchor: middle; }
                .blueprint-small { font-family: "Helvetica", "Arial", sans-serif; font-size: 14px; fill: rgba(70, 70, 70, 0.75); text-anchor: middle; }
              `}</style>
            </defs>

            {/* CENTRAL RIGHT TRIANGLE (ADG) - Right angle at D */}
            {/* Vertical leg AD */}
            <line x1="300" y1="200" x2="300" y2="600" className="blueprint-line" />
            {/* Horizontal leg DG */}
            <line x1="300" y1="600" x2="700" y2="600" className="blueprint-line" />
            {/* Hypotenuse AG */}
            <line x1="300" y1="200" x2="700" y2="600" className="blueprint-line" />

            {/* Triangle corner labels */}
            <text x="280" y="185" className="blueprint-label">A</text>
            <text x="280" y="625" className="blueprint-label">D</text>
            <text x="720" y="625" className="blueprint-label">G</text>

            {/* Triangle side values */}
            {/* Vertical leg AD - Birth Month */}
            <text x="270" y="400" className="blueprint-text">{triangle.triangleSideValues.vertical.split('/')[1]}</text>

            {/* Horizontal leg DG - Birth Day */}
            <text x="500" y="625" className="blueprint-label">{triangle.triangleSideValues.horizontal}</text>

            {/* Hypotenuse AG - Birth Year */}
            <text x="530" y="370" className="blueprint-small">{triangle.triangleSideValues.hypotenuse}</text>

            {/* Triangle center - Life Lesson Number */}
            <text x="420" y="480" className="blueprint-center">{triangle.lifeLessonNumber}</text>

            {/* LEFT SQUARE (ABCD) - Built on side AD */}
            {/* Top side BA */}
            <line x1="100" y1="200" x2="300" y2="200" className="blueprint-line" />
            {/* Left side BC */}
            <line x1="100" y1="200" x2="100" y2="600" className="blueprint-line" />
            {/* Bottom side CD */}
            <line x1="100" y1="600" x2="300" y2="600" className="blueprint-line" />
            {/* Right side is the triangle's AD */}

            {/* Left square corner labels */}
            <text x="80" y="185" className="blueprint-label">B</text>
            <text x="80" y="625" className="blueprint-label">C</text>

            {/* Left square side labels */}
            {/* Top side BA: First name letter */}
            <text x="200" y="175" className="blueprint-label">{triangle.nameLettersYouth[0]?.letter || 'A'}</text>
            <text x="200" y="195" className="blueprint-small">{triangle.nameLettersYouth[0]?.value || '1'}</text>

            {/* Left side BC: Youth phase indicator */}
            <text x="65" y="400" className="blueprint-label">{triangle.nameLettersYouth[1]?.letter || 'D'}</text>
            <text x="65" y="420" className="blueprint-small">{triangle.nameLettersYouth[1]?.value || '4'}</text>

            {/* Bottom side CD */}
            <text x="200" y="625" className="blueprint-label">{triangle.nameLettersYouth[2]?.letter || 'A'}</text>
            <text x="200" y="645" className="blueprint-small">{triangle.nameLettersYouth[2]?.value || '1'}</text>

            {/* Left square center - Youth Vibration */}
            <text x="200" y="420" className="blueprint-center">{triangle.youthSquareTotal}</text>

            {/* BOTTOM SQUARE (DEFG) - Built on side DG */}
            {/* Left side DE */}
            <line x1="300" y1="600" x2="300" y2="1000" className="blueprint-line" />
            {/* Bottom side EF */}
            <line x1="300" y1="1000" x2="700" y2="1000" className="blueprint-line" />
            {/* Right side FG */}
            <line x1="700" y1="1000" x2="700" y2="600" className="blueprint-line" />
            {/* Top side is the triangle's DG */}

            {/* Bottom square corner labels */}
            <text x="280" y="1025" className="blueprint-label">E</text>
            <text x="720" y="1025" className="blueprint-label">F</text>

            {/* Mark the X on corner E */}
            <text x="300" y="1005" className="blueprint-label" style={{ fontSize: '28px', fontWeight: 'bold' }}>X</text>

            {/* Bottom square side labels */}
            {/* Left side DE: Power phase first letter */}
            <text x="270" y="800" className="blueprint-label">{triangle.nameLettersPower[0]?.letter || 'W'}</text>
            <text x="270" y="820" className="blueprint-small">{triangle.nameLettersPower[0]?.value || '23'}</text>

            {/* Bottom side EF: Power phase second letter */}
            <text x="500" y="1020" className="blueprint-label">{triangle.nameLettersPower[1]?.letter || 'Y'}</text>
            <text x="500" y="1040" className="blueprint-small">{triangle.nameLettersPower[1]?.value || '25'}</text>

            {/* Right side FG: Power phase third letter */}
            <text x="730" y="800" className="blueprint-label">{triangle.nameLettersPower[2]?.letter || 'N'}</text>
            <text x="730" y="820" className="blueprint-small">{triangle.nameLettersPower[2]?.value || '14'}</text>

            {/* Bottom square center - Power Vibration */}
            <text x="500" y="820" className="blueprint-center">{triangle.powerSquareTotal}</text>

            {/* DIAGONAL SQUARE (AGHI) - Built on Hypotenuse AG */}
            {/* Calculate rotated square vertices for hypotenuse */}
            {/* The hypotenuse goes from (300, 200) to (700, 600) */}
            {/* Hypotenuse vector: (400, 400), length = 400√2 */}
            {/* Perpendicular vector (rotated 90°): (-400, 400), normalized and scaled */}

            {/* Point I (perpendicular from A) */}
            <line x1="300" y1="200" x2="100" y2="0" className="blueprint-line" />
            {/* Point H (perpendicular from G) */}
            <line x1="700" y1="600" x2="900" y2="400" className="blueprint-line" />
            {/* Side IH connecting the two perpendiculars */}
            <line x1="100" y1="0" x2="900" y2="400" className="blueprint-line" />

            {/* Diagonal square corner labels */}
            <text x="75" y="20" className="blueprint-label">I</text>
            <text x="925" y="385" className="blueprint-label">H</text>

            {/* Diagonal square side labels */}
            {/* Side AI (left diagonal) */}
            <text x="160" y="110" className="blueprint-label">{triangle.nameLettersWisdom[0]?.letter || 'N'}</text>
            <text x="160" y="130" className="blueprint-small">{triangle.nameLettersWisdom[0]?.value || '14'}</text>

            {/* Side IH (top diagonal) */}
            <text x="500" y="50" className="blueprint-label">{triangle.nameLettersWisdom[1]?.letter || 'A'}</text>
            <text x="500" y="70" className="blueprint-small">{triangle.nameLettersWisdom[1]?.value || '1'}</text>

            {/* Side HG (right diagonal) */}
            <text x="840" y="290" className="blueprint-label">{triangle.nameLettersWisdom[2]?.letter || 'D'}</text>
            <text x="840" y="310" className="blueprint-small">{triangle.nameLettersWisdom[2]?.value || '4'}</text>

            {/* Diagonal square center - Wisdom Vibration */}
            <text x="500" y="300" className="blueprint-center">{triangle.wisdomSquareTotal}</text>
          </svg>
        </div>
      </div>

      {/* Information Panels */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Youth Square (Left) */}
        <div
          onClick={() => setSelectedSquare(selectedSquare === 'left' ? null : 'left')}
          className={`p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
            selectedSquare === 'left'
              ? 'border-blue-500 bg-blue-500/10'
              : 'border-blue-500/30 bg-blue-500/5 hover:border-blue-500/60'
          }`}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-[10px] font-cinzel text-blue-500 uppercase tracking-[0.3em]">Youth Square</span>
          </div>
          <h4 className="text-2xl font-cinzel text-white mb-2">Ages 0-27</h4>
          <p className="text-sm text-gray-300 mb-4">Vibration: {triangle.youthSquareTotal}</p>
          {selectedSquare === 'left' && (
            <p className="text-xs text-gray-400 leading-relaxed font-serif italic">
              Built on the vertical side (AD) of the central triangle. The first three letters of your name mark this foundational square. The inner vibration governs learning, growth, and pattern establishment during these formative years.
            </p>
          )}
        </div>

        {/* Power Square (Bottom) */}
        <div
          onClick={() => setSelectedSquare(selectedSquare === 'bottom' ? null : 'bottom')}
          className={`p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
            selectedSquare === 'bottom'
              ? 'border-purple-500 bg-purple-500/10'
              : 'border-purple-500/30 bg-purple-500/5 hover:border-purple-500/60'
          }`}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <span className="text-[10px] font-cinzel text-purple-500 uppercase tracking-[0.3em]">Power Square</span>
          </div>
          <h4 className="text-2xl font-cinzel text-white mb-2">Ages 27-54</h4>
          <p className="text-sm text-gray-300 mb-4">Vibration: {triangle.powerSquareTotal}</p>
          {selectedSquare === 'bottom' && (
            <p className="text-xs text-gray-400 leading-relaxed font-serif italic">
              Built on the horizontal side (DG) of the central triangle. The next three letters of your name appear here, with an X marked at corner E signifying transition points. This square's vibration governs manifestation and achievement during your power years.
            </p>
          )}
        </div>

        {/* Wisdom Square (Hypotenuse) */}
        <div
          onClick={() => setSelectedSquare(selectedSquare === 'hypotenuse' ? null : 'hypotenuse')}
          className={`p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
            selectedSquare === 'hypotenuse'
              ? 'border-pink-500 bg-pink-500/10'
              : 'border-pink-500/30 bg-pink-500/5 hover:border-pink-500/60'
          }`}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 rounded-full bg-pink-500"></div>
            <span className="text-[10px] font-cinzel text-pink-500 uppercase tracking-[0.3em]">Wisdom Square</span>
          </div>
          <h4 className="text-2xl font-cinzel text-white mb-2">Ages 54-81</h4>
          <p className="text-sm text-gray-300 mb-4">Vibration: {triangle.wisdomSquareTotal}</p>
          {selectedSquare === 'hypotenuse' && (
            <p className="text-xs text-gray-400 leading-relaxed font-serif italic">
              Built diagonally on the hypotenuse (AG) of the central triangle. The final letters of your name complete this square. This vibration governs integration, wisdom, and the culmination of your life's journey from birth to age 81.
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-blue-500/5 border border-blue-500/10">
            <p className="text-xs text-gray-500 leading-relaxed mb-3 font-semibold text-blue-400">Triangle Components</p>
            <ul className="text-[11px] text-gray-500 space-y-2">
              <li>• Vertical leg (AD): Birth month</li>
              <li>• Horizontal leg (DG): Birth day</li>
              <li>• Hypotenuse (AG): Birth year</li>
              <li>• Center value: Life Lesson Number</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl bg-green-500/5 border border-green-500/10">
            <p className="text-xs text-gray-500 leading-relaxed mb-3 font-semibold text-green-400">The Three Squares</p>
            <ul className="text-[11px] text-gray-500 space-y-2">
              <li>• Left (AD): Youth pattern</li>
              <li>• Bottom (DG): Power expression</li>
              <li>• Diagonal (AG): Wisdom integration</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DivineTriangleChart;
