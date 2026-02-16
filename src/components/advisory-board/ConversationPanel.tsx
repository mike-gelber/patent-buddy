"use client";

import { useEffect, useRef } from "react";
import { AGENTS, type Agent } from "./AgentPanel";

export interface Message {
  id: string;
  agentId: string;
  content: string;
  timestamp: Date;
}

interface ConversationPanelProps {
  messages: Message[];
  isTyping: boolean;
  typingAgentId: string | null;
}

function getAgent(agentId: string): Agent | undefined {
  return AGENTS.find((a) => a.id === agentId);
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export default function ConversationPanel({
  messages,
  isTyping,
  typingAgentId,
}: ConversationPanelProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const typingAgent = typingAgentId ? getAgent(typingAgentId) : null;

  return (
    <div className="flex h-full flex-col">
      {/* Conversation header */}
      <div className="flex items-center gap-3 border-b border-gray-100 px-6 py-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
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
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-900">
            Board Discussion
          </h3>
          <p className="text-xs text-gray-500">
            {messages.length} message{messages.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {/* Messages area */}
      <div className="flex-1 space-y-1 overflow-y-auto px-6 py-4">
        {messages.length === 0 && !isTyping && (
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-500">
                Upload a document to start the review
              </p>
              <p className="mt-1 text-xs text-gray-400">
                The advisory board will discuss your submission
              </p>
            </div>
          </div>
        )}

        {messages.map((message) => {
          const agent = getAgent(message.agentId);
          if (!agent) return null;

          return (
            <div key={message.id} className="group py-3">
              <div className="flex items-start gap-3">
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${agent.avatarColor} text-[10px] font-bold text-white`}
                >
                  {agent.avatarInitials}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-semibold text-gray-900">
                      {agent.name}
                    </span>
                    <span className={`text-[10px] font-medium ${agent.textColor}`}>
                      {agent.role}
                    </span>
                    <span className="text-[10px] text-gray-400">
                      {formatTime(message.timestamp)}
                    </span>
                  </div>
                  <div className="mt-1 text-sm leading-relaxed text-gray-700 whitespace-pre-line">
                    {message.content}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Typing indicator */}
        {isTyping && typingAgent && (
          <div className="py-3">
            <div className="flex items-start gap-3">
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${typingAgent.avatarColor} text-[10px] font-bold text-white`}
              >
                {typingAgent.avatarInitials}
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-semibold text-gray-900">
                    {typingAgent.name}
                  </span>
                  <span
                    className={`text-[10px] font-medium ${typingAgent.textColor}`}
                  >
                    {typingAgent.role}
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-1">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.3s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.15s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400" />
                  </div>
                  <span className="ml-2 text-xs text-gray-400">
                    is analyzing...
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>
    </div>
  );
}
