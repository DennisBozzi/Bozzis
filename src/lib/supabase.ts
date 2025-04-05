import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { createClient } from "@supabase/supabase-js";

const supabase = createClient('https://toadqdstdkrpfrjldpid.supabase.co', import.meta.env.VITE_API_KEY)

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function supabaseInstance() { return supabase }