import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://prosvxlihmvhcbzgzsso.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InByb3N2eGxpaG12aGNiemd6c3NvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA2MTg1NTEsImV4cCI6MjEwNjE5NDU1MX0.E7EavJ7FdwRzTh7Jlg36mLHOOhtHKuYDeeBxa0CoUL4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
