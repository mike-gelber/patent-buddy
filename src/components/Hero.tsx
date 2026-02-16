export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-50/60 via-white to-white" />
      <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-primary-100/40 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-64 w-64 rounded-full bg-accent-100/40 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
            </span>
            Free patentability assessment
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Discover if your idea is{" "}
            <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              patentable
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-gray-600 sm:text-xl">
            Stop guessing and start protecting. Patent Buddy walks you through a
            guided assessment to evaluate your invention&apos;s patentability,
            explains the criteria in plain language, and shows you exactly what
            to do next.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/assessment"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary-600/25 transition-all hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-600/30 sm:w-auto"
            >
              Start Free Assessment
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-8 py-3.5 text-base font-semibold text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:shadow-md sm:w-auto"
            >
              See How It Works
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            No credit card required &middot; Takes about 5 minutes &middot;
            Instant results
          </p>
        </div>

        {/* Hero illustration */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-gray-200/50">
            <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-2 text-xs text-gray-400">
                Patent Buddy Assessment
              </span>
            </div>
            <div className="px-8 py-10 sm:px-12">
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-medium text-primary-600">
                    Step 1 of 4
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-gray-900">
                    Describe your invention
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Tell us about your idea in plain language. We&apos;ll guide
                    you through the rest.
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <p className="text-sm text-gray-400 italic">
                    &quot;A wearable device that monitors soil moisture levels
                    and automatically adjusts garden irrigation using
                    AI-powered weather predictions...&quot;
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
                    <div className="h-full w-1/4 rounded-full bg-primary-500 transition-all" />
                  </div>
                  <span className="text-xs font-medium text-gray-500">
                    25%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
