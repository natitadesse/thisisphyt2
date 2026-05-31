// Life Experiences Chart - Three Life Phases with Numerical Grid
// Based on Pythagorean Numerology principles - Page 52 calculation

export interface LifePhase {
  name: string;
  startAge: number;
  endAge: number;
  description: string;
  numeralRange: string;
}

export interface CornerValue {
  letter: string;
  value: number;
  position: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | '0';
  meaning: string;
}

export interface LifeExperiencesChart {
  phases: LifePhase[];
  corners: CornerValue[];
  gridValues: {
    centerEntry: number;  // 0: Entry point
    B: number;            // 9: Top left
    A: number;            // 81: Top (sum of all)
    C: number;            // 18: Bottom left
    D: number;            // 27: Middle (Youth to Power transition)
    E: number;            // 36: Bottom left Power
    F: number;            // 45: Bottom right Power
    G: number;            // 54: Bottom middle (Power to Wisdom transition)
    H: number;            // 63: Right side Wisdom
    topCenter: number;    // 72: Center top (9+63)
  };
  interpretation: string;
}

const PHASE_DESCRIPTIONS: Record<string, string> = {
  youth: "Foundation and growth. The soul learns its first lessons, discovers talents, and establishes core patterns and beliefs that shape the entire journey.",
  power: "Manifestation and action. Skills are applied, challenges transform character, and the soul contributes its unique gifts to the world through achievement and experience.",
  wisdom: "Integration and completion. The soul reflects on lessons learned, shares accumulated wisdom, and prepares for the final transition with understanding and compassion."
};

const CORNER_MEANINGS: Record<string, string> = {
  '0': "Point of Entry - Birth and the beginning of the life journey",
  A: "Completion Point - Age 81, the culmination of the entire 81-year cycle",
  B: "First Initiation - Age 9, end of first 9-year cycle (number 9 = completion)",
  C: "First Maturation - Age 18, end of youth's first 18-year period",
  D: "Youth Completion - Age 27, transition from Youth phase to Power phase",
  E: "Power Foundation - Age 36, deeper into the Power phase (27+9)",
  F: "Power Maturation - Age 45, midpoint of Power phase (36+9)",
  G: "Power Completion - Age 54, transition from Power phase to Wisdom phase",
  H: "Wisdom Foundation - Age 63, entry into deeper Wisdom (54+9)"
};

export const calculateLifeExperiences = (birthDate: string): LifeExperiencesChart | null => {
  if (!birthDate) return null;

  const birth = new Date(birthDate);
  const today = new Date();
  const currentAge = Math.floor((today.getTime() - birth.getTime()) / (365.25 * 24 * 60 * 60 * 1000));

  // Three Sacred Life Phases - exactly 27 years each
  const phases: LifePhase[] = [
    {
      name: "Youth",
      startAge: 0,
      endAge: 27,
      numeralRange: "(0-27)",
      description: PHASE_DESCRIPTIONS.youth
    },
    {
      name: "Power",
      startAge: 27,
      endAge: 54,
      numeralRange: "(27-54)",
      description: PHASE_DESCRIPTIONS.power
    },
    {
      name: "Wisdom",
      startAge: 54,
      endAge: 81,
      numeralRange: "(54-81)",
      description: PHASE_DESCRIPTIONS.wisdom
    }
  ];

  // Corner points: Age milestones at 9-year intervals
  const corners: CornerValue[] = [
    { letter: '0', value: 0, position: '0', meaning: CORNER_MEANINGS['0'] },
    { letter: 'B', value: 9, position: 'B', meaning: CORNER_MEANINGS.B },
    { letter: 'C', value: 18, position: 'C', meaning: CORNER_MEANINGS.C },
    { letter: 'D', value: 27, position: 'D', meaning: CORNER_MEANINGS.D },
    { letter: 'E', value: 36, position: 'E', meaning: CORNER_MEANINGS.E },
    { letter: 'F', value: 45, position: 'F', meaning: CORNER_MEANINGS.F },
    { letter: 'G', value: 54, position: 'G', meaning: CORNER_MEANINGS.G },
    { letter: 'H', value: 63, position: 'H', meaning: CORNER_MEANINGS.H },
    { letter: 'A', value: 81, position: 'A', meaning: CORNER_MEANINGS.A }
  ];

  // Grid calculation from the chart
  const gridValues = {
    centerEntry: 0,   // Entry point
    B: 9,             // First 9-year cycle
    A: 81,            // Complete journey (9+9+9+9+9+9+9+9+9)
    C: 18,            // 9+9
    D: 27,            // 9+9+9
    E: 36,            // 27+9
    F: 45,            // 36+9
    G: 54,            // 45+9
    H: 63,            // 54+9
    topCenter: 72     // 9+63 (calculated from chart)
  };

  const currentPhase = phases.find(p => currentAge >= p.startAge && currentAge < p.endAge) || phases[2];

  const interpretation = generateLifeExperiencesInterpretation(currentAge, currentPhase);

  return {
    phases,
    corners,
    gridValues,
    interpretation
  };
};

const generateLifeExperiencesInterpretation = (currentAge: number, currentPhase: LifePhase): string => {
  const phaseStart = currentPhase.startAge;
  const phaseEnd = currentPhase.endAge;
  const phaseProgress = currentAge - phaseStart;
  const phaseLength = phaseEnd - phaseStart;
  const percentComplete = Math.round((phaseProgress / phaseLength) * 100);

  return `You are currently in the ${currentPhase.name} phase of life (ages ${phaseStart}-${phaseEnd}), approximately ${percentComplete}% through this sacred cycle at age ${currentAge}. ${currentPhase.description} The Life Experiences Chart maps your journey through nine 9-year initiations: beginning at 0, progressing through 9, 18, 27, 36, 45, 54, 63, and completing at 81 years. Each milestone represents a numerical completion and spiritual rebirth into the next phase of growth.`;
};

export const getPhaseForAge = (age: number): LifePhase | null => {
  if (age < 0 || age > 81) return null;

  if (age < 27) {
    return { name: "Youth", startAge: 0, endAge: 27, numeralRange: "(0-27)", description: PHASE_DESCRIPTIONS.youth };
  } else if (age < 54) {
    return { name: "Power", startAge: 27, endAge: 54, numeralRange: "(27-54)", description: PHASE_DESCRIPTIONS.power };
  } else if (age <= 81) {
    return { name: "Wisdom", startAge: 54, endAge: 81, numeralRange: "(54-81)", description: PHASE_DESCRIPTIONS.wisdom };
  }

  return null;
};

export const getMilestoneAge = (position: string): number => {
  const milestones: Record<string, number> = {
    '0': 0,
    A: 81,
    B: 9,
    C: 18,
    D: 27,
    E: 36,
    F: 45,
    G: 54,
    H: 63
  };
  return milestones[position] || 0;
};
