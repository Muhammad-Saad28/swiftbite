class User {
  final String id;
  final String name;
  final String email;
  final String role;
  final String status;
  final DateTime? lastSignInAt;

  User({
    required this.id,
    required this.name,
    required this.email,
    required this.role,
    required this.status,
    this.lastSignInAt,
  });

  factory User.fromJson(Map<String, dynamic> json) {
    return User(
      id: json['id'] as String,
      name: json['name'] as String,
      email: json['email'] as String,
      role: json['role'] as String? ?? 'customer',
      status: json['status'] as String? ?? 'pending',
      lastSignInAt: json['last_sign_in_at'] != null 
          ? DateTime.parse(json['last_sign_in_at'] as String) 
          : null,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'name': name,
      'email': email,
      'role': role,
      'status': status,
      'last_sign_in_at': lastSignInAt?.toIso8601String(),
    };
  }
}
