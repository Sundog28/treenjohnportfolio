import React from "react";
import CaseStudyLayout from "./CaseStudyLayout";

export default function SkillForgeCaseStudy() {
  return (
    <CaseStudyLayout
      title="SkillForge"
      subtitle="A full-stack learning tracker with a polished UI and a product-style structure designed to be deployable and easy to extend."
      tags={["Full Stack", "React", "TypeScript", "Tailwind"]}
      problem={[
        "I needed a clean way to track what I’m learning, what I’ve completed, and what I’m working on next.",
        "Most “tracker” apps feel cluttered or aren’t designed with a clear product structure.",
      ]}
      solution={[
        "Built a modern UI with clear sections and reusable components.",
        "Used routing and page-level layout to make it feel like a real product.",
        "Kept the codebase organized for easy iteration and future features.",
      ]}
      results={[
        "A recruiter-friendly project that demonstrates UI quality and engineering structure.",
        "Clear navigation and expandable architecture for new features.",
      ]}
      tech={["React", "TypeScript", "Tailwind CSS", "Vite"]}
      links={[
        { label: "Code", href: "https://github.com/Sundog28", external: true },
        // add demo link when available:
        // { label: "Live Demo", href: "https://your-demo-link", external: true },
      ]}
    />
  );
}