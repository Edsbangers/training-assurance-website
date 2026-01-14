-- Blog Agent Database Schema
-- Run this in your Supabase SQL Editor

-- Blog posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  author TEXT DEFAULT 'Lead Auditor',
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  keywords TEXT[],
  category TEXT,
  region TEXT,
  og_image_url TEXT,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Social captions for blog posts
CREATE TABLE IF NOT EXISTS blog_social_captions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  blog_post_id UUID REFERENCES blog_posts(id) ON DELETE CASCADE,
  platform TEXT NOT NULL CHECK (platform IN ('linkedin', 'facebook', 'instagram')),
  caption TEXT NOT NULL,
  hashtags TEXT[],
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'sent', 'published')),
  sent_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Blog agent config
CREATE TABLE IF NOT EXISTS blog_agent_config (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  system_prompt TEXT NOT NULL,
  tone TEXT DEFAULT 'strategic',
  keywords TEXT[],
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Social webhook config
CREATE TABLE IF NOT EXISTS social_webhook_config (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  platform TEXT NOT NULL,
  webhook_url TEXT NOT NULL,
  api_key TEXT,
  enabled BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Region config with translations
CREATE TABLE IF NOT EXISTS region_config (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  country_code TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  name_local TEXT,
  language TEXT NOT NULL,
  currency TEXT NOT NULL,
  currency_symbol TEXT,
  phone_prefix TEXT,
  enabled BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Translation strings (optional - for dynamic translations)
CREATE TABLE IF NOT EXISTS translations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  language TEXT NOT NULL,
  key TEXT NOT NULL,
  value TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(language, key)
);

-- Indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON blog_posts(status);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_social_captions_post ON blog_social_captions(blog_post_id);
CREATE INDEX IF NOT EXISTS idx_blog_social_captions_platform ON blog_social_captions(platform);

-- Insert default region configs
INSERT INTO region_config (country_code, name, name_local, language, currency, currency_symbol, phone_prefix, enabled)
VALUES
  ('uk', 'United Kingdom', 'United Kingdom', 'en', 'GBP', '£', '+44', true),
  ('ie', 'Ireland', 'Éire', 'en', 'EUR', '€', '+353', true),
  ('nl', 'Netherlands', 'Nederland', 'nl', 'EUR', '€', '+31', true),
  ('no', 'Norway', 'Norge', 'no', 'NOK', 'kr', '+47', true),
  ('it', 'Italy', 'Italia', 'it', 'EUR', '€', '+39', true)
ON CONFLICT (country_code) DO NOTHING;

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers for updated_at
DROP TRIGGER IF EXISTS update_blog_posts_updated_at ON blog_posts;
CREATE TRIGGER update_blog_posts_updated_at
    BEFORE UPDATE ON blog_posts
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_blog_agent_config_updated_at ON blog_agent_config;
CREATE TRIGGER update_blog_agent_config_updated_at
    BEFORE UPDATE ON blog_agent_config
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Enable RLS (Row Level Security)
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_social_captions ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_agent_config ENABLE ROW LEVEL SECURITY;
ALTER TABLE social_webhook_config ENABLE ROW LEVEL SECURITY;
ALTER TABLE region_config ENABLE ROW LEVEL SECURITY;
ALTER TABLE translations ENABLE ROW LEVEL SECURITY;

-- Policies for public read access to published posts
CREATE POLICY "Public can view published blog posts" ON blog_posts
  FOR SELECT USING (status = 'published');

-- Policies for authenticated admin access
CREATE POLICY "Admins can manage blog posts" ON blog_posts
  FOR ALL USING (true);

CREATE POLICY "Admins can manage social captions" ON blog_social_captions
  FOR ALL USING (true);

CREATE POLICY "Admins can manage blog agent config" ON blog_agent_config
  FOR ALL USING (true);

CREATE POLICY "Admins can manage webhook config" ON social_webhook_config
  FOR ALL USING (true);

CREATE POLICY "Public can view region config" ON region_config
  FOR SELECT USING (enabled = true);

CREATE POLICY "Public can view translations" ON translations
  FOR SELECT USING (true);
