// config.ts
const isProduction = process.env.NODE_ENV === "production";

export const SITE_URL = isProduction
  ? process.env.NEXT_PUBLIC_URL! // production site domain
  : "http://localhost:3000"; // dev site domain

export const API_URL = isProduction
  ? process.env.NEXT_PUBLIC_API! // production API domain
  : "http://localhost:3000"; // dev API domain

export const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN!;
export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
export const SUPABASE_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!;

// JWT
export const JWT_SECRET = process.env.JWT_SECRET!;
export const JWT_REFRESH_EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN!;
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN!;

// GitHub
export const GITHUB_TOKEN = process.env.GITHUB_TOKEN!;
export const GITHUB_OWNER = process.env.GITHUB_OWNER!;
export const GITHUB_REPO = process.env.GITHUB_REPO!;

// Example for metadata
export const METADATA_BASE = new URL(SITE_URL);
