"use client";

interface Criterion {
  label: string;
  score: number;
  summary: string;
}

interface VerdictData {
  overallScore: number;
  recommendation: string;
  criteria: Criterion[];
  nextSteps: string[];
}

interface PatentabilityVerdictProps {
  verdict: VerdictData | null;
}

function getScoreColor(score: number): string {
  if (score >= 75) return "text-accent-600";
  if (score >= 50) return "text-amber-600";
  return "text-red-600";
}

function getScoreBg(score: number): string {
  if (score >= 75) return "bg-accent-500";
  if (score >= 50) return "bg-amber-500";
  return "bg-red-500";
}

function getScoreLabel(score: number): string {
  if (score >= 85) return "Highly Patentable";
  if (score >= 70) return "Likely Patentable";
  if (score >= 50) return "Possibly Patentable";
  if (score >= 30) return "Challenging";
  return "Unlikely Patentable";
}

export default function PatentabilityVerdict({
  verdict,
}: PatentabilityVerdictProps) {
  if (!verdict) return null;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-5">
        <div className="flex items-center gap-3">
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          <h3 className="text-lg font-bold text-white">
            Advisory Board Verdict
          </h3>
        </div>
      </div>

      <div className="p-6">
        {/* Overall score */}
        <div className="mb-6 flex items-center gap-6">
          <div className="relative flex h-24 w-24 shrink-0 items-center justify-center">
            <svg className="h-24 w-24 -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="currentColor"
                className="text-gray-100"
                strokeWidth="8"
              />
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="currentColor"
                className={getScoreColor(verdict.overallScore)}
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${(verdict.overallScore / 100) * 264} 264`}
              />
            </svg>
            <span
              className={`absolute text-2xl font-bold ${getScoreColor(verdict.overallScore)}`}
            >
              {verdict.overallScore}
            </span>
          </div>
          <div>
            <p
              className={`text-lg font-bold ${getScoreColor(verdict.overallScore)}`}
            >
              {getScoreLabel(verdict.overallScore)}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-gray-600">
              {verdict.recommendation}
            </p>
          </div>
        </div>

        {/* Criteria breakdown */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Criteria Breakdown
          </h4>
          {verdict.criteria.map((criterion) => (
            <div key={criterion.label}>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">
                  {criterion.label}
                </span>
                <span
                  className={`text-sm font-bold ${getScoreColor(criterion.score)}`}
                >
                  {criterion.score}/100
                </span>
              </div>
              <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-gray-100">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${getScoreBg(criterion.score)}`}
                  style={{ width: `${criterion.score}%` }}
                />
              </div>
              <p className="mt-1 text-xs text-gray-500">{criterion.summary}</p>
            </div>
          ))}
        </div>

        {/* Next steps */}
        <div className="mt-6 rounded-xl bg-primary-50 p-4">
          <h4 className="flex items-center gap-2 text-sm font-semibold text-primary-900">
            <svg
              className="h-4 w-4"
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
            Recommended Next Steps
          </h4>
          <ul className="mt-3 space-y-2">
            {verdict.nextSteps.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-primary-800">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-200 text-[10px] font-bold text-primary-700">
                  {idx + 1}
                </span>
                {step}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export type { VerdictData, Criterion };
