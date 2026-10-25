import { DemoNotice } from "./components/DemoNotice";
import { FeatureCard } from "./components/FeatureCard";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { featurePreviews } from "./data/features";
import { useBackendHealth } from "./hooks/useBackendHealth";

function App() {
  const { connection, health, error } = useBackendHealth();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader connection={connection} serviceName={health?.service} />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6">
        <section id="overview" className="mb-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-3 inline-flex rounded-full bg-care-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-care-teal-700">
              Agentic healthcare operations
            </p>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-care-slate-900 sm:text-4xl">
              Healthcare referral and care coordination, built for safe local demonstration
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-slate-600">
              CareFlow AI will combine React, FastAPI, FHIR synthetic data, LangGraph agents, and
              enterprise workflow patterns to showcase modern full-stack and AI engineering. Phase 1
              establishes the monorepo, API surface, and frontend experience.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
              Backend connectivity
            </h2>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Status</dt>
                <dd className="font-medium text-care-slate-900">
                  {connection === "loading" && "Checking…"}
                  {connection === "connected" && "Connected"}
                  {connection === "disconnected" && "Disconnected"}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Service</dt>
                <dd className="font-medium text-care-slate-900">{health?.service ?? "—"}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Health</dt>
                <dd className="font-medium text-care-slate-900">{health?.status ?? "—"}</dd>
              </div>
            </dl>
            {error && connection === "disconnected" ? (
              <p className="mt-4 rounded-lg bg-rose-50 px-3 py-2 text-xs text-rose-800">{error}</p>
            ) : null}
          </div>
        </section>

        <section id="features" className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-care-slate-900">Platform preview</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Upcoming capabilities planned for later phases. Cards are informational only in Phase
              1.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {featurePreviews.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </section>

        <DemoNotice />
      </main>

      <SiteFooter />
    </div>
  );
}

export default App;
