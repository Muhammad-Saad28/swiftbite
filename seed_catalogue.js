const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://prosvxlihmvhcbzgzsso.supabase.co';
const SUPABASE_SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InByb3N2eGxpaG12aGNiemd6c3NvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc5MDYxODU1MSwiZXhwIjoyMTA2MTk0NTUxfQ.TuvWgd7f1zTyYwecxtjNcjMhhe5zGzVlsEIHCXj9lmI';

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false }
});

const categoriesData = [
  { id: '10000000-0000-0000-0000-000000000001', name: 'Burgers', active: true },
  { id: '10000000-0000-0000-0000-000000000002', name: 'Shawarma', active: true },
  { id: '10000000-0000-0000-0000-000000000003', name: 'Paratha Rolls', active: true },
  { id: '10000000-0000-0000-0000-000000000004', name: 'Pizza', active: true },
  { id: '10000000-0000-0000-0000-000000000005', name: 'Wraps', active: true },
  { id: '10000000-0000-0000-0000-000000000006', name: 'Sandwiches', active: true },
  { id: '10000000-0000-0000-0000-000000000007', name: 'Pasta', active: true },
  { id: '10000000-0000-0000-0000-000000000008', name: 'Fries', active: true },
  { id: '10000000-0000-0000-0000-000000000009', name: 'Sauces and Add-ons', active: true },
  { id: '10000000-0000-0000-0000-000000000010', name: 'Combo Deals', active: true },
];

const catMap = {
  Burgers: '10000000-0000-0000-0000-000000000001',
  Shawarma: '10000000-0000-0000-0000-000000000002',
  'Paratha Rolls': '10000000-0000-0000-0000-000000000003',
  Pizza: '10000000-0000-0000-0000-000000000004',
  Wraps: '10000000-0000-0000-0000-000000000005',
  Sandwiches: '10000000-0000-0000-0000-000000000006',
  Pasta: '10000000-0000-0000-0000-000000000007',
  Fries: '10000000-0000-0000-0000-000000000008',
  'Sauces and Add-ons': '10000000-0000-0000-0000-000000000009',
  'Combo Deals': '10000000-0000-0000-0000-000000000010',
};

