import React from "react";
import CaseStudyLayout from "./CaseStudyLayout";

export default function MLCapstoneCaseStudy() {
  return (
    <CaseStudyLayout
      title="ML Capstone"
      subtitle="An end-to-end ML project: preprocessing → model training → evaluation → demo-ready outputs. Built to show practical data work and results."
      tags={["Machine Learning", "Python", "Pandas", "scikit-learn"]}
      problem={[
        "Raw data is messy and needs preprocessing before modeling.",
        "A model isn’t valuable unless results are evaluated and communicated clearly.",
      ]}
      solution={[
        "Built a preprocessing pipeline for cleaning and feature engineering.",
        "Trained and evaluated models with appropriate metrics.",
        "Packaged results into a demo-friendly format that’s easy to share.",
      ]}
      results={[
        "A practical ML workflow that demonstrates end-to-end capability.",
        "Clear evaluation + repeatable pipeline for future datasets.",
      ]}
      tech={["Python", "Pandas", "NumPy", "scikit-learn", "Jupyter"]}
      links={[
        { label: "Code", href: "https://github.com/Sundog28", external: true },
      ]}
    />
  );
}