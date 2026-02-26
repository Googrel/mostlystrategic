"use client";

import { FormEvent, useState } from "react";

type Message = {
  role: "user" | "assistant";
  text: string;
};

export function IndexChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = input.trim();

    if (!message || loading) return;

    setMessages((prev) => [...prev, { role: "user", text: message }]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
      });

      const data = (await response.json()) as { reply?: string };
      const reply = data.reply ?? "I have a thought, but it escaped. Try again.";
      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Network wobble. Ask again and I’ll behave." }
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="section">
      <h2 className="section-label">Index Chat</h2>
      <div className="space-y-4 rounded-lg border border-[#e6e6e6] bg-[#fbfbfa] p-4">
        <div className="max-h-80 space-y-3 overflow-y-auto">
          {messages.length === 0 && (
            <p className="text-sm text-[#5e5e5e]">Ask about any campaign and I&apos;ll analyze one moment.</p>
          )}
          {messages.map((message, index) => (
            <div
              key={`${message.role}-${index}`}
              className={`rounded-md px-3 py-2 text-sm leading-6 ${
                message.role === "user" ? "bg-[#f3f3f1] text-[#111111]" : "bg-white text-[#5e5e5e]"
              }`}
            >
              <p className="mb-1 text-[11px] uppercase tracking-[0.08em] text-[#5e5e5e]">{message.role}</p>
              <p className="whitespace-pre-line">{message.text}</p>
            </div>
          ))}
        </div>

        <form onSubmit={onSubmit} className="space-y-3">
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask for a quick strategic read"
            className="w-full border border-[#e6e6e6] bg-[#fbfbfa] px-3 py-2 text-sm text-[#111111] outline-none focus:border-[#111111]"
          />
          <div className="flex items-center gap-3">
            <button type="submit" disabled={loading} className="pill-button disabled:opacity-60">
              {loading ? "Thinking..." : "Send"}
            </button>
            <button
              type="button"
              onClick={() => setMessages([])}
              className="text-sm text-[#5e5e5e] underline-offset-4 hover:underline"
            >
              Clear chat
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
