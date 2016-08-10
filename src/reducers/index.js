import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import courses from '../modules/courses'
import currentUser from '../modules/current-user'

export default combineReducers({
  routing,
  currentUser,
  courses,
})
