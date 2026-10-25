import { API_BASE_URL } from "../config/env";
import type { AppInfoResponse, HealthResponse } from "../types/api";

async function fetchJson<T>(path: string, signal?: AbortSignal): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: "GET",
    headers: { Accept: "application/json" },
    signal,
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${response.statusText}`);
  }

  return (await response.json()) as T;
}

export async function getHealth(signal?: AbortSignal): Promise<HealthResponse> {
  return fetchJson<HealthResponse>("/api/v1/health", signal);
}

export async function getAppInfo(signal?: AbortSignal): Promise<AppInfoResponse> {
  return fetchJson<AppInfoResponse>("/api/v1/info", signal);
}
