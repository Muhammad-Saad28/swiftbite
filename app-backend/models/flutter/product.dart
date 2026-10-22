class Product {
  final String id;
  final String menuItemId; // For inserting into order_items
  final String name;
  final String slug;
  final String? shortDescription;
  final int price;
  final int? discountPrice;
  final List<String> images;
  final bool isActive;
  final bool isFeatured;

  Product({
    required this.id,
    required this.menuItemId,
    required this.name,
    required this.slug,
    this.shortDescription,
    required this.price,
    this.discountPrice,
    this.images = const [],
    this.isActive = true,
    this.isFeatured = false,
  });

  factory Product.fromJson(Map<String, dynamic> json) {
    return Product(
      id: json['id'] as String,
      menuItemId: json['menu_item_id'] as String,
      name: json['name'] as String,
      slug: json['slug'] as String,
      shortDescription: json['short_description'] as String?,
      price: json['price'] as int,
      discountPrice: json['discount_price'] as int?,
      images: List<String>.from(json['images'] ?? []),
      isActive: json['is_active'] as bool? ?? true,
      isFeatured: json['is_featured'] as bool? ?? false,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'menu_item_id': menuItemId,
      'name': name,
      'slug': slug,
      'short_description': shortDescription,
      'price': price,
      'discount_price': discountPrice,
      'images': images,
      'is_active': isActive,
      'is_featured': isFeatured,
    };
  }
}
