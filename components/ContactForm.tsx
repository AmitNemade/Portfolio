"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import classNames from "classnames";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (honeypot.length > 0) {
      setIsSubmitted(true);
      return;
    }
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://formbold.com/s/35el8", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Failed to submit");
      setIsSubmitted(true);
    } catch (error) {
      setError("Something went wrong. Please try again or email me directly.");
    } finally {
      setIsLoading(false);
    }
  };

  // Success State
  if (isSubmitted) {
    return (
      <div className="w-full p-8 lg:p-12 bg-[#E2FF3B] rounded-[2rem] text-black transition-all animate-in fade-in zoom-in duration-500 shadow-xl">
        <h2 className="text-2xl font-bold mb-4 tracking-tight uppercase">
          Submission Successful
        </h2>
        <div className="space-y-4">
          <p className="text-lg font-medium leading-relaxed">
            Thank you for reaching out, {formData.name.split(' ')[0]}.
          </p>
          <p className="text-base opacity-80 leading-relaxed">
            Your message has been received. I personally review all inquiries and will get back to you on <strong>{formData.email}</strong> shortly.
          </p>
        </div>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-8 px-8 py-3 bg-black text-[#E2FF3B] rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-lg text-sm tracking-widest uppercase"
        >
          Return to Form
        </button>
      </div>
    );
  }

  // Input Class Helper to avoid repetition
  const inputClasses = classNames(
    "w-full rounded-2xl p-4 transition-all outline-none border",
    "bg-neutral-100 border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:border-[#869900] focus:ring-1 focus:ring-[#869900]/20", // Light Mode
    "dark:bg-white/5 dark:border-white/10 dark:text-white dark:placeholder:text-neutral-700 dark:focus:border-[#E2FF3B] dark:focus:ring-[#E2FF3B]/30" // Dark Mode
  );

  const labelClasses = "text-[10px] font-mono tracking-widest transition-colors text-neutral-400 dark:text-neutral-500 group-focus-within:text-[#869900] dark:group-focus-within:text-[#E2FF3B]";

  return (
    <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="_gotcha" // FormBold specifically looks for this name to prevent spam
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name Input */}
        <div className="group flex flex-col gap-2">
          <label htmlFor="name" className={labelClasses}>01. NAME</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            className={inputClasses}
            required
          />
        </div>

        {/* Email Input */}
        <div className="group flex flex-col gap-2">
          <label htmlFor="email" className={labelClasses}>02. EMAIL</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            required
          />
        </div>
      </div>

      {/* Message Input */}
      <div className="group flex flex-col gap-2">
        <label htmlFor="message" className={labelClasses}>03. MESSAGE</label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell me about your project..."
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={classNames(inputClasses, "resize-none")}
          required
        />
      </div>

      <div className="flex flex-col items-start gap-4 pt-4">
        <button
          type="submit"
          disabled={isLoading}
          className="group relative w-full md:w-auto overflow-hidden bg-neutral-900 dark:bg-white text-white dark:text-black font-bold py-4 px-12 rounded-2xl transition-all active:scale-95 disabled:opacity-50 shadow-xl"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {isLoading ? "SENDING..." : "SEND MESSAGE"}
            {!isLoading && <span className="group-hover:translate-x-1 transition-transform">→</span>}
          </span>
          {/* Animated background fill */}
          <div className="absolute inset-0 bg-[#E2FF3B] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>

        {error && (
          <p className="text-red-500 dark:text-red-400 text-xs font-mono animate-pulse">
            ✕ {error}
          </p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;