// Actions
const SET = 'todos/SET'

// Reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case SET:
      return [...action.todos]
    default:
      return state
  }
}

// Action Creators
export function setTodos(todos) {
  return { type: SET, todos }
}
