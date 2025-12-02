import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  // Ideally, checking for the key would happen earlier, but this is a safe runtime check
  if (!process.env.API_KEY) {
    console.warn("API_KEY is not set in process.env");
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const chatWithHealthAssistant = async (
  userMessage: string,
  history: { role: string; text: string }[]
): Promise<string> => {
  try {
    const ai = getClient();
    
    // Construct a context-aware prompt based on history
    // Note: In a production app with full state history, you might use ai.chats.create()
    // Here we will use generateContent for a stateless-ish simple turn or pass limited context manually if needed.
    // For simplicity in this demo, we treat it as single-turn with system instruction context, 
    // or we could format the history into the prompt.
    
    // Let's use the chat API for better conversational continuity if we had a persistent chat object,
    // but here we will just send the history as part of the prompt context or use generateContent for simplicity
    // on each request to keep state management in React simple.
    
    // Actually, let's use the proper Chat API for best results.
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `You are 'VitalBot', a helpful AI assistant for VitalCare Primary Health Clinic. 
        
        Your goals:
        1. Emphasize our core values: Affordable Consultations and Continuous Care.
        2. Provide general information about: General Outpatient services, Clinical Care, Chronic Disease Management, and Preventive Screenings.
        3. Do NOT provide specific medical diagnoses. Always disclaim that you are an AI and users should consult a doctor for medical advice.
        4. Be empathetic, professional, and concise.
        5. If asked about appointments, guide them to the booking form on the page.
        
        Clinic details:
        - Hours: Mon-Fri 8am-8pm, Sat 9am-5pm.
        - Location: 123 Wellness Blvd.
        - Contact: (555) 019-2834.`,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: userMessage });
    return result.text || "I'm sorry, I couldn't generate a response at the moment.";

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to get response from Health Assistant.");
  }
};