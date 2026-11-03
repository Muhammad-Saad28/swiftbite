export interface PizzaSizeOption {
  id: 'small' | 'medium' | 'large';
  name: string;
  sizeDesc: string;
  serves: string;
  price: number;
}

/**
 * Pizza items that only come in 2 sizes (Medium 10" and Large 13") — no Small size.
 * Specified by customer:
 * - cheese crust malai
 * - kabab crust (and kabab blast)
 * - smokey kabab crust
 * - swift special
 * - royal crown crust
 */
const TWO_SIZE_PIZZA_KEYWORDS = [
  'cheese crust malai',
  'kabab crust',
  'kabab blast',
  'smoky kabab crust',
  'smokey kabab crust',
  'swift special',
  'royal crown crust',
  'crown crust'
];

export function isTwoSizePizza(itemName?: string): boolean {
  if (!itemName) return false;
  const lower = itemName.toLowerCase().trim();
  return TWO_SIZE_PIZZA_KEYWORDS.some(k => lower.includes(k));
}

/**
 * Standard Pakistani Fast-Food Pizza Pricing Tiers (PKR)
 * For 2-size specialty pizzas:
 *   Base price in DB represents the Medium (10") price.
 *   Large (13") is +PKR 450-550 (e.g. 1400 -> 1950, 1500 -> 2050, 1550 -> 2100).
 * For standard 3-size pizzas (Tikka, Fajita, Malai, Cheese Lover, Peri Peri, Garden Fresh):
 *   Small (7"), Medium (10"), Large (13").
 */
export function getPizzaSizes(basePrice: number, itemName?: string): PizzaSizeOption[] {
  const onlyTwoSizes = isTwoSizePizza(itemName);

  if (onlyTwoSizes) {
    const mediumPrice = basePrice;
    // Add large markup (+500-550 rounded to 50)
    const largePrice = basePrice + (basePrice >= 1500 ? 550 : 500);

    return [
      { id: 'medium', name: 'Medium', sizeDesc: '10 inch', serves: '2-3 Persons', price: mediumPrice },
      { id: 'large', name: 'Large', sizeDesc: '13 inch', serves: '4-5 Persons', price: largePrice },
    ];
  }

  // 3-size pizzas
  if (basePrice <= 650) {
    const smallPrice = basePrice;
    const mediumPrice = Math.round(basePrice * 1.95 / 50) * 50; // e.g. 550 -> 1100, 600 -> 1150, 650 -> 1250
    const largePrice = Math.round(basePrice * 2.85 / 50) * 50;  // e.g. 550 -> 1550, 600 -> 1700, 650 -> 1850
    return [
      { id: 'small', name: 'Small', sizeDesc: '7 inch', serves: '1 Person', price: smallPrice },
      { id: 'medium', name: 'Medium', sizeDesc: '10 inch', serves: '2-3 Persons', price: mediumPrice || 1150 },
      { id: 'large', name: 'Large', sizeDesc: '13 inch', serves: '4-5 Persons', price: largePrice || 1650 },
    ];
  }

  // Fallback for higher base-priced 3-size pizzas
  const mediumPrice = basePrice;
  const largePrice = basePrice >= 1500 ? basePrice + 450 : 1850;
  const smallPrice = Math.round((basePrice * 0.55) / 50) * 50;
  return [
    { id: 'small', name: 'Small', sizeDesc: '7 inch', serves: '1 Person', price: smallPrice || 750 },
    { id: 'medium', name: 'Medium', sizeDesc: '10 inch', serves: '2-3 Persons', price: mediumPrice },
    { id: 'large', name: 'Large', sizeDesc: '13 inch', serves: '4-5 Persons', price: largePrice },
  ];
}

export function isPizzaItem(categoryName?: string, itemName?: string): boolean {
  const cat = (categoryName || '').toLowerCase().trim();
  const name = (itemName || '').toLowerCase().trim();

  // If explicitly categorized as Pizza
  if (cat === 'pizza') return true;

  // Filter out deals or burgers that have "pizza" in the name (e.g. Pizza Burger, Deal 4 Small Pizza Deal)
  if (name.includes('burger') || name.includes('deal') || name.includes('combo')) {
    return false;
  }

  return name.includes('pizza') || name.includes('crust') || name.includes('fajita');
}
