# Authentication Guide for Flutter

Based on the `supabase-schema.sql`, the system has a custom `users` table:

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255),
  role VARCHAR(20) DEFAULT 'waiter',
  status VARCHAR(20) DEFAULT 'pending'
);
```

## Integration Strategy

### Scenario A: Supabase Native Auth
If the project eventually moves to Supabase native Auth (`auth.users`), Flutter should use the standard `supabase_flutter` auth flow:

```dart
final AuthResponse res = await supabase.auth.signInWithPassword(
  email: 'example@email.com',
  password: 'example-password',
);
```

### Scenario B: Custom Users Table
Currently, the schema implies a custom table. 

**Login:**
```dart
final data = await supabase
  .from('users')
  .select()
  .eq('email', 'example@email.com')
  .eq('password', 'example-password')
  .single();
```
*Warning: Plaintext passwords are bad practice. Ensure the backend hashes these if dealing with production data!*

**Signup:**
```dart
await supabase.from('users').insert({
  'name': 'John Doe',
  'email': 'example@email.com',
  'password': 'password123',
  'role': 'customer', // Ensure schema allows 'customer' role
});
```

### Token/Session Storage
- If using Native Auth, `supabase_flutter` handles secure token storage automatically.
- If using the custom `users` table, Flutter will need to store the user `id` in `flutter_secure_storage` or `shared_preferences` to maintain session state.
