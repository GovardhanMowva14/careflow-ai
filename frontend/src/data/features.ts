import type { FeaturePreview } from "../components/FeatureCard";

export const featurePreviews: FeaturePreview[] = [
  {
    id: "referrals",
    title: "Referral Management",
    description:
      "Track inbound referrals, route cases to coordinators, and prepare for human-in-the-loop approvals.",
    status: "planned",
  },
  {
    id: "appointments",
    title: "Appointment Coordination",
    description:
      "Align scheduling preferences across sites and specialties with agent-assisted follow-up workflows.",
    status: "planned",
  },
  {
    id: "insurance",
    title: "Insurance Verification",
    description:
      "Simulate eligibility checks and document coverage summaries using synthetic payer scenarios.",
    status: "planned",
  },
  {
    id: "assistant",
    title: "AI Assistant",
    description:
      "LangGraph-based agents for knowledge retrieval, task orchestration, and coordinator decision support.",
    status: "planned",
  },
];
