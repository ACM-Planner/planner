// Actions
const LOAD   = 'planner/courses/LOAD';
const CREATE = 'planner/courses/CREATE';
const UPDATE = 'planner/courses/UPDATE';
const REMOVE = 'planner/courses/REMOVE';

// Initial state
const INITIAL_STATE = {
  data: [],
};

// Reducer
export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default: return state;
  }
}

// Action Creators
export function loadCourses() {
  return { type: LOAD };
}

export function createCourse(course) {
  return { type: CREATE, course };
}

export function updateCourse(course) {
  return { type: UPDATE, course };
}

export function removeCourse(course) {
  return { type: REMOVE, course };
}

export function fetchCourses() {
  return dispatch => {
    return Promise.resolve([]).then(results => {
      results.forEach(result => dispatch(createCourse(result)));
    });
  };
}
