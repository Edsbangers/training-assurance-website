import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { supabaseAdmin } from '@/lib/supabase';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  category: string;
  keywords: string[];
  published_at: string;
  og_image_url: string | null;
}

interface RelatedPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  published_at: string;
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const { data, error } = await supabaseAdmin
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .single();

    if (error || !data) {
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

async function getRelatedPosts(currentSlug: string, category: string): Promise<RelatedPost[]> {
  try {
    const { data, error } = await supabaseAdmin
      .from('blog_posts')
      .select('id, title, slug, excerpt, category, published_at')
      .eq('status', 'published')
      .neq('slug', currentSlug)
      .eq('category', category)
      .order('published_at', { ascending: false })
      .limit(3);

    if (error) {
      return [];
    }

    return data || [];
  } catch (error) {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: 'Article Not Found | Training Assurance Consultancy',
    };
  }

  const ogImageUrl = post.og_image_url || `https://www.trainingassuranceconsultancy.com/api/og?title=${encodeURIComponent(post.title)}&category=${encodeURIComponent(post.category || 'Industry Insights')}`;

  return {
    title: `${post.title} | TAC Strategic Insights`,
    description: post.excerpt,
    keywords: post.keywords?.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.published_at,
      authors: [post.author],
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [ogImageUrl],
    },
  };
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(slug, post.category);

  // Schema.org Article structured data
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: 'Lead Auditor',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Training Assurance Consultancy',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.trainingassuranceconsultancy.com/logo.png',
      },
    },
    datePublished: post.published_at,
    keywords: post.keywords?.join(', '),
    articleSection: post.category,
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Navigation />

      {/* Article Header */}
      <article className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-slate-500">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/blog" className="hover:text-cyan-400 transition-colors">
                  Insights
                </Link>
              </li>
              <li>/</li>
              <li className="text-slate-400 truncate">{post.title}</li>
            </ol>
          </nav>

          {/* Category Badge */}
          <div className="mb-4">
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">
              {post.category || 'Industry Insights'}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                <span className="text-cyan-400 font-bold text-sm">
                  {post.author.charAt(0)}
                </span>
              </div>
              <span>{post.author}</span>
            </div>
            <span>&bull;</span>
            <span>{formatDate(post.published_at)}</span>
          </div>

          {/* Excerpt */}
          <p className="text-lg text-slate-400 border-l-4 border-cyan-500 pl-6 mb-10">
            {post.excerpt}
          </p>

          {/* Article Content */}
          <div
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-slate-400 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-white
              prose-ul:text-slate-400 prose-ol:text-slate-400
              prose-li:mb-2
              prose-blockquote:border-l-cyan-500 prose-blockquote:text-slate-400 prose-blockquote:italic
              prose-code:text-cyan-400 prose-code:bg-slate-800 prose-code:px-2 prose-code:py-1 prose-code:rounded"
            dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
          />

          {/* Keywords */}
          {post.keywords && post.keywords.length > 0 && (
            <div className="mt-12 pt-8 border-t border-slate-700">
              <h3 className="text-sm font-semibold text-slate-500 mb-4">Related Topics</h3>
              <div className="flex flex-wrap gap-2">
                {post.keywords.map((keyword: string) => (
                  <span
                    key={keyword}
                    className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-400"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* Author CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-2xl font-bold">TA</span>
              </div>
              <div className="text-center sm:text-left flex-1">
                <h3 className="text-lg font-bold mb-2">Need Expert Guidance?</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Our Lead Auditors can help you implement these insights in your organisation.
                  Book a strategic consultation today.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Related Insights</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all hover:-translate-y-1"
                >
                  <span className="text-xs text-cyan-400 font-medium">
                    {relatedPost.category}
                  </span>
                  <h3 className="text-lg font-bold mt-2 mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-slate-400 text-sm line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

// Helper function to convert markdown to HTML
function formatContent(content: string): string {
  // Basic markdown to HTML conversion
  let html = content
    // Headers
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
    // Unordered lists
    .replace(/^\- (.*$)/gim, '<li>$1</li>')
    // Ordered lists (basic)
    .replace(/^\d+\. (.*$)/gim, '<li>$1</li>')
    // Paragraphs
    .replace(/\n\n/g, '</p><p>')
    // Line breaks
    .replace(/\n/g, '<br/>');

  // Wrap list items in ul tags (simplified)
  html = html.replace(/(<li>[\s\S]*<\/li>)/g, '<ul>$1</ul>');

  return `<p>${html}</p>`;
}
