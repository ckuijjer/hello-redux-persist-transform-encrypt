// Actions
const INCREMENT = 'counter/INCREMENT'
const DECREMENT = 'counter/DECREMENT'

// Reducer
export default function reducer(state = 0, action = {}) {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}

// Action Creators
export function increment() {
  return { type: INCREMENT }
}

export function decrement() {
  return { type: DECREMENT }
}
