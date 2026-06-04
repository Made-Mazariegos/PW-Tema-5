import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nfncgjjjfcqectigabao.supabase.co';

const supabaseKey = 'sb_publishable_CiFJfLRuTVaZ5mRK20cZug_GefaOCju';

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
