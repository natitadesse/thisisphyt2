// Life Experiences Chart - Three Life Phases with Numerical Grid
// Based on Pythagorean Numerology principles

export interface LifePhase {
  name: string;
  startAge: number;
  endAge: number;
  description: string;
}

export interface CornerValue {
  letter: string;
  value: number;
  position: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
  meaning: string;
}

export interface LifeExperiencesChart {
  phases: LifePhase[];
  corners: CornerValue[];
  gridValues: {
    top: number;    // A: 81
    topRight: number; // H: 63
    right: number;  // Sum top to bottom right
    bottomRight: number; // F: 45
    bottom: number; // E: 36
    bottomLeft: number; // C: 18
    left: number;   // B: 9
    center: number; // 0 (entry point)
  };
  interpretation: string;
}

const PHASE_DESCRIPTIONS: Record<string, string> = {
  youth: "The foundational period of learning, growth, and self-discovery. Building blocks are established, talents are discovered, and the soul learns its first lessons.",
  power: "The period of manifestation, action, and contribution to the world. Skills are applied, challenges are met, and the soul learns through experience and accomplishment.",
  wisdom: "The period of completion, integration, and sharing wisdom earned through life. The soul reflects, shares knowledge, and prepares for the final transition."
};

const CORNER_MEANINGS: Record<string, string> = {
  A: "Life Path Entry - Total culmination of all experiences (81)",
  B: "Youth Foundation - First nine years establish the pattern (9)",
  C: "Youth Cycle - First cycle of 18 years shapes character (18)",
  D: "Transition Point - From youth to power at age 27 (27)",
  E: "Power Foundation - Second cycle begins at 36 (36)",
  F: "Power Completion - Middle life peak at 45 (45)",
  G: "Transition to Wisdom - Shift from power to wisdom at 54 (54)",
  H: "Wisdom Foundation - Final phase begins at 63 (63)"
};

export const calculateLifeExperiences = (birthDate: string): LifeExperiencesChart | null => {
  if (!birthDate) return null;

  const birth = new Date(birthDate);
  const today = new Date();
  const currentAge = Math.floor((today.getTime() - birth.getTime()) / (365.25 * 24 * 60 * 60 * 1000));

  // Determine which phase the person is in
  const phases: LifePhase[] = [
    {
      name: "Youth",
      startAge: 0,
      endAge: 27,
      description: PHASE_DESCRIPTIONS.youth
    },
    {
      name: "Power",
      startAge: 27,
      endAge: 54,
      description: PHASE_DESCRIPTIONS.power
    },
    {
      name: "Wisdom",
      startAge: 54,
      endAge: 81,
      description: PHASE_DESCRIPTIONS.wisdom
    }
  ];

  // Calculate corner values - these represent age milestones
  const corners: CornerValue[] = [
    { letter: 'A', value: 81, position: 'A', meaning: CORNER_MEANINGS.A },
    { letter: 'B', value: 9, position: 'B', meaning: CORNER_MEANINGS.B },
    { letter: 'C', value: 18, position: 'C', meaning: CORNER_MEANINGS.C },
    { letter: 'D', value: 27, position: 'D', meaning: CORNER_MEANINGS.D },
    { letter: 'E', value: 36, position: 'E', meaning: CORNER_MEANINGS.E },
    { letter: 'F', value: 45, position: 'F', meaning: CORNER_MEANINGS.F },
    { letter: 'G', value: 54, position: 'G', meaning: CORNER_MEANINGS.G },
    { letter: 'H', value: 63, position: 'H', meaning: CORNER_MEANINGS.H }
  ];

  const gridValues = {
    top: 81,
    topRight: 63,
    right: 63,
    bottomRight: 45,
    bottom: 36,
    bottomLeft: 18,
    left: 9,
    center: 0
  };

  const currentPhase = phases.find(p => currentAge >= p.startAge && currentAge < p.endAge) || phases[2];

  const interpretation = generateLifeExperiencesInterpretation(currentAge, currentPhase, corners);

  return {
    phases,
    corners,
    gridValues,
    interpretation
  };
};

const generateLifeExperiencesInterpretation = (currentAge: number, currentPhase: LifePhase, corners: CornerValue[]): string => {
  const phaseProgress = currentAge - currentPhase.startAge;
  const phaseLength = currentPhase.endAge - currentPhase.startAge;
  const percentComplete = Math.round((phaseProgress / phaseLength) * 100);

  return `You are currently in the ${currentPhase.name} phase of life (ages ${currentPhase.startAge}-${currentPhase.endAge}), approximately ${percentComplete}% through this cycle at age ${currentAge}. ${currentPhase.description} The numerical grid shows how life unfolds through nine sacred age points: beginning at 0, progressing through 9, 18, 27, 36, 45, 54, 63, and culminating at 81 years. Each point represents a completion of one numerological cycle and the beginning of the next.`;
};

export const getPhaseForAge = (age: number): LifePhase | null => {
  if (age < 0 || age > 81) return null;

  if (age < 27) {
    return { name: "Youth", startAge: 0, endAge: 27, description: PHASE_DESCRIPTIONS.youth };
  } else if (age < 54) {
    return { name: "Power", startAge: 27, endAge: 54, description: PHASE_DESCRIPTIONS.power };
  } else if (age <= 81) {
    return { name: "Wisdom", startAge: 54, endAge: 81, description: PHASE_DESCRIPTIONS.wisdom };
  }

  return null;
};

export const getMilestoneAge = (position: string): number => {
  const milestones: Record<string, number> = {
    A: 81,
    B: 9,
    C: 18,
    D: 27,
    E: 36,
    F: 45,
    G: 54,
    H: 63,
    '0': 0
  };
  return milestones[position] || 0;
};
