"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";

const STEPS = [
  { id: 1, title: "Describe your invention", progress: 25 },
  { id: 2, title: "Key questions", progress: 50 },
  { id: 3, title: "Review", progress: 75 },
  { id: 4, title: "Your assessment", progress: 100 },
];

export default function AssessmentPage() {
  const [step, setStep] = useState(1);
  const [invention, setInvention] = useState("");

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary-600"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to home
          </Link>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl shadow-gray-200/50">
            <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-6 py-4">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-2 text-sm font-medium text-gray-600">
                Patent Buddy Assessment
              </span>
            </div>

            <div className="px-6 py-10 sm:px-10">
              <p className="text-sm font-medium text-primary-600">
                Step {step} of {STEPS.length}
              </p>
              <h1 className="mt-1 text-2xl font-bold text-gray-900">
                {STEPS[step - 1].title}
              </h1>

              {step === 1 && (
                <>
                  <p className="mt-2 text-gray-500">
                    Tell us about your idea in plain language. We&apos;ll guide you through the rest.
                  </p>
                  <textarea
                    value={invention}
                    onChange={(e) => setInvention(e.target.value)}
                    placeholder='e.g. "A wearable device that monitors soil moisture levels and automatically adjusts garden irrigation using AI-powered weather predictions..."'
                    rows={5}
                    className="mt-6 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  />
                </>
              )}

              {step > 1 && (
                <p className="mt-4 text-gray-500">
                  (More steps coming soon. You&apos;ve entered: &quot;{invention.slice(0, 80)}
                  {invention.length > 80 ? "…" : ""}&quot;)
                </p>
              )}

              <div className="mt-8 flex items-center justify-between gap-4">
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full bg-primary-500 transition-all"
                    style={{ width: `${STEPS[step - 1].progress}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-500">
                  {STEPS[step - 1].progress}%
                </span>
              </div>

              <div className="mt-10 flex justify-end gap-3">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep((s) => s - 1)}
                    className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                  >
                    Back
                  </button>
                ) : null}
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.min(s + 1, STEPS.length))}
                  disabled={step === 1 && !invention.trim()}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-600/25 hover:bg-primary-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {step < STEPS.length ? "Continue" : "Get results"}
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
