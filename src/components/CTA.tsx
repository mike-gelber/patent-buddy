export default function CTA() {
  return (
    <section id="cta" className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 px-8 py-16 text-center shadow-2xl sm:px-16 lg:py-24">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          </div>
          <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4">
            <div className="h-48 w-48 rounded-full bg-white/5 blur-2xl" />
          </div>

          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to protect your idea?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-100">
              Join thousands of inventors who&apos;ve used Patent Buddy to
              understand their patent potential. Start your free assessment today.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/assessment"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-primary-700 shadow-lg transition-all hover:bg-primary-50 hover:shadow-xl sm:w-auto"
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
                href="#"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-all hover:border-white/50 hover:bg-white/10 sm:w-auto"
              >
                Schedule a Demo
              </a>
            </div>

            <p className="mt-6 text-sm text-primary-200">
              No credit card required &middot; Free forever plan available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