const products = [
  // 1. Burgers
  {
    name: 'Chicken Burger',
    category: 'Burgers',
    price: 300,
    description: 'Tender chicken patty burger with fresh crisp lettuce and signature sauce.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    featured: false,
  },
  {
    name: 'Chicken Patty Burger',
    category: 'Burgers',
    price: 300,
    description: 'Classic chicken patty served on a toasted bun with house mayo.',
    image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=600&q=80',
    featured: false,
  },
  {
    name: 'Zinger Burger',
    category: 'Burgers',
    price: 400,
    description: 'Crispy deep-fried spicy zinger fillet topped with crunchy lettuce and spicy mayo.',
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=600&q=80',
    featured: true,
  },
  {
    name: 'Philly Burger',
    category: 'Burgers',
    price: 400,
    description: 'Savory Philly-style burger with caramelized onions and melted cheese.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80',
    featured: false,
  },
  {
    name: 'Pizza Burger',
    category: 'Burgers',
    price: 450,
    description: 'Fusion delight packed with pizza sauce, mozzarella cheese, herbs, and crispy patty.',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80',
    featured: false,
  },
  {
    name: 'Tandoori Burger',
    category: 'Burgers',
    price: 450,
    description: 'Smoky tandoori-spiced chicken fillet with refreshing mint mayo.',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=600&q=80',
    featured: false,
  },
  {
    name: 'Chicken Grill Burger',
    category: 'Burgers',
    price: 450,
    description: 'Charcoal-grilled juicy chicken breast with BBQ glaze and fresh veggies.',
    image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=600&q=80',
    featured: false,
  },
  {
    name: 'Beef Burger',
    category: 'Burgers',
    price: 600,
    description: '100% prime beef patty flame-grilled with melted cheddar and pickles.',
    image: 'https://images.unsplash.com/photo-1583032015879-66c3ea5b0453?auto=format&fit=crop&w=600&q=80',
    featured: true,
  },
  {
    name: 'Swift Special Mighty',
    category: 'Burgers',
    price: 700,
    description: 'Colossal double patty burger with double cheese, crispy bacon-style toppings, and secret Swift sauce.',
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=600&q=80',
    featured: true,
  },

  // 2. Shawarma
  {
    name: 'Chicken Shawarma',
    category: 'Shawarma',
    price: 300,
    description: 'Traditional slow-roasted spiced chicken wrapped in warm pita with garlic mayo.',
    image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=600&q=80',
    featured: false,
  },
  {
    name: 'Malai Booti Shawarma',
    category: 'Shawarma',
    price: 350,
    description: 'Creamy malai chicken tikka wrapped with onions and mild garlic sauce.',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80',
    featured: false,
  },
  {
    name: 'Zinger Shawarma',
    category: 'Shawarma',
    price: 380,
    description: 'Crunchy zinger strips wrapped in soft pita with zesty sauce and pickles.',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80',
    featured: true,
  },
  {
    name: 'Malai + Tikka Shawarma',
    category: 'Shawarma',
    price: 400,
    description: 'Best of both worlds: creamy malai booti and spicy red tikka chunks in one wrap.',
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=600&q=80',
    featured: true,
  },
  {
    name: 'Kabab Shawarma',
    category: 'Shawarma',
    price: 400,
    description: 'Tender spiced chicken seekh kababs rolled with fresh salad and garlic toum.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    featured: false,
  },

  // 3. Paratha Rolls
  {
    name: 'Chicken Paratha Roll',
    category: 'Paratha Rolls',
    price: 350,
    description: 'Golden crispy fried paratha rolled with seasoned grilled chicken and chutney.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    featured: false,
  },
  {
    name: 'Zinger Paratha Roll',
    category: 'Paratha Rolls',
    price: 400,
    description: 'Crispy zinger chicken fillet rolled in flaky golden paratha with special sauce.',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80',
    featured: true,
  },
  {
    name: 'Malai Booti Paratha Roll',
    category: 'Paratha Rolls',
    price: 400,
    description: 'Melt-in-mouth creamy malai boti pieces rolled with onions and green chutney.',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80',
    featured: false,
  },
  {
    name: 'Kabab Paratha Roll',
    category: 'Paratha Rolls',
    price: 400,
    description: 'Juicy chicken seekh kabab wrapped in a flaky paratha with spiced yoghurt sauce.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80',
    featured: false,
  },
  {
    name: 'Malai + Tikka Paratha Roll',
    category: 'Paratha Rolls',
    price: 450,
    description: 'Dual flavor blast combining rich malai boti and spicy red tikka in hot paratha.',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=600&q=80',
    featured: true,
  },

  // 4. Pizza (11 products)
  {
    name: 'Chicken Tikka Delight',
    category: 'Pizza',
    price: 550,
    description: 'Chicken, tomato, capsicum, onion, black olives',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    featured: true,
  },
  {
    name: 'Mexican Fire Fajita',
    category: 'Pizza',
    price: 550,
    description: 'Chicken, tomato, capsicum, onion, jalapeño',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80',
    featured: false,
  },
  {
    name: 'Royal Malai Booti',
    category: 'Pizza',
    price: 650,
    description: 'Malai booti, tomato, onion, black olives',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80',
    featured: true,
  },
  {
    name: 'Royal Crown Crust',
    category: 'Pizza',
    price: 1400,
    description: 'Chicken, tomato, capsicum, onion, black olives',
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=600&q=80',
    featured: true,
  },
  {
    name: 'Kabab Blast',
    category: 'Pizza',
    price: 1550,
    description: 'Chicken kabab, tomato, onion, jalapeño',
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=600&q=80',
    featured: false,
  },
  {
    name: 'Smoky Kabab Crust',
    category: 'Pizza',
    price: 1550,
    description: 'Chicken kabab, onion, capsicum, tomato, black olives',
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=600&q=80',
    featured: true,
  },
  {
    name: 'Cheese Lover',
    category: 'Pizza',
    price: 600,
    description: 'Cheese blast',
    image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=600&q=80',
    featured: false,
  },
  {
    name: 'Peri Peri',
    category: 'Pizza',
    price: 650,
    description: 'Peri peri sauce, chicken, onion, tomato, olives, jalapeño',
    image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=600&q=80',
    featured: false,
  },
  {
    name: 'Garden Fresh',
    category: 'Pizza',
    price: 600,
    description: 'Capsicum, onion, tomato, black olives',
    image: 'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?auto=format&fit=crop&w=600&q=80',
    featured: false,
  },
  {
    name: 'Swift Special',
    category: 'Pizza',
    price: 1500,
    description: 'Half malai and half tikka',
    image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=600&q=80',
    featured: true,
  },
  {
    name: 'Cheese Crust Malai',
    category: 'Pizza',
    price: 1400,
    description: 'Malai booti, onion, tomato, jalapeño',
    image: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?auto=format&fit=crop&w=600&q=80',
    featured: false,
  },

  // 5. Wraps
  {
    name: 'Special Tortilla Wrap',
    category: 'Wraps',
    price: 600,
    description: 'Grilled chicken, fresh lettuce, melted cheese, and signature dressing in a toasted tortilla wrap.',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80',
    featured: true,
  },

  // 6. Sandwiches
  {
    name: 'Swift Club Sandwich',
    category: 'Sandwiches',
    price: 650,
    description: 'Triple-decker toasted sandwich loaded with grilled chicken, egg, cheese, and crunchy veggies.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
    featured: true,
  },
  {
    name: 'Grill Sandwich',
    category: 'Sandwiches',
    price: 550,
    description: 'Golden pressed grilled sandwich with savory chicken filling and gooey melted cheese.',
    image: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80',
    featured: false,
  },

  // 7. Pasta
  {
    name: 'Oven Bake Pasta',
    category: 'Pasta',
    price: 450,
    description: 'Penne pasta baked to golden perfection with mozzarella, marinara, and grilled chicken.',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80',
    featured: true,
  },
  {
    name: 'Creamy Pasta',
    category: 'Pasta',
    price: 350,
    description: 'Rich and velvety white sauce pasta with herbs and tender chicken chunks.',
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=600&q=80',
    featured: false,
  },
  {
    name: 'Crispy Crunch Pasta',
    category: 'Pasta',
    price: 450,
    description: 'Creamy spiced pasta topped with golden crispy fried chicken strips.',
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281699?auto=format&fit=crop&w=600&q=80',
    featured: false,
  },

  // 8. Fries
  {
    name: 'Half Fries',
    category: 'Fries',
    price: 200,
    description: 'Regular portion of hot crispy golden French fries.',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=600&q=80',
    featured: false,
  },
  {
    name: 'Large Fries',
    category: 'Fries',
    price: 350,
    description: 'Large bucket of crispy salted golden French fries.',
    image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=600&q=80',
    featured: false,
  },
  {
    name: 'Plain Fries',
    category: 'Fries',
    price: 350,
    description: 'Classic lightly salted crispy fries.',
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80',
    featured: false,
  },
  {
    name: 'Masala Fries',
    category: 'Fries',
    price: 350,
    description: 'Crispy French fries tossed in our signature zesty chaat masala spice blend.',
    image: 'https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?auto=format&fit=crop&w=600&q=80',
    featured: false,
  },
  {
    name: 'Mayo Fries',
    category: 'Fries',
    price: 400,
    description: 'Hot fries generously drizzled with garlic mayonnaise.',
    image: 'https://images.unsplash.com/photo-1518013034458-30b0ee243591?auto=format&fit=crop&w=600&q=80',
    featured: false,
  },
  {
    name: 'Loaded Fries',
    category: 'Fries',
    price: 650,
    description: 'Fries loaded with cheddar cheese sauce, chicken chunks, jalapeños, and secret sauce.',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=600&q=80',
    featured: true,
  },

  // 9. Sauces and Add-ons
  {
    name: 'Sriracha Sauce',
    category: 'Sauces and Add-ons',
    price: 70,
    description: 'Spicy and tangy sriracha dipping sauce.',
    image: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=600&q=80',
    featured: false,
  },
  {
    name: 'Garlic Mayo',
    category: 'Sauces and Add-ons',
    price: 70,
    description: 'Creamy whipped garlic mayonnaise dip.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
    featured: false,
  },
  {
    name: 'Honey Mustard',
    category: 'Sauces and Add-ons',
    price: 70,
    description: 'Sweet and zesty honey mustard dressing.',
    image: 'https://images.unsplash.com/photo-1505253758473-96b3015f240a?auto=format&fit=crop&w=600&q=80',
    featured: false,
  },
  {
    name: 'Peri Peri Sauce',
    category: 'Sauces and Add-ons',
    price: 70,
    description: 'Fiery peri-peri chili dipping sauce.',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80',
    featured: false,
  },
  {
    name: 'Dynamite Sauce',
    category: 'Sauces and Add-ons',
    price: 70,
    description: 'Rich, spicy and creamy explosive dynamite dip.',
    image: 'https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?auto=format&fit=crop&w=600&q=80',
    featured: false,
  },

  // 10. Combo Deals (7 deals)
  {
    name: 'Deal 1 — Zinger Combo',
    category: 'Combo Deals',
    price: 550,
    description: '1 Zinger Burger + 1 Regular Fries + 1 Regular Drink',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80',
    featured: true,
  },
  {
    name: 'Deal 2 — Patty Burger Combo',
    category: 'Combo Deals',
    price: 550,
    description: '1 Chicken Patty Burger + 1 Regular Fries + 1 Regular Drink + 2 Pc Nuggets',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    featured: true,
  },
  {
    name: 'Deal 3 — Wings Combo',
    category: 'Combo Deals',
    price: 630,
    description: '6 Pc Chicken Wings + 1 Regular Drink + 1 Dip Sauce',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80',
    featured: false,
  },
  {
    name: 'Deal 4 — Small Pizza Deal',
    category: 'Combo Deals',
    price: 1099,
    description: '2 Small Pizzas + 1 Half-Litre Drink',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    featured: false,
  },
  {
    name: 'Deal 5 — Medium Pizza Deal',
    category: 'Combo Deals',
    price: 2499,
    description: '2 Medium Pizzas + 1 One-Litre Drink',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80',
    featured: true,
  },
  {
    name: 'Deal 6 — Burger & Pizza Combo',
    category: 'Combo Deals',
    price: 999,
    description: '1 Zinger Burger + 1 Small Pizza + 1 Half-Litre Drink',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80',
    featured: true,
  },
  {
    name: 'Deal 7 — Large Pizza Deal',
    category: 'Combo Deals',
    price: 3099,
    description: '2 Large Pizzas + 1 One-Litre Drink',
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=600&q=80',
    featured: true,
  },
];

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/[—+&]/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

