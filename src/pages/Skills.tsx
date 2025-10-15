import React from "react";
const skills = [
  "React","TypeScript","TailwindCSS","Vite","Node.js","Go","PostgreSQL",
  "Python","Pandas","scikit-learn","Streamlit","R"
];
export default function Skills(){
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map(s => <span key={s} className="px-3 py-2 rounded bg-white/10 border border-white/10">{s}</span>)}
      </div>
    </section>
  );
}
