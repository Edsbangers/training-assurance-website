import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { SOCIAL_CAPTION_PROMPTS } from '@/lib/blogAgent';

const anthropic = new Anthropic();

export async function POST(request: NextRequest) {
  try {
    const { title, content, excerpt, platform } = await request.json();

    if (!title || !content) {
      return NextResponse.json({ error: 'Title and content are required' }, { status: 400 });
    }

    const platforms = platform ? [platform] : ['linkedin', 'facebook', 'instagram'];
    const captions: Record<string, { caption: string; hashtags: string[] }> = {};

    for (const p of platforms) {
      const promptTemplate = SOCIAL_CAPTION_PROMPTS[p as keyof typeof SOCIAL_CAPTION_PROMPTS];

      const response = await anthropic.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 500,
        messages: [
          {
            role: 'user',
            content: `${promptTemplate}

Article Title: ${title}
Article Excerpt: ${excerpt || content.substring(0, 300)}

Full Article Content:
${content.substring(0, 1500)}...`,
          },
        ],
      });

      const captionText = response.content[0].type === 'text' ? response.content[0].text : '';

      // Extract hashtags from the caption
      const hashtagMatches = captionText.match(/#\w+/g) || [];
      const hashtags = [...new Set(hashtagMatches)];

      captions[p] = {
        caption: captionText,
        hashtags,
      };
    }

    return NextResponse.json({ captions });
  } catch (error) {
    console.error('Social caption generation error:', error);
    return NextResponse.json({ error: 'Failed to generate social captions' }, { status: 500 });
  }
}
