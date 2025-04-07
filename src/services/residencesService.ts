import Residence from "@/interfaces/residence";
import { supabaseInstance } from "@/lib/supabase";

var supabase = supabaseInstance();

export async function selectResidences() {
  var querry = await supabase.from("residences").select().order("name");

  var residences = querry.data?.map(
    (e) =>
      ({
        id: e.id,
        created_at: e.created_at,
        name: e.name,
        type: e.type,
      } as Residence)
  );

  return residences;
}
