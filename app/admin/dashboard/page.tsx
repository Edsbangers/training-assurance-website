"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Lead {
  id: string;
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  status: string;
  created_at: string;
  notes: string | null;
}

interface Conversation {
  id: string;
  session_id: string;
  status: string;
  started_at: string;
  ended_at: string | null;
  leads: Lead[] | null;
  messages: { count: number }[];
}

interface Analytics {
  date: string;
  total_visitors: number;
  unique_visitors: number;
  page_views: number;
  chat_sessions: number;
  leads_captured: number;
}

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

interface SocialCaption {
  id: string;
  platform: string;
  caption: string;
  hashtags: string[];
  status: string;
  sent_at: string | null;
}

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  status: string;
  category: string | null;
  published_at: string | null;
  created_at: string;
  blog_social_captions: SocialCaption[];
}

type Tab = "overview" | "leads" | "conversations" | "analytics" | "blog";

export default function AdminDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [analytics, setAnalytics] = useState<Analytics[]>([]);
  const [totals, setTotals] = useState({
    totalVisitors: 0,
    uniqueVisitors: 0,
    pageViews: 0,
    chatSessions: 0,
    leadsCaptured: 0,
  });
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [conversationMessages, setConversationMessages] = useState<{ role: string; content: string; created_at: string }[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [pushingToSocials, setPushingToSocials] = useState<string | null>(null);
  const [publishingPost, setPublishingPost] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user, activeTab]);

  const checkAuth = async () => {
    try {
      const res = await fetch("/api/admin/auth");
      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
      } else {
        router.push("/admin");
      }
    } catch {
      router.push("/admin");
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async () => {
    if (activeTab === "overview" || activeTab === "analytics") {
      const res = await fetch("/api/analytics/track");
      if (res.ok) {
        const data = await res.json();
        setAnalytics(data.analytics || []);
        setTotals(data.totals || totals);
      }
    }

    if (activeTab === "overview" || activeTab === "leads") {
      const res = await fetch("/api/admin/leads");
      if (res.ok) {
        const data = await res.json();
        setLeads(data.leads || []);
      }
    }

    if (activeTab === "overview" || activeTab === "conversations") {
      const res = await fetch("/api/admin/conversations");
      if (res.ok) {
        const data = await res.json();
        setConversations(data.conversations || []);
      }
    }

    if (activeTab === "blog") {
      const res = await fetch("/api/admin/blog");
      if (res.ok) {
        const data = await res.json();
        setBlogPosts(data.posts || []);
      }
    }
  };

  const publishPost = async (postId: string) => {
    setPublishingPost(postId);
    try {
      const res = await fetch(`/api/admin/blog/${postId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "published" }),
      });

      if (res.ok) {
        setBlogPosts(blogPosts.map((p) =>
          p.id === postId ? { ...p, status: "published", published_at: new Date().toISOString() } : p
        ));
      }
    } finally {
      setPublishingPost(null);
    }
  };

  const unpublishPost = async (postId: string) => {
    setPublishingPost(postId);
    try {
      const res = await fetch(`/api/admin/blog/${postId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "draft" }),
      });

      if (res.ok) {
        setBlogPosts(blogPosts.map((p) =>
          p.id === postId ? { ...p, status: "draft" } : p
        ));
      }
    } finally {
      setPublishingPost(null);
    }
  };

  const pushToSocials = async (postId: string) => {
    setPushingToSocials(postId);
    try {
      const res = await fetch(`/api/admin/blog/${postId}/push-social`, {
        method: "POST",
      });

      const data = await res.json();

      if (res.ok) {
        alert("Successfully pushed to socials!");
        // Refresh blog posts to update caption statuses
        const refreshRes = await fetch("/api/admin/blog");
        if (refreshRes.ok) {
          const refreshData = await refreshRes.json();
          setBlogPosts(refreshData.posts || []);
        }
      } else {
        alert(`Failed to push to socials: ${data.error || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Push to socials error:", error);
      alert("Failed to push to socials. Please try again.");
    } finally {
      setPushingToSocials(null);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin");
  };

  const updateLeadStatus = async (leadId: string, status: string) => {
    const res = await fetch(`/api/admin/leads/${leadId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });

    if (res.ok) {
      setLeads(leads.map((l) => (l.id === leadId ? { ...l, status } : l)));
    }
  };

  const viewConversation = async (id: string) => {
    setSelectedConversation(id);
    const res = await fetch(`/api/admin/conversations/${id}`);
    if (res.ok) {
      const data = await res.json();
      setConversationMessages(data.messages || []);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-500/20 text-blue-400";
      case "contacted":
        return "bg-yellow-500/20 text-yellow-400";
      case "qualified":
        return "bg-purple-500/20 text-purple-400";
      case "converted":
        return "bg-emerald-500/20 text-emerald-400";
      case "lost":
        return "bg-red-500/20 text-red-400";
      default:
        return "bg-slate-500/20 text-slate-400";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="bg-slate-900/80 border-b border-slate-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Image src="/logo.png" alt="TAC" width={120} height={30} className="h-8 w-auto" />
              <span className="text-slate-500 text-sm">Admin Dashboard</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-slate-400 text-sm">{user?.name}</span>
              <button
                onClick={handleLogout}
                className="text-slate-400 hover:text-white text-sm transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-slate-800 pb-4">
          {(["overview", "leads", "conversations", "analytics", "blog"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "bg-cyan-500/20 text-cyan-400"
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
                <div className="text-slate-400 text-xs mb-1">Total Visitors</div>
                <div className="text-2xl font-bold text-white">{totals.totalVisitors}</div>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
                <div className="text-slate-400 text-xs mb-1">Unique Visitors</div>
                <div className="text-2xl font-bold text-cyan-400">{totals.uniqueVisitors}</div>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
                <div className="text-slate-400 text-xs mb-1">Page Views</div>
                <div className="text-2xl font-bold text-white">{totals.pageViews}</div>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
                <div className="text-slate-400 text-xs mb-1">Chat Sessions</div>
                <div className="text-2xl font-bold text-purple-400">{totals.chatSessions}</div>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
                <div className="text-slate-400 text-xs mb-1">Leads Captured</div>
                <div className="text-2xl font-bold text-emerald-400">{totals.leadsCaptured}</div>
              </div>
            </div>

            {/* Recent Leads */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Recent Leads</h2>
              {leads.length === 0 ? (
                <p className="text-slate-500 text-sm">No leads yet</p>
              ) : (
                <div className="space-y-3">
                  {leads.slice(0, 5).map((lead) => (
                    <div key={lead.id} className="flex items-center justify-between py-2 border-b border-slate-800 last:border-0">
                      <div>
                        <div className="text-white font-medium">{lead.name}</div>
                        <div className="text-slate-400 text-sm">{lead.email}</div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(lead.status)}`}>
                        {lead.status}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Leads Tab */}
        {activeTab === "leads" && (
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-800/50">
                  <tr>
                    <th className="text-left text-xs font-medium text-slate-400 px-4 py-3">Name</th>
                    <th className="text-left text-xs font-medium text-slate-400 px-4 py-3">Email</th>
                    <th className="text-left text-xs font-medium text-slate-400 px-4 py-3">Company</th>
                    <th className="text-left text-xs font-medium text-slate-400 px-4 py-3">Status</th>
                    <th className="text-left text-xs font-medium text-slate-400 px-4 py-3">Date</th>
                    <th className="text-left text-xs font-medium text-slate-400 px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead) => (
                    <tr key={lead.id} className="border-t border-slate-800">
                      <td className="px-4 py-3 text-white">{lead.name}</td>
                      <td className="px-4 py-3 text-slate-300">{lead.email}</td>
                      <td className="px-4 py-3 text-slate-400">{lead.company || "-"}</td>
                      <td className="px-4 py-3">
                        <select
                          value={lead.status}
                          onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                          className={`px-2 py-1 rounded text-xs bg-slate-800 border border-slate-700 ${getStatusColor(lead.status)}`}
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="qualified">Qualified</option>
                          <option value="converted">Converted</option>
                          <option value="lost">Lost</option>
                        </select>
                      </td>
                      <td className="px-4 py-3 text-slate-400 text-sm">
                        {new Date(lead.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-3">
                        <a href={`mailto:${lead.email}`} className="text-cyan-400 hover:text-cyan-300 text-sm">
                          Email
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {leads.length === 0 && (
              <div className="p-8 text-center text-slate-500">No leads captured yet</div>
            )}
          </div>
        )}

        {/* Conversations Tab */}
        {activeTab === "conversations" && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
              <div className="p-4 border-b border-slate-800">
                <h2 className="text-white font-semibold">Conversations</h2>
              </div>
              <div className="divide-y divide-slate-800 max-h-[600px] overflow-y-auto">
                {conversations.map((conv) => (
                  <button
                    key={conv.id}
                    onClick={() => viewConversation(conv.id)}
                    className={`w-full p-4 text-left hover:bg-slate-800/50 transition-colors ${
                      selectedConversation === conv.id ? "bg-slate-800/50" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`px-2 py-0.5 rounded-full text-xs ${
                        conv.status === "converted" ? "bg-emerald-500/20 text-emerald-400" :
                        conv.status === "active" ? "bg-blue-500/20 text-blue-400" :
                        "bg-slate-500/20 text-slate-400"
                      }`}>
                        {conv.status}
                      </span>
                      <span className="text-slate-500 text-xs">
                        {conv.messages?.[0]?.count || 0} messages
                      </span>
                    </div>
                    <div className="text-slate-400 text-sm">
                      {new Date(conv.started_at).toLocaleString()}
                    </div>
                    {conv.leads?.[0] && (
                      <div className="text-cyan-400 text-sm mt-1">
                        {conv.leads[0].name} ({conv.leads[0].email})
                      </div>
                    )}
                  </button>
                ))}
                {conversations.length === 0 && (
                  <div className="p-8 text-center text-slate-500">No conversations yet</div>
                )}
              </div>
            </div>

            {/* Messages Panel */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
              <div className="p-4 border-b border-slate-800">
                <h2 className="text-white font-semibold">Messages</h2>
              </div>
              <div className="p-4 space-y-4 max-h-[600px] overflow-y-auto">
                {selectedConversation ? (
                  conversationMessages.length > 0 ? (
                    conversationMessages.map((msg, i) => (
                      <div
                        key={i}
                        className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-xl px-4 py-2 text-sm ${
                            msg.role === "user"
                              ? "bg-cyan-500/20 text-cyan-100"
                              : "bg-slate-800 text-slate-300"
                          }`}
                        >
                          <p>{msg.content}</p>
                          <p className="text-xs text-slate-500 mt-1">
                            {new Date(msg.created_at).toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-slate-500 text-center">No messages in this conversation</p>
                  )
                ) : (
                  <p className="text-slate-500 text-center">Select a conversation to view messages</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === "analytics" && (
          <div className="space-y-6">
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
              <div className="p-4 border-b border-slate-800">
                <h2 className="text-white font-semibold">Daily Analytics (Last 30 Days)</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-800/50">
                    <tr>
                      <th className="text-left text-xs font-medium text-slate-400 px-4 py-3">Date</th>
                      <th className="text-right text-xs font-medium text-slate-400 px-4 py-3">Visitors</th>
                      <th className="text-right text-xs font-medium text-slate-400 px-4 py-3">Unique</th>
                      <th className="text-right text-xs font-medium text-slate-400 px-4 py-3">Page Views</th>
                      <th className="text-right text-xs font-medium text-slate-400 px-4 py-3">Chats</th>
                      <th className="text-right text-xs font-medium text-slate-400 px-4 py-3">Leads</th>
                    </tr>
                  </thead>
                  <tbody>
                    {analytics.map((day) => (
                      <tr key={day.date} className="border-t border-slate-800">
                        <td className="px-4 py-3 text-white">{day.date}</td>
                        <td className="px-4 py-3 text-slate-300 text-right">{day.total_visitors}</td>
                        <td className="px-4 py-3 text-cyan-400 text-right">{day.unique_visitors}</td>
                        <td className="px-4 py-3 text-slate-300 text-right">{day.page_views}</td>
                        <td className="px-4 py-3 text-purple-400 text-right">{day.chat_sessions}</td>
                        <td className="px-4 py-3 text-emerald-400 text-right">{day.leads_captured}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {analytics.length === 0 && (
                <div className="p-8 text-center text-slate-500">No analytics data yet</div>
              )}
            </div>
          </div>
        )}

        {/* Blog Tab */}
        {activeTab === "blog" && (
          <div className="grid md:grid-cols-2 gap-6">
            {/* Blog Posts List */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
              <div className="p-4 border-b border-slate-800 flex items-center justify-between">
                <h2 className="text-white font-semibold">Blog Posts</h2>
                <span className="text-slate-400 text-sm">{blogPosts.length} posts</span>
              </div>
              <div className="divide-y divide-slate-800 max-h-[600px] overflow-y-auto">
                {blogPosts.map((post) => (
                  <button
                    key={post.id}
                    onClick={() => setSelectedPost(post)}
                    className={`w-full p-4 text-left hover:bg-slate-800/50 transition-colors ${
                      selectedPost?.id === post.id ? "bg-slate-800/50" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-0.5 rounded-full text-xs ${
                        post.status === "published" ? "bg-emerald-500/20 text-emerald-400" :
                        post.status === "draft" ? "bg-yellow-500/20 text-yellow-400" :
                        "bg-slate-500/20 text-slate-400"
                      }`}>
                        {post.status}
                      </span>
                      {post.blog_social_captions?.length > 0 && (
                        <span className="text-cyan-400 text-xs">
                          {post.blog_social_captions.length} captions
                        </span>
                      )}
                    </div>
                    <div className="text-white font-medium truncate">{post.title}</div>
                    <div className="text-slate-400 text-sm mt-1">
                      {new Date(post.created_at).toLocaleDateString()}
                    </div>
                  </button>
                ))}
                {blogPosts.length === 0 && (
                  <div className="p-8 text-center text-slate-500">No blog posts yet</div>
                )}
              </div>
            </div>

            {/* Post Details Panel */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
              <div className="p-4 border-b border-slate-800">
                <h2 className="text-white font-semibold">Post Details</h2>
              </div>
              <div className="p-4 max-h-[600px] overflow-y-auto">
                {selectedPost ? (
                  <div className="space-y-4">
                    {/* Post Info */}
                    <div>
                      <h3 className="text-lg font-semibold text-white">{selectedPost.title}</h3>
                      <p className="text-slate-400 text-sm mt-1">
                        Created: {new Date(selectedPost.created_at).toLocaleString()}
                      </p>
                      {selectedPost.published_at && (
                        <p className="text-emerald-400 text-sm">
                          Published: {new Date(selectedPost.published_at).toLocaleString()}
                        </p>
                      )}
                    </div>

                    {/* Excerpt */}
                    {selectedPost.excerpt && (
                      <div>
                        <h4 className="text-slate-400 text-xs uppercase mb-1">Excerpt</h4>
                        <p className="text-slate-300 text-sm">{selectedPost.excerpt}</p>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-4 border-t border-slate-800">
                      {selectedPost.status === "draft" ? (
                        <button
                          onClick={() => publishPost(selectedPost.id)}
                          disabled={publishingPost === selectedPost.id}
                          className="flex-1 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-500/50 text-white rounded-lg text-sm font-medium transition-colors"
                        >
                          {publishingPost === selectedPost.id ? "Publishing..." : "Publish to Website"}
                        </button>
                      ) : (
                        <button
                          onClick={() => unpublishPost(selectedPost.id)}
                          disabled={publishingPost === selectedPost.id}
                          className="flex-1 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 disabled:bg-yellow-500/50 text-white rounded-lg text-sm font-medium transition-colors"
                        >
                          {publishingPost === selectedPost.id ? "Updating..." : "Unpublish"}
                        </button>
                      )}
                      <button
                        onClick={() => pushToSocials(selectedPost.id)}
                        disabled={pushingToSocials === selectedPost.id}
                        className="flex-1 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 disabled:bg-cyan-500/50 text-white rounded-lg text-sm font-medium transition-colors"
                      >
                        {pushingToSocials === selectedPost.id ? "Pushing..." : "Push to Socials"}
                      </button>
                    </div>

                    {/* Social Captions */}
                    {selectedPost.blog_social_captions?.length > 0 && (
                      <div className="pt-4 border-t border-slate-800">
                        <h4 className="text-slate-400 text-xs uppercase mb-3">Social Captions</h4>
                        <div className="space-y-3">
                          {selectedPost.blog_social_captions.map((caption) => (
                            <div key={caption.id} className="bg-slate-800/50 rounded-lg p-3">
                              <div className="flex items-center justify-between mb-2">
                                <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                                  caption.platform === "linkedin" ? "bg-blue-500/20 text-blue-400" :
                                  caption.platform === "facebook" ? "bg-indigo-500/20 text-indigo-400" :
                                  caption.platform === "instagram" ? "bg-pink-500/20 text-pink-400" :
                                  "bg-slate-500/20 text-slate-400"
                                }`}>
                                  {caption.platform}
                                </span>
                                <span className={`text-xs ${
                                  caption.status === "sent" ? "text-emerald-400" :
                                  caption.status === "published" ? "text-cyan-400" :
                                  "text-slate-500"
                                }`}>
                                  {caption.status}
                                  {caption.sent_at && ` - ${new Date(caption.sent_at).toLocaleString()}`}
                                </span>
                              </div>
                              <p className="text-slate-300 text-sm">{caption.caption}</p>
                              {caption.hashtags?.length > 0 && (
                                <p className="text-cyan-400 text-xs mt-2">
                                  {caption.hashtags.map(h => `#${h}`).join(" ")}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* View on Website Link */}
                    {selectedPost.status === "published" && (
                      <div className="pt-4 border-t border-slate-800">
                        <a
                          href={`/blog/${selectedPost.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 text-sm"
                        >
                          View on website →
                        </a>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-slate-500 text-center">Select a post to view details</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
