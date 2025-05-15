// src/openai.js
import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://models.github.ai/inference",
  apiKey: import.meta.env.VITE_GITHUB_TOKEN,
  dangerouslyAllowBrowser: true, // Required for frontend use
});

export default openai;
