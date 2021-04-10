import { AvaliabilityTable, CalendarEvent, Course } from './calendar'

export enum Role {
  Admin,
  Scheduler,
  Trainer,
  Consultant,
  Guest,
}

export type UserData = {
  email: string
  academy_location: string
  name: string
  profile_picture?: string
}

export class User {
  permission: Role = Role.Guest
  email: string
  flag: boolean = false
  academy_location: string
  name: string
  profile_picture?: string
  constructor({ email, academy_location, name, profile_picture }: UserData) {
    this.email = email
    this.academy_location = academy_location
    this.name = name
    this.profile_picture = profile_picture
  }
}
export class Admin extends User {
  permission: Role = Role.Admin
}

export class Scheduler extends User {
  permission: Role = Role.Scheduler
  working_courses: Course[] = []
}

export class Trainer extends User {
  permission: Role = Role.Trainer
  skills: string[]
  avaliability: AvaliabilityTable = { fixed: ['9:00', '18:00'], variable: [] }
  events: CalendarEvent[] = []
  constructor(user: UserData, skills: string[]) {
    super(user)
    this.skills = skills
  }
}

export class Consultant extends User {
  permission: Role = Role.Consultant
}

export type Group = {
  name: string
  consultants: Consultant[]
}
