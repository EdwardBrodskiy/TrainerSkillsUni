import { Course, Modules } from './types'
import store from 'store'

type Schema = {
  courses: Course[]
  locations: string[]
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
  }
  let item: keyof typeof defaults
  for (item in defaults) {
    if (store.get(item) === undefined) {
      console.log(defaults[item])
      store.set(item, defaults[item])
    }
  }
}
