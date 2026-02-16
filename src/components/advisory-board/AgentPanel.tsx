"use client";

export interface Agent {
  id: string;
  name: string;
  role: string;
  specialty: string;
  description: string;
  avatarColor: string;
  avatarInitials: string;
  borderColor: string;
  bgColor: string;
  textColor: string;
}

export const AGENTS: Agent[] = [
  {
    id: "patent-attorney",
    name: "Alexandra Chen",
    role: "Patent Attorney",
    specialty: "Patent law, claims drafting, legal strategy",
    description:
      "20+ years of patent prosecution experience. Evaluates legal patentability criteria including novelty, non-obviousness, and statutory requirements.",
    avatarColor: "bg-violet-600",
    avatarInitials: "AC",
    borderColor: "border-violet-200",
    bgColor: "bg-violet-50",
    textColor: "text-violet-700",
  },
  {
    id: "patent-expert",
    name: "Dr. Marcus Rivera",
    role: "Patent Examiner",
    specialty: "Prior art analysis, patent classification, claim scope",
    description:
      "Former USPTO examiner with 15 years of experience. Specializes in prior art searches and understanding how patent offices evaluate applications.",
    avatarColor: "bg-amber-600",
    avatarInitials: "MR",
    borderColor: "border-amber-200",
    bgColor: "bg-amber-50",
    textColor: "text-amber-700",
  },
  {
    id: "tech-expert",
    name: "Dr. Sarah Okonkwo",
    role: "Technology Specialist",
    specialty: "Technical feasibility, innovation assessment, industry trends",
    description:
      "PhD in Engineering with cross-domain expertise. Evaluates the technical merit, feasibility, and innovative aspects of inventions.",
    avatarColor: "bg-emerald-600",
    avatarInitials: "SO",
    borderColor: "border-emerald-200",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-700",
  },
];

interface AgentPanelProps {
  activeAgentId: string | null;
  isReviewing: boolean;
}

export default function AgentPanel({
  activeAgentId,
  isReviewing,
}: AgentPanelProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
        Advisory Board
      </h3>
      {AGENTS.map((agent) => {
        const isActive = activeAgentId === agent.id;
        return (
          <div
            key={agent.id}
            className={`rounded-xl border p-4 transition-all ${
              isActive
                ? `${agent.borderColor} ${agent.bgColor} shadow-sm`
                : "border-gray-100 bg-white"
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="relative">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${agent.avatarColor} text-xs font-bold text-white`}
                >
                  {agent.avatarInitials}
                </div>
                {isActive && isReviewing && (
                  <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                    <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-accent-500 border-2 border-white" />
                  </span>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-gray-900">
                  {agent.name}
                </p>
                <p className={`text-xs font-medium ${agent.textColor}`}>
                  {agent.role}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-gray-500">
                  {agent.specialty}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
