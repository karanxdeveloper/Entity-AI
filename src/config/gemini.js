
import { api } from "./serverConfig.js";

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: api });

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });
  // console.log(response.text);
  return response.text
}

export default main;