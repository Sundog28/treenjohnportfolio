export type Skill = { id: string; name: string; progress: number };

const KEY = "skillforge.skills.v1";

export function loadSkills(): Skill[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

export function saveSkills(skills: Skill[]) {
  localStorage.setItem(KEY, JSON.stringify(skills));
}

export const uid = () => Math.random().toString(36).slice(2, 10);
