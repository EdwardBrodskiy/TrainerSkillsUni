import { Admin, Consultant, Course, Scheduler, Trainer, User } from './types'
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
  modules: string[]
  session: Session
}
const locations = ['London', 'HongKong', 'Paris']

const modules = ['databases', 'accounting', 'managment', 'HR', 'programming']

const trainers = ['Alice', 'Bob', 'Charlie', 'Dan', 'Evan', 'Fred'].map(
  (name) =>
    new Trainer(
      {
        email: `${name}@outlook.com`,
        academy_location: locations[Math.round(Math.random() * (locations.length - 1))],
        name: name,
      },
      [modules[Math.round(Math.random() * (modules.length - 1))]],
    ),
)

export const setup_local_storage = () => {
  const defaults: Schema = {
    courses: [
      {
        name: 'test',
        module: modules[0],
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
        'databases',
        'programming',
        'accounting',
      ]),
      new Consultant({
        email: 'consultant@outlook.com',
        academy_location: 'London',
        name: 'consultant',
      }),
      ...trainers,
    ],
    modules: modules,
    session: {},
  }
  let item: keyof typeof defaults
  for (item in defaults) {
    if (store.get(item) === undefined) {
      store.set(item, defaults[item])
    }
  }
}
