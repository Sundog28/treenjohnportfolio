import ProjectCard from '../components/ProjectCard'
export default function Projects() {
  return (
    <section className="page">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <ProjectCard
          title="SkillForge"
          description="Responsive React app to track learning progress and portfolio content."
          repo="https://github.com/Sundog28/SkillForge"
          stack={['React','TypeScript','Vite','Tailwind']}
          badges={[
            'https://img.shields.io/github/stars/Sundog28/SkillForge?style=flat-square&logo=github',
            'https://img.shields.io/github/languages/top/Sundog28/SkillForge?style=flat-square'
          ]}
        />
        <ProjectCard
          title="JobTrack API"
          description="Go REST API with PostgreSQL for tracking job applications and statuses."
          repo="https://github.com/Sundog28/JobTrackAPI"
          stack={['Go','PostgreSQL','REST']}
          badges={[
            'https://img.shields.io/github/stars/Sundog28/JobTrackAPI?style=flat-square&logo=github'
          ]}
        />
        <ProjectCard
          title="ML Capstone"
          description="Python / scikit-learn ML project with training and evaluation."
          repo="https://github.com/Sundog28/ML-Capstone"
          stack={['Python','Pandas','scikit-learn']}
        />
      </div>
    </section>
  )
}
