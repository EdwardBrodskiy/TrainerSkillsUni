import { AvaliabilityTable, CalendarEvent, Course, Modules } from "./calendar"

export enum Role {
  Admin,
  Scheduler,
  Trainer,
  Consultant,
}

export class User {
  permission!: Role
  email!: string
  flag: boolean = false
  academy_location!: string
  name!: string
  profile_picture: string | undefined
}

export class Trainer extends User {
  permission : Role = Role.Trainer
  skills!: Modules[]
  avaliability!: AvaliabilityTable
  events: CalendarEvent[] = []
}

export class Consultant extends User {
  permission : Role = Role.Consultant
}

export class Admin extends User {
  permission : Role = Role.Admin
}

export class Scheduler extends User {
  permission : Role = Role.Scheduler
  working_courses : Course[] = []
   
}

export type Group = {
  name : string
  consultants : Consultant[]

}

