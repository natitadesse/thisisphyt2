
const pythagoreanMap: Record<string, number> = {
  a: 1, j: 1, s: 1, b: 2, k: 2, t: 2, c: 3, l: 3, u: 3,
  d: 4, m: 4, v: 4, e: 5, n: 5, w: 5, f: 6, o: 6, x: 6,
  g: 7, p: 7, y: 7, h: 8, q: 8, z: 8, i: 9, r: 9
};

const colorMap: Record<number, { name: string; hex: string; meaning: string }> = {
  1: { name: "Red", hex: "#ef4444", meaning: "Pioneering energy, courage, and physical vitality." },
  2: { name: "Orange", hex: "#f97316", meaning: "Sensitivity, partnership, and emotional balance." },
  3: { name: "Yellow", hex: "#eab308", meaning: "Joy, creative expression, and social sunshine." },
  4: { name: "Green", hex: "#22c55e", meaning: "Stability, growth, and practical foundations." },
  5: { name: "Blue", hex: "#3b82f6", meaning: "Freedom, curiosity, and versatile communication." },
  6: { name: "Indigo", hex: "#6366f1", meaning: "Service, domestic harmony, and nurturing love." },
  7: { name: "Violet", hex: "#a855f7", meaning: "Spiritual depth, analysis, and inner wisdom." },
  8: { name: "Rose/Beige", hex: "#ec4899", meaning: "Material power, efficiency, and manifestation." },
  9: { name: "Gold/White", hex: "#fbbf24", meaning: "Universal love, compassion, and completion." },
  11: { name: "Silver", hex: "#cbd5e1", meaning: "Intuitive illumination and visionary reach." },
  22: { name: "Deep Gold", hex: "#d97706", meaning: "Master architectural manifesting power." }
};

export const CYCLE_DESCRIPTIONS: Record<number, string> = {
  1: "New beginnings, seeds of action.",
  2: "Cooperation, waiting, and tact.",
  3: "Creative joy and social flow.",
  4: "Discipline, work, and foundations.",
  5: "Change, freedom, and motion.",
  6: "Duty, family, and responsibility.",
  7: "Refinement, study, and solitude.",
  8: "Harvest, power, and organization.",
  9: "Release, endings, and completion."
};

export const PINNACLE_MEANINGS: Record<number, string> = {
  1: "A time of leadership and independence. Standing on your own.",
  2: "Harmony through partnership and diplomacy. Slow progress.",
  3: "Creative expansion and social popularity. Joyful expression.",
  4: "Hard work, system, and building solid foundations.",
  5: "A whirlwind of change, freedom, and travel.",
  6: "Focus on family, home, and community responsibility.",
  7: "Introspection, study, and spiritual refinement.",
  8: "Material success, power, and professional achievement.",
  9: "Humanitarianism, compassion, and universal wisdom.",
  11: "Spiritual illumination and intuitive breakthroughs.",
  22: "Master building and manifesting large-scale projects."
};

export const BRIDGE_DESCRIPTIONS: Record<number, string> = {
  0: "Natural alignment; no bridge needed.",
  1: "Bridge by being more independent and decisive.",
  2: "Bridge by using tact, diplomacy, and cooperation.",
  3: "Bridge through creative joy and social interaction.",
  4: "Bridge through discipline and a practical approach.",
  5: "Bridge by embracing change and versatility.",
  6: "Bridge through responsibility and nurturing love.",
  7: "Bridge through introspection and spiritual seeking.",
  8: "Bridge by focusing on efficiency and material goals.",
  9: "Bridge through compassion and humanitarianism."
};

export const MASTER_NUMBERS = [11, 22, 33];

export const reduceNumber = (num: number, keepMaster = true): number => {
  if (keepMaster && MASTER_NUMBERS.includes(num)) return num;
  if (num < 10) return num;
  const sum = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
  return reduceNumber(sum, keepMaster);
};

const getLetterValue = (char: string): number => pythagoreanMap[char.toLowerCase()] || 0;

