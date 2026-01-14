-- ============================================
-- TAC Social Integration Tables
-- Run this in Supabase SQL Editor
-- https://supabase.com/dashboard/project/ywsamggylnjznaffqgyd/sql/new
-- ============================================

-- Social captions for blog posts (LinkedIn, Facebook, Instagram, Twitter)
CREATE TABLE IF NOT EXISTS blog_social_captions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  blog_post_id UUID REFERENCES blog_posts(id) ON DELETE CASCADE,
  platform TEXT NOT NULL CHECK (platform IN ('linkedin', 'facebook', 'instagram', 'twitter')),
  caption TEXT NOT NULL,
  hashtags TEXT[],
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'sent', 'published', 'failed')),
  sent_at TIMESTAMPTZ,
  error_message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Blog agent configuration
CREATE TABLE IF NOT EXISTS blog_agent_config (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT DEFAULT 'default',
  system_prompt TEXT NOT NULL,
  tone TEXT DEFAULT 'professional',
  keywords TEXT[],
  target_audience TEXT,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Webhook configuration for Make.com, Zapier, etc.
CREATE TABLE IF NOT EXISTS social_webhook_config (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  platform TEXT NOT NULL, -- 'make', 'zapier', 'custom'
  webhook_url TEXT,
  api_key TEXT UNIQUE,
  target_platforms TEXT[] DEFAULT ARRAY['linkedin', 'facebook'], -- which social platforms to post to
  enabled BOOLEAN DEFAULT true,
  last_triggered TIMESTAMPTZ,
  trigger_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Social posting schedule
CREATE TABLE IF NOT EXISTS social_schedule (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  blog_post_id UUID REFERENCES blog_posts(id) ON DELETE CASCADE,
  platform TEXT NOT NULL,
  scheduled_for TIMESTAMPTZ NOT NULL,
  status TEXT DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'posted', 'failed', 'cancelled')),
  posted_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Region configuration
CREATE TABLE IF NOT EXISTS region_config (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  country_code TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  name_local TEXT,
  language TEXT NOT NULL,
  currency TEXT NOT NULL,
  currency_symbol TEXT,
  phone_prefix TEXT,
  timezone TEXT,
  enabled BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_blog_social_captions_post ON blog_social_captions(blog_post_id);
CREATE INDEX IF NOT EXISTS idx_blog_social_captions_platform ON blog_social_captions(platform);
CREATE INDEX IF NOT EXISTS idx_blog_social_captions_status ON blog_social_captions(status);
CREATE INDEX IF NOT EXISTS idx_social_webhook_config_api_key ON social_webhook_config(api_key);
CREATE INDEX IF NOT EXISTS idx_social_schedule_scheduled ON social_schedule(scheduled_for);
CREATE INDEX IF NOT EXISTS idx_social_schedule_status ON social_schedule(status);

-- Enable Row Level Security
ALTER TABLE blog_social_captions ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_agent_config ENABLE ROW LEVEL SECURITY;
ALTER TABLE social_webhook_config ENABLE ROW LEVEL SECURITY;
ALTER TABLE social_schedule ENABLE ROW LEVEL SECURITY;
ALTER TABLE region_config ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (for idempotency)
DROP POLICY IF EXISTS "Service role full access on blog_social_captions" ON blog_social_captions;
DROP POLICY IF EXISTS "Service role full access on blog_agent_config" ON blog_agent_config;
DROP POLICY IF EXISTS "Service role full access on social_webhook_config" ON social_webhook_config;
DROP POLICY IF EXISTS "Service role full access on social_schedule" ON social_schedule;
DROP POLICY IF EXISTS "Service role full access on region_config" ON region_config;
DROP POLICY IF EXISTS "Public read access on region_config" ON region_config;

-- Service role policies (for API routes)
CREATE POLICY "Service role full access on blog_social_captions" ON blog_social_captions
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Service role full access on blog_agent_config" ON blog_agent_config
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Service role full access on social_webhook_config" ON social_webhook_config
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Service role full access on social_schedule" ON social_schedule
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Service role full access on region_config" ON region_config
  FOR ALL USING (auth.role() = 'service_role');

-- Public can view enabled regions
CREATE POLICY "Public read access on region_config" ON region_config
  FOR SELECT USING (enabled = true);

-- Insert default regions
INSERT INTO region_config (country_code, name, name_local, language, currency, currency_symbol, phone_prefix, timezone, enabled)
VALUES
  ('uk', 'United Kingdom', 'United Kingdom', 'en', 'GBP', '£', '+44', 'Europe/London', true),
  ('ie', 'Ireland', 'Éire', 'en', 'EUR', '€', '+353', 'Europe/Dublin', true),
  ('nl', 'Netherlands', 'Nederland', 'nl', 'EUR', '€', '+31', 'Europe/Amsterdam', true),
  ('no', 'Norway', 'Norge', 'no', 'NOK', 'kr', '+47', 'Europe/Oslo', true),
  ('it', 'Italy', 'Italia', 'it', 'EUR', '€', '+39', 'Europe/Rome', true)
ON CONFLICT (country_code) DO NOTHING;

-- Insert default blog agent config
INSERT INTO blog_agent_config (name, system_prompt, tone, keywords, target_audience, active)
VALUES (
  'default',
  'You are a professional content writer for Training Assurance Consultancy (TAC), a UK-based training and compliance consultancy. Write engaging, informative content about training, compliance, auditing, and professional development.',
  'professional',
  ARRAY['training', 'compliance', 'audit', 'ISO', 'certification', 'professional development'],
  'Business professionals, compliance officers, HR managers, and training coordinators',
  true
)
ON CONFLICT DO NOTHING;

-- Generate a default Make.com webhook config with API key
INSERT INTO social_webhook_config (name, platform, api_key, target_platforms, enabled)
VALUES (
  'Make.com Integration',
  'make',
  'tac_' || encode(gen_random_bytes(24), 'hex'),
  ARRAY['linkedin', 'facebook'],
  true
)
ON CONFLICT DO NOTHING;

-- Show the generated API key
SELECT
  '✅ Make.com webhook configured!' as status,
  api_key as "API Key (save this!)",
  target_platforms as "Target Platforms"
FROM social_webhook_config
WHERE platform = 'make'
LIMIT 1;
