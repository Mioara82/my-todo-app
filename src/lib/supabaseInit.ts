
import { createClient } from "@supabase/supabase-js";
import type { Database } from "../../database.types";

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_KEY || '';
if (!supabaseKey) {
  throw new Error('SUPABASE_KEY is not defined in the environment variables');
}
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

const getTodos = async () => {
    const { data, error } = await supabase.from("todos").select("*");
    if (error) {
      console.error("Error fetching todos:", error);
    } else {
      console.log("Fetched todos:", data);
    }
  };
  
  getTodos();