// config.ts
const isProduction = process.env.NODE_ENV === "production";

function getEnv(name: string, fallback?: string): string {
  const raw = process.env[name];

  const value = raw !== undefined ? raw : fallback;

  if (value === undefined || value === null) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

// Site URLs
export const SITE_URL = isProduction
  ? getEnv("NEXT_PUBLIC_URL")
  : "http://localhost:3000";

export const API_URL = isProduction
  ? getEnv("NEXT_PUBLIC_API")
  : "http://localhost:3000";

let _metadataBase: URL | null = null;
export const METADATA_BASE = (() => {
  if (!_metadataBase) {
    _metadataBase = new URL(SITE_URL);
  }
  return _metadataBase;
})();
