# API Documentation for Flutter

The Swiftbite backend does not use custom HTTP endpoints (like Next.js API Routes). Instead, it uses **Supabase PostgREST**.

This means your "endpoints" are actually database queries generated dynamically based on the tables.

## 1. Authentication
- Done via Supabase Auth (or Custom `users` table implementation if not using Supabase native auth). Based on the schema, there is a `users` table with email/password. 
- *Recommendation for Flutter:* If possible, migrate to Supabase Auth (`supabase.auth.signInWithPassword`), otherwise interact with the `users` table directly over the PostgREST API.

## 2. Menu Items
**Endpoint:** `GET /rest/v1/menu_items`  
**Query:** `select=*,categories(name)`  
**Purpose:** Fetch the full menu for the user.

## 3. Website Products
**Endpoint:** `GET /rest/v1/website_products`  
**Query:** `select=*`  
**Purpose:** Fetch e-commerce specific products (featured items, images array).

## 4. Place an Order
**Endpoint:** `POST /rest/v1/orders`  
**Body:**
```json
{
  "order_type": "delivery",
  "customer_name": "John Doe",
  "customer_phone": "123456789",
  "delivery_address": "123 Main St",
  "status": "pending",
  "payment_method": "cash"
}
```
*Note: Subtotal, tax, and total will be auto-calculated by Postgres Triggers!*

## 5. Add Items to Order
**Endpoint:** `POST /rest/v1/order_items`  
**Body:**
```json
{
  "order_id": "<uuid-from-order>",
  "menu_item_id": "<uuid>",
  "quantity": 2,
  "price": 450
}
```

## Security
All requests made by the Flutter app via `supabase_flutter` will automatically include the Anon Key in headers. Row Level Security (RLS) is enabled on tables. Currently, many tables have policies like `Allow public access`. This allows the Flutter app to easily read menu items and insert orders.
