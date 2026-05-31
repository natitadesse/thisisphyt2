
import { jsPDF } from "jspdf";
import { NumerologyResult, NumerologyProfile } from "../types";
import { getExpressionDescription } from "./numerology";
import { calculateLifeExperiences } from "./lifeExperiences";

/**
 * Generates a high-aesthetic PDF "Soul Manuscript" based on the Pythagorean lineage
 * of Dr. Suhasini S. Pingle.
 */
export const generateSoulManuscript = (results: NumerologyResult, profile: NumerologyProfile) => {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const GOLD = [184, 134, 11]; // Dark Goldenrod
  const CHARCOAL = [20, 20, 22];
  const OFF_WHITE = [250, 250, 252];
  const margin = 20;
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const contentWidth = pageWidth - margin * 2;

  let pageNumber = 1;

  // --- HELPER FUNCTIONS ---

  const drawPageBorder = () => {
    doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
    doc.setLineWidth(0.2);
    doc.rect(margin - 5, margin - 5, pageWidth - (margin * 2) + 10, pageHeight - (margin * 2) + 10);
    // Double line effect on corners
    doc.line(margin - 8, margin - 5, margin - 8, margin + 5);
    doc.line(margin - 5, margin - 8, margin + 5, margin - 8);
  };

  const drawFooter = () => {
    doc.setFont("helvetica", "italic");
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text(`Prophetic Manuscript | Page ${pageNumber}`, pageWidth / 2, pageHeight - 12, { align: "center" });
    doc.text("Lineage: DR. SUHASINI S. PINGLE", margin, pageHeight - 12);
    pageNumber++;
  };

  const drawHeader = (title: string, yPos: number): number => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
    doc.text(title.toUpperCase(), margin, yPos);
    
    // Decorative line below header
    doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
    doc.setLineWidth(0.5);
    doc.line(margin, yPos + 3, margin + 60, yPos + 3);
    doc.setLineWidth(0.1);
    doc.line(margin, yPos + 4.5, margin + 40, yPos + 4.5);
    
    return yPos + 18;
  };

  const drawSubHeader = (title: string, yPos: number): number => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(80, 80, 80);
    doc.text(title.toUpperCase(), margin, yPos);
    return yPos + 8;
  };

  const drawDataRow = (label: string, value: string | number, yPos: number, desc?: string): number => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(CHARCOAL[0], CHARCOAL[1], CHARCOAL[2]);
    doc.text(label, margin, yPos);
    
    doc.setFont("helvetica", "bold");
    doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
    doc.text(value.toString(), margin + 65, yPos);
    
    let nextY = yPos + 6;
    if (desc) {
      doc.setFont("helvetica", "italic");
      doc.setFontSize(9);
      doc.setTextColor(120, 120, 120);
      const lines = doc.splitTextToSize(desc, contentWidth - 70);
      doc.text(lines, margin + 65, nextY);
      nextY += (lines.length * 4) + 4;
    } else {
      nextY += 4;
    }
    
    return nextY;
  };

  const startNewPage = (title?: string) => {
    doc.addPage();
    drawPageBorder();
    let currentY = 30;
    if (title) {
      currentY = drawHeader(title, currentY);
    }
    return currentY;
  };

  // --- COVER PAGE ---
  doc.setFillColor(CHARCOAL[0], CHARCOAL[1], CHARCOAL[2]);
  doc.rect(0, 0, pageWidth, pageHeight, "F");
  
  // Decorative central element
  doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
  doc.setLineWidth(0.5);
  doc.circle(pageWidth / 2, pageHeight / 2 - 20, 60, "S");
  doc.setLineWidth(0.1);
  doc.circle(pageWidth / 2, pageHeight / 2 - 20, 65, "S");
  
  doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("ESTABLISHED IN THE SACRED GEOMETRY OF NUMBERS", pageWidth / 2, 60, { align: "center" });

  doc.setFontSize(42);
  doc.text("SOUL", pageWidth / 2, pageHeight / 2 - 30, { align: "center" });
  doc.text("MANUSCRIPT", pageWidth / 2, pageHeight / 2 - 12, { align: "center" });

  doc.setLineWidth(0.8);
  doc.line(pageWidth / 2 - 40, pageHeight / 2, pageWidth / 2 + 40, pageHeight / 2);

  doc.setFontSize(16);
  doc.setFont("helvetica", "normal");
  doc.text("VIBRATIONAL ANALYSIS OF", pageWidth / 2, pageHeight / 2 + 20, { align: "center" });
  
  doc.setFontSize(28);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255);
  doc.text(profile.fullName.toUpperCase(), pageWidth / 2, pageHeight / 2 + 35, { align: "center" });

  doc.setFontSize(12);
  doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
  doc.text(`ARRIVAL FREQUENCY: ${profile.birthDate}`, pageWidth / 2, pageHeight / 2 + 48, { align: "center" });

  doc.setFontSize(9);
  doc.setFont("helvetica", "italic");
  doc.setTextColor(150, 150, 150);
  doc.text("Following the Pythagorean Lineage & Wisdom of", pageWidth / 2, pageHeight - 35, { align: "center" });
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255);
  doc.text("DR. SUHASINI S. PINGLE", pageWidth / 2, pageHeight - 30, { align: "center" });

  // --- PAGE 1: PHILOSOPHICAL TRINITY & CORE ---
  let y = startNewPage("I. Universal Archetypes");
  
  y = drawSubHeader("Philosophical Foundations", y);
  y = drawDataRow("1. Numerology Intro", "The bridge between the seen and the unseen.", y);
  y = drawDataRow("2. Number Symbolism", "Numbers as qualities of energy, not just quantities.", y);
  y = drawDataRow("3. Pythagorean Wisdom", "Universal principles of harmony and the Monad.", y);
  y = drawDataRow("4. Soul Key", results.elements.keyNumber, y, "The primary root of your specific frequency.");
  
  y += 10;
  y = drawSubHeader("The Core Signature", y);
  y = drawDataRow("5. Life Path", results.lifePath, y, "The road you travel and your ultimate destiny.");
  y = drawDataRow("8. Expression", results.expression, y, getExpressionDescription(results.expression));
  y = drawDataRow("9. Soul Urge", results.soulUrge, y, "The inner motivation that satisfies your heart.");
  y = drawDataRow("10. Personality", results.personality, y, "The outer persona and social vibration.");
  
  drawFooter();

  // --- PAGE 2: FUNCTIONAL SELF & CHALLENGES ---
  y = startNewPage("II. Manifested Potential");
  
  y = drawSubHeader("Individual Capabilities", y);
  y = drawDataRow("6. Birth Day talent", results.birthDay, y, "A specific innate tool given at birth.");
  y = drawDataRow("7. Attitude", results.attitude, y, "How you instinctively approach the world.");
  y = drawDataRow("17. Maturity", results.maturity, y, "The focus of your later life fulfillment.");
  y = drawDataRow("18. Rational Thought", results.rationalThought, y, "How you process data and reach logic.");
  y = drawDataRow("15. Balance", results.balance, y, "Your stability during emotional crises.");

  y += 10;
  y = drawSubHeader("Evolutionary Hurdles", y);
  y = drawDataRow("11. Challenges", results.challenges.join(", "), y, "Specific obstacles for ego refinement.");
  y = drawDataRow("12. Karmic Lessons", results.karmicLessons.length ? results.karmicLessons.join(", ") : "None", y, "Missing frequencies requiring integration.");
  y = drawDataRow("16. Karmic Debt", results.karmicDebts.length ? results.karmicDebts.join(", ") : "None", y, "Historical vibrational obligations.");
  y = drawDataRow("13. Hidden Passion", results.hiddenPassion, y, "A concentrated talent pushing you to excel.");
  y = drawDataRow("14. Subconscious Self", results.subconsciousSelf, y, "Instinctual response to sudden changes.");

  drawFooter();

  // --- PAGE 3: COLOR SPECTRUM ANALYSIS ---
  y = startNewPage("III. Chromatic Resonance");
  
  const colors = [
    { label: "25. Life Path Color", data: results.colorAnalysis.lifePathColor },
    { label: "26. Expression Color", data: results.colorAnalysis.expressionColor },
    { label: "27. Soul Urge Color", data: results.colorAnalysis.soulUrgeColor }
  ];

  colors.forEach(c => {
    doc.setFillColor(c.data.hex);
    doc.rect(margin, y, 10, 10, "F");
    doc.setDrawColor(200, 200, 200);
    doc.rect(margin, y, 10, 10, "S");
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(CHARCOAL[0], CHARCOAL[1], CHARCOAL[2]);
    doc.text(c.label, margin + 15, y + 7);
    
    y += 12;
    doc.setFont("helvetica", "bold");
    doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
    doc.text(c.data.colorName.toUpperCase(), margin + 15, y);
    
    y += 6;
    doc.setFont("helvetica", "italic");
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    const desc = doc.splitTextToSize(c.data.meaning, contentWidth - 20);
    doc.text(desc, margin + 15, y);
    y += (desc.length * 5) + 15;
  });

  drawFooter();

  // --- PAGE 4: HARMONICS & PLANES ---
  y = startNewPage("IV. Internal Architecture");
  
  y = drawSubHeader("Vibrational Harmonics", y);
  y = drawDataRow("19. Elements", results.elements.dominant, y, "Your primary plane of manifestation.");
  y = drawDataRow("20. The Cipher", "Infinite Potential", y, "The Zero acts as an amplifier of your core.");
  y = drawDataRow("24. Repeated Freq", results.repeatedCore.map(r => `${r.number}(x${r.frequency})`).join(", ") || "None", y, "Intense focal points in your profile.");
  
  y += 10;
  y = drawSubHeader("Planes of Expression", y);
  y = drawDataRow("Physical Plane", results.planesOfExpression.physical, y);
  y = drawDataRow("Mental Plane", results.planesOfExpression.mental, y);
  y = drawDataRow("Emotional Plane", results.planesOfExpression.emotional, y);
  y = drawDataRow("Intuitive Plane", results.planesOfExpression.intuitive, y);
  
  y += 10;
  y = drawSubHeader("Special Triggers", y);
  y = drawDataRow("23. Cornerstone", results.specialLetters.firstLetter, y, "How you start projects and handle opportunities.");
  y = drawDataRow("23. First Vowel", results.specialLetters.firstVowel, y, "Your first emotional reaction to life events.");

  drawFooter();

  // --- PAGE 5: PROPHETIC TIMELINE (PINNACLES & TRANSITS) ---
  y = startNewPage("V. Prophetic Seasons");
  
  y = drawSubHeader("Pinnacle Peaks", y);
  results.pinnacles.forEach(p => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(CHARCOAL[0], CHARCOAL[1], CHARCOAL[2]);
    doc.text(`${p.title} (${p.startAge}-${p.endAge})`, margin, y);
    doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
    doc.text(`Frequency: ${p.number}`, margin + 70, y);
    y += 6;
    doc.setFont("helvetica", "italic");
    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    const pLines = doc.splitTextToSize(p.baseMeaning, contentWidth);
    doc.text(pLines, margin, y);
    y += (pLines.length * 4) + 8;
  });

  y += 5;
  y = drawSubHeader("Temporal Transits (Current Essence)", y);
  const ct = results.transits.current;
  y = drawDataRow("Physical Transit", ct.physical.letter, y, ct.physical.description);
  y = drawDataRow("Mental Transit", ct.mental.letter, y, ct.mental.description);
  y = drawDataRow("Spiritual Transit", ct.spiritual.letter, y, ct.spiritual.description);
  y = drawDataRow("Year Essence", ct.essence, y, "The collective vibration currently governing your path.");

  drawFooter();

  // --- PAGE 6: ORACLE FORECASTS ---
  y = startNewPage("VI. The Oracle Scroll");

  y = drawSubHeader("Visionary 5-Year Forecast", y);
  results.personalYearForecast.forEach(yr => {
    y = drawDataRow(`Year ${yr.year}`, `Personal Year ${yr.number}`, y, yr.description);
  });

  y += 10;
  y = drawSubHeader("Personal Month Cycles (6-Month Horizon)", y);
  results.personalMonthForecast.forEach(m => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(CHARCOAL[0], CHARCOAL[1], CHARCOAL[2]);
    doc.text(m.label, margin, y);
    doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
    doc.text(m.number.toString(), margin + 50, y);
    doc.setFont("helvetica", "italic");
    doc.setFontSize(9);
    doc.setTextColor(120, 120, 120);
    doc.text(`- ${m.description}`, margin + 60, y);
    y += 8;
  });

  drawFooter();

  // --- PAGE 6B: LIFE EXPERIENCES CHART ---
  const lifeExperiences = calculateLifeExperiences(profile.birthDate);
  if (lifeExperiences) {
    y = startNewPage("VI. Life Experiences Chart");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
    doc.text("The Three Life Phases", margin, y);
    y += 10;

    doc.setFont("helvetica", "italic");
    doc.setFontSize(9);
    doc.setTextColor(CHARCOAL[0], CHARCOAL[1], CHARCOAL[2]);
    doc.text("Your journey through Youth, Power, and Wisdom across 81 sacred years", margin, y);
    y += 12;

    // Three phase boxes
    const phaseWidth = (contentWidth - 10) / 3;
    const phaseX = [margin, margin + phaseWidth + 5, margin + (phaseWidth * 2) + 10];

    lifeExperiences.phases.forEach((phase, idx) => {
      doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
      doc.setLineWidth(0.5);
      doc.rect(phaseX[idx], y, phaseWidth, 60);

      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
      doc.text(phase.name, phaseX[idx] + 3, y + 8);

      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(CHARCOAL[0], CHARCOAL[1], CHARCOAL[2]);
      doc.text(`Ages ${phase.startAge}-${phase.endAge}`, phaseX[idx] + 3, y + 16);

      doc.setFont("helvetica", "italic");
      doc.setFontSize(8);
      doc.setTextColor(100, 100, 100);
      const phaseLines = doc.splitTextToSize(phase.description, phaseWidth - 6);
      doc.text(phaseLines, phaseX[idx] + 3, y + 24);
    });

    y += 68;

    // Age milestones
    y = drawSubHeader("Sacred Age Milestones", y);
    const cornerPairs = [
      { label: "Entry Point", letter: '0', val: 0 },
      { label: "First Cycle", letter: 'B', val: 9 },
      { label: "Second Cycle", letter: 'C', val: 18 },
      { label: "Youth to Power", letter: 'D', val: 27 },
      { label: "Power Foundation", letter: 'E', val: 36 },
      { label: "Power Peak", letter: 'F', val: 45 },
      { label: "Power to Wisdom", letter: 'G', val: 54 },
      { label: "Wisdom Foundation", letter: 'H', val: 63 },
      { label: "Complete Journey", letter: 'A', val: 81 }
    ];

    cornerPairs.forEach(corner => {
      y = drawDataRow(`${corner.letter} - ${corner.label}`, `Age ${corner.val}`, y);
    });

    y += 8;
    doc.setFont("helvetica", "italic");
    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    const lifeInterpLines = doc.splitTextToSize(lifeExperiences.interpretation, contentWidth);
    doc.text(lifeInterpLines, margin, y);

    drawFooter();
  }

  // --- PAGE 7: DIVINE TRIANGLE WITH CHART ---
  if (results.divineTriangle) {
    y = startNewPage("VII. The Divine Triangle");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
    doc.text("The Pythagorean Trinity Chart", margin, y);
    y += 8;

    doc.setFont("helvetica", "italic");
    doc.setFontSize(8);
    doc.setTextColor(120, 120, 120);
    doc.text("Three sacred points defining your spiritual geometry", margin, y);
    y += 15;

    // Draw the triangle chart
    const triangleCenterX = pageWidth / 2;
    const triangleTopY = y + 20;
    const triangleHeight = 80;
    const triangleWidth = 140;

    // Triangle coordinates
    const topX = triangleCenterX;
    const topY = triangleTopY;
    const leftX = triangleCenterX - triangleWidth / 2;
    const leftY = triangleTopY + triangleHeight;
    const rightX = triangleCenterX + triangleWidth / 2;
    const rightY = triangleTopY + triangleHeight;

    // Draw filled triangle with gradient effect
    doc.setFillColor(255, 248, 220);
    doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
    doc.setLineWidth(1);

    // Draw the triangle
    doc.setFillColor(250, 240, 210);
    doc.triangle(topX, topY, leftX, leftY, rightX, rightY, "F");

    // Draw the triangle outline
    doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
    doc.setLineWidth(1.5);
    doc.line(topX, topY, leftX, leftY);
    doc.line(leftX, leftY, rightX, rightY);
    doc.line(rightX, rightY, topX, topY);

    // Inner lines
    doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
    doc.setLineWidth(0.3);
    doc.line(topX, topY, triangleCenterX, triangleTopY + triangleHeight * 0.6);
    doc.line(leftX, leftY, triangleCenterX, triangleTopY + triangleHeight * 0.6);
    doc.line(rightX, rightY, triangleCenterX, triangleTopY + triangleHeight * 0.6);

    // Center point
    doc.setFillColor(GOLD[0], GOLD[1], GOLD[2]);
    doc.circle(triangleCenterX, triangleTopY + triangleHeight * 0.6, 2, "F");

    // Top circle - First Vowel
    doc.setFillColor(255, 250, 230);
    doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
    doc.setLineWidth(2);
    doc.circle(topX, topY, 12, "S");
    doc.setFillColor(GOLD[0], GOLD[1], GOLD[2]);
    doc.circle(topX, topY, 10, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text(results.divineTriangle.firstVowelValue.toString(), topX, topY + 5, { align: "center" });

    // Label for Top
    doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
    doc.setFontSize(9);
    doc.text("#" + results.divineTriangle.firstVowel.toString(), topX, topY - 18, { align: "center" });
    doc.setFontSize(7);
    doc.setTextColor(80, 80, 80);
    doc.text("Inner Motivation", topX, topY - 13, { align: "center" });

    // Bottom Left circle - Cornerstone
    doc.setFillColor(255, 250, 230);
    doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
    doc.setLineWidth(2);
    doc.circle(leftX, leftY, 12, "S");
    doc.setFillColor(GOLD[0], GOLD[1], GOLD[2]);
    doc.circle(leftX, leftY, 10, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text(results.divineTriangle.cornerstoneValue.toString(), leftX, leftY + 5, { align: "center" });

    // Label for Left
    doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
    doc.setFontSize(9);
    doc.text("#" + results.divineTriangle.cornerstone.toString(), leftX - 22, leftY - 5, { align: "center" });
    doc.setFontSize(7);
    doc.setTextColor(80, 80, 80);
    doc.text("Your Approach", leftX - 22, leftY, { align: "center" });

    // Bottom Right circle - Capstone
    doc.setFillColor(255, 250, 230);
    doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
    doc.setLineWidth(2);
    doc.circle(rightX, rightY, 12, "S");
    doc.setFillColor(GOLD[0], GOLD[1], GOLD[2]);
    doc.circle(rightX, rightY, 10, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text(results.divineTriangle.capstoneValue.toString(), rightX, rightY + 5, { align: "center" });

    // Label for Right
    doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
    doc.setFontSize(9);
    doc.text("#" + results.divineTriangle.capstone.toString(), rightX + 22, rightY - 5, { align: "center" });
    doc.setFontSize(7);
    doc.setTextColor(80, 80, 80);
    doc.text("Your Conclusion", rightX + 22, rightY, { align: "center" });

    // Continue below the triangle
    y = leftY + 20;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
    doc.text("Trinity Interpretation", margin, y);
    y += 8;

    doc.setFont("helvetica", "italic");
    doc.setFontSize(9);
    doc.setTextColor(CHARCOAL[0], CHARCOAL[1], CHARCOAL[2]);
    const triInterpLines = doc.splitTextToSize(results.divineTriangle.interpretation, contentWidth);
    doc.text(triInterpLines, margin, y);
    y += (triInterpLines.length * 5) + 12;

    // Detailed meanings in three columns
    y += 5;
    const colWidth = (contentWidth - 10) / 3;
    const boxX = [margin, margin + colWidth + 5, margin + (colWidth * 2) + 10];

    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
    doc.text("First Vowel", boxX[0], y);
    doc.text("Cornerstone", boxX[1], y);
    doc.text("Capstone", boxX[2], y);
    y += 6;

    const points = [
      { val: results.divineTriangle.firstVowelValue, num: results.divineTriangle.firstVowel, meaning: results.divineTriangle.firstVowelMeaning },
      { val: results.divineTriangle.cornerstoneValue, num: results.divineTriangle.cornerstone, meaning: results.divineTriangle.cornerstoneMeaning },
      { val: results.divineTriangle.capstoneValue, num: results.divineTriangle.capstone, meaning: results.divineTriangle.capstoneMeaning }
    ];

    points.forEach((point, idx) => {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
      doc.text(point.val + " (#" + point.num + ")", boxX[idx], y);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(7);
      doc.setTextColor(80, 80, 80);
      const meaningLines = doc.splitTextToSize(point.meaning, colWidth - 2);
      doc.text(meaningLines, boxX[idx], y + 6);
    });

    y += 35;

    // Sacred Trinity explanation
    y += 5;
    doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
    doc.setLineWidth(0.3);
    doc.line(margin, y, pageWidth - margin, y);
    y += 8;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
    doc.text("The Sacred Trinity Integration", margin, y);
    y += 6;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(100, 100, 100);
    const trinityText = doc.splitTextToSize(
      "The Divine Triangle is the Pythagorean Trinity of numerology - three points that define your spiritual geometry. Your cornerstone shows how you approach life's beginnings. Your first vowel reveals your inner motivation. Your capstone demonstrates how you complete endeavors. Together, these three numbers create your unique soul signature.",
      contentWidth
    );
    doc.text(trinityText, margin, y);

    drawFooter();
  }

  // --- SAVE THE MANUSCRIPT ---
  const fileName = `${profile.fullName.replace(/\s+/g, '_')}_Soul_Manuscript.pdf`;
  doc.save(fileName);
};