export const calculateProfile = (name: string, dob: string) => {
  if (!name || !dob) return null;
  const birth = new Date(dob);
  const today = new Date();
  
  let currentAge = today.getFullYear() - birth.getFullYear();
  if (today.getMonth() < birth.getMonth() || (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())) currentAge--;

  const bDay = birth.getUTCDate();
  const bMonth = birth.getUTCMonth() + 1;
  const bYear = birth.getUTCFullYear();

  const sumLetters = (str: string) => str.toLowerCase().split('').filter(c => /[a-z]/.test(c)).reduce((acc, c) => acc + getLetterValue(c), 0);

  // Core Numbers
  const lp = reduceNumber(reduceNumber(bDay) + reduceNumber(bMonth) + reduceNumber(bYear));
  const exp = reduceNumber(sumLetters(name));
  const soul = reduceNumber(name.toLowerCase().split('').filter(c => 'aeiou'.includes(c)).reduce((acc, c) => acc + getLetterValue(c), 0));
  const pers = reduceNumber(name.toLowerCase().split('').filter(c => /[a-z]/.test(c) && !'aeiou'.includes(c)).reduce((acc, c) => acc + getLetterValue(c), 0));
  
  // Name Specifics
  const nameParts = name.trim().split(/\s+/);
  const firstName = nameParts[0];
  const firstNameSum = sumLetters(firstName);
  const nameDigits = name.toLowerCase().split('').filter(c => /[a-z]/.test(c)).map(getLetterValue);
  const uniqueDigits = new Set(nameDigits);
  
  // 12. Karmic Lessons
  const karmicLessons = [1,2,3,4,5,6,7,8,9].filter(n => !uniqueDigits.has(n));
  
  // 13. Hidden Passion
  const counts: Record<number, number> = {};
  nameDigits.forEach(d => counts[d] = (counts[d] || 0) + 1);
  const maxFreq = Math.max(...Object.values(counts));
  const hiddenPassion = parseInt(Object.keys(counts).find(k => counts[parseInt(k)] === maxFreq) || '0');

  // 14. Subconscious Self
  const subconsciousSelf = 9 - karmicLessons.length;

  // 15. Balance Number
  const balance = reduceNumber(nameParts.reduce((acc, p) => acc + getLetterValue(p[0]), 0));

  // 16. Karmic Debt
  const karmicDebts = [13,14,16,19].filter(d => [lp, exp, soul, pers, bDay].includes(d));

  // Bridge Numbers
  const calcBridge = (n1: number, n2: number) => Math.abs(reduceNumber(n1, false) - reduceNumber(n2, false));
  const bridgeNumbers = [
    { title: "Life Path - Expression Bridge", value: calcBridge(lp, exp), description: BRIDGE_DESCRIPTIONS[calcBridge(lp, exp)] },
    { title: "Soul Urge - Personality Bridge", value: calcBridge(soul, pers), description: BRIDGE_DESCRIPTIONS[calcBridge(soul, pers)] }
  ];

  // 22. Planes of Expression
  const planes = {
    physical: nameDigits.filter(d => [4,5].includes(d)).length,
    mental: nameDigits.filter(d => [1,8].includes(d)).length,
    emotional: nameDigits.filter(d => [2,3,6].includes(d)).length,
    intuitive: nameDigits.filter(d => [7,9].includes(d)).length
  };

  // 23. Special Letters
  const firstLetter = name[0].toUpperCase();
  const vowels = name.toLowerCase().match(/[aeiou]/g) || ['a'];
  const firstVowel = vowels[0].toUpperCase();

  // Color Analysis
  const getColor = (num: number) => ({
    number: num,
    colorName: colorMap[num]?.name || "Clear",
    hex: colorMap[num]?.hex || "#ffffff",
    meaning: colorMap[num]?.meaning || "Pure potential."
  });

  // Pinnacles
  const dR = reduceNumber(bDay, false);
  const mR = reduceNumber(bMonth, false);
  const yR = reduceNumber(bYear, false);
  const p1V = reduceNumber(dR + mR);
  const p2V = reduceNumber(dR + yR);
  const p3V = reduceNumber(p1V + p2V);
  const p4V = reduceNumber(mR + yR);
  const p1End = 36 - lp;

  const pinnacles = [
    { title: "First Pinnacle", number: p1V, startAge: 0, endAge: p1End, stage: 'First' as const, baseMeaning: PINNACLE_MEANINGS[p1V] || "Peak achievement." },
    { title: "Second Pinnacle", number: p2V, startAge: p1End, endAge: p1End + 9, stage: 'Second/Third' as const, baseMeaning: PINNACLE_MEANINGS[p2V] || "Peak achievement." },
    { title: "Third Pinnacle", number: p3V, startAge: p1End + 9, endAge: p1End + 18, stage: 'Second/Third' as const, baseMeaning: PINNACLE_MEANINGS[p3V] || "Peak achievement." },
    { title: "Fourth Pinnacle", number: p4V, startAge: p1End + 18, endAge: "Onwards", stage: 'Fourth' as const, baseMeaning: PINNACLE_MEANINGS[p4V] || "Peak achievement." }
  ].map(p => ({ ...p, isCurrent: currentAge >= p.startAge && (typeof p.endAge === 'string' || currentAge < p.endAge) }));

  // Transits
  const getLetterAtAge = (str: string, age: number) => {
    const chars = str.toLowerCase().replace(/[^a-z]/g, '').split('');
    if (!chars.length) return { letter: '-', value: 0 };
    const values = chars.map(getLetterValue);
    const totalCycle = values.reduce((a, b) => a + b, 0);
    const effectiveAge = age % totalCycle;
    let sum = 0;
    for (let i = 0; i < chars.length; i++) {
      if (effectiveAge >= sum && effectiveAge < sum + values[i]) {
        return { letter: chars[i].toUpperCase(), value: values[i] };
      }
      sum += values[i];
    }
    return { letter: chars[0].toUpperCase(), value: values[0] };
  };

  const calculateTransitAtAge = (age: number) => {
    const p = getLetterAtAge(firstName, age);
    const m = getLetterAtAge(nameParts.length > 2 ? nameParts[1] : firstName, age);
    const s = getLetterAtAge(nameParts[nameParts.length - 1], age);
    const ess = reduceNumber(p.value + m.value + s.value);
    return {
      age,
      physical: { ...p, description: "Physical movement." },
      mental: { ...m, description: "Mental focus." },
      spiritual: { ...s, description: "Spiritual resonance." },
      essence: ess,
      essenceDescription: "The overarching theme of your year."
    };
  };

  // Forecasts
  const py = reduceNumber(reduceNumber(bDay) + reduceNumber(bMonth) + reduceNumber(today.getFullYear()));
  const dayForecast = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today); d.setDate(today.getDate() + i);
    const num = reduceNumber(py + (d.getMonth() + 1) + d.getDate());
    return { label: d.toLocaleDateString(undefined, { weekday: 'short', day: 'numeric' }), number: num, description: CYCLE_DESCRIPTIONS[num] };
  });
  const monthForecast = Array.from({ length: 6 }, (_, i) => {
    const d = new Date(today.getFullYear(), today.getMonth() + i, 1);
    const num = reduceNumber(py + (d.getMonth() + 1));
    return { label: d.toLocaleString('default', { month: 'long' }), number: num, description: CYCLE_DESCRIPTIONS[num] };
  });
  const weekForecast = Array.from({ length: 4 }, (_, i) => {
    const d = new Date(today); d.setDate(today.getDate() + (i * 7));
    const wk = Math.ceil(d.getDate() / 7);
    const num = reduceNumber(py + (d.getMonth() + 1) + wk);
    return { label: `Week ${wk} of ${d.toLocaleString('default', { month: 'short' })}`, number: num, description: CYCLE_DESCRIPTIONS[num] };
  });
  const yearForecast = Array.from({ length: 5 }, (_, i) => {
    const y = today.getFullYear() + i;
    const num = reduceNumber(reduceNumber(bDay) + reduceNumber(bMonth) + reduceNumber(y));
    return { year: y, number: num, description: CYCLE_DESCRIPTIONS[num] };
  });

  const coreValues = [lp, bDay, exp, soul, pers, balance, hiddenPassion, subconsciousSelf];
  const coreCounts: Record<number, number> = {}; coreValues.forEach(v => coreCounts[v] = (coreCounts[v] || 0) + 1);

  return {
    lifePath: lp, birthDay: bDay, attitude: reduceNumber(bDay + bMonth), expression: exp, soulUrge: soul, personality: pers,
    maturity: reduceNumber(lp + exp), rationalThought: reduceNumber(reduceNumber(firstNameSum) + bDay),
    challenges: [Math.abs(mR - dR), Math.abs(dR - yR), Math.abs(Math.abs(mR - dR) - Math.abs(dR - yR))],
    karmicLessons, karmicDebts, hiddenPassion, subconsciousSelf, balance,
    bridgeNumbers, pinnacles, currentAge,
    repeatedCore: Object.entries(coreCounts).filter(([_, c]) => c > 1).map(([n, c]) => ({ number: parseInt(n), frequency: c })),
    specialLetters: { firstLetter, firstVowel, cornerstonePlane: [1,8].includes(getLetterValue(firstLetter)) ? "Mental" : [2,3,6].includes(getLetterValue(firstLetter)) ? "Emotional" : [4,5].includes(getLetterValue(firstLetter)) ? "Physical" : "Intuitive" },
    planesOfExpression: planes,
    elements: { dominant: [1,8].includes(lp) ? "Mental" : [2,3,6].includes(lp) ? "Emotional" : [4,5].includes(lp) ? "Physical" : "Intuitive", keyNumber: lp, symbolism: 'Manifesting reality.' },
    colorAnalysis: { lifePathColor: getColor(lp), expressionColor: getColor(exp), soulUrgeColor: getColor(soul) },
    transits: { current: calculateTransitAtAge(currentAge), timeline: Array.from({ length: 10 }, (_, i) => calculateTransitAtAge(currentAge + i)) },
    personalYear: yearForecast[0], personalYearForecast: yearForecast, personalMonthForecast: monthForecast, personalWeekForecast: weekForecast, personalDayForecast: dayForecast,
    hasMasterNumbers: MASTER_NUMBERS.includes(lp) || MASTER_NUMBERS.includes(exp)
  };
};

export const getExpressionDescription = (num: number) => "The signature of your outward presence and natural capabilities.";
