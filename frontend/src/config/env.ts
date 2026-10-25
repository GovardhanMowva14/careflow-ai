const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

if (!apiBaseUrl) {
  console.warn(
    "VITE_API_BASE_URL is not set; defaulting to http://localhost:8000 for local development.",
  );
}

export const API_BASE_URL = (apiBaseUrl ?? "http://localhost:8000").replace(/\/$/, "");
