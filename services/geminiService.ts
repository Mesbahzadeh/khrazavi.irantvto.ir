import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

// Initialize the API client
// Note: In a real production app, ensure your API key is restricted or proxied.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

export const sendMessageToGemini = async (
  message: string,
  history: { role: 'user' | 'model'; parts: { text: string }[] }[]
): Promise<string> => {
  try {
    if (!apiKey) {
      return "خطا: کلید API تنظیم نشده است. لطفاً تنظیمات را بررسی کنید.";
    }

    const model = 'gemini-2.5-flash';
    
    // Transform history to the format expected by the SDK if needed, 
    // but here we will just use a chat session for simplicity.
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history,
    });

    const result: GenerateContentResponse = await chat.sendMessage({
      message: message
    });

    return result.text || "متاسفانه پاسخی دریافت نشد.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "متاسفانه در برقراری ارتباط با سرویس هوشمند مشکلی پیش آمده است. لطفاً دقایقی دیگر تلاش کنید.";
  }
};