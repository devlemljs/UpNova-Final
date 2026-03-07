
import { GoogleGenAI } from "@google/genai";

export async function generateJustification(industry: string, scale: string): Promise<string> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    You are a premium product consultant for "Aura Brew", an innovative self-heating smart coffee system. 
    Explain why a starting price of $299 for the Professional tier is justified for a customer group described as: ${industry} (Scale/Life-stage: ${scale}).
    Focus on the "Value-of-Time", "Perfect Extraction Science", and the "Eco-Sustainability" of titanium pods. 
    Keep it concise, persuasive, and under 80 words. No bullet points.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text || "Aura Brew represents the pinnacle of coffee technology, delivering unmatched consistency and value.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The $299 price point reflects our commitment to medical-grade materials and ultrasonic extraction precision that replaces expensive daily cafe visits with superior home performance.";
  }
}
