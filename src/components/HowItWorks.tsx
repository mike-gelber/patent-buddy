const steps = [
  {
    number: "01",
    title: "Describe Your Idea",
    description:
      "Tell us about your invention in plain language. No legal jargon needed — just explain what it does and what makes it unique.",
    color: "bg-primary-500",
  },
  {
    number: "02",
    title: "Answer Key Questions",
    description:
      "We'll walk you through targeted questions about novelty, prior art, and utility to evaluate your invention against patent criteria.",
    color: "bg-primary-600",
  },
  {
    number: "03",
    title: "Get Your Assessment",
    description:
      "Receive a detailed patentability score with clear explanations of strengths, potential issues, and how your idea measures up.",
    color: "bg-primary-700",
  },
  {
    number: "04",
    title: "Follow Your Action Plan",
    description:
      "Get personalized next steps: prior art search strategies, whether to file provisional, and when to consult a patent attorney.",
    color: "bg-primary-800",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
            Simple process
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Four steps to clarity
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our guided process makes patent assessment accessible to everyone,
            not just patent attorneys.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex gap-5">
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${step.color} text-sm font-bold text-white shadow-lg`}
                  >
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="mt-2 h-full w-px bg-primary-200 md:hidden" />
                  )}
                </div>
                <div className="pb-8 md:pb-0">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