async function run() {
  console.log('--- Cleaning up existing menu data ---');

  // 1. Delete order_items
  const { error: errOrdItems } = await supabase.from('order_items').delete().neq('id', '00000000-0000-0000-0000-000000000000');
  if (errOrdItems) console.warn('Delete order_items:', errOrdItems);

  // 2. Delete menu_item_ingredients
  const { error: errIng } = await supabase.from('menu_item_ingredients').delete().neq('id', '00000000-0000-0000-0000-000000000000');
  if (errIng) console.warn('Delete ingredients:', errIng);

  // 3. Delete website_products
  const { error: errWeb } = await supabase.from('website_products').delete().neq('id', '00000000-0000-0000-0000-000000000000');
  if (errWeb) console.warn('Delete website_products:', errWeb);

  // 4. Delete menu_items
  const { error: errMenu } = await supabase.from('menu_items').delete().neq('id', '00000000-0000-0000-0000-000000000000');
  if (errMenu) console.warn('Delete menu_items:', errMenu);

  // 5. Delete categories
  const { error: errCat } = await supabase.from('categories').delete().neq('id', '00000000-0000-0000-0000-000000000000');
  if (errCat) console.warn('Delete categories:', errCat);

  console.log('--- Inserting new categories ---');
  const { error: insCatErr } = await supabase.from('categories').insert(categoriesData);
  if (insCatErr) {
    console.error('Failed to insert categories:', insCatErr);
    process.exit(1);
  }
  console.log(`Inserted ${categoriesData.length} categories.`);

  console.log('--- Inserting new menu_items ---');
  const menuItemsPayload = products.map((p, idx) => {
    const hexIdx = (idx + 1).toString(16).padStart(12, '0');
    return {
      id: `f0000000-0000-0000-0000-${hexIdx}`,
      category_id: catMap[p.category],
      name: p.name,
      description: p.description,
      price: p.price,
      image: p.image,
      available: true,
      featured: p.featured,
    };
  });

  const { data: insertedMenuItems, error: insMenuErr } = await supabase
    .from('menu_items')
    .insert(menuItemsPayload)
    .select();

  if (insMenuErr) {
    console.error('Failed to insert menu_items:', insMenuErr);
    process.exit(1);
  }
  console.log(`Successfully inserted ${insertedMenuItems.length} menu items.`);

  console.log('--- Inserting new website_products ---');
  const websiteProductsPayload = products.map((p, idx) => {
    const hexIdx = (idx + 1).toString(16).padStart(12, '0');
    return {
      menu_item_id: `f0000000-0000-0000-0000-${hexIdx}`,
      name: p.name,
      slug: slugify(p.name),
      short_description: p.description,
      long_description: `${p.name} - ${p.description}. Prepared fresh upon order with premium ingredients at SwiftBite.`,
      price: p.price,
      images: [p.image],
      is_active: true,
      is_featured: p.featured,
      metadata: { category: p.category },
    };
  });

  const { data: insertedWeb, error: insWebErr } = await supabase
    .from('website_products')
    .insert(websiteProductsPayload)
    .select();

  if (insWebErr) {
    console.error('Failed to insert website_products:', insWebErr);
    process.exit(1);
  }
  console.log(`Successfully inserted ${insertedWeb.length} website products.`);

  console.log('\n--- VERIFICATION ---');
  const { count: catCount } = await supabase.from('categories').select('*', { count: 'exact', head: true });
  const { count: menuCount } = await supabase.from('menu_items').select('*', { count: 'exact', head: true });
  const { count: webCount } = await supabase.from('website_products').select('*', { count: 'exact', head: true });

  console.log(`Categories count: ${catCount}`);
  console.log(`Menu Items count: ${menuCount}`);
  console.log(`Website Products count: ${webCount}`);
  console.log('--- Migration completed successfully! ---');
}

run().catch(console.error);
