import { supabaseInstance } from "@/lib/supabase";

var supabase = supabaseInstance();

export async function selectResidences() {
  return await supabase.from("residences").select().order("type");
}
