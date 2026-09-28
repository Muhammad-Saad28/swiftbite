
-- --------------------------------------------
-- 9. WEBSITE PRODUCTS (Added for Web Frontend)
-- --------------------------------------------
CREATE TABLE IF NOT EXISTS website_products (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  menu_item_id UUID REFERENCES menu_items(id) ON DELETE SET NULL,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  short_description TEXT,
  long_description TEXT,
  price INTEGER NOT NULL CHECK (price >= 0),
  discount_price INTEGER CHECK (discount_price >= 0),
  images TEXT[], 
  is_active BOOLEAN DEFAULT TRUE,
  is_featured BOOLEAN DEFAULT FALSE,
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_website_products_slug ON website_products(slug);
CREATE INDEX IF NOT EXISTS idx_website_products_is_active ON website_products(is_active);

ALTER TABLE website_products ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read website_products" ON website_products FOR SELECT USING (true);
CREATE POLICY "Allow public write website_products" ON website_products FOR ALL USING (true) WITH CHECK (true);
