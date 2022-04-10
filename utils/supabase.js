import { createClient } from "@supabase/supabase-js";
import { createAuthService } from "@saas-ui/auth/services/supabase";

// supabase Client - In production, we have to disable this...
export const supabaseClient = createClient(
    "https://yaupphjaygyzzzixnuum.supabase.co", //process.env.SUPABASE_URL,
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlhdXBwaGpheWd5enp6aXhudXVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDk1Mzc5MDQsImV4cCI6MTk2NTExMzkwNH0.sv8qK9wd9hf49WrqNbvb_vBsIU4P4oTCr8HtTkJiEsU" //process.env.SUPABASE_KEY
);

export const supabaseService = createAuthService(supabaseClient);
