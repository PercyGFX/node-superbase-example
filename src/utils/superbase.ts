import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qnjutbajkyykmcasleok.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey!);

export default supabase

//TMcRe0br0EaamCf2 databse
