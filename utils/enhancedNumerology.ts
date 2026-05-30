import { calculateProfile } from './numerology';
import { detectMasterNumbers } from './masterNumbers';
import { getHealthInsights } from './healthAnalysis';
import { calculateDivineTriangle } from './divineTriangle';
import { NumerologyResult } from '../types';

export const calculateEnhancedProfile = (name: string, dob: string): NumerologyResult | null => {
  const baseProfile = calculateProfile(name, dob);
  if (!baseProfile) return null;

  const masterNumbers = detectMasterNumbers(baseProfile);

  const healthInsights = getHealthInsights(
    baseProfile.soulNumber,
    baseProfile.karmaNumber
  );

  const divineTriangle = calculateDivineTriangle(name);

  return {
    ...baseProfile,
    masterNumbers,
    healthInsights,
    divineTriangle
  };
};
