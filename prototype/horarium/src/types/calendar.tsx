import { Group, Scheduler, Trainer } from './users'

export type Calendar = {
  courses: Course[]
}

export type Course = {
  name: string
  module: string
  description?: string
  courseId: string
  enrolled_groups: Group[]
  schedulers: Scheduler[]
  events: CalendarEvent[]
  eventTypes: CalendarEventType[]
}

export type CalendarEventType = {
  name: string
  color: string
}

export type CalendarEvent = {
  title: string
  description?: string
  type: CalendarEventType
  location: string
  start_time: string
  end_time: string
  trainer: Trainer
}

export type AvaliabilityTable = {
  fixed: string[]
  variable: string[]
}
