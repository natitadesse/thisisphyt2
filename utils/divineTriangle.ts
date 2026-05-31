// Divine Triangle - Pythagorean Blueprint System
// Based on the Life Theorem of Pythagoras
// Comprehensive numerological analysis including life lesson, major/minor processes, and line experiences

const pythagoreanMap: Record<string, number> = {
  a: 1, j: 10, s: 19, b: 2, k: 11, t: 20, c: 3, l: 12, u: 21,
  d: 4, m: 13, v: 22, e: 5, n: 14, w: 23, f: 6, o: 15, x: 24,
  g: 7, p: 16, y: 25, h: 8, q: 17, z: 26, i: 9, r: 18
};

const getLetterValue = (char: string): number => pythagoreanMap[char.toLowerCase()] || 0;

const reduceToSingleDigit = (num: number): number => {
  while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
    num = Math.floor(num / 10) + (num % 10);
  }
  return num;
};

const reduceNumber = (num: number): { base: number; reduced: number } => {
  const base = num;
  const reduced = reduceToSingleDigit(num);
  return { base, reduced };
};

export interface LineExperience {
  lineLabel: string;
  ageStart: number;
  ageEnd: number;
  step: number;
  age: number;
  experienceNumber: string;
  experienceType: string;
}

export interface DivineTriangle {
  // Birth information
  birthDate: string;
  birthMonth: number;
  birthDay: number;
  birthYear: number;
  lifeLessonNumber: string;

  // Name information
  firstName: string;
  middleName: string;
  nameLettersYouth: Array<{ letter: string; value: string; age: string }>;
  nameLettersPower: Array<{ letter: string; value: string; age: string }>;
  nameLettersWisdom: Array<{ letter: string; value: string; age: string }>;

  // Squares and triangle
  youthSquareTotal: string;
  powerSquareTotal: string;
  wisdomSquareTotal: string;
  triangleSideValues: { vertical: string; horizontal: string; hypotenuse: string };

  // Line experiences (simplified summary)
  lineExperiencesYouth: LineExperience[];
  lineExperiencesPower: LineExperience[];
  lineExperiencesWisdom: LineExperience[];

  interpretation: string;
}

export const calculateDivineTriangle = (
  fullName: string,
  birthDate: string
): DivineTriangle | null => {
  if (!fullName || !birthDate) return null;

  // Parse birth date
  const date = new Date(birthDate);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  // Get name parts (first, middle, last - but we only use first and middle)
  const nameParts = fullName.trim().split(/\s+/);
  if (nameParts.length < 2) return null;

  const firstName = nameParts[0];
  const middleName = nameParts.length > 2 ? nameParts.slice(1, -1).join(' ') : nameParts[1];

  // Convert name to values
  const nameLetters = firstName.concat(middleName).toLowerCase().replace(/[^a-z]/g, '');

  // Birth date numbers (reduced)
  const monthNum = reduceNumber(month);
  const dayNum = reduceNumber(day);
  const yearSum = year.toString().split('').reduce((a, b) => a + parseInt(b), 0);
  const yearNum = reduceNumber(yearSum);

  // Calculate square totals
  // Youth square: first 3 letters of first name
  let youthLetters: { letter: string; value: string }[] = [];
  for (let i = 0; i < 3 && i < firstName.length; i++) {
    const letter = firstName[i];
    const val = getLetterValue(letter);
    youthLetters.push({ letter: letter.toUpperCase(), value: val.toString() });
  }

  const youthSum = youthLetters.reduce((sum, l) => sum + getLetterValue(l.letter), 0) + monthNum.base;
  const youthTotal = reduceNumber(youthSum);

  // Power square: next 3 letters (middle name first 3)
  let powerLetters: { letter: string; value: string }[] = [];
  const powerStart = 3;
  for (let i = 0; i < 3 && powerStart + i < nameLetters.length; i++) {
    const letter = nameLetters[powerStart + i];
    const val = getLetterValue(letter);
    powerLetters.push({ letter: letter.toUpperCase(), value: val.toString() });
  }

  const powerSum = powerLetters.reduce((sum, l) => sum + getLetterValue(l.letter), 0) + dayNum.base;
  const powerTotal = reduceNumber(powerSum);

  // Wisdom square: remaining letters
  let wisdomLetters: { letter: string; value: string }[] = [];
  const wisdomStart = 6;
  for (let i = 0; i < 3 && wisdomStart + i < nameLetters.length; i++) {
    const letter = nameLetters[wisdomStart + i];
    const val = getLetterValue(letter);
    wisdomLetters.push({ letter: letter.toUpperCase(), value: val.toString() });
  }

  const wisdomSum = wisdomLetters.reduce((sum, l) => sum + getLetterValue(l.letter), 0) + monthNum.base;
  const wisdomTotal = reduceNumber(wisdomSum);

  // Triangle sides
  const triangleSum = monthNum.base + dayNum.base + yearNum.base;
  const triangleTotal = reduceNumber(triangleSum);

  // Generate line experiences (major process summary)
  const lineExperiencesYouth = generateLineExperiencesSummary('Youth', 0, 27, youthTotal, monthNum);
  const lineExperiencesPower = generateLineExperiencesSummary('Power', 27, 54, powerTotal, dayNum);
  const lineExperiencesWisdom = generateLineExperiencesSummary('Wisdom', 54, 81, wisdomTotal, monthNum);

  const interpretation = generateInterpretation(
    youthTotal,
    powerTotal,
    wisdomTotal,
    triangleTotal
  );

  return {
    birthDate,
    birthMonth: month,
    birthDay: day,
    birthYear: year,
    lifeLessonNumber: `${triangleTotal.base}/${triangleTotal.reduced}`,
    firstName,
    middleName,
    nameLettersYouth: youthLetters.map((l, i) => ({
      letter: l.letter,
      value: `${getLetterValue(l.letter)}`,
      age: i === 0 ? '0-9' : i === 1 ? '9-18' : '18-27'
    })),
    nameLettersPower: powerLetters.map((l, i) => ({
      letter: l.letter,
      value: `${getLetterValue(l.letter)}`,
      age: i === 0 ? '27-36' : i === 1 ? '36-45' : '45-54'
    })),
    nameLettersWisdom: wisdomLetters.map((l, i) => ({
      letter: l.letter,
      value: `${getLetterValue(l.letter)}`,
      age: i === 0 ? '54-63' : i === 1 ? '63-72' : '72-81'
    })),
    youthSquareTotal: `${youthTotal.base}/${youthTotal.reduced}`,
    powerSquareTotal: `${powerTotal.base}/${powerTotal.reduced}`,
    wisdomSquareTotal: `${wisdomTotal.base}/${wisdomTotal.reduced}`,
    triangleSideValues: {
      vertical: `${monthNum.base}/${monthNum.reduced}`,
      horizontal: `${dayNum.base}/${dayNum.reduced}`,
      hypotenuse: `${yearNum.base}/${yearNum.reduced}`
    },
    lineExperiencesYouth,
    lineExperiencesPower,
    lineExperiencesWisdom,
    interpretation
  };
};

