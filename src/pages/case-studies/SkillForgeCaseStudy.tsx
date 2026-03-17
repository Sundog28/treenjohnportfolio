import React from "react";
import CaseStudyLayout from "./CaseStudyLayout";

export default function SkillForgeCaseStudy() {
  return (
    <CaseStudyLayout
      title="SkillForge"
      subtitle="A full-stack learning tracker with a polished interface and a product-style structure designed to be extendable, deployable, and easy to navigate."
      tags={["Full Stack", "React", "TypeScript", "Tailwind", "Vite"]}
      problem={[
        "I wanted a cleaner way to track learning progress, completed work, and next steps.",
        "Most learning trackers feel cluttered or don’t present information with a polished product feel.",
        "I needed a project that showed both frontend quality and structured thinking.",
      ]}
      solution={[
        "Built a modern interface with reusable components and a clean visual hierarchy.",
        "Used page-level structure and routing to make the app feel like a real product instead of a small demo.",
        "Designed the codebase to be easy to extend with future tracking and analytics features.",
      ]}
      results={[
        "Created a recruiter-friendly project that demonstrates frontend polish and product thinking.",
        "Showed the ability to organize code cleanly across components, layout, and navigation.",
        "Produced a project that fits naturally into a modern portfolio case-study flow.",
      ]}
      tech={[
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
        "Component-based UI design",
      ]}
      images={["/projects/skillforge-1.png"]}
      links={[
        { label: "Code", href: "https://github.com/Sundog28", external: true },
      ]}
    />
  );
}