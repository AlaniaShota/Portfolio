import { useState } from "react";

export const AIPopup = ({ onClose }) => {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const sendQuestion = async (text) => {
    setLoading(true);
    setAnswer("");

    try {
      const res = await fetch("/.netlify/functions/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();
      if (!res.ok) {
        setAnswer(data.answer || `Server error (${res.status}).`);
      } else {
        setAnswer(data.answer || "No response.");
      }
    } catch {
      setAnswer("AI is unavailable right now.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim()) {
      sendQuestion(input);
      setInput("");
    }
  };

  return (
    <div className="ai-overlay" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about Shota Alania..."
        />

        {loading && <p>AI is thinking…</p>}
        {answer && <p>{answer}</p>}
      </div>
    </div>
  );
};
