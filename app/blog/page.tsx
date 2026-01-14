import { Metadata } from 'next';
import Link from 'next/link';
import { supabaseAdmin } from '@/lib/supabase';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Strategic Insights | Training Assurance Consultancy',
  description: 'Expert insights on ISO compliance, AI governance, SHEQ management, and industry best practices from our Lead Auditor team.',
};

export const revalidate = 3600; // Revalidate every hour

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  published_at: string;
}

async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const { data, error } = await supabaseAdmin
      .from('blog_posts')
      .select('id, title, slug, excerpt, category, published_at')
      .eq('status', 'published')
      .order('published_at', { ascending: false });

    if (error) {
      console.error('Error fetching blog posts:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  const categories = [
    { name: 'All', slug: 'all' },
    { name: 'AI Governance', slug: 'ai-governance' },
    { name: 'ISO Standards', slug: 'iso-standards' },
    { name: 'SHEQ', slug: 'sheq' },
    { name: 'Industry Insights', slug: 'industry-insights' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-slate-800 border border-slate-700">
            <span className="text-cyan-400 text-sm font-medium">Lead Auditor Insights</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Strategic Insights
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Expert guidance on ISO compliance, AI governance, and SHEQ management from our team of
            Principal Auditors. Stay ahead of regulatory changes and industry best practices.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.slug}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category.slug === 'all'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800 border border-slate-700 text-slate-400 hover:border-cyan-500/50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all hover:-translate-y-1"
                >
                  {/* Header */}
                  <div className="aspect-[1200/630] bg-gradient-to-br from-slate-800 to-slate-700 relative">
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <h3 className="text-lg font-bold text-center text-white/80 line-clamp-3">
                        {post.title}
                      </h3>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-cyan-500/90 text-white text-xs font-medium rounded-full">
                        {post.category || 'Industry Insights'}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-lg font-bold mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>{formatDate(post.published_at)}</span>
                      <span className="text-cyan-400 font-medium group-hover:underline">
                        Read More &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800 border border-slate-700 mb-6">
                <svg className="w-8 h-8 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold mb-3">No Articles Yet</h2>
              <p className="text-slate-400 max-w-md mx-auto mb-8">
                Our Lead Auditors are preparing strategic insights on ISO compliance and AI governance.
                Check back soon for expert content.
              </p>
              <Link
                href="/#contact"
                className="inline-flex px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Request a Consultation
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Informed</h2>
          <p className="text-slate-400 mb-8">
            Get strategic insights on ISO compliance and AI governance delivered to your inbox.
          </p>
          <Link
            href="/#contact"
            className="inline-flex px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Subscribe to Updates
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
