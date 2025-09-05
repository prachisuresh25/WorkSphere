// Supabase Configuration
// Replace these with your actual Supabase project credentials
const SUPABASE_CONFIG = {
  url: "https://eyxhavznbwjrtykdozkg.supabase.co", // e.g., 'https://xyzcompany.supabase.co'
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5eGhhdnpuYndqcnR5a2RvemtnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcwNjYwMjEsImV4cCI6MjA3MjY0MjAyMX0.gryeO3jDolA93C7fJYbeIE5hYbCED5ArUFMyZ90pdn8", // Your project's anon/public key
}

// How to get your Supabase credentials:
// 1. Go to https://supabase.com/dashboard
// 2. Select your project
// 3. Go to Settings > API
// 4. Copy the Project URL and anon/public key
// 5. Replace the values above

// Example usage in your JavaScript files:
// const supabaseClient = supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
