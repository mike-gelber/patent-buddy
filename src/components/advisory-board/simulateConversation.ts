import type { Message } from "./ConversationPanel";
import type { VerdictData } from "./PatentabilityVerdict";

interface ConversationScript {
  messages: Omit<Message, "id" | "timestamp">[];
  verdict: VerdictData;
}

/**
 * Generates a scripted advisory board conversation based on the uploaded
 * document name. This simulates what would happen when three AI agents
 * review a patent document.
 */
export function generateConversation(fileName: string): ConversationScript {
  return {
    messages: [
      {
        agentId: "patent-attorney",
        content: `Thank you for submitting "${fileName}" for review. I've completed my initial legal analysis. Let me share my findings with the board.\n\nFrom a patent law perspective, I see several elements here that could form the basis of a patentable invention. The key question is whether the claims can be drafted to distinguish this from existing prior art.`,
      },
      {
        agentId: "patent-expert",
        content: `I've run a preliminary prior art analysis on the concepts presented in this document. While there are related inventions in the space, I'm noting some potentially novel combinations of elements that could differentiate this submission.\n\nI'd want to see a more thorough search conducted, but my initial impression is cautiously optimistic regarding novelty.`,
      },
      {
        agentId: "tech-expert",
        content: `From a technical standpoint, the approach outlined in this document is sound. The innovation appears to combine existing technologies in a novel configuration.\n\nI'm particularly interested in the implementation details — the technical feasibility looks strong, and I can see clear advantages over current solutions in the market.`,
      },
      {
        agentId: "patent-attorney",
        content: `Dr. Rivera, regarding the prior art concern — I think we can work with that. The combination of elements here appears to be non-obvious, which is critical for patent eligibility under 35 U.S.C. § 103.\n\nI'd recommend structuring claims around the specific technical integration rather than the individual components. That gives us the strongest position.`,
      },
      {
        agentId: "patent-expert",
        content: `Agreed, Alexandra. The combination approach is the right strategy. Based on my experience at the USPTO, examiners tend to look favorably on applications that clearly articulate how the combination produces unexpected or improved results.\n\nI'd also suggest including dependent claims that cover the specific technical variations shown in the document.`,
      },
      {
        agentId: "tech-expert",
        content: `I want to add that from an industry perspective, this addresses a real gap in the market. The technical approach is differentiated enough that I believe the non-obviousness requirement can be satisfied.\n\nThe document could benefit from more detailed technical specifications — particularly around performance metrics and comparisons with existing approaches. This would strengthen both the patent application and the technical disclosure.`,
      },
      {
        agentId: "patent-attorney",
        content: `Excellent points from both of you. Let me summarize our collective assessment:\n\n1. **Novelty**: The combination of elements appears novel based on preliminary review\n2. **Non-obviousness**: The integration approach and resulting advantages support a non-obviousness argument\n3. **Utility**: Clear practical application with demonstrated technical benefits\n4. **Enablement**: The document provides a reasonable level of detail, though more specifics would strengthen the filing\n\nOverall, I believe this submission has merit and is worth pursuing. The inventor should consider filing a provisional patent application to establish priority while we conduct a more thorough prior art search.`,
      },
      {
        agentId: "patent-expert",
        content: `I concur with Alexandra's summary. I'd rate the overall patentability potential as strong, with the caveat that a comprehensive prior art search should be completed before filing a non-provisional application.\n\nThe advisory board's consensus is that this idea has significant patent potential. Let me finalize our scoring.`,
      },
    ],
    verdict: {
      overallScore: 76,
      recommendation:
        "The advisory board finds this submission has strong patent potential. The combination of technical elements appears novel, and the approach demonstrates non-obvious innovation. We recommend proceeding with a provisional patent application.",
      criteria: [
        {
          label: "Novelty",
          score: 78,
          summary:
            "The combination of elements appears novel based on preliminary prior art review. A full search is recommended.",
        },
        {
          label: "Non-Obviousness",
          score: 72,
          summary:
            "The integration approach and resulting advantages provide a reasonable basis for non-obviousness.",
        },
        {
          label: "Utility",
          score: 88,
          summary:
            "Clear practical application with demonstrated real-world benefits and market need.",
        },
        {
          label: "Enablement",
          score: 65,
          summary:
            "Good level of technical detail provided. Additional specifications would strengthen the application.",
        },
      ],
      nextSteps: [
        "File a provisional patent application to establish an early priority date and protect your idea.",
        "Conduct a comprehensive prior art search through USPTO, Google Patents, and relevant technical databases.",
        "Prepare detailed technical specifications and performance comparisons with existing solutions.",
        "Consult with a registered patent attorney to draft formal patent claims.",
        "Consider international filing options if the invention has global market potential.",
      ],
    },
  };
}
