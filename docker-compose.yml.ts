services:
  tailscale:
    image: tailscale/tailscale:latest
    container_name: tailscale-freshrss
    hostname: freshrss                 # Change if your key/device name is different
    environment:
      - TS_AUTHKEY=${TS_AUTHKEY}       # Located in your .env file; do not replace here
      - TS_STATE_DIR=/var/lib/tailscale
      - TS_SERVE_CONFIG=/config/serve.json
    volumes:
      - ./tailscale-state:/var/lib/tailscale
      - ./tailscale-config:/config
    devices:
      - /dev/net/tun:/dev/net/tun
    cap_add:
      - net_admin
    restart: unless-stopped

  freshrss:
    image: freshrss/freshrss:latest
    network_mode: service:tailscale     # share the sidecar's network — no ports of its own
    depends_on:
      - tailscale
    env_file:
      - .env
    environment:
      TZ: America/New_York
      CRON_MIN: '3,33'
      TRUSTED_PROXY: 127.0.0.1           # Serve reaches FreshRSS over shared loopback now
    volumes:
      - data:/var/www/FreshRSS/data
      - extensions:/var/www/FreshRSS/extensions
    restart: unless-stopped

volumes:
  data:
  extensions:
