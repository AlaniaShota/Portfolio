import fetch from "node-fetch";

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { message } = JSON.parse(event.body || "{}");

    // ... остальная логика ...
    // (Убедитесь, что process.env.HF_TOKEN на месте)

    const systemPrompt = "You are an AI assistant..."; // Ваш промпт
    const aboutMe = "About me..."; // Ваша инфо

    const hfResponse = await fetch(
      "https://router.huggingface.co/v1/models/HuggingFaceH4/zephyr-7b-beta/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HF_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "HuggingFaceH4/zephyr-7b-beta:featherless-ai",
          messages: [
            { role: "system", content: systemPrompt + "\n\n" + aboutMe },
            { role: "user", content: message },
          ],
          max_new_tokens: 300,
        }),
      },
    );

    const data = await hfResponse.json();

    return {
      statusCode: 200,
      body: JSON.stringify({
        answer: data.choices?.[0]?.message?.content || "No response.",
      }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ answer: "AI Error" }),
    };
  }
}
