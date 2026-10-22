# Flutter Integration Guide

This file provides practical examples of how the Flutter application should communicate with the existing Swiftbite Supabase backend.

### Setup
Add `supabase_flutter` to your `pubspec.yaml`.

```dart
import 'package:supabase_flutter/supabase_flutter.dart';

final supabase = Supabase.instance.client;
```

---

### 1. GET Product List (Menu Items)

```dart
Future<List<Map<String, dynamic>>> fetchProducts() async {
  final data = await supabase
      .from('website_products') // or 'menu_items'
      .select()
      .eq('is_active', true);
  return data;
}
```

### 2. GET Categories

```dart
Future<List<Map<String, dynamic>>> fetchCategories() async {
  final data = await supabase
      .from('categories')
      .select()
      .eq('active', true);
  return data;
}
```

### 3. POST Order

Orders have a trigger that auto-calculates totals. You only need to insert the base order, and then the items.

```dart
Future<void> placeOrder(List<CartItem> cartItems, String name, String phone, String address) async {
  // 1. Create the Order Record
  final orderResponse = await supabase.from('orders').insert({
    'order_type': 'delivery', // dine_in, takeaway, delivery
    'status': 'pending',
    'customer_name': name,
    'customer_phone': phone,
    'delivery_address': address,
    'payment_method': 'cash',
  }).select('id').single();

  final orderId = orderResponse['id'];

  // 2. Insert Order Items
  final itemsToInsert = cartItems.map((item) => {
    'order_id': orderId,
    'menu_item_id': item.productId,
    'quantity': item.quantity,
    'price': item.price,
  }).toList();

  await supabase.from('order_items').insert(itemsToInsert);
  
  // Note: The 'update_order_total_trigger' in Supabase will automatically
  // calculate the order subtotal, tax, and total.
}
```

### 4. Listen to Live Order Status (Realtime)

Swiftbite uses Realtime to track orders (`LiveOrderTracking.tsx`). In Flutter:

```dart
void listenToOrder(String orderId) {
  supabase
    .channel('public:orders:id=eq.$orderId')
    .onPostgresChanges(
      event: PostgresChangeEvent.update,
      schema: 'public',
      table: 'orders',
      filter: PostgresChangeFilter(
        type: PostgresChangeFilterType.eq,
        column: 'id',
        value: orderId,
      ),
      callback: (payload) {
        final newStatus = payload.newRecord['status'];
        print('Order status updated to: $newStatus');
      },
    )
    .subscribe();
}
```
