const pythagoreanMap: Record<string, number> = {
  a: 1, j: 1, s: 1, b: 2, k: 2, t: 2, c: 3, l: 3, u: 3,
  d: 4, m: 4, v: 4, e: 5, n: 5, w: 5, f: 6, o: 6, x: 6,
  g: 7, p: 7, y: 7, h: 8, q: 8, z: 8, i: 9, r: 9
};

const getLetterValue = (char: string): number => pythagoreanMap[char.toLowerCase()] || 0;

export interface DivineTriangle {
  cornerstone: number;
  cornerstoneValue: string;
  cornerstoneMeaning: string;
  capstone: number;
  capstoneValue: string;
  capstoneMeaning: string;
  firstVowel: number;
  firstVowelValue: string;
  firstVowelMeaning: string;
  interpretation: string;
}

const CORNERSTONE_MEANINGS: Record<number, string> = {
  1: "Independent pioneer. You approach life with leadership, determination, and originality. You take charge and forge your own path.",
  2: "Diplomatic mediator. You approach with sensitivity, cooperation, and partnership. You seek harmony and understanding.",
  3: "Creative communicator. You approach with joy, expression, and enthusiasm. You bring light and optimism to situations.",
  4: "Practical builder. You approach with discipline, order, and hard work. You establish solid foundations.",
  5: "Curious explorer. You approach with freedom, adaptability, and versatility. You seek experience and change.",
  6: "Nurturing caregiver. You approach with responsibility, love, and service. You care deeply about others.",
  7: "Analytical seeker. You approach with introspection, wisdom, and spiritual seeking. You question and analyze deeply.",
  8: "Ambitious achiever. You approach with power, determination, and material focus. You pursue success and recognition.",
  9: "Compassionate healer. You approach with universality, wisdom, and humanitarian ideals. You serve humanity."
};

const CAPSTONE_MEANINGS: Record<number, string> = {
  1: "You complete things through your willpower and determination. Strong-willed finisher who won't give up.",
  2: "You complete things through cooperation and diplomacy. You tie loose ends with sensitivity and grace.",
  3: "You complete things with joy and celebration. You wrap up with enthusiasm and optimism.",
  4: "You complete things methodically and thoroughly. You ensure everything is in proper order.",
  5: "You complete things with flexibility and freedom. You adapt to changes as you close out situations.",
  6: "You complete things with love and care. You ensure all relationships and loose ends are handled with compassion.",
  7: "You complete things with wisdom and introspection. You take time to understand the deeper meaning.",
  8: "You complete things with strength and determination. You close things decisively and powerfully.",
  9: "You complete things with universal compassion. You ensure wholeness and completion for all involved."
};

const FIRST_VOWEL_MEANINGS: Record<number, string> = {
  1: "Independent and self-reliant. Your inner drive motivates you toward leadership and personal achievement. You want to be your own boss.",
  2: "Sensitive and partnership-oriented. Your inner drive seeks harmony, connection, and emotional support. You thrive in relationships.",
  3: "Expressive and creative. Your inner drive motivates you toward joy, communication, and artistic expression. You need to create and share.",
  4: "Practical and dutiful. Your inner drive motivates you toward building, organizing, and creating stability. You want to contribute meaningfully.",
  5: "Adventurous and curious. Your inner drive motivates you toward freedom, learning, and new experiences. You crave variety and stimulation.",
  6: "Responsible and nurturing. Your inner drive motivates you toward helping, healing, and creating harmony. You find purpose in service.",
  7: "Spiritual and analytical. Your inner drive motivates you toward truth, wisdom, and understanding. You seek deeper meaning.",
  8: "Ambitious and determined. Your inner drive motivates you toward power, success, and material achievement. You want recognition.",
  9: "Universal and compassionate. Your inner drive motivates you toward humanitarian goals and global awareness. You seek to improve the world."
};

export const calculateDivineTriangle = (fullName: string): DivineTriangle | null => {
  if (!fullName || fullName.trim().length === 0) return null;

  const cleanName = fullName.toLowerCase().replace(/[^a-z]/g, '');
  if (cleanName.length === 0) return null;

  // Cornerstone: first letter
  const cornerstoneValue = cleanName.charAt(0);
  const cornerstoneNum = getLetterValue(cornerstoneValue);

  // Capstone: last letter
  const capstoneValue = cleanName.charAt(cleanName.length - 1);
  const capstoneNum = getLetterValue(capstoneValue);

  // First Vowel
  let firstVowelValue = '';
  let firstVowelNum = 0;
  for (let char of cleanName) {
    if ('aeiou'.includes(char)) {
      firstVowelValue = char;
      firstVowelNum = getLetterValue(char);
      break;
    }
  }

  if (firstVowelNum === 0) return null;

  return {
    cornerstone: cornerstoneNum,
    cornerstoneValue: cornerstoneValue.toUpperCase(),
    cornerstoneMeaning: CORNERSTONE_MEANINGS[cornerstoneNum],
    capstone: capstoneNum,
    capstoneValue: capstoneValue.toUpperCase(),
    capstoneMeaning: CAPSTONE_MEANINGS[capstoneNum],
    firstVowel: firstVowelNum,
    firstVowelValue: firstVowelValue.toUpperCase(),
    firstVowelMeaning: FIRST_VOWEL_MEANINGS[firstVowelNum],
    interpretation: generateInterpretation(cornerstoneNum, capstoneNum, firstVowelNum)
  };
};

const generateInterpretation = (cornerstone: number, capstone: number, firstVowel: number): string => {
  const approach = CORNERSTONE_MEANINGS[cornerstone].split('.')[0];
  const completion = CAPSTONE_MEANINGS[capstone].split('.')[0];
  const motivation = FIRST_VOWEL_MEANINGS[firstVowel].split('.')[0];

  return `Your divine triangle reveals a soul that ${approach}, is motivated by ${motivation.toLowerCase()}, and ${completion.toLowerCase()}. This trinity of energies creates your unique spiritual signature - the way you engage with the world and fulfill your life's purpose.`;
};

export const getDivineChartData = (triangle: DivineTriangle) => {
  return {
    corners: [
      { position: 'top', label: 'First Vowel', number: triangle.firstVowel, letter: triangle.firstVowelValue, meaning: 'Inner Motivation' },
      { position: 'bottom-left', label: 'Cornerstone', number: triangle.cornerstone, letter: triangle.cornerstoneValue, meaning: 'Your Approach' },
      { position: 'bottom-right', label: 'Capstone', number: triangle.capstone, letter: triangle.capstoneValue, meaning: 'Your Conclusion' }
    ]
  };
};
