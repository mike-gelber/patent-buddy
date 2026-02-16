const criteria = [
  {
    title: "Novelty",
    subtitle: "Is it new?",
    description:
      "Your invention must be genuinely new — it can't already exist in any prior patent, publication, or public use anywhere in the world.",
    examples: [
      "Not previously patented",
      "Not described in publications",
      "Not publicly disclosed or sold",
    ],
    gradient: "from-blue-500 to-blue-600",
    bgLight: "bg-blue-50",
    textColor: "text-blue-700",
    borderColor: "border-blue-100",
  },
  {
    title: "Non-Obviousness",
    subtitle: "Is it inventive?",
    description:
      "Your invention must not be an obvious improvement over existing technology. It should represent a meaningful inventive step.",
    examples: [
      "Not a trivial combination of known elements",
      "Solves a problem in an unexpected way",
      "Would surprise someone skilled in the field",
    ],
    gradient: "from-violet-500 to-violet-600",
    bgLight: "bg-violet-50",
    textColor: "text-violet-700",
    borderColor: "border-violet-100",
  },
  {
    title: "Utility",
    subtitle: "Is it useful?",
    description:
      "Your invention must have a specific, substantial, and credible use. It needs to work and provide some identifiable benefit.",
    examples: [
      "Has a practical application",
      "Provides a tangible benefit",
      "Actually works as described",
    ],
    gradient: "from-emerald-500 to-emerald-600",
    bgLight: "bg-emerald-50",
    textColor: "text-emerald-700",
    borderColor: "border-emerald-100",
  },
];

export default function PatentCriteria() {
  return (
    <section id="criteria" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
            Patent fundamentals
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            The three pillars of patentability
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Every patent application is evaluated against these core criteria.
            Patent Buddy helps you understand and assess each one.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-3">
          {criteria.map((item) => (
            <div
              key={item.title}
              className={`overflow-hidden rounded-2xl border ${item.borderColor} bg-white shadow-sm transition-all hover:shadow-lg`}
            >
              <div
                className={`bg-gradient-to-r ${item.gradient} px-6 py-5 text-white`}
              >
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-0.5 text-sm text-white/80">{item.subtitle}</p>
              </div>
              <div className="p-6">
                <p className="text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {item.examples.map((example) => (
                    <li key={example} className="flex items-start gap-2">
                      <svg
                        className={`mt-0.5 h-4 w-4 shrink-0 ${item.textColor}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-gray-600">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
