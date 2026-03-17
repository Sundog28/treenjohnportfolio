import React from "react";
import CaseStudyLayout from "./CaseStudyLayout";

export default function JobTrackCaseStudy() {
  return (
    <CaseStudyLayout
      title="JobTrack API"
      subtitle="A production-style backend API in Go for tracking job applications, statuses, and notes. Designed with clean separation of layers, validation, and token-based auth."
      tags={["Backend", "Go", "REST API", "PostgreSQL", "Auth"]}
      problem={[
        "Job tracking becomes messy without a consistent system for statuses, notes, and follow-ups.",
        "I wanted a backend that looks like real production code: clean layers, validation, and structured JSON responses.",
      ]}
      solution={[
        "Designed RESTful endpoints for CRUD operations and status updates.",
        "Implemented token-based auth and request validation.",
        "Separated responsibilities across handlers → services → storage for maintainability.",
      ]}
      results={[
        "A backend that demonstrates real-world architecture decisions.",
        "Reusable patterns that can scale into a full product.",
      ]}
      tech={["Go", "PostgreSQL", "REST", "Auth", "Validation"]}
      links={[
        { label: "Code", href: "https://github.com/Sundog28", external: true },
      ]}
    />
  );
}