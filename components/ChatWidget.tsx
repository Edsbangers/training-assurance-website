"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface LeadForm {
  name: string;
  email: string;
  company: string;
  phone: string;
}

interface QuickAction {
  label: string;
  message: string;
}

const quickActions: QuickAction[] = [
  { label: "ISO Certification", message: "I'd like to learn about ISO certification for my business" },
  { label: "AI Governance", message: "Tell me about AI governance and ISO 42001" },
  { label: "Bespoke Software", message: "Tell me about your bespoke software solutions, including AI-powered agentic tools and website hosting optimisation" },
  { label: "Get a Quote", message: "I'd like to get a quote for your services" },
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [messageCount, setMessageCount] = useState(0);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const [showGreetingBubble, setShowGreetingBubble] = useState(false);
  const [greetingDismissed, setGreetingDismissed] = useState(false);
  const [leadForm, setLeadForm] = useState<LeadForm>({
    name: "",
    email: "",
    company: "",
    phone: "",
  });
  const [leadSubmitting, setLeadSubmitting] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-show greeting bubble after 5 seconds for new visitors
  useEffect(() => {
    const hasSeenGreeting = sessionStorage.getItem("tac_greeting_shown");
    if (hasSeenGreeting || greetingDismissed) return;

    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowGreetingBubble(true);
        sessionStorage.setItem("tac_greeting_shown", "true");
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [isOpen, greetingDismissed]);

  // Hide quick actions after first message
  useEffect(() => {
    if (messageCount > 0) {
      setShowQuickActions(false);
    }
  }, [messageCount]);

  // Check if we should show lead form after 2 user messages (reduced from 3)
  useEffect(() => {
    if (messageCount >= 2 && !leadCaptured && !showLeadForm) {
      setShowLeadForm(true);
    }
  }, [messageCount, leadCaptured, showLeadForm]);

  const initConversation = async () => {
    try {
      const sessionId = localStorage.getItem("tac_session_id") || crypto.randomUUID();
      localStorage.setItem("tac_session_id", sessionId);

      const response = await fetch("/api/chat/init", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId }),
      });

      if (response.ok) {
        const data = await response.json();
        setConversationId(data.conversationId);
        // Add welcome message
        setMessages([
          {
            id: "welcome",
            role: "assistant",
            content:
              "Hi there! What are you looking to achieve today? Whether it's ISO certification, AI governance, or streamlining your compliance processes - I'm here to help you find the right solution.",
          },
        ]);
      }
    } catch (error) {
      console.error("Failed to init conversation:", error);
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
    setShowGreetingBubble(false);
    setGreetingDismissed(true);
    if (!conversationId) {
      initConversation();
    }
  };

  const handleQuickAction = async (action: QuickAction) => {
    if (!conversationId) {
      await initConversation();
    }
    setShowQuickActions(false);
    // Simulate sending the message
    setInputValue(action.message);
    // Small delay to let state update, then submit
    setTimeout(() => {
      const form = document.getElementById("chat-form") as HTMLFormElement;
      if (form) form.requestSubmit();
    }, 100);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading || !conversationId) return;

    const userMessage = inputValue.trim();
    setInputValue("");
    setIsLoading(true);

    // Add user message to UI immediately
    const userMsgId = crypto.randomUUID();
    setMessages((prev) => [...prev, { id: userMsgId, role: "user", content: userMessage }]);
    setMessageCount((prev) => prev + 1);

    try {
      const response = await fetch("/api/chat/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          conversationId,
          message: userMessage,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessages((prev) => [
          ...prev,
          { id: crypto.randomUUID(), role: "assistant", content: data.response },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            role: "assistant",
            content: "I apologise, but I'm having trouble responding right now. Please try again or contact us directly at hello@trainingassuranceconsultancy.com",
          },
        ]);
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: "I apologise, but I'm having trouble connecting. Please try again shortly.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.name || !leadForm.email) return;

    setLeadSubmitting(true);

    try {
      const response = await fetch("/api/leads/capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...leadForm,
          conversationId,
          sessionId: localStorage.getItem("tac_session_id"),
        }),
      });

      if (response.ok) {
        setLeadCaptured(true);
        setShowLeadForm(false);
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            role: "assistant",
            content: `Thank you, ${leadForm.name}! We've received your details and a member of our team will be in touch shortly. In the meantime, feel free to continue asking questions.`,
          },
        ]);
      }
    } catch (error) {
      console.error("Failed to capture lead:", error);
    } finally {
      setLeadSubmitting(false);
    }
  };

  return (
    <>
      {/* Greeting Bubble */}
      {showGreetingBubble && !isOpen && (
        <div className="fixed bottom-24 right-6 z-50 animate-fade-in-up">
          <div className="relative bg-slate-900 border border-cyan-500/30 rounded-2xl rounded-br-md p-4 shadow-xl max-w-[280px]">
            <button
              type="button"
              onClick={() => {
                setShowGreetingBubble(false);
                setGreetingDismissed(true);
              }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-slate-800 border border-slate-600 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              aria-label="Dismiss"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <p className="text-white text-sm mb-3">
              Looking for help with ISO certification or AI governance?
            </p>
            <button
              onClick={handleOpen}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
            >
              Chat with us
            </button>
          </div>
          {/* Arrow pointing to chat button */}
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-slate-900 border-r border-b border-cyan-500/30 transform rotate-45" />
        </div>
      )}

      {/* Chat Button */}
      <button
        onClick={handleOpen}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${
          showGreetingBubble ? "animate-bounce" : !isOpen ? "animate-pulse" : ""
        }`}
        aria-label="Open chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] bg-slate-950 border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-4 py-3 flex items-center justify-between border-b border-cyan-500/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">Strategic Advisor</h3>
                <p className="text-slate-400 text-xs">AI Governance & ISO Experts</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[400px] min-h-[300px]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-br-md"
                      : "bg-slate-800 text-slate-300 rounded-bl-md border border-slate-700"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Quick Action Buttons */}
            {showQuickActions && messages.length > 0 && !isLoading && (
              <div className="flex flex-wrap gap-2">
                {quickActions.map((action) => (
                  <button
                    key={action.label}
                    type="button"
                    onClick={() => handleQuickAction(action)}
                    className="text-xs bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-cyan-500/50 text-slate-300 hover:text-white px-3 py-1.5 rounded-full transition-all"
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            )}

            {/* Loading indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 border border-slate-700 rounded-2xl rounded-bl-md px-4 py-3">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}

            {/* Lead Capture Form */}
            {showLeadForm && !leadCaptured && (
              <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-4">
                <h4 className="text-white font-medium text-sm mb-2">Get in touch with our team</h4>
                <p className="text-slate-400 text-xs mb-3">
                  Leave your details and we'll reach out to discuss your requirements.
                </p>
                <form onSubmit={handleLeadSubmit} className="space-y-2">
                  <input
                    type="text"
                    placeholder="Your name *"
                    value={leadForm.name}
                    onChange={(e) => setLeadForm((prev) => ({ ...prev, name: e.target.value }))}
                    required
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                  <input
                    type="email"
                    placeholder="Email address *"
                    value={leadForm.email}
                    onChange={(e) => setLeadForm((prev) => ({ ...prev, email: e.target.value }))}
                    required
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                  <input
                    type="text"
                    placeholder="Company name"
                    value={leadForm.company}
                    onChange={(e) => setLeadForm((prev) => ({ ...prev, company: e.target.value }))}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    value={leadForm.phone}
                    onChange={(e) => setLeadForm((prev) => ({ ...prev, phone: e.target.value }))}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                  <div className="flex gap-2 pt-1">
                    <button
                      type="submit"
                      disabled={leadSubmitting}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium py-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                    >
                      {leadSubmitting ? "Sending..." : "Submit"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowLeadForm(false)}
                      className="px-4 py-2 text-slate-400 text-sm hover:text-white transition-colors"
                    >
                      Later
                    </button>
                  </div>
                </form>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form id="chat-form" onSubmit={handleSubmit} className="p-3 border-t border-slate-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white hover:opacity-90 transition-opacity disabled:opacity-50"
                aria-label="Send message"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
