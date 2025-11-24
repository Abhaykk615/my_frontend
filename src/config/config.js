const AUTH_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;
const GEMENI_API_KEY = import.meta.env.VITE_GEMENI_API_KEY;

// Resolution order for backend URL:
// 1. A runtime override `window.__APP_API_URL` (useful if you inject at deploy/runtime)
// 2. The Vite build-time env `import.meta.env.VITE_APP_URL` (set in Vercel/Netlify build settings)
// 3. In development only, fall back to the local backend URL
// 4. In production, fall back to empty string so requests become relative ("/api/")
const runtimeOverride = typeof window !== "undefined" && window.__APP_API_URL;
const envValue = import.meta.env.VITE_APP_URL;
const defaultDev = "http://localhost:10000/";
const VITE_APP_URL =
	runtimeOverride || envValue || (import.meta.env.MODE === "development" ? defaultDev : "");

export { AUTH_KEY, API_KEY, GEMENI_API_KEY, VITE_APP_URL };
