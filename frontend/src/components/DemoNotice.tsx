export function DemoNotice() {
  return (
    <section
      id="notice"
      className="rounded-2xl border border-amber-200 bg-amber-50/80 p-6 text-sm leading-relaxed text-amber-950"
    >
      <h2 className="mb-2 text-base font-semibold">Synthetic data demonstration</h2>
      <p>
        CareFlow AI is a personal portfolio project for learning and demonstration. It does not
        process real patient information, is not connected to production healthcare systems, and
        does not claim HIPAA compliance. Future phases will use synthetic FHIR resources and mock
        integrations only.
      </p>
    </section>
  );
}
