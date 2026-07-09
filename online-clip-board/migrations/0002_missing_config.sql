-- Add missing config keys from spec
INSERT OR IGNORE INTO config (key, value, description) VALUES
  ('available_expiration_times', '1,5,10,15,30', 'Comma-separated list of allowed expiration minutes'),
  ('upload_enabled', 'true', 'When false, uploads are rejected'),
  ('retrieve_enabled', 'true', 'When false, retrievals are rejected');

-- Cleanup queue table for cron worker
CREATE TABLE IF NOT EXISTS cleanup_queue (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  item_id TEXT NOT NULL,
  file_key TEXT,
  scheduled_at DATETIME NOT NULL,
  processed INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_cleanup_queue_scheduled ON cleanup_queue(scheduled_at, processed);
