import {foods} from "./foods";
export function filterFoods({query="",category="All"}:{query?:string;category?:string}){const term=query.toLowerCase().trim();return foods.filter(p=>(category==="All"||p.category===category)&&`${p.name} ${p.category} ${p.description} ${p.tags.join(" ")}`.toLowerCase().includes(term));}
