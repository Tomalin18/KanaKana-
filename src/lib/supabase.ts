import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

// 使用可選鏈避免 undefined 錯誤
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || 'https://hfqvjkjtbexhvnkvwakn.supabase.co';
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmcXZqa2p0YmV4aHZua3Z3YWtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4NjI4MjQsImV4cCI6MjA3MTQzODgyNH0.aQY-aj0xN3IxI_k3HdKf8IPtZU4G4tbjECh_3NSMidU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});