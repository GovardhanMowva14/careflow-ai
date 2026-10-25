export interface FeaturePreview {
  id: string;
  title: string;
  description: string;
  status: "planned" | "foundation";
}

interface FeatureCardProps {
  feature: FeaturePreview;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  const statusLabel = feature.status === "foundation" ? "Foundation ready" : "Planned";

  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="mb-4 flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-care-slate-900">{feature.title}</h3>
        <span className="rounded-full bg-care-teal-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-care-teal-700">
          {statusLabel}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-slate-600">{feature.description}</p>
    </article>
  );
}
