# Environment Variables

The Swiftbite backend requires certain environment variables to be shared with the Flutter application. 

**DO NOT store private service roles or DB passwords in the Flutter app.**

## Required by Flutter

### `NEXT_PUBLIC_SUPABASE_URL`
- **Purpose:** The endpoint URL for the Supabase project.
- **Required by Flutter:** YES.
- **Public or Private:** PUBLIC (Safe for mobile apps).
- **Where it is used:** `lib/supabase.ts` and `components/ui/LiveOrderTracking.tsx`.

### `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Purpose:** The public anonymous key for querying the Supabase database.
- **Required by Flutter:** YES.
- **Public or Private:** PUBLIC (Safe for mobile apps because Row Level Security protects the data).
- **Where it is used:** `lib/supabase.ts` and `components/ui/LiveOrderTracking.tsx`.

## How to use in Flutter

In your Flutter project, create a `.env` file or use `dart-define`:

```env
SUPABASE_URL=https://[YOUR_PROJECT_REF].supabase.co
SUPABASE_ANON_KEY=[YOUR_ANON_KEY]
```

Then initialize the client:
```dart
await Supabase.initialize(
  url: dotenv.env['SUPABASE_URL']!,
  anonKey: dotenv.env['SUPABASE_ANON_KEY']!,
);
```
