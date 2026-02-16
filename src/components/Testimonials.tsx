const testimonials = [
  {
    quote:
      "Patent Buddy saved me thousands of dollars. I found out my idea had prior art before spending money on a patent attorney. Incredibly valuable.",
    name: "Sarah Chen",
    role: "Hardware Startup Founder",
    initials: "SC",
  },
  {
    quote:
      "As a first-time inventor, the patent process was intimidating. Patent Buddy broke everything down into simple terms I could actually understand.",
    name: "Marcus Johnson",
    role: "Independent Inventor",
    initials: "MJ",
  },
  {
    quote:
      "We use Patent Buddy to screen all new product ideas before investing in full patent searches. It's become an essential part of our IP strategy.",
    name: "Emily Rodriguez",
    role: "VP of Innovation, TechCorp",
    initials: "ER",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
            Trusted by inventors
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Helping inventors protect their ideas
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="flex-1 text-sm leading-relaxed text-gray-600">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
