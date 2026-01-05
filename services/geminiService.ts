
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getSourcingAdvice = async (userQuery: string) => {
  if (!process.env.API_KEY) return "API Key not configured. How can I help you today?";
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userQuery,
      config: {
        systemInstruction: `You are the LeatherEx AI Sourcing Assistant. 
        You help B2B clients choose the best leather for their needs.
        Categories: Cowhide, Lambskin, Goatskin, Deerskin.
        Grades: Full Grain (highest quality), Top Grain (durable/uniform), Genuine (standard), Split (industrial).
        Tanning: Vegetable (eco-friendly, patina), Chrome (water resistant, soft).
        Keep answers professional, expert, and concise. Always recommend reaching out to LeatherEx experts for bulk quotes.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having a bit of trouble connecting to my knowledge base. Please try asking again in a moment.";
  }
};
