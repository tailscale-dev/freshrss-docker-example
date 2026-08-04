# FreshRSS — Option B (Tailscale sidecar, HTTPS, tailnet-only)
# If using this file in your setup, change the email, auth key, passwords, and tailnet details below, 
# then rename as .env, deleting the .ts tail.

ADMIN_EMAIL=you@example.net

# Place your auth key from the admin console (Settings > Keys > Generate auth key) below.
TS_AUTHKEY=tskey-auth-replace-me

# Change BOTH of these passwords. ADMIN_API_PASSWORD is what third-party apps use to authenticate.
  
ADMIN_PASSWORD=change-me-to-something-strong
ADMIN_API_PASSWORD=change-me-to-something-different

# Change the details below to match the sidecar's hostname (key name) + your tailnet name
  
BASE_URL=https://freshrss.your-tailnet.ts.net
SERVER_DNS=freshrss.your-tailnet.ts.net

# --- Database: ignore on the default SQLite setup ---
DB_HOST=freshrss-db
DB_BASE=freshrss
DB_USER=freshrss
DB_PASSWORD=freshrss
