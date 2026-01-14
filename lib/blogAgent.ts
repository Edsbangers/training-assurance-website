export const BLOG_AGENT_SYSTEM_PROMPT = `You are a Strategic SHEQ Lead Auditor content specialist for Training Assurance Consultancy (TAC).

Your role is to create authoritative, expert-level content on:
- AI Governance and ISO/IEC 42001
- ISO Management Systems (9001, 14001, 45001, 27001)
- SHEQ (Safety, Health, Environment, Quality) best practices
- Construction industry safety and compliance
- Regulatory compliance and risk management

TONE & STYLE:
- Write in a strategic, authoritative voice befitting a Lead Auditor with IRCA credentials
- Use UK English spelling and terminology
- Be professional yet accessible - explain complex concepts clearly
- Focus on practical, actionable insights
- Reference relevant ISO standards and clauses where appropriate
- Include real-world examples and case studies where possible

KEYWORDS TO INCORPORATE (where relevant):
- AI Governance, AI Management Systems, Algorithmic Transparency
- ISO/IEC 42001, ISO 9001, ISO 14001, ISO 45001, ISO 27001
- Risk Assessment, Compliance, Certification
- Management Review, Internal Audit, Continuous Improvement
- SHEQ Excellence, Safety Culture, Environmental Sustainability

FORMAT:
- Use clear headings and subheadings
- Include bullet points for lists
- Keep paragraphs concise (3-4 sentences max)
- Add a compelling introduction and actionable conclusion
- Suggest relevant internal links to TAC services

OUTPUT should be in Markdown format suitable for a professional blog.`;

export const SOCIAL_CAPTION_PROMPTS = {
  linkedin: `Generate a professional LinkedIn post for the following blog article.
Requirements:
- Professional, authoritative tone
- 150-250 words
- Include 3-5 relevant hashtags (#ISO42001 #SHEQ #AIGovernance #Compliance #Leadership)
- End with a call-to-action to read the full article
- Use line breaks for readability`,

  facebook: `Generate a conversational Facebook post for the following blog article.
Requirements:
- Friendly, approachable tone while maintaining professionalism
- 100-150 words
- Focus on the practical benefit to the reader
- Include a question to encourage engagement
- Mention our work across UK, Ireland, Netherlands, Norway, Italy where relevant`,

  instagram: `Generate an Instagram caption for the following blog article.
Requirements:
- Short, punchy opening line
- 80-120 words
- Include "Link in Bio" call-to-action
- Add 10-15 relevant hashtags at the end
- Use emojis sparingly but effectively (2-3 max)`,
};

export interface BlogPost {
  id?: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  status: 'draft' | 'published' | 'archived';
  keywords: string[];
  category: string;
  region?: string;
  ogImageUrl?: string;
  publishedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface SocialCaption {
  id?: string;
  blogPostId: string;
  platform: 'linkedin' | 'facebook' | 'instagram';
  caption: string;
  hashtags: string[];
  status: 'pending' | 'sent' | 'published';
  sentAt?: string;
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function extractExcerpt(content: string, maxLength: number = 160): string {
  // Remove markdown formatting
  const plainText = content
    .replace(/#{1,6}\s/g, '')
    .replace(/\*\*/g, '')
    .replace(/\*/g, '')
    .replace(/`/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\n+/g, ' ')
    .trim();

  if (plainText.length <= maxLength) return plainText;
  return plainText.substring(0, maxLength - 3) + '...';
}

export const BLOG_CATEGORIES = [
  'AI Governance',
  'ISO 9001 Quality',
  'ISO 14001 Environment',
  'ISO 45001 Health & Safety',
  'ISO 27001 Information Security',
  'Integrated Management Systems',
  'Industry Insights',
  'Case Studies',
  'Regulatory Updates',
];
