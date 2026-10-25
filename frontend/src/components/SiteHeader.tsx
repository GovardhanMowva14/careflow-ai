import type { BackendConnectionState } from "../types/api";
import { BackendStatusBadge } from "./BackendStatusBadge";

interface SiteHeaderProps {
  connection: BackendConnectionState;
  serviceName?: string;
}

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "features", label: "Features" },
  { id: "notice", label: "Demo Notice" },
];

export function SiteHeader({ connection, serviceName }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-teal-100/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div
            aria-hidden
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-care-teal-600 text-sm font-bold text-white shadow-sm"
          >
            CF
          </div>
          <div>
            <p className="text-lg font-semibold text-care-slate-900">CareFlow AI</p>
            <p className="text-xs text-slate-500">Referral &amp; care coordination</p>
          </div>
        </div>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-medium text-slate-600 transition hover:text-care-teal-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <BackendStatusBadge connection={connection} serviceName={serviceName} />
      </div>
    </header>
  );
}
