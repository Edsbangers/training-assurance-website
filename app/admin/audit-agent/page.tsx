'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BLOG_CATEGORIES } from '@/lib/blogAgent';

interface GeneratedPost {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  category: string;
  keywords: string[];
}

interface SocialCaptions {
  linkedin?: { caption: string; hashtags: string[] };
  facebook?: { caption: string; hashtags: string[] };
  instagram?: { caption: string; hashtags: string[] };
}

export default function AuditAgentPage() {
  const [topic, setTopic] = useState('');
  const [category, setCategory] = useState('Industry Insights');
  const [keywords, setKeywords] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPost, setGeneratedPost] = useState<GeneratedPost | null>(null);
  const [socialCaptions, setSocialCaptions] = useState<SocialCaptions | null>(null);
  const [isGeneratingSocial, setIsGeneratingSocial] = useState(false);
  const [activeTab, setActiveTab] = useState<'editor' | 'preview' | 'social'>('editor');
  const [isSaving, setIsSaving] = useState(false);
  const [savedPostId, setSavedPostId] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!topic.trim()) return;

    setIsGenerating(true);
    setGeneratedPost(null);
    setSocialCaptions(null);

    try {
      const response = await fetch('/api/blog/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic,
          category,
          keywords: keywords.split(',').map((k) => k.trim()).filter(Boolean),
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setGeneratedPost(data);
        setActiveTab('preview');
      } else {
        alert('Failed to generate blog post. Please try again.');
      }
    } catch (error) {
      console.error('Generation error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleGenerateSocial = async () => {
    if (!generatedPost) return;

    setIsGeneratingSocial(true);

    try {
      const response = await fetch('/api/blog/social-preview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: generatedPost.title,
          content: generatedPost.content,
          excerpt: generatedPost.excerpt,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setSocialCaptions(data.captions);
        setActiveTab('social');
      }
    } catch (error) {
      console.error('Social generation error:', error);
    } finally {
      setIsGeneratingSocial(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  const handleSavePost = async () => {
    if (!generatedPost) return;

    setIsSaving(true);

    try {
      const response = await fetch('/api/admin/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: generatedPost.title,
          content: generatedPost.content,
          excerpt: generatedPost.excerpt,
          category: generatedPost.category,
          keywords: generatedPost.keywords,
          status: 'draft',
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setSavedPostId(data.post.id);

        // If we have social captions, save them too
        if (socialCaptions) {
          const captionPromises = [];

          if (socialCaptions.linkedin) {
            captionPromises.push(
              fetch('/api/admin/blog/captions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  blogPostId: data.post.id,
                  platform: 'linkedin',
                  caption: socialCaptions.linkedin.caption,
                  hashtags: socialCaptions.linkedin.hashtags,
                }),
              })
            );
          }

          if (socialCaptions.facebook) {
            captionPromises.push(
              fetch('/api/admin/blog/captions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  blogPostId: data.post.id,
                  platform: 'facebook',
                  caption: socialCaptions.facebook.caption,
                  hashtags: socialCaptions.facebook.hashtags,
                }),
              })
            );
          }

          if (socialCaptions.instagram) {
            captionPromises.push(
              fetch('/api/admin/blog/captions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  blogPostId: data.post.id,
                  platform: 'instagram',
                  caption: socialCaptions.instagram.caption,
                  hashtags: socialCaptions.instagram.hashtags,
                }),
              })
            );
          }

          await Promise.all(captionPromises);
        }

        alert('Blog post saved successfully! Go to Dashboard > Blog to publish it.');
      } else {
        const error = await response.json();
        alert(`Failed to save: ${error.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Save error:', error);
      alert('An error occurred while saving. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#001233] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#001845]/80 backdrop-blur-md border-b border-[#002366]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="TAC"
                width={160}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/admin/dashboard" className="text-[#B0C4DE] hover:text-white transition-colors">
                Dashboard
              </Link>
              <span className="px-3 py-1 bg-[#FF8C00]/20 text-[#FF8C00] rounded-full text-sm">
                Blog Agent
              </span>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Lead Auditor Blog Agent</h1>
            <p className="text-[#B0C4DE]">
              Generate strategic content with AI-powered assistance. Create blog posts and social media captions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Input Panel */}
            <div className="lg:col-span-1">
              <div className="bg-[#001845]/50 border border-[#002366] rounded-xl p-6 sticky top-24">
                <h2 className="text-lg font-semibold mb-4">Generate Content</h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#B0C4DE] mb-2">
                      Topic / Title *
                    </label>
                    <textarea
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      placeholder="e.g., How to prepare for ISO/IEC 42001 certification"
                      rows={3}
                      className="w-full bg-[#001233] border border-[#002366] rounded-lg px-4 py-3 text-white placeholder-[#6b8db4] focus:outline-none focus:border-[#FF8C00] resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#B0C4DE] mb-2">
                      Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full bg-[#001233] border border-[#002366] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF8C00]"
                    >
                      {BLOG_CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#B0C4DE] mb-2">
                      Keywords (comma-separated)
                    </label>
                    <input
                      type="text"
                      value={keywords}
                      onChange={(e) => setKeywords(e.target.value)}
                      placeholder="AI governance, certification, risk"
                      className="w-full bg-[#001233] border border-[#002366] rounded-lg px-4 py-3 text-white placeholder-[#6b8db4] focus:outline-none focus:border-[#FF8C00]"
                    />
                  </div>

                  <button
                    onClick={handleGenerate}
                    disabled={isGenerating || !topic.trim()}
                    className="w-full py-3 bg-gradient-to-r from-[#FF8C00] to-[#e67e00] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {isGenerating ? 'Generating...' : 'Generate Blog Post'}
                  </button>

                  {generatedPost && (
                    <>
                      <button
                        onClick={handleGenerateSocial}
                        disabled={isGeneratingSocial}
                        className="w-full py-3 border border-[#002366] text-white font-semibold rounded-lg hover:bg-[#001845] transition-colors disabled:opacity-50"
                      >
                        {isGeneratingSocial ? 'Generating...' : 'Generate Social Captions'}
                      </button>

                      <button
                        onClick={handleSavePost}
                        disabled={isSaving || !!savedPostId}
                        className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors disabled:opacity-50"
                      >
                        {savedPostId ? 'Saved!' : isSaving ? 'Saving...' : 'Save to Database'}
                      </button>

                      {savedPostId && (
                        <a
                          href="/admin/dashboard"
                          className="block w-full py-3 text-center border border-emerald-500 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-500/10 transition-colors"
                        >
                          Go to Dashboard →
                        </a>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Output Panel */}
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="flex border-b border-[#002366] mb-6">
                {['editor', 'preview', 'social'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as typeof activeTab)}
                    className={`px-6 py-3 text-sm font-medium transition-colors ${
                      activeTab === tab
                        ? 'text-[#FF8C00] border-b-2 border-[#FF8C00]'
                        : 'text-[#8ba3c7] hover:text-white'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Editor Tab */}
              {activeTab === 'editor' && (
                <div className="bg-[#001845]/50 border border-[#002366] rounded-xl p-6">
                  {generatedPost ? (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-[#B0C4DE] mb-2">
                          Title
                        </label>
                        <input
                          type="text"
                          value={generatedPost.title}
                          onChange={(e) =>
                            setGeneratedPost({ ...generatedPost, title: e.target.value })
                          }
                          className="w-full bg-[#001233] border border-[#002366] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF8C00]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#B0C4DE] mb-2">
                          Content (Markdown)
                        </label>
                        <textarea
                          value={generatedPost.content}
                          onChange={(e) =>
                            setGeneratedPost({ ...generatedPost, content: e.target.value })
                          }
                          rows={20}
                          className="w-full bg-[#001233] border border-[#002366] rounded-lg px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-[#FF8C00] resize-none"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-20 text-[#6b8db4]">
                      <p>Generate a blog post to see the editor</p>
                    </div>
                  )}
                </div>
              )}

              {/* Preview Tab */}
              {activeTab === 'preview' && (
                <div className="bg-[#001845]/50 border border-[#002366] rounded-xl p-6">
                  {generatedPost ? (
                    <div className="prose prose-invert max-w-none">
                      <div className="mb-6">
                        <span className="px-3 py-1 bg-[#FF8C00]/20 text-[#FF8C00] rounded-full text-sm">
                          {generatedPost.category}
                        </span>
                      </div>
                      <h1 className="text-3xl font-bold mb-4">{generatedPost.title}</h1>
                      <div
                        className="text-[#B0C4DE] whitespace-pre-wrap"
                        dangerouslySetInnerHTML={{
                          __html: generatedPost.content
                            .replace(/^# .+$/gm, '')
                            .replace(/^## (.+)$/gm, '<h2 class="text-xl font-semibold text-white mt-8 mb-4">$1</h2>')
                            .replace(/^### (.+)$/gm, '<h3 class="text-lg font-semibold text-white mt-6 mb-3">$1</h3>')
                            .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white">$1</strong>')
                            .replace(/^- (.+)$/gm, '<li class="ml-4">$1</li>')
                            .replace(/\n\n/g, '</p><p class="mb-4">')
                        }}
                      />
                    </div>
                  ) : (
                    <div className="text-center py-20 text-[#6b8db4]">
                      <p>Generate a blog post to see the preview</p>
                    </div>
                  )}
                </div>
              )}

              {/* Social Tab */}
              {activeTab === 'social' && (
                <div className="space-y-6">
                  {socialCaptions ? (
                    <>
                      {/* LinkedIn */}
                      {socialCaptions.linkedin && (
                        <div className="bg-[#001845]/50 border border-[#002366] rounded-xl p-6">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold flex items-center gap-2">
                              <span className="text-blue-400">in</span> LinkedIn
                            </h3>
                            <button
                              onClick={() => copyToClipboard(socialCaptions.linkedin!.caption)}
                              className="text-sm text-[#FF8C00] hover:underline"
                            >
                              Copy
                            </button>
                          </div>
                          <div className="bg-[#001233] rounded-lg p-4 text-[#B0C4DE] whitespace-pre-wrap text-sm">
                            {socialCaptions.linkedin.caption}
                          </div>
                        </div>
                      )}

                      {/* Facebook */}
                      {socialCaptions.facebook && (
                        <div className="bg-[#001845]/50 border border-[#002366] rounded-xl p-6">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold flex items-center gap-2">
                              <span className="text-blue-600">f</span> Facebook
                            </h3>
                            <button
                              onClick={() => copyToClipboard(socialCaptions.facebook!.caption)}
                              className="text-sm text-[#FF8C00] hover:underline"
                            >
                              Copy
                            </button>
                          </div>
                          <div className="bg-[#001233] rounded-lg p-4 text-[#B0C4DE] whitespace-pre-wrap text-sm">
                            {socialCaptions.facebook.caption}
                          </div>
                        </div>
                      )}

                      {/* Instagram */}
                      {socialCaptions.instagram && (
                        <div className="bg-[#001845]/50 border border-[#002366] rounded-xl p-6">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold flex items-center gap-2">
                              <span className="text-pink-500">IG</span> Instagram
                            </h3>
                            <button
                              onClick={() => copyToClipboard(socialCaptions.instagram!.caption)}
                              className="text-sm text-[#FF8C00] hover:underline"
                            >
                              Copy
                            </button>
                          </div>
                          <div className="bg-[#001233] rounded-lg p-4 text-[#B0C4DE] whitespace-pre-wrap text-sm">
                            {socialCaptions.instagram.caption}
                          </div>
                        </div>
                      )}

                      {/* OG Image Preview */}
                      {generatedPost && (
                        <div className="bg-[#001845]/50 border border-[#002366] rounded-xl p-6">
                          <h3 className="text-lg font-semibold mb-4">OpenGraph Image Preview</h3>
                          <div className="aspect-[1200/630] bg-[#001233] rounded-lg overflow-hidden">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={`/api/og?title=${encodeURIComponent(generatedPost.title)}&category=${encodeURIComponent(generatedPost.category)}`}
                              alt="OG Preview"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="bg-[#001845]/50 border border-[#002366] rounded-xl p-6">
                      <div className="text-center py-20 text-[#6b8db4]">
                        <p>Generate social captions to see the preview</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
