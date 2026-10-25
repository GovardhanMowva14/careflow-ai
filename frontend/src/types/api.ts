export interface HealthResponse {
  status: string;
  service: string;
}

export interface AppInfoResponse {
  name: string;
  version: string;
  description: string;
}

export type BackendConnectionState = "loading" | "connected" | "disconnected";
