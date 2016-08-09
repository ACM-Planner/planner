import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import courses from '../modules/courses'

export default combineReducers({
  routing,
  courses,
})
