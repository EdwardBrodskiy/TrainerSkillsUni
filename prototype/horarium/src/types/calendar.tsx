import { Group, Scheduler } from './users'

export type Calendar = {
  courses: Course[]
}

export type Course = {
  name: string
  module: Modules
  description?: string
  courseId: string
  enroled_groups: Group[]
  shedulers: Scheduler[]
  events: Event[]
}

export type CalendarEvent = {
  title: string
  description?: string
  location: string
  start_time: string
  duration: string
  color: string // TODO: this is temporary
}

export type AvaliabilityTable = {
  fixed: string[]
  variable: string[]
}

export enum Modules {
  Databases,
  Accounting,
  WebDev,
  Business,
  // TODO: add more or make editiable
}
