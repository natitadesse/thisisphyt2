
import { GoogleGenAI, Type } from "@google/genai";
import { InterpretationResponse } from "../types";

// Initialize GoogleGenAI with API key from environment
const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const getInterpretation = async (
  numberName: string,
  value: number | string,
  context?: string
): Promise<InterpretationResponse> => {
  if (!ai) {
    return {
      title: `${numberName}: ${value}`,
      summary: "Interpretation unavailable at this time due to celestial alignment issues (API not configured).",
      traits: ["Vibrational frequency analysis pending"],
      guidance: "Seek your own inner wisdom."
    };
  }

  try {
    const isPinnacle = numberName.toLowerCase().includes('pinnacle');
    const systemPrompt = isPinnacle
      ? `You are an expert Pythagorean Numerologist. For Pinnacles, remember:
         - Pinnacles are "High Spots" of achievement, peaks, acmes, and summits.
         - They show Inner Response to events, people, and conditions.
         - They are highly prophetic and predictive.
         - Transition periods are felt 2 years in advance.
         - Master numbers (11, 22) are never reduced here.`
      : `You are an expert Pythagorean Numerologist. Provide deep insight based on Pythagorean symbolism.`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `${systemPrompt}

      Provide a detailed interpretation for ${numberName} of ${value}. ${context ? `Context: ${context}` : ''}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            summary: { type: Type.STRING },
            traits: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            guidance: { type: Type.STRING }
          },
          required: ["title", "summary", "traits", "guidance"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini Interpretation Error:", error);
    return {
      title: `${numberName}: ${value}`,
      summary: "Interpretation unavailable at this time due to celestial alignment issues (API error).",
      traits: ["Vibrational frequency analysis pending"],
      guidance: "Seek your own inner wisdom."
    };
  }
};
