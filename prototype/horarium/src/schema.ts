import { Admin, Consultant, Course, Role, Scheduler, Trainer, User } from './types'
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
        name: 'Databases_test',
        module: 'Databases',
        description: 'This is a description for Databases Module. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed iaculis ligula. Vestibulum ligula purus, sodales nec pretium vitae, gravida sed tortor. Mauris porttitor porttitor tortor sit amet dapibus. Proin ornare id purus vel egestas. Proin at libero lectus. Nam eget ultricies turpis. Praesent fermentum quam nunc, pulvinar consectetur eros laoreet vel. Aenean cursus mattis turpis sed accumsan. Phasellus pharetra lacus non hendrerit ornare.',
        courseId: '0',
        enrolled_groups: [
          { name: 'EECS', consultants: [] },
          { name: 'ASDF', consultants: [] },
        ],
        schedulers: [
          {permission: 1, working_courses:[], email: 'scheduler2@outlook.com', academy_location: 'London', name: 'scheduler2', flag: false },
        ],
        events: [],
        eventTypes: [
          { name: 'Lecture', color: 'tomato' },
          { name: 'Lab', color: 'orange' },
          { name: 'Exam', color: 'purple' },
        ],
      },
      {
        name: 'Accounting_test',
        module: 'Accounting',
        description: 'This is a description for Accounting Module. Nullam imperdiet fermentum sem sit amet consequat. Aenean tempus tristique commodo. Proin tincidunt, odio vitae egestas varius, massa purus cursus eros, non vulputate metus tellus nec augue. Phasellus vulputate ipsum non nulla ultricies porttitor. Etiam feugiat eget ante ut faucibus. Quisque id dui lacus. Phasellus quam risus, ullamcorper et consectetur in, mattis vitae tellus. Vestibulum vel pulvinar ex. Donec eu sapien purus. Nam sollicitudin lectus id varius varius. Sed mi arcu, ullamcorper at feugiat a, semper vitae mi.',
        courseId: '1',
        enrolled_groups: [
          { name: 'EECS', consultants: [] },
          { name: 'HJKL', consultants: [] },
        ],
        schedulers: [ 
          {permission: 1, working_courses:[], email: 'scheduler2@outlook.com', academy_location: 'London', name: 'scheduler2', flag: false },
        ],
        events: [],
        eventTypes: [
          { name: 'Lecture', color: 'red' },
          { name: 'Lab', color: 'green' },
          { name: 'Exam', color: 'blue' },
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
      new Trainer({ email: 'trainer@outlook.com', academy_location: 'London', name: 'trainer' }, ['Databases',]),
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
