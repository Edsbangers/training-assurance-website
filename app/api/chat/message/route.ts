import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { supabaseAdmin } from "@/lib/supabase";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
});

const SYSTEM_PROMPT = `You are the AI assistant for Training Assurance Consultancy (TAC), a UK-based consultancy specialising in AI governance, ISO certifications, and compliance management.

About TAC:
- Founded in 2022, based in the UK with operations across Ireland, Netherlands, Norway, and Italy
- 500+ successful audits completed with 100% certification success rate
- IRCA Registered Principal Auditor credentials

Our Services:

1. AI Governance & Auditing (ISO/IEC 42001)
   - Algorithmic transparency assessments
   - Bias detection and mitigation
   - AI risk management frameworks
   - Ethical AI implementation
   - AI audit services for organisations using AI systems

2. ISO Certifications:
   - ISO 9001 (Quality Management)
   - ISO 14001 (Environmental Management)
   - ISO 45001 (Occupational Health & Safety)
   - ISO 27001 (Information Security)
   - Integrated Management Systems (IMS)

3. PICMS Platform (www.picms.com)
   - Our SaaS compliance management platform
   - Designed specifically for UK SMEs
   - Up to 70% cost reduction compared to traditional consultancy
   - Manages multiple ISO standards in one platform
   - Digital document control, audit scheduling, CAPA management
   - Real-time compliance monitoring

Key Benefits of Working with TAC:
- Expert-led implementation with IRCA registered auditors
- Practical, business-focused approach
- Proven track record with 100% certification success
- Flexible engagement models (full consultancy or PICMS self-service)
- Specialisation in emerging AI governance requirements

Your Role:
- Be helpful, professional, and friendly using British English
- Answer questions about our services clearly and concisely
- Gently guide conversations toward booking a consultation when appropriate
- If asked about pricing, explain that we offer tailored solutions and suggest a free consultation
- For complex technical questions, provide a helpful overview and suggest speaking with our team
- Never make up information - if unsure, suggest contacting us directly
- Keep responses concise but informative (2-4 sentences typically)

Contact Information:
- Email: hello@trainingassuranceconsultancy.com
- Website: www.trainingassuranceconsultancy.com`;

export async function POST(request: NextRequest) {
  try {
    const { conversationId, message } = await request.json();

    if (!conversationId || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Save user message
    await supabaseAdmin.from("messages").insert({
      conversation_id: conversationId,
      role: "user",
      content: message,
    });

    // Get conversation history for context
    const { data: history } = await supabaseAdmin
      .from("messages")
      .select("role, content")
      .eq("conversation_id", conversationId)
      .order("created_at", { ascending: true })
      .limit(20);

    // Format messages for Claude
    const messages = (history || []).map((msg) => ({
      role: msg.role as "user" | "assistant",
      content: msg.content,
    }));

    // Call Claude API
    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 500,
      system: SYSTEM_PROMPT,
      messages: messages,
    });

    const assistantMessage = response.content[0].type === "text"
      ? response.content[0].text
      : "I apologise, I was unable to generate a response.";

    // Save assistant message
    await supabaseAdmin.from("messages").insert({
      conversation_id: conversationId,
      role: "assistant",
      content: assistantMessage,
    });

    // Update conversation activity
    await supabaseAdmin
      .from("conversations")
      .update({ ended_at: new Date().toISOString() })
      .eq("id", conversationId);

    return NextResponse.json({ response: assistantMessage });
  } catch (error) {
    console.error("Chat message error:", error);
    return NextResponse.json({ error: "Failed to process message" }, { status: 500 });
  }
}
