import { supabase } from '../lib/supabase';
import { Strategy } from '../types/trading';

export async function createStrategy(strategy: Omit<Strategy, 'id'>) {
  const { data, error } = await supabase
    .from('strategies')
    .insert([strategy])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateStrategy(id: string, strategy: Partial<Strategy>) {
  const { data, error } = await supabase
    .from('strategies')
    .update(strategy)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deleteStrategy(id: string) {
  const { error } = await supabase
    .from('strategies')
    .delete()
    .eq('id', id);

  if (error) throw error;
}

export async function getStrategies() {
  const { data, error } = await supabase
    .from('strategies')
    .select('*');

  if (error) throw error;
  return data;
}