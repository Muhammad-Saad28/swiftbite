class Order {
  final String? id;
  final String orderType; // dine_in, takeaway, delivery
  final String status; // pending, accepted, preparing, ready, completed, cancelled
  final String customerName;
  final String customerPhone;
  final String? deliveryAddress;
  final String paymentMethod; // cash, card, qr_online
  final int subtotal;
  final int tax;
  final int discountAmount;
  final int total;
  final DateTime? createdAt;
  final List<OrderItem> items;

  Order({
    this.id,
    required this.orderType,
    required this.status,
    required this.customerName,
    required this.customerPhone,
    this.deliveryAddress,
    required this.paymentMethod,
    this.subtotal = 0,
    this.tax = 0,
    this.discountAmount = 0,
    this.total = 0,
    this.createdAt,
    this.items = const [],
  });

  factory Order.fromJson(Map<String, dynamic> json) {
    var itemsList = json['order_items'] as List? ?? [];
    List<OrderItem> items = itemsList.map((i) => OrderItem.fromJson(i)).toList();

    return Order(
      id: json['id'] as String?,
      orderType: json['order_type'] as String? ?? 'delivery',
      status: json['status'] as String? ?? 'pending',
      customerName: json['customer_name'] as String? ?? '',
      customerPhone: json['customer_phone'] as String? ?? '',
      deliveryAddress: json['delivery_address'] as String?,
      paymentMethod: json['payment_method'] as String? ?? 'cash',
      subtotal: json['subtotal'] as int? ?? 0,
      tax: json['tax'] as int? ?? 0,
      discountAmount: json['discount_amount'] as int? ?? 0,
      total: json['total'] as int? ?? 0,
      createdAt: json['created_at'] != null 
          ? DateTime.parse(json['created_at'] as String) 
          : null,
      items: items,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      if (id != null) 'id': id,
      'order_type': orderType,
      'status': status,
      'customer_name': customerName,
      'customer_phone': customerPhone,
      'delivery_address': deliveryAddress,
      'payment_method': paymentMethod,
      // Note: totals are normally calculated by DB triggers,
      // you don't typically send them in a creation request
    };
  }
}

class OrderItem {
  final String? id;
  final String orderId;
  final String menuItemId;
  final int quantity;
  final int price;

  OrderItem({
    this.id,
    required this.orderId,
    required this.menuItemId,
    required this.quantity,
    required this.price,
  });

  factory OrderItem.fromJson(Map<String, dynamic> json) {
    return OrderItem(
      id: json['id'] as String?,
      orderId: json['order_id'] as String,
      menuItemId: json['menu_item_id'] as String,
      quantity: json['quantity'] as int,
      price: json['price'] as int,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      if (id != null) 'id': id,
      'order_id': orderId,
      'menu_item_id': menuItemId,
      'quantity': quantity,
      'price': price,
    };
  }
}
