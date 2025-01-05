import { supabase } from '../lib/supabase';
import { Trade } from '../types/trading';

export async function createTrade(trade: Omit<Trade, 'id'>) {
  const { data, error } = await supabase
    .from('trades')
    .insert([trade])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateTrade(id: string, trade: Partial<Trade>) {
  const { data, error } = await supabase
    .from('trades')
    .update(trade)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deleteTrade(id: string) {
  const { error } = await supabase
    .from('trades')
    .delete()
    .eq('id', id);

  if (error) throw error;
}

export async function getTrades(filters?: Record<string, any>) {
  let query = supabase.from('trades').select(`
    *,
    trade_tags (
      name
    )
  `);

  if (filters) {
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        query = query.eq(key, value);
      }
    });
  }

  const { data, error } = await query;
  if (error) throw error;
  return data;
}