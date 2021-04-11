import { Admin, Consultant, Course, Modules, Scheduler, Trainer, User } from './types'
import store from 'store'

export type Session = {
  userIndex?: number
  user?: User
  selectedCourse?: number
}

type Schema = {
  courses: Course[]
  locations: string[]
  users: User[]
  session: Session
}

export const setup_local_storage = () => {
  const defaults: Schema = {
    courses: [
      {
        name: 'test',
        module: Modules.Databases,
        description: 'this is a temporary test course',
        courseId: 'test123',
        enroled_groups: [],
        shedulers: [],
        events: [],
        eventTypes: [
          { name: 'Lecture', color: 'tomato' },
          { name: 'Lab', color: 'orange' },
          { name: 'Exam', color: 'purple' },
        ],
      },
    ],
    locations: ['London', 'HongKong', 'Paris'],
    users: [
      new Admin({ email: 'admin@outlook.com', academy_location: 'London', name: 'admin' }),
      new Scheduler({
        email: 'scheduler@outlook.com',
        academy_location: 'London',
        name: 'scheduler',
      }),
      new Trainer({ email: 'trainer@outlook.com', academy_location: 'London', name: 'trainer' }, [
        Modules.Databases,
      ]),
      new Consultant({
        email: 'consultant@outlook.com',
        academy_location: 'London',
        name: 'consultant',
      }),
    ],
    session: {},
  }
  let item: keyof typeof defaults
  for (item in defaults) {
    if (store.get(item) === undefined) {
      console.log(defaults[item])
      store.set(item, defaults[item])
    }
  }
}
