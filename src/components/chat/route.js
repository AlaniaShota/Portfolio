/* eslint-env node */

import { systemPrompt } from "@/lib/ai/systemPrompt";

export async function POST(req) {
  const { message, locale } = await req.json();

  const languageInstruction = `
Answer in ${locale === "ka" ? "Georgian" : "English"}.
`;

  const prompt = `
${systemPrompt}
${languageInstruction}

User question: ${message}
`;

  const response = await fetch(
    "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HF_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputs: prompt }),
    },
  );

  const data = await response.json();

  return new Response(
    JSON.stringify({
      answer:
        data[0]?.generated_text ||
        "Sorry, I can only answer questions about my projects.",
    }),
    { status: 200 },
  );
}
