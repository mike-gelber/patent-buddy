const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for exploring whether your idea might be patentable.",
    features: [
      "1 patentability assessment",
      "Basic patent criteria evaluation",
      "Plain-language explanations",
      "General next steps guidance",
    ],
    cta: "Start Free Assessment",
    ctaStyle:
      "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "per assessment",
    description: "For serious inventors ready to take the next step.",
    features: [
      "Unlimited assessments",
      "Detailed patentability scoring",
      "Prior art search guidance",
      "Personalized action plan",
      "Patent attorney recommendations",
      "Export-ready report",
    ],
    cta: "Get Started",
    ctaStyle:
      "bg-primary-600 text-white shadow-lg shadow-primary-600/25 hover:bg-primary-700",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$99",
    period: "per month",
    description: "For businesses managing multiple inventions and IP strategy.",
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "Portfolio dashboard",
      "Priority support",
      "API access",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    ctaStyle:
      "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
            Simple pricing
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Start free, upgrade when ready
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Try your first assessment for free. Upgrade for deeper analysis and
            personalized guidance.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-primary-200 bg-white shadow-xl shadow-primary-100/50 ring-1 ring-primary-100"
                  : "border-gray-200 bg-white shadow-sm"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex rounded-full bg-primary-600 px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {plan.name}
                </h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-sm text-gray-500">/{plan.period}</span>
                </div>
                <p className="mt-3 text-sm text-gray-600">
                  {plan.description}
                </p>
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary-500"
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
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`mt-8 block rounded-xl px-6 py-3 text-center text-sm font-semibold transition-all ${plan.ctaStyle}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
