
export interface NumerologyProfile {
  fullName: string;
  birthDate: string; // YYYY-MM-DD
}

export interface ColorAssociation {
  number: number;
  colorName: string;
  hex: string;
  meaning: string;
}

export interface TransitAtAge {
  age: number;
  physical: { letter: string; value: number; description: string };
  mental: { letter: string; value: number; description: string };
  spiritual: { letter: string; value: number; description: string };
  essence: number;
  essenceDescription: string;
}

export interface VibrationalCycle {
  label: string; 
  number: number;
  description: string;
}

export interface PersonalYearInfo {
  year: number;
  number: number;
  description: string;
}

export interface BridgeNumber {
  title: string;
  value: number;
  description: string;
}

export interface NumerologyResult {
  // 1-10 Core Numbers & Basics
  lifePath: number;
  birthDay: number;
  attitude: number;
  expression: number;
  soulUrge: number;
  personality: number;
  maturity: number;
  rationalThought: number;
  
  // 11-16 Lessons & Self
  challenges: number[];
  karmicLessons: number[];
  karmicDebts: number[];
  hiddenPassion: number;
  subconsciousSelf: number;
  balance: number;
  
  // Bridge Numbers
  bridgeNumbers: BridgeNumber[];
  
  // 17-24 Specifics & Planes
  planesOfExpression: {
    physical: number;
    mental: number;
    emotional: number;
    intuitive: number;
  };
  pinnacles: Pinnacle[];
  repeatedCore: RepeatedNumber[];
  currentAge: number;
  specialLetters: {
    firstLetter: string;
    firstVowel: string;
    cornerstonePlane: string;
  };
  elements: {
    dominant: string;
    keyNumber: number;
    symbolism: string;
  };
  
  // Color Analysis (Separate as requested)
  colorAnalysis: {
    lifePathColor: ColorAssociation;
    expressionColor: ColorAssociation;
    soulUrgeColor: ColorAssociation;
  };
  
  // Transits & Essence
  transits: {
    current: TransitAtAge;
    timeline: TransitAtAge[];
  };

  // Personal Cycles & Forecasts
  personalYear: PersonalYearInfo;
  personalYearForecast: PersonalYearInfo[];
  personalMonthForecast: VibrationalCycle[];
  personalWeekForecast: VibrationalCycle[];
  personalDayForecast: VibrationalCycle[];

  hasMasterNumbers: boolean;
}

export interface Pinnacle {
  number: number;
  startAge: number;
  endAge: number | string;
  title: string;
  isCurrent: boolean;
  stage: 'First' | 'Second/Third' | 'Fourth';
  baseMeaning: string;
}

export interface RepeatedNumber {
  number: number;
  frequency: number;
}

export interface InterpretationResponse {
  title: string;
  summary: string;
  traits: string[];
  guidance: string;
}
