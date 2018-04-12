import { createStore, combineReducers } from 'redux'
import counter from './counter'

const reducers = combineReducers({
  counter,
})

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store