const generateLineExperiencesSummary = (
  phase: string,
  ageStart: number,
  ageEnd: number,
  squareTotal: { base: number; reduced: number },
  triangleSide: { base: number; reduced: number }
): LineExperience[] => {
  const experiences: LineExperience[] = [];
  const lineLength = 9; // Each line is 9 years
  const numLines = (ageEnd - ageStart) / 9;

  for (let line = 0; line < numLines; line++) {
    const currentStart = ageStart + (line * 9);
    const currentEnd = currentStart + 9;

    // Major Process - using square total
    const experience1Age = currentStart + squareTotal.reduced;
    if (experience1Age < currentEnd) {
      experiences.push({
        lineLabel: `Line ${line + 1} (${phase})`,
        ageStart: currentStart,
        ageEnd: currentEnd,
        step: 1,
        age: experience1Age,
        experienceNumber: `${squareTotal.base}/${squareTotal.reduced}`,
        experienceType: 'Square Vibration'
      });
    }

    const experience2Age = currentEnd - squareTotal.reduced;
    if (experience2Age >= currentStart && experience2Age !== experience1Age) {
      experiences.push({
        lineLabel: `Line ${line + 1} (${phase})`,
        ageStart: currentStart,
        ageEnd: currentEnd,
        step: 1,
        age: experience2Age,
        experienceNumber: `${squareTotal.base}/${squareTotal.reduced}`,
        experienceType: 'Square Vibration'
      });
    }
  }

  return experiences;
};

const generateInterpretation = (
  youthTotal: { base: number; reduced: number },
  powerTotal: { base: number; reduced: number },
  wisdomTotal: { base: number; reduced: number },
  triangleTotal: { base: number; reduced: number }
): string => {
  const lifeLesson = triangleTotal.reduced;
  const youthVibration = youthTotal.reduced;
  const powerVibration = powerTotal.reduced;
  const wisdomVibration = wisdomTotal.reduced;

  return `Your Divine Triangle reveals your Life Lesson Number (${triangleTotal.base}/${triangleTotal.reduced}), the core purpose you came to learn. During Youth (0-27), you operate under vibration ${youthVibration}, laying foundational patterns. Your Power years (27-54) activate vibration ${powerVibration}, where you manifest and test your abilities. Finally, your Wisdom years (54-81) operate under vibration ${wisdomVibration}, where you integrate lessons and share understanding. This sacred blueprint, based on Pythagoras's Life Theorem, maps every significant experience across your 81-year journey. Each line reveals specific ages when major life events and transformations occur.`;
};

export const getDivineTriangleChartData = (triangle: DivineTriangle) => {
  return {
    birthInfo: {
      month: triangle.birthMonth,
      day: triangle.birthDay,
      year: triangle.birthYear,
      lifeLessonNumber: triangle.lifeLessonNumber
    },
    squares: {
      youth: {
        total: triangle.youthSquareTotal,
        ageRange: '0-27',
        meaning: 'Foundation period - learning and discovery'
      },
      power: {
        total: triangle.powerSquareTotal,
        ageRange: '27-54',
        meaning: 'Manifestation period - action and achievement'
      },
      wisdom: {
        total: triangle.wisdomSquareTotal,
        ageRange: '54-81',
        meaning: 'Integration period - completion and wisdom'
      }
    },
    triangleSides: triangle.triangleSideValues,
    allLineExperiences: [
      ...triangle.lineExperiencesYouth,
      ...triangle.lineExperiencesPower,
      ...triangle.lineExperiencesWisdom
    ]
  };
};
