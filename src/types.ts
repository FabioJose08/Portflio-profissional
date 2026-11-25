export type Project = {
  id: string
  name: string
  category: string
  summary: string
  detailSummary?: string
  description: string
  objective?: string
  features?: string[]
  technologies?: string[]
  role?: string
  status: 'Concluído' | 'Em desenvolvimento' | 'Acadêmico' | 'Em atualização'
  image?: string
  github?: string
  demo?: string
}

export type Skill = {
  name: string
  category: string
  familiarity?: string
  description: string
  icon?: 'palette' | 'math' | 'engineering'
}

export type Achievement = {
  title: string
  description: string
  date?: string
  kind: 'education' | 'project' | 'course' | 'experience'
}

export type ContactConfig = {
  github: string
  linkedin: string | null
  instagram: string | null
  email: string | null
}
