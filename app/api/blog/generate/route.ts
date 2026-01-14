import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { BLOG_AGENT_SYSTEM_PROMPT, generateSlug, extractExcerpt } from '@/lib/blogAgent';

const anthropic = new Anthropic();

export async function POST(request: NextRequest) {
  try {
    const { topic, category, keywords, tone } = await request.json();

    if (!topic) {
      return NextResponse.json({ error: 'Topic is required' }, { status: 400 });
    }

    const userPrompt = `Write a comprehensive blog article about: ${topic}

Category: ${category || 'Industry Insights'}
${keywords ? `Focus keywords: ${keywords.join(', ')}` : ''}
${tone ? `Tone: ${tone}` : ''}

Create a well-structured article with:
1. An engaging title
2. A compelling introduction
3. 3-5 main sections with clear headings
4. Practical takeaways or action items
5. A strong conclusion

The article should be approximately 800-1200 words.`;

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 2000,
      system: BLOG_AGENT_SYSTEM_PROMPT,
      messages: [
        {
          role: 'user',
          content: userPrompt,
        },
      ],
    });

    const content = response.content[0].type === 'text' ? response.content[0].text : '';

    // Extract title from the first line (assuming it's a # heading)
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1] : topic;
    const slug = generateSlug(title);
    const excerpt = extractExcerpt(content);

    return NextResponse.json({
      title,
      slug,
      content,
      excerpt,
      category: category || 'Industry Insights',
      keywords: keywords || [],
      status: 'draft',
    });
  } catch (error) {
    console.error('Blog generation error:', error);
    return NextResponse.json({ error: 'Failed to generate blog post' }, { status: 500 });
  }
}
