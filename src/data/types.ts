export type Area = '데이터와 차트' | '웹 서비스' | '업무 자동화'

export interface Problem {
  title: string
  body: string
}

export interface Result {
  label: string
  before?: string
  after: string
  note?: string
}

export interface Shot {
  src: string
  alt: string
  caption: string
  narrow?: boolean
}

export interface Project {
  slug: string
  title: string
  area: Area
  period: string
  status?: string
  summary: string
  stack: string[]
  why: string[]
  did?: string[]
  usage?: string[]
  problems?: Problem[]
  process?: Problem[]
  results?: Result[]
  role?: string[]
  shots: Shot[]
  links?: { label: string; href: string }[]
  related?: { title: string; body: string }[]
}
