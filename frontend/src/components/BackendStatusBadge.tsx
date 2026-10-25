import type { BackendConnectionState } from "../types/api";

interface BackendStatusBadgeProps {
  connection: BackendConnectionState;
  serviceName?: string;
}

const labels: Record<BackendConnectionState, string> = {
  loading: "Checking backend…",
  connected: "Connected",
  disconnected: "Disconnected",
};

const styles: Record<BackendConnectionState, string> = {
  loading: "bg-amber-50 text-amber-800 ring-amber-200",
  connected: "bg-emerald-50 text-emerald-800 ring-emerald-200",
  disconnected: "bg-rose-50 text-rose-800 ring-rose-200",
};

export function BackendStatusBadge({ connection, serviceName }: BackendStatusBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium ring-1 ring-inset ${styles[connection]}`}
      role="status"
      aria-live="polite"
    >
      <span
        aria-hidden
        className={`h-2 w-2 rounded-full ${
          connection === "connected"
            ? "bg-emerald-500"
            : connection === "loading"
              ? "animate-pulse bg-amber-500"
              : "bg-rose-500"
        }`}
      />
      <span>{labels[connection]}</span>
      {connection === "connected" && serviceName ? (
        <span className="hidden text-[11px] opacity-80 sm:inline">({serviceName})</span>
      ) : null}
    </div>
  );
}
