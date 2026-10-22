# Database Schema Analysis

The Swiftbite project utilizes Supabase (PostgreSQL). The entire schema is defined in `supabase-schema.sql`.

## Core Tables for Flutter

### 1. `users`
- **Columns:** `id` (UUID), `name`, `email`, `password`, `role`, `active`, `status`, `last_sign_in_at`, `created_at`.
- **Role:** Handles application users (staff/customers if extended).

### 2. `categories`
- **Columns:** `id` (UUID), `name`, `active`, `created_at`.
- **Role:** Menu categories (e.g., Burgers, Pizza).

### 3. `menu_items`
- **Columns:** `id` (UUID), `category_id` (FK), `name`, `description`, `price`, `image`, `available`, `featured`, `created_at`.
- **Role:** Individual food items.

### 4. `website_products`
- **Columns:** `id`, `menu_item_id`, `name`, `slug`, `short_description`, `price`, `discount_price`, `images`, `is_active`, `is_featured`.
- **Role:** E-commerce specific view of the menu items.

### 5. `orders`
- **Columns:** `id` (UUID), `table_id`, `waiter_id`, `status` (Enum), `order_type` (Enum), `payment_method`, `subtotal`, `tax`, `discount_amount`, `total`, `customer_name`, `customer_phone`, `delivery_address`, `notes`, `created_at`, `completed_at`.
- **Role:** Stores all order details. 
- **Important:** Uses Triggers to auto-calculate totals and deduct inventory.

### 6. `order_items`
- **Columns:** `id`, `order_id`, `menu_item_id`, `quantity`, `price`, `notes`.

## Triggers (DO NOT DUPLICATE LOGIC IN FLUTTER)
- `update_order_total_trigger`: Auto updates subtotal, tax, and total when items are inserted/updated.
- `set_table_occupied_trigger`: Sets table status when dine-in orders are created.
- `set_completed_at_trigger`: Deducts inventory when order is marked 'completed'.
Flutter should just insert into the database, and let PostgreSQL handle the math and inventory!
