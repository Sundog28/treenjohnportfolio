import React from "react";
import CaseStudyLayout from "./CaseStudyLayout";

export default function MLCapstoneCaseStudy() {
  return (
    <CaseStudyLayout
      title="ML Capstone"
      subtitle="An end-to-end machine learning project covering preprocessing, training, evaluation, and recruiter-friendly presentation of results."
      tags={["Machine Learning", "Python", "Pandas", "scikit-learn", "Jupyter"]}
      problem={[
        "Raw data requires cleanup and preprocessing before useful modeling can happen.",
        "A machine learning project needs more than a model — it needs evaluation, interpretation, and clear presentation.",
        "I wanted a project that showed practical ML workflow from start to finish.",
      ]}
      solution={[
        "Built a preprocessing workflow for cleaning data and preparing features.",
        "Trained and evaluated models using appropriate metrics and iterative improvement.",
        "Packaged the work into a case-study-friendly format that is easier for recruiters to understand.",
      ]}
      results={[
        "Demonstrated end-to-end ML workflow rather than isolated notebook experimentation.",
        "Showed practical experience with data prep, modeling, and result communication.",
        "Added an ML-focused project that complements the full-stack and backend work in the portfolio.",
      ]}
      tech={[
        "Python",
        "Pandas",
        "scikit-learn",
        "Jupyter",
        "Data preprocessing",
        "Model evaluation",
      ]}
      images={["/projects/mlcapstone-1.png"]}
      links={[
        { label: "Code", href: "https://github.com/Sundog28", external: true },
      ]}
    />
  );
}