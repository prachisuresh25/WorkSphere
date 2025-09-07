import { createClient } from '@supabase/supabase-js'

// Import the config
const SUPABASE_CONFIG = {
  url: "https://eyxhavznbwjrtykdozkg.supabase.co",
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5eGhhdnpuYndqcnR5a2RvemtnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcwNjYwMjEsImV4cCI6MjA3MjY0MjAyMX0.gryeO3jDolA93C7fJYbeIE5hYbCED5ArUFMyZ90pdn8"
}

// Create the Supabase client
export const supabase = createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey)

// Auth helper functions
export const authHelpers = {
  // Sign up new user
  signUp: async (email: string, password: string, userData?: any) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData
      }
    })
    return { data, error }
  },

  // Sign in existing user
  signIn: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    return { data, error }
  },

  // Sign out
  signOut: async () => {
    const { error } = await supabase.auth.signOut()
    return { error }
  },

  // Get current user
  getCurrentUser: async () => {
    const { data: { user }, error } = await supabase.auth.getUser()
    return { user, error }
  },

  // Listen to auth changes
  onAuthStateChange: (callback: (event: string, session: any) => void) => {
    return supabase.auth.onAuthStateChange(callback)
  }
}
