-- Migration: Add Blog Tables
-- Run this in Supabase SQL Editor to add blog functionality
-- Safe to run multiple times (uses IF NOT EXISTS)

-- Blog posts table - for AI-generated blog content
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  category TEXT DEFAULT 'Industry Insights',
  tags TEXT[] DEFAULT '{}',
  author TEXT DEFAULT 'TAC Editorial Team',
  author_role TEXT DEFAULT 'Training & Compliance Experts',
  featured_image TEXT,
  meta_description TEXT,
  meta_keywords TEXT[],
  read_time INTEGER DEFAULT 5,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  published_at TIMESTAMPTZ,
  view_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Blog categories table
CREATE TABLE IF NOT EXISTS blog_categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT UNIQUE NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  post_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert default blog categories
INSERT INTO blog_categories (name, slug, description) VALUES
  ('Industry Insights', 'industry-insights', 'Latest trends and developments in training and compliance'),
  ('Compliance Updates', 'compliance-updates', 'Regulatory changes and compliance best practices'),
  ('Training Tips', 'training-tips', 'Practical advice for effective training programs'),
  ('Case Studies', 'case-studies', 'Real-world examples and success stories'),
  ('Technology', 'technology', 'Digital solutions for training and compliance')
ON CONFLICT (slug) DO NOTHING;

-- Indexes
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON blog_posts(status);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at);
CREATE INDEX IF NOT EXISTS idx_blog_categories_slug ON blog_categories(slug);

-- Enable RLS
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (for idempotency)
DROP POLICY IF EXISTS "Service role full access on blog_posts" ON blog_posts;
DROP POLICY IF EXISTS "Service role full access on blog_categories" ON blog_categories;
DROP POLICY IF EXISTS "Public read access on published blog_posts" ON blog_posts;
DROP POLICY IF EXISTS "Public read access on blog_categories" ON blog_categories;

-- Service role policies
CREATE POLICY "Service role full access on blog_posts" ON blog_posts
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Service role full access on blog_categories" ON blog_categories
  FOR ALL USING (auth.role() = 'service_role');

-- Public read access for published content
CREATE POLICY "Public read access on published blog_posts" ON blog_posts
  FOR SELECT USING (status = 'published');

CREATE POLICY "Public read access on blog_categories" ON blog_categories
  FOR SELECT USING (true);

-- Function to update blog post timestamp
CREATE OR REPLACE FUNCTION update_blog_post_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop trigger if exists and recreate
DROP TRIGGER IF EXISTS blog_post_update_timestamp ON blog_posts;
CREATE TRIGGER blog_post_update_timestamp
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_blog_post_timestamp();

-- Function to update category post count
CREATE OR REPLACE FUNCTION update_category_post_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' AND NEW.status = 'published' THEN
    UPDATE blog_categories SET post_count = post_count + 1 WHERE name = NEW.category;
  ELSIF TG_OP = 'DELETE' AND OLD.status = 'published' THEN
    UPDATE blog_categories SET post_count = post_count - 1 WHERE name = OLD.category;
  ELSIF TG_OP = 'UPDATE' THEN
    IF OLD.status != 'published' AND NEW.status = 'published' THEN
      UPDATE blog_categories SET post_count = post_count + 1 WHERE name = NEW.category;
    ELSIF OLD.status = 'published' AND NEW.status != 'published' THEN
      UPDATE blog_categories SET post_count = post_count - 1 WHERE name = OLD.category;
    ELSIF OLD.category != NEW.category AND NEW.status = 'published' THEN
      UPDATE blog_categories SET post_count = post_count - 1 WHERE name = OLD.category;
      UPDATE blog_categories SET post_count = post_count + 1 WHERE name = NEW.category;
    END IF;
  END IF;
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS blog_post_category_count ON blog_posts;
CREATE TRIGGER blog_post_category_count
  AFTER INSERT OR UPDATE OR DELETE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_category_post_count();

-- Insert a sample blog post
INSERT INTO blog_posts (slug, title, excerpt, content, category, tags, status, published_at, read_time) VALUES
(
  'welcome-to-tac-blog',
  'Welcome to Training Assurance Consultancy',
  'Discover how TAC helps organisations achieve compliance excellence through expert training and assurance services.',
  '## About Training Assurance Consultancy

Training Assurance Consultancy (TAC) is your trusted partner for comprehensive training and compliance solutions. We specialise in helping organisations navigate the complex landscape of industry regulations and standards.

### Our Services

- **Compliance Training** - Expert-led training programmes tailored to your industry
- **Audit Services** - Thorough assessments to ensure regulatory compliance
- **Consultancy** - Strategic guidance on best practices and continuous improvement
- **PICMS Platform** - Our innovative ISO compliance management system

### Why Choose TAC?

With decades of combined experience in training and compliance, our team brings unparalleled expertise to every engagement. We understand that each organisation is unique, which is why we offer customised solutions that address your specific challenges.

### Get Started Today

Ready to transform your approach to training and compliance? [Contact us](/about) to discuss how we can help your organisation achieve excellence.',
  'Industry Insights',
  ARRAY['compliance', 'training', 'TAC', 'welcome'],
  'published',
  NOW(),
  3
)
ON CONFLICT (slug) DO NOTHING;
