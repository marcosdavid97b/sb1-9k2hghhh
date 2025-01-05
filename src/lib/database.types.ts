export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      trades: {
        Row: {
          id: string
          user_id: string
          date: string
          asset: string
          entry_price: number
          exit_price: number | null
          stop_loss: number | null
          take_profit: number | null
          setup: string | null
          emotions: string | null
          lessons: string | null
          volume: number
          result: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          date: string
          asset: string
          entry_price: number
          exit_price?: number | null
          stop_loss?: number | null
          take_profit?: number | null
          setup?: string | null
          emotions?: string | null
          lessons?: string | null
          volume?: number
          result?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          date?: string
          asset?: string
          entry_price?: number
          exit_price?: number | null
          stop_loss?: number | null
          take_profit?: number | null
          setup?: string | null
          emotions?: string | null
          lessons?: string | null
          volume?: number
          result?: number | null
          created_at?: string
          updated_at?: string
        }
      }
      trade_tags: {
        Row: {
          id: string
          trade_id: string
          name: string
        }
        Insert: {
          id?: string
          trade_id: string
          name: string
        }
        Update: {
          id?: string
          trade_id?: string
          name?: string
        }
      }
      strategies: {
        Row: {
          id: string
          user_id: string
          name: string
          description: string | null
          market_type: string | null
          pattern: string | null
          max_risk_per_trade: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          description?: string | null
          market_type?: string | null
          pattern?: string | null
          max_risk_per_trade?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          description?: string | null
          market_type?: string | null
          pattern?: string | null
          max_risk_per_trade?: number | null
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}