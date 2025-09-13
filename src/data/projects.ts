export type Project = {
  slug: string; title: string; summary: string;
  description: string; repo: string; demo?: string;
  tags: string[]; features: string[]; images?: string[];
}
export const projects: Project[] = [
  {
    slug: 'skillforge',
    title: 'SkillForge',
    summary: 'Interactive learning tracker with spaced repetition, streaks, and progress insights.',
    description: 'Spaced repetition learning tracker with streak heatmap and fast UI. Built with React + Vite + Tailwind. Deployed on Vercel.',
    repo: 'https://github.com/Sundog28/skillforge',
    tags: ['React','TypeScript','Tailwind','Vite','Vercel'],
    features: ['Spaced repetition','Streak heatmap','Local persistence','Deploy-ready'],
  },
  {
    slug: 'jobtrack-api',
    title: 'JobTrack API',
    summary: 'REST API for tracking applications, notes, tags, and pipelines.',
    description: 'Go + Postgres + JWT API; user-scoped CRUD for applications. Docker compose for DB.',
    repo: 'https://github.com/Sundog28/jobtrack-api',
    tags: ['Go','PostgreSQL','JWT','REST'],
    features: ['JWT auth','User-scoped CRUD','Migrations','Docker compose'],
  },
  {
    slug: 'ml-capstone',
    title: 'ML Capstone',
    summary: 'UCI Wine Quality EDA + modeling, feature engineering, model comparison.',
    description: 'EDA, pipelines, model training with ROC/PR plots and metrics summary. Optional XGBoost.',
    repo: 'https://github.com/Sundog28/ml-capstone',
    tags: ['Python','Pandas','scikit-learn','Matplotlib'],
    features: ['EDA','Pipelines','ROC/PR plots','Reproducible notebooks'],
  },
]
