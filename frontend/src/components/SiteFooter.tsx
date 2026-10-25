export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/70 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-sm text-slate-500 sm:px-6">
        <p>CareFlow AI — Phase 1 foundation (local development)</p>
        <p>OpenAPI docs available at the backend <code className="text-xs">/docs</code> route when the API is running.</p>
      </div>
    </footer>
  );
}
