import { createClient } from '@supabase/supabase-js';
import env from './env.js';

export function createAuthClient() {
  // Sem SUPABASE_URL/SUPABASE_ANON_KEY o servidor ainda sobe (site e demonstração funcionam);
  // só login e cadastro falham, com erro de conexão, até as variáveis serem preenchidas.
  return createClient(env.supabase.url || 'http://supabase-nao-configurado.invalid', env.supabase.anonKey || 'nao-configurada', {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  });
}

export const supabase = createAuthClient();
