// src/components/skillforge/store.ts
import { Skill } from "./SkillCard";
const KEY="skillforge.skills.v1";
export function loadSkills():Skill[]{ try{ return JSON.parse(localStorage.getItem(KEY)||"[]"); }catch{return[];} }
export function saveSkills(skills:Skill[]){ localStorage.setItem(KEY, JSON.stringify(skills)); }
export const uid = ()=> Math.random().toString(36).slice(2,9);
