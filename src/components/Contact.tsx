"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-dark text-cream py-16 sm:py-24 lg:py-32">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24">
          {/* Left */}
          <ScrollReveal>
            <div>
              <p className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-teal font-medium mb-4">
                Get in Touch
              </p>
              <h2 className="text-[28px] sm:text-[40px] font-serif mb-4 sm:mb-6 font-normal">
                Let&apos;s talk
              </h2>
              <p className="text-cream/60 leading-[1.7] mb-6 sm:mb-8 max-w-[400px] text-[14px] sm:text-[15px]">
                Building autonomous AI systems. Navigating governance
                requirements. Interested in contributing to the protocol.
              </p>
              <a
                href="mailto:architect@entelecht.ai"
                className="text-[14px] sm:text-[15px] text-cream/80 underline underline-offset-4 decoration-cream/30 hover:text-cream hover:decoration-cream/60 transition-colors duration-300"
              >
                architect@entelecht.ai
              </a>
            </div>
          </ScrollReveal>

          {/* Right - Form */}
          <ScrollReveal delay={2}>
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[10px] tracking-[0.15em] uppercase text-cream/50 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((d) => ({ ...d, name: e.target.value }))
                  }
                  className="w-full bg-transparent border border-cream/15 rounded px-4 py-3 text-[14px] text-cream placeholder-cream/30 focus:border-accent/60 transition-colors duration-300"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-[10px] tracking-[0.15em] uppercase text-cream/50 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((d) => ({ ...d, email: e.target.value }))
                  }
                  className="w-full bg-transparent border border-cream/15 rounded px-4 py-3 text-[14px] text-cream placeholder-cream/30 focus:border-accent/60 transition-colors duration-300"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-[10px] tracking-[0.15em] uppercase text-cream/50 mb-2"
                >
                  What brings you here?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us a bit..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((d) => ({ ...d, message: e.target.value }))
                  }
                  className="w-full bg-transparent border border-cream/15 rounded px-4 py-3 text-[14px] text-cream placeholder-cream/30 focus:border-accent/60 transition-colors duration-300 resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-accent text-dark px-6 sm:px-8 py-3 text-[14px] font-medium rounded hover:bg-accent/85 transition-colors duration-300 disabled:opacity-60 w-full sm:w-auto"
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "sent"
                  ? "Message sent!"
                  : "Send message"}
              </button>
              {status === "error" && (
                <p role="alert" className="text-red-400 text-[13px]">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
