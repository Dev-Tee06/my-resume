"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/validators/contact-schema";
import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "",
      budget: "",
      message: "",
      _gotcha: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setStatus("loading");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toISOString(),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Request failed");
      }

      setStatus("success");
      reset();
    } catch (error: any) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="card card-pad-lg text-center">
        <div className="flex justify-center mb-4">
          <div className="icon-box !w-14 !h-14 !rounded-2xl !border-emerald-500/20 !bg-emerald-500/10 !text-emerald-400">
            <CheckCircle size={28} />
          </div>
        </div>
        <h3 className="heading-md mb-2">Message Sent Successfully</h3>
        <p className="text-body-sm mb-6">
          Your inquiry has been received. DEV-TEE will review your project
          details and respond within 24 hours.
        </p>
        <button
          type="button"
          className="btn btn-ghost text-sm"
          onClick={() => setStatus("idle")}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      className="card card-pad-lg"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <h3 className="heading-md mb-6">Send a Project Inquiry</h3>

      {/* Honeypot - hidden from users and browsers */}
      <div className="sr-only" aria-hidden="true">
        <input
          type="text"
          tabIndex={-1}
          autoComplete="new-password"
          {...register("_gotcha")}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="contact-name">
            Name
          </label>
          <input
            id="contact-name"
            className={`form-field ${errors.name ? "form-field-error" : ""}`}
            placeholder="Your name"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-400 text-xs mt-1.5">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="contact-email">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            className={`form-field ${errors.email ? "form-field-error" : ""}`}
            placeholder="you@example.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1.5">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-4">
        {/* Project Type */}
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="contact-project-type">
            Project Type
          </label>
          <select
            id="contact-project-type"
            className={`w-full rounded-xl border border-zinc-700 bg-zinc-900 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-blue)] ${errors.projectType ? "border-red-500" : ""}`}
            {...register("projectType")}
          >
            <option value="">Select project type</option>
            <option value="Business Website">Business Website</option>
            <option value="E-commerce Website">E-commerce Website</option>
            <option value="Portfolio Website">Portfolio Website</option>
            <option value="Landing Page">Landing Page</option>
            <option value="Website Redesign">Website Redesign</option>
            <option value="SEO Optimization">SEO Optimization</option>
            <option value="Performance Optimization">Performance Optimization</option>
            <option value="Other">Other</option>
          </select>
          {errors.projectType && (
            <p className="text-red-400 text-xs mt-1.5">{errors.projectType.message}</p>
          )}
        </div>

        {/* Budget */}
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="contact-budget">
            Budget Range
          </label>
          <select
            id="contact-budget"
            className={`w-full rounded-xl border border-zinc-700 bg-zinc-900 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-blue)] ${errors.budget ? "border-red-500" : ""}`}
            {...register("budget")}
          >
            <option value="">Select budget range</option>
            <option value="Under $500">Under $500</option>
            <option value="$500 - $1,000">$500 – $1,000</option>
            <option value="$1,000 - $3,000">$1,000 – $3,000</option>
            <option value="$3,000 - $5,000">$3,000 – $5,000</option>
            <option value="$5,000+">$5,000+</option>
            <option value="Let's Discuss">Let&apos;s Discuss</option>
          </select>
          {errors.budget && (
            <p className="text-red-400 text-xs mt-1.5">{errors.budget.message}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="mt-4">
        <label className="block text-sm font-medium mb-2" htmlFor="contact-message">
          Project Details
        </label>
        <textarea
          id="contact-message"
          rows={6}
          className={`form-field resize-none ${errors.message ? "form-field-error" : ""}`}
          placeholder="Tell me about your project — the problem, goals, and what success looks like."
          {...register("message")}
        />
        {errors.message && (
          <p className="text-red-400 text-xs mt-1.5">{errors.message.message}</p>
        )}
      </div>

      {/* Error state */}
      {status === "error" && (
        <div className="flex items-center gap-2 mt-4 text-red-400 text-sm p-3 rounded-lg bg-red-400/10 border border-red-400/20">
          <AlertCircle size={16} />
          <span>Something went wrong. Please check all fields and try again.</span>
        </div>
      )}

      {/* Validation Summary (helpful if errors are off-screen) */}
      {Object.keys(errors).length > 0 && (
        <div className="mt-4 p-3 rounded-lg bg-amber-400/10 border border-amber-400/20 text-amber-400 text-sm">
          <p className="font-semibold mb-1">Please fix the following:</p>
          <ul className="list-disc list-inside">
            {Object.entries(errors).map(([key, error]) => (
              <li key={key}>{error?.message as string}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Submit */}
      <button
        className="btn btn-primary w-full mt-6"
        type="submit"
        disabled={status === "loading"}
      >
        <Send size={16} />
        {status === "loading" ? "Sending..." : "Send Project Inquiry"}
      </button>
    </form>
  );
}
