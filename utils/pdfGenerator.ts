
import { jsPDF } from "jspdf";
import { NumerologyResult, NumerologyProfile } from "../types";
import { getExpressionDescription } from "./numerology";

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

  // --- SAVE THE MANUSCRIPT ---
  const fileName = `${profile.fullName.replace(/\s+/g, '_')}_Soul_Manuscript.pdf`;
  doc.save(fileName);
};
