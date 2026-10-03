// ======================================================
// XLINE - ACIL DURUM STICKER
// SUPABASE BAGLANTISI
// ======================================================

// Supabase > Project Settings > API bölümünden alınacak

const SUPABASE_URL = "BURAYA_SUPABASE_PROJECT_URL";

const SUPABASE_ANON_KEY = "BURAYA_SUPABASE_ANON_KEY";


// ======================================================
// SUPABASE CLIENT
// ======================================================

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);
