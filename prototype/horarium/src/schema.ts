import { Course, Modules, Trainer, Role } from './types'
import store from 'store'

type Schema = {
  courses: Course[]
  locations: string[]
  trainers: Trainer[]
}

export const setup_local_storage = () => {
  const defaults: Schema = {
    courses: [
      {
        name: 'Databases_test',
        module: Modules.Databases,
        description: 'This is a description for Databases Module. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed iaculis ligula. Vestibulum ligula purus, sodales nec pretium vitae, gravida sed tortor. Mauris porttitor porttitor tortor sit amet dapibus. Proin ornare id purus vel egestas. Proin at libero lectus. Nam eget ultricies turpis. Praesent fermentum quam nunc, pulvinar consectetur eros laoreet vel. Aenean cursus mattis turpis sed accumsan. Phasellus pharetra lacus non hendrerit ornare.',
        courseId: '0',
        enroled_groups: [
          { name: 'EECS', consultants: [] },
          { name: 'ASDF', consultants: [] }, 
        ],
        shedulers: [],
        events: [],
        eventTypes: [
          { name: 'Lecture', color: 'tomato' },
          { name: 'Lab', color: 'orange' },
          { name: 'Exam', color: 'purple' },
        ],
      },
      {
        name: 'Accounting_test',
        module: Modules.Accounting,
        description: 'This is a description for Accounting Module. Nullam imperdiet fermentum sem sit amet consequat. Aenean tempus tristique commodo. Proin tincidunt, odio vitae egestas varius, massa purus cursus eros, non vulputate metus tellus nec augue. Phasellus vulputate ipsum non nulla ultricies porttitor. Etiam feugiat eget ante ut faucibus. Quisque id dui lacus. Phasellus quam risus, ullamcorper et consectetur in, mattis vitae tellus. Vestibulum vel pulvinar ex. Donec eu sapien purus. Nam sollicitudin lectus id varius varius. Sed mi arcu, ullamcorper at feugiat a, semper vitae mi.',
        courseId: '1',
        enroled_groups: [
          { name: 'EECS', consultants: [] },
          { name: 'HJKL', consultants: [] }, 
        ],
        shedulers: [],
        events: [],
        eventTypes: [
          { name: 'Lecture', color: 'red' },
          { name: 'Lab', color: 'green' },
          { name: 'Exam', color: 'blue' },
        ],
      },
    ],
    locations: ['London', 'HongKong', 'Paris'],
    trainers: [
      {
        name: 'trainer 1',
        email: 'asdf1234@gmail.com',
        flag: false,
        academy_location: 'London',
        profile_picture: 'none',
        permission: Role.Trainer,
        skills: [
          Modules.Databases,
          Modules.WebDev
        ],
        avaliability:{ 
          fixed: ['Monday','Tuesday','Wednesday'], 
          variable: ['Thursday','Friday', 'Saturday']
        },
        events: []
      },
      {
        name: 'trainer 2',
        email: '1234asdf@gmail.com',
        flag: false,
        academy_location: 'London',
        profile_picture: 'none',
        permission: Role.Trainer,
        skills: [
          Modules.Business,
          Modules.Accounting
        ],
        avaliability:{ 
          fixed: ['Thursday','Friday', 'Saturday','Sunday'], 
          variable: ['Monday','Tuesday','Wednesday']
        },
        events: []
      },
    ],
  }
  let item: keyof typeof defaults
  for (item in defaults) {
    if (store.get(item) === undefined) {
      console.log(defaults[item])
      store.set(item, defaults[item])
    }
  }
}
