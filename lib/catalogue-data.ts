import { supabase } from './supabase';

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  available?: boolean;
  featured?: boolean;
}

export const staticCategories = [
  "ALL",
  "Burgers",
  "Shawarma",
  "Paratha Rolls",
  "Pizza",
  "Wraps",
  "Sandwiches",
  "Pasta",
  "Fries",
  "Sauces and Add-ons",
  "Combo Deals"
];

export const staticMenuItems: MenuItem[] = [
  {
    "id": "f0000000-0000-0000-0000-000000000008",
    "name": "Beef Burger",
    "category": "Burgers",
    "price": 600,
    "description": "100% prime beef patty flame-grilled with melted cheddar and pickles.",
    "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
    "featured": true
  },
  {
    "id": "f0000000-0000-0000-0000-00000000001e",
    "name": "Cheese Crust Malai",
    "category": "Pizza",
    "price": 1400,
    "description": "Malai booti, onion, tomato, jalapeño",
    "image": "/pizza/Cheese Crust Malai.jpg",
    "featured": false
  },
  {
    "id": "f0000000-0000-0000-0000-00000000001a",
    "name": "Cheese Lover",
    "category": "Pizza",
    "price": 600,
    "description": "Cheese blast",
    "image": "/pizza/Cheese Lover.jpg",
    "featured": false
  },
  {
    "id": "f0000000-0000-0000-0000-000000000001",
    "name": "Chicken Burger",
    "category": "Burgers",
    "price": 300,
    "description": "Tender chicken patty burger with fresh crisp lettuce and signature sauce.",
    "image": "/burgers/chickenburger.jpg",
    "featured": false
  },
  {
    "id": "f0000000-0000-0000-0000-000000000007",
    "name": "Chicken Grill Burger",
    "category": "Burgers",
    "price": 450,
    "description": "Charcoal-grilled juicy chicken breast with BBQ glaze and fresh veggies.",
    "image": "/burgers/chickengrillburger.jpg",
    "featured": false
  },
  {
    "id": "f0000000-0000-0000-0000-00000000000f",
    "name": "Chicken Paratha Roll",
    "category": "Paratha Rolls",
    "price": 350,
    "description": "Golden crispy fried paratha rolled with seasoned grilled chicken and chutney.",
    "image": "/paratharoll/Chicken Paratha Roll.jpg",
    "featured": false
  },
  {
    "id": "f0000000-0000-0000-0000-000000000002",
    "name": "Chicken Patty Burger",
    "category": "Burgers",
    "price": 300,
    "description": "Classic chicken patty served on a toasted bun with house mayo.",
    "image": "/burgers/chickenpattyburger.jpeg",
    "featured": false
  },
  {
    "id": "f0000000-0000-0000-0000-00000000000a",
    "name": "Chicken Shawarma",
    "category": "Shawarma",
    "price": 300,
    "description": "Traditional slow-roasted spiced chicken wrapped in warm pita with garlic mayo.",
    "image": "/shawarma/Chicken-Shawarma.jpg",
    "featured": false
  },
  {
    "id": "f0000000-0000-0000-0000-000000000014",
    "name": "Chicken Tikka Delight",
    "category": "Pizza",
    "price": 550,
    "description": "Chicken, tomato, capsicum, onion, black olives",
    "image": "/pizza/Chicken Tikka Delight.jpg",
    "featured": true
  },
  {
    "id": "f0000000-0000-0000-0000-000000000023",
    "name": "Creamy Pasta",
    "category": "Pasta",
    "price": 350,
    "description": "Rich and velvety white sauce pasta with herbs and tender chicken chunks.",
    "image": "/pasta/Creamy Pasta.jpg",
    "featured": false
  },
  {
    "id": "f0000000-0000-0000-0000-000000000024",
    "name": "Crispy Crunch Pasta",
    "category": "Pasta",
    "price": 450,
    "description": "Creamy spiced pasta topped with golden crispy fried chicken strips.",
    "image": "/pasta/Crispy Crunch Pasta.webp",
    "featured": false
  },
  {
    "id": "f0000000-0000-0000-0000-000000000030",
    "name": "Deal 1 — Zinger Combo",
    "category": "Combo Deals",
    "price": 550,
    "description": "1 Zinger Burger + 1 Regular Fries + 1 Regular Drink",
    "image": "/combo deals/deal1.jpg",
    "featured": true
  },
  {
    "id": "f0000000-0000-0000-0000-000000000031",
    "name": "Deal 2 — Patty Burger Combo",
    "category": "Combo Deals",
    "price": 550,
    "description": "1 Chicken Patty Burger + 1 Regular Fries + 1 Regular Drink + 2 Pc Nuggets",
    "image": "/combo deals/deal2.jpg",
    "featured": true
  },
  {
    "id": "f0000000-0000-0000-0000-000000000032",
    "name": "Deal 3 — Wings Combo",
    "category": "Combo Deals",
    "price": 630,
    "description": "6 Pc Chicken Wings + 1 Regular Drink + 1 Dip Sauce",
    "image": "/combo deals/deal3.png",
    "featured": false
  },
  {
    "id": "f0000000-0000-0000-0000-000000000033",
    "name": "Deal 4 — Small Pizza Deal",
    "category": "Combo Deals",
    "price": 1099,
    "description": "2 Small Pizzas + 1 Half-Litre Drink",
    "image": "/combo deals/deal4.png",
    "featured": false
  },
  {
    "id": "f0000000-0000-0000-0000-000000000034",
    "name": "Deal 5 — Medium Pizza Deal",
    "category": "Combo Deals",
    "price": 2499,
    "description": "2 Medium Pizzas + 1 One-Litre Drink",
    "image": "/combo deals/deal5.png",
    "featured": true
  },
  {
    "id": "f0000000-0000-0000-0000-000000000035",
    "name": "Deal 6 — Burger & Pizza Combo",
    "category": "Combo Deals",
    "price": 999,
    "description": "1 Zinger Burger + 1 Small Pizza + 1 Half-Litre Drink",
    "image": "/combo deals/deal6.png",
    "featured": true
  },
  {
    "id": "f0000000-0000-0000-0000-000000000036",
    "name": "Deal 7 — Large Pizza Deal",
    "category": "Combo Deals",
    "price": 3099,
    "description": "2 Large Pizzas + 1 One-Litre Drink",
    "image": "/combo deals/deal7.png",
    "featured": true
  },
  {
    "id": "f0000000-0000-0000-0000-00000000002f",
    "name": "Dynamite Sauce",
    "category": "Sauces and Add-ons",
    "price": 70,
    "description": "Rich, spicy and creamy explosive dynamite dip.",
    "image": "/sauce and adds on/Dynamite Sauce.jpg",
    "featured": false
  },
  {
    "id": "f0000000-0000-0000-0000-00000000001c",
    "name": "Garden Fresh",
    "category": "Pizza",
    "price": 600,
    "description": "Capsicum, onion, tomato, black olives",
    "image": "/pizza/Garden Fresh.jpg",
    "featured": false
  },
  {
    "id": "f0000000-0000-0000-0000-00000000002c",
    "name": "Garlic Mayo",
    "category": "Sauces and Add-ons",
    "price": 70,
    "description": "Creamy whipped garlic mayonnaise dip.",
    "image": "/sauce and adds on/Garlic Mayo.jpg",
    "featured": false
  },
  {
    "id": "f0000000-0000-0000-0000-000000000021",
    "name": "Grill Sandwich",
    "category": "Sandwiches",
    "price": 550,
    "description": "Golden pressed grilled sandwich with savory chicken filling and gooey melted cheese.",
    "image": "/sandwich/grill Sandwich.jpg",
    "featured": false
  },
  {
    "id": "f0000000-0000-0000-0000-000000000025",
    "name": "Half Fries",
    "category": "Fries",
    "price": 200,
    "description": "Regular portion of hot crispy golden French fries.",
    "image": "/fries/Half Fries.webp",
    "featured": false
  },
  {
    "id": "f0000000-0000-0000-0000-00000000002d",
    "name": "Honey Mustard",
    "category": "Sauces and Add-ons",
    "price": 70,
    "description": "Sweet and zesty honey mustard dressing.",
    "image": "/sauce and adds on/Honey Mustard.jpg",
    "featured": false
  },
  {
    "id": "f0000000-0000-0000-0000-000000000018",
    "name": "Kabab Blast",
    "category": "Pizza",
    "price": 1550,
    "description": "Chicken kabab, tomato, onion, jalapeño",
    "image": "/pizza/Kabab Blast.jpg",
    "featured": false
  },
  {
    "id": "f0000000-0000-0000-0000-000000000012",
    "name": "Kabab Paratha Roll",
    "category": "Paratha Rolls",
    "price": 400,
    "description": "Juicy chicken seekh kabab wrapped in a flaky paratha with spiced yoghurt sauce.",
    "image": "/paratharoll/Kabab Paratha Roll.jpg",
    "featured": false
  },
  {
    "id": "f0000000-0000-0000-0000-00000000000e",
    "name": "Kabab Shawarma",
    "category": "Shawarma",
    "price": 400,
    "description": "Tender spiced chicken seekh kababs rolled with fresh salad and garlic toum.",
    "image": "/shawarma/kababshawarma.jpg",
    "featured": false
  },
  {
    "id": "f0000000-0000-0000-0000-000000000026",
    "name": "Large Fries",
    "category": "Fries",
    "price": 350,
    "description": "Large bucket of crispy salted golden French fries.",
    "image": "/fries/large fries.jpg",
    "featured": false
  },
  {
    "id": "f0000000-0000-0000-0000-00000000002a",
    "name": "Loaded Fries",
    "category": "Fries",
    "price": 650,
    "description": "Fries loaded with cheddar cheese sauce, chicken chunks, jalapeños, and secret sauce.",
    "image": "/fries/loaded fries.jpg",
    "featured": true
  },
  {
    "id": "f0000000-0000-0000-0000-000000000013",
    "name": "Malai + Tikka Paratha Roll",
    "category": "Paratha Rolls",
    "price": 450,
    "description": "Dual flavor blast combining rich malai boti and spicy red tikka in hot paratha.",
    "image": "/paratharoll/Malai + Tikka Paratha Roll.jpg",
    "featured": true
  },
  {
    "id": "f0000000-0000-0000-0000-00000000000d",
    "name": "Malai + Tikka Shawarma",
    "category": "Shawarma",
    "price": 400,
    "description": "Best of both worlds: creamy malai booti and spicy red tikka chunks in one wrap.",
    "image": "/shawarma/Malai + Tikka Shawarma.jpg",
    "featured": true
  },
  {
    "id": "f0000000-0000-0000-0000-000000000011",
    "name": "Malai Booti Paratha Roll",
    "category": "Paratha Rolls",
    "price": 400,
    "description": "Melt-in-mouth creamy malai boti pieces rolled with onions and green chutney.",
    "image": "/paratharoll/Malai Booti Paratha Roll.jpg",
    "featured": false
  },
  {
    "id": "f0000000-0000-0000-0000-00000000000b",
    "name": "Malai Booti Shawarma",
    "category": "Shawarma",
    "price": 350,
    "description": "Creamy malai chicken tikka wrapped with onions and mild garlic sauce.",
    "image": "/shawarma/Malai Booti Shawarma.jpg",
    "featured": false
  },
  {
    "id": "f0000000-0000-0000-0000-000000000028",
    "name": "Masala Fries",
    "category": "Fries",
    "price": 350,
    "description": "Crispy French fries tossed in our signature zesty chaat masala spice blend.",
    "image": "/fries/Masala Fries.jpg",
    "featured": false
  },
  {
    "id": "f0000000-0000-0000-0000-000000000029",
    "name": "Mayo Fries",
    "category": "Fries",
    "price": 400,
    "description": "Hot fries generously drizzled with garlic mayonnaise.",
    "image": "/fries/mayo fries.jpg",
    "featured": false
  },
  {
    "id": "f0000000-0000-0000-0000-000000000015",
    "name": "Mexican Fire Fajita",
    "category": "Pizza",
    "price": 550,
    "description": "Chicken, tomato, capsicum, onion, jalapeño",
    "image": "/pizza/Mexican Fire Fajita.jpg",
    "featured": false
  },
  {
    "id": "f0000000-0000-0000-0000-000000000022",
    "name": "Oven Bake Pasta",
    "category": "Pasta",
    "price": 450,
    "description": "Penne pasta baked to golden perfection with mozzarella, marinara, and grilled chicken.",
    "image": "/pasta/Oven Bake Pasta.jpg",
    "featured": true
  },
  {
    "id": "f0000000-0000-0000-0000-00000000001b",
    "name": "Peri Peri",
    "category": "Pizza",
    "price": 650,
    "description": "Peri peri sauce, chicken, onion, tomato, olives, jalapeño",
    "image": "/pizza/peri peri.jpg",
    "featured": false
  },
  {
    "id": "f0000000-0000-0000-0000-00000000002e",
    "name": "Peri Peri Sauce",
    "category": "Sauces and Add-ons",
    "price": 70,
    "description": "Fiery peri-peri chili dipping sauce.",
    "image": "/sauce and adds on/Peri Peri Sauce.jpg",
    "featured": false
  },
  {
    "id": "f0000000-0000-0000-0000-000000000004",
    "name": "Philly Burger",
    "category": "Burgers",
    "price": 400,
    "description": "Savory Philly-style burger with caramelized onions and melted cheese.",
    "image": "/burgers/Philly Burger.jpg",
    "featured": false
  },
  {
    "id": "f0000000-0000-0000-0000-000000000005",
    "name": "Pizza Burger",
    "category": "Burgers",
    "price": 450,
    "description": "Fusion delight packed with pizza sauce, mozzarella cheese, herbs, and crispy patty.",
    "image": "/burgers/pizzaburger.jpg",
    "featured": false
  },
  {
    "id": "f0000000-0000-0000-0000-000000000027",
    "name": "Plain Fries",
    "category": "Fries",
    "price": 350,
    "description": "Classic lightly salted crispy fries.",
    "image": "/fries/plain fries.jpg",
    "featured": false
  },
  {
    "id": "f0000000-0000-0000-0000-000000000017",
    "name": "Royal Crown Crust",
    "category": "Pizza",
    "price": 1400,
    "description": "Chicken, tomato, capsicum, onion, black olives",
    "image": "/pizza/Royal Crown Crust.jpg",
    "featured": true
  },
  {
    "id": "f0000000-0000-0000-0000-000000000016",
    "name": "Royal Malai Booti",
    "category": "Pizza",
    "price": 650,
    "description": "Malai booti, tomato, onion, black olives",
    "image": "/pizza/Royal Malai Booti.jpg",
    "featured": true
  },
  {
    "id": "f0000000-0000-0000-0000-000000000019",
    "name": "Smoky Kabab Crust",
    "category": "Pizza",
    "price": 1550,
    "description": "Chicken kabab, onion, capsicum, tomato, black olives",
    "image": "/pizza/Smoky Kabab Crust.jpg",
    "featured": true
  },
  {
    "id": "f0000000-0000-0000-0000-00000000001f",
    "name": "Special Tortilla Wrap",
    "category": "Wraps",
    "price": 600,
    "description": "Grilled chicken, fresh lettuce, melted cheese, and signature dressing in a toasted tortilla wrap.",
    "image": "/wraps/Special Tortilla Wrap.jpg",
    "featured": true
  },
  {
    "id": "f0000000-0000-0000-0000-00000000002b",
    "name": "Sriracha Sauce",
    "category": "Sauces and Add-ons",
    "price": 70,
    "description": "Spicy and tangy sriracha dipping sauce.",
    "image": "/sauce and adds on/Sriracha Sauce.jpg",
    "featured": false
  },
  {
    "id": "f0000000-0000-0000-0000-000000000020",
    "name": "Swift Club Sandwich",
    "category": "Sandwiches",
    "price": 650,
    "description": "Triple-decker toasted sandwich loaded with grilled chicken, egg, cheese, and crunchy veggies.",
    "image": "/sandwich/Swift Club Sandwich.jpg",
    "featured": true
  },
  {
    "id": "f0000000-0000-0000-0000-00000000001d",
    "name": "Swift Special",
    "category": "Pizza",
    "price": 1500,
    "description": "Half malai and half tikka",
    "image": "/pizza/Swift Special.jpg",
    "featured": true
  },
  {
    "id": "f0000000-0000-0000-0000-000000000009",
    "name": "Swift Special Mighty",
    "category": "Burgers",
    "price": 700,
    "description": "Colossal double patty burger with double cheese, crispy bacon-style toppings, and secret Swift sauce.",
    "image": "/burgers/swiftmighty.jpg",
    "featured": true
  },
  {
    "id": "f0000000-0000-0000-0000-000000000006",
    "name": "Tandoori Burger",
    "category": "Burgers",
    "price": 450,
    "description": "Smoky tandoori-spiced chicken fillet with refreshing mint mayo.",
    "image": "/burgers/Tandoori Burger.png",
    "featured": false
  },
  {
    "id": "f0000000-0000-0000-0000-000000000003",
    "name": "Zinger Burger",
    "category": "Burgers",
    "price": 400,
    "description": "Crispy deep-fried spicy zinger fillet topped with crunchy lettuce and spicy mayo.",
    "image": "/burgers/zingerburger.jpg",
    "featured": true
  },
  {
    "id": "f0000000-0000-0000-0000-000000000010",
    "name": "Zinger Paratha Roll",
    "category": "Paratha Rolls",
    "price": 400,
    "description": "Crispy zinger chicken fillet rolled in flaky golden paratha with special sauce.",
    "image": "/paratharoll/Zinger Paratha Roll.jpg",
    "featured": true
  },
  {
    "id": "f0000000-0000-0000-0000-00000000000c",
    "name": "Zinger Shawarma",
    "category": "Shawarma",
    "price": 380,
    "description": "Crunchy zinger strips wrapped in soft pita with zesty sauce and pickles.",
    "image": "/shawarma/Zinger Shawarma.jpg",
    "featured": true
  }
];

export async function getMenuItems(): Promise<MenuItem[]> {
  try {
    const { data, error } = await supabase
      .from('menu_items')
      .select('*, categories(name)')
      .order('name');
    if (!error && data && data.length > 0) {
      return data.map((item: any) => ({
        id: item.id,
        name: item.name,
        category: item.categories?.name || 'General',
        price: item.price,
        description: item.description || '',
        image: item.image || 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80',
        available: item.available,
        featured: item.featured
      }));
    }
  } catch (err) {
    console.error('Error fetching live menu items:', err);
  }
  return staticMenuItems;
}

export async function getCategories(): Promise<string[]> {
  try {
    const { data, error } = await supabase
      .from('categories')
      .select('name')
      .eq('active', true)
      .order('name');
    if (!error && data && data.length > 0) {
      return ["ALL", ...data.map((c: any) => c.name)];
    }
  } catch (err) {
    console.error('Error fetching live categories:', err);
  }
  return staticCategories;
}
