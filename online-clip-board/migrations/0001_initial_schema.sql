-- Clipboard items: the core table
CREATE TABLE IF NOT EXISTS clipboard_items (
  id TEXT PRIMARY KEY,
  code TEXT NOT NULL UNIQUE,
  type TEXT NOT NULL CHECK(type IN ('text', 'file')),
  text_content TEXT,
  file_name TEXT,
  file_key TEXT,
  mime_type TEXT,
  file_size INTEGER,
  expire_minutes INTEGER NOT NULL,
  expires_at DATETIME NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  download_count INTEGER NOT NULL DEFAULT 0,
  ip_hash TEXT
);

CREATE INDEX IF NOT EXISTS idx_clipboard_code ON clipboard_items(code);
CREATE INDEX IF NOT EXISTS idx_clipboard_expires ON clipboard_items(expires_at);

-- Global configuration (runtime-adjustable)
CREATE TABLE IF NOT EXISTS config (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL,
  description TEXT,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) WITHOUT ROWID;

-- Statistics (single-row table)
CREATE TABLE IF NOT EXISTS statistics (
  id INTEGER PRIMARY KEY CHECK(id = 1),
  total_uploads INTEGER NOT NULL DEFAULT 0,
  total_downloads INTEGER NOT NULL DEFAULT 0,
  total_files INTEGER NOT NULL DEFAULT 0,
  total_texts INTEGER NOT NULL DEFAULT 0
);

-- Seed config values
INSERT OR IGNORE INTO config (key, value, description) VALUES
  ('max_file_size', '52428800', 'Maximum file size in bytes (50MB)'),
  ('max_text_length', '2000', 'Maximum text length in characters'),
  ('upload_rate_limit', '10', 'Max uploads per IP per minute'),
  ('retrieve_rate_limit', '30', 'Max retrieves per IP per minute'),
  ('maintenance_mode', 'false', 'When true, only retrievals are allowed');

-- Seed statistics row
INSERT OR IGNORE INTO statistics (id) VALUES (1);
