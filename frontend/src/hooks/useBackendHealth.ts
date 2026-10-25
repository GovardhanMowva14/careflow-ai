import { useEffect, useState } from "react";

import { getHealth } from "../services/api";
import type { BackendConnectionState, HealthResponse } from "../types/api";

interface BackendHealthState {
  connection: BackendConnectionState;
  health: HealthResponse | null;
  error: string | null;
}

export function useBackendHealth(): BackendHealthState {
  const [connection, setConnection] = useState<BackendConnectionState>("loading");
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function checkHealth() {
      setConnection("loading");
      setError(null);

      try {
        const data = await getHealth(controller.signal);
        setHealth(data);
        setConnection("connected");
      } catch (err) {
        setHealth(null);
        setConnection("disconnected");
        setError(err instanceof Error ? err.message : "Unable to reach backend");
      }
    }

    void checkHealth();
    const interval = window.setInterval(() => {
      void checkHealth();
    }, 30000);

    return () => {
      controller.abort();
      window.clearInterval(interval);
    };
  }, []);

  return { connection, health, error };
}
