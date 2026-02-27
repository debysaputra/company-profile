export type SkillCategory = {
  name: string
  emoji: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    emoji: '🎨',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    name: 'Backend',
    emoji: '⚙️',
    skills: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Prisma', 'REST API'],
  },
  {
    name: 'Tools & Platform',
    emoji: '🛠️',
    skills: ['Git', 'GitHub', 'Vercel', 'VS Code', 'Docker', 'Figma'],
  },
]
