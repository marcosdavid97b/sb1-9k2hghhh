/*
  # Trading Journal Database Schema

  1. New Tables
    - users
      - id (uuid, references auth.users)
      - created_at (timestamp)
      - email (text)
    
    - trades
      - id (uuid)
      - user_id (uuid, references users)
      - date (timestamp)
      - asset (text)
      - entry_price (decimal)
      - exit_price (decimal)
      - stop_loss (decimal)
      - take_profit (decimal)
      - setup (text)
      - emotions (text)
      - lessons (text)
      - volume (decimal)
      - result (decimal)
      - created_at (timestamp)
      - updated_at (timestamp)
    
    - trade_tags
      - id (uuid)
      - trade_id (uuid, references trades)
      - name (text)

    - strategies
      - id (uuid)
      - user_id (uuid, references users)
      - name (text)
      - description (text)
      - market_type (text)
      - pattern (text)
      - max_risk_per_trade (decimal)
      - created_at (timestamp)
      - updated_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Users table
CREATE TABLE users (
  id uuid REFERENCES auth.users PRIMARY KEY,
  email text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own data"
  ON users FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- Trades table
CREATE TABLE trades (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users NOT NULL,
  date timestamptz NOT NULL,
  asset text NOT NULL,
  entry_price decimal NOT NULL,
  exit_price decimal,
  stop_loss decimal,
  take_profit decimal,
  setup text,
  emotions text,
  lessons text,
  volume decimal NOT NULL DEFAULT 0,
  result decimal,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE trades ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can CRUD own trades"
  ON trades FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Trade tags table
CREATE TABLE trade_tags (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  trade_id uuid REFERENCES trades ON DELETE CASCADE,
  name text NOT NULL,
  UNIQUE(trade_id, name)
);

ALTER TABLE trade_tags ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can CRUD own trade tags"
  ON trade_tags FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM trades
      WHERE trades.id = trade_tags.trade_id
      AND trades.user_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM trades
      WHERE trades.id = trade_tags.trade_id
      AND trades.user_id = auth.uid()
    )
  );

-- Strategies table
CREATE TABLE strategies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users NOT NULL,
  name text NOT NULL,
  description text,
  market_type text,
  pattern text,
  max_risk_per_trade decimal,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE strategies ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can CRUD own strategies"
  ON strategies FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Triggers for updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trades_updated_at
  BEFORE UPDATE ON trades
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER strategies_updated_at
  BEFORE UPDATE ON strategies
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();