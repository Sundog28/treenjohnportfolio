import React from "react";
import CaseStudyLayout from "./CaseStudyLayout";

export default function JobTrackCaseStudy() {
  return (
    <CaseStudyLayout
      title="JobTrack API"
      subtitle="A production-style backend API in Go for tracking job applications, statuses, and notes. Built to show clean structure, validation, and maintainable backend engineering."
      tags={["Backend", "Go", "REST API", "PostgreSQL", "Auth"]}
      problem={[
        "Tracking job applications manually gets messy fast without a consistent structure.",
        "I wanted to build a backend that looked and felt closer to production code than a tutorial project.",
        "The goal was to model clean API design, validation, and layered architecture in Go.",
      ]}
      solution={[
        "Designed RESTful endpoints for creating, reading, updating, and managing application records.",
        "Implemented token-based authentication and structured validation to improve reliability.",
        "Separated responsibilities into handlers, services, and storage layers to keep the backend maintainable.",
      ]}
      results={[
        "Produced a backend project that demonstrates real-world engineering structure.",
        "Showed practical knowledge of API architecture, request flow, and clean separation of concerns.",
        "Created a strong flagship backend piece for the portfolio and recruiter mode.",
      ]}
      tech={[
        "Go",
        "REST APIs",
        "PostgreSQL",
        "Authentication",
        "Validation",
        "Layered backend architecture",
      ]}
      images={["/projects/jobtrack-1.png"]}
      links={[
        { label: "Code", href: "https://github.com/Sundog28", external: true },
      ]}
    />
  );
}