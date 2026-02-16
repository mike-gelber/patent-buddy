"use client";

import Link from "next/link";
import { useState, useCallback, useRef } from "react";
import Navbar from "@/components/Navbar";
import DocumentUpload, {
  type UploadedDocument,
} from "@/components/advisory-board/DocumentUpload";
import AgentPanel from "@/components/advisory-board/AgentPanel";
import ConversationPanel, {
  type Message,
} from "@/components/advisory-board/ConversationPanel";
import PatentabilityVerdict from "@/components/advisory-board/PatentabilityVerdict";
import type { VerdictData } from "@/components/advisory-board/PatentabilityVerdict";
import { generateConversation } from "@/components/advisory-board/simulateConversation";

type ReviewPhase = "upload" | "reviewing" | "complete";

export default function AdvisoryBoardPage() {
  const [uploadedDocument, setUploadedDocument] =
    useState<UploadedDocument | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [phase, setPhase] = useState<ReviewPhase>("upload");
  const [isTyping, setIsTyping] = useState(false);
  const [typingAgentId, setTypingAgentId] = useState<string | null>(null);
  const [activeAgentId, setActiveAgentId] = useState<string | null>(null);
  const [verdict, setVerdict] = useState<VerdictData | null>(null);
  const [ideaDescription, setIdeaDescription] = useState("");
  const reviewAbortRef = useRef<boolean>(false);

  const handleDocumentUploaded = useCallback((doc: UploadedDocument) => {
    setUploadedDocument(doc);
  }, []);

  const handleRemoveDocument = useCallback(() => {
    if (uploadedDocument?.preview) {
      URL.revokeObjectURL(uploadedDocument.preview);
    }
    setUploadedDocument(null);
  }, [uploadedDocument]);

  const startReview = useCallback(async () => {
    if (!uploadedDocument) return;

    reviewAbortRef.current = false;
    setPhase("reviewing");
    setMessages([]);
    setVerdict(null);

    const conversation = generateConversation(uploadedDocument.file.name);

    for (let i = 0; i < conversation.messages.length; i++) {
      if (reviewAbortRef.current) return;

      const msg = conversation.messages[i];

      setActiveAgentId(msg.agentId);
      setTypingAgentId(msg.agentId);
      setIsTyping(true);

      const delay = 1800 + Math.random() * 1200;
      await new Promise((resolve) => setTimeout(resolve, delay));

      if (reviewAbortRef.current) return;

      setIsTyping(false);
      setTypingAgentId(null);

      const newMessage: Message = {
        id: `msg-${i}`,
        agentId: msg.agentId,
        content: msg.content,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, newMessage]);

      await new Promise((resolve) => setTimeout(resolve, 600));
    }

    if (!reviewAbortRef.current) {
      setActiveAgentId(null);
      setVerdict(conversation.verdict);
      setPhase("complete");
    }
  }, [uploadedDocument]);

  const handleReset = useCallback(() => {
    reviewAbortRef.current = true;
    setPhase("upload");
    setMessages([]);
    setVerdict(null);
    setIsTyping(false);
    setTypingAgentId(null);
    setActiveAgentId(null);
    setIdeaDescription("");
    if (uploadedDocument?.preview) {
      URL.revokeObjectURL(uploadedDocument.preview);
    }
    setUploadedDocument(null);
  }, [uploadedDocument]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24 pb-16 lg:pt-28 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Page header */}
          <div className="mb-8">
            <Link
              href="/"
              className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to home
            </Link>

            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  Patent Advisory Board
                </h1>
                <p className="mt-2 text-base text-gray-600">
                  Upload a schematic or document and let our panel of AI experts
                  evaluate its patentability.
                </p>
              </div>
              {phase !== "upload" && (
                <button
                  onClick={handleReset}
                  className="shrink-0 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50"
                >
                  New Review
                </button>
              )}
            </div>
          </div>

          {/* Upload phase */}
          {phase === "upload" && (
            <div className="mx-auto max-w-2xl">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Submit Your Invention for Review
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    Upload a schematic, diagram, or document describing your
                    invention. Our panel of three expert AI agents will analyze
                    it and provide their assessment.
                  </p>
                </div>

                <DocumentUpload
                  onDocumentUploaded={handleDocumentUploaded}
                  uploadedDocument={uploadedDocument}
                  onRemoveDocument={handleRemoveDocument}
                />

                {/* Idea description */}
                <div className="mt-6">
                  <label
                    htmlFor="idea-description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Describe your idea{" "}
                    <span className="text-gray-400">(optional)</span>
                  </label>
                  <textarea
                    id="idea-description"
                    value={ideaDescription}
                    onChange={(e) => setIdeaDescription(e.target.value)}
                    placeholder="Briefly describe what your invention does and what makes it unique..."
                    rows={4}
                    className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
                  />
                </div>

                {/* Advisory board preview */}
                <div className="mt-6 rounded-xl bg-gray-50 p-4">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Your Advisory Board
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 rounded-full bg-violet-50 border border-violet-100 px-3 py-1.5">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-600 text-[8px] font-bold text-white">
                        AC
                      </div>
                      <span className="text-xs font-medium text-violet-700">
                        Patent Attorney
                      </span>
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-amber-50 border border-amber-100 px-3 py-1.5">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-600 text-[8px] font-bold text-white">
                        MR
                      </div>
                      <span className="text-xs font-medium text-amber-700">
                        Patent Examiner
                      </span>
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-100 px-3 py-1.5">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-[8px] font-bold text-white">
                        SO
                      </div>
                      <span className="text-xs font-medium text-emerald-700">
                        Technology Specialist
                      </span>
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  onClick={startReview}
                  disabled={!uploadedDocument}
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary-600/25 transition-all hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-600/30 disabled:opacity-50 disabled:pointer-events-none disabled:shadow-none"
                >
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  Start Advisory Board Review
                </button>
              </div>
            </div>
          )}

          {/* Reviewing & Complete phases */}
          {(phase === "reviewing" || phase === "complete") && (
            <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
              {/* Left sidebar — Agent panel */}
              <div className="hidden lg:block">
                <div className="sticky top-24">
                  <AgentPanel
                    activeAgentId={activeAgentId}
                    isReviewing={phase === "reviewing"}
                  />
                  {/* Document info */}
                  {uploadedDocument && (
                    <div className="mt-4 rounded-xl border border-gray-100 bg-white p-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Document Under Review
                      </h4>
                      <div className="mt-2 flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50">
                          {uploadedDocument.type === "image" ? (
                            <svg
                              className="h-4 w-4 text-primary-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="h-4 w-4 text-primary-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                          )}
                        </div>
                        <p className="truncate text-xs font-medium text-gray-700">
                          {uploadedDocument.file.name}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Main content area */}
              <div className="space-y-6">
                {/* Mobile agent pills */}
                <div className="flex flex-wrap gap-2 lg:hidden">
                  <div className="flex items-center gap-2 rounded-full bg-violet-50 border border-violet-100 px-3 py-1.5">
                    <div
                      className={`flex h-5 w-5 items-center justify-center rounded-full bg-violet-600 text-[8px] font-bold text-white`}
                    >
                      AC
                    </div>
                    <span className="text-xs font-medium text-violet-700">
                      Attorney
                    </span>
                    {activeAgentId === "patent-attorney" &&
                      phase === "reviewing" && (
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
                        </span>
                      )}
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-amber-50 border border-amber-100 px-3 py-1.5">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-600 text-[8px] font-bold text-white">
                      MR
                    </div>
                    <span className="text-xs font-medium text-amber-700">
                      Examiner
                    </span>
                    {activeAgentId === "patent-expert" &&
                      phase === "reviewing" && (
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
                        </span>
                      )}
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-100 px-3 py-1.5">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-[8px] font-bold text-white">
                      SO
                    </div>
                    <span className="text-xs font-medium text-emerald-700">
                      Tech Expert
                    </span>
                    {activeAgentId === "tech-expert" &&
                      phase === "reviewing" && (
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
                        </span>
                      )}
                  </div>
                </div>

                {/* Conversation */}
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                  <div className="h-[500px] sm:h-[560px]">
                    <ConversationPanel
                      messages={messages}
                      isTyping={isTyping}
                      typingAgentId={typingAgentId}
                    />
                  </div>
                </div>

                {/* Verdict */}
                {phase === "complete" && verdict && (
                  <PatentabilityVerdict verdict={verdict} />
                )}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
