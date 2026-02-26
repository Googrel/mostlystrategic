"use client";

import { FormEvent, useState } from "react";

type Status =
  | { type: "idle" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? "")
    };

    setIsSubmitting(true);
    setStatus({ type: "idle" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Unable to send your message.");
      }

      event.currentTarget.reset();
      setStatus({ type: "success", message: result.message ?? "Thank you. I will reply soon." });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Something went wrong. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <label className="block space-y-2">
        <span className="text-sm">Name</span>
        <input
          required
          name="name"
          type="text"
          className="w-full border border-neutral-300 px-3 py-2 outline-none focus:border-neutral-900"
        />
      </label>

      <label className="block space-y-2">
        <span className="text-sm">Email</span>
        <input
          required
          name="email"
          type="email"
          className="w-full border border-neutral-300 px-3 py-2 outline-none focus:border-neutral-900"
        />
      </label>

      <label className="block space-y-2">
        <span className="text-sm">Message</span>
        <textarea
          required
          name="message"
          rows={6}
          className="w-full border border-neutral-300 px-3 py-2 outline-none focus:border-neutral-900"
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex rounded border border-neutral-900 px-5 py-2 text-sm no-underline transition hover:bg-neutral-900 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Send"}
      </button>

      {status.type === "success" && <p className="text-sm text-emerald-700">{status.message}</p>}
      {status.type === "error" && <p className="text-sm text-red-700">{status.message}</p>}
    </form>
  );
}
