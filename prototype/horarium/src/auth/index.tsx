import { useHistory } from 'react-router-dom'
import store from 'store'
import { Session } from '../schema'
import { Role } from '../types'

export const isAuth = () => {
  const session: Session = store.get('session')
  return session.userIndex !== undefined
}

export const isPermited = (role: Role) => {
  const session: Session = store.get('session')
  if (isAuth() && session.user) {
    return session.user.permission <= role
  }
  return false
}

export const AuthCourse = () => {
  const history = useHistory()
  const course = store.get('session').selectedCourse
  if (course !== undefined) {
    return course
  } else {
    history.push('/courses')
    window.location.reload()
  }
}
