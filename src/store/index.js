import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer, createTransform } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import createEncryptor from 'redux-persist-transform-encrypt'

import { getEncryptionKey } from '../encryption'

import counter from './counter'
import todos from './todos'

const reducers = combineReducers({
  counter,
  todos,
})

const secretKey = getEncryptionKey()
console.log('🔑', secretKey)

const encryptor = createEncryptor({
  secretKey,
  onError: err => {
    console.error(`redux-persist-transform-encrypt error: ${err}`)
  },
})

const createLogger = (prefix, keyInterest) =>
  createTransform(
    (state, key) => {
      if (key === keyInterest) console.log(`${prefix} persist ${key}`, state)
      return state
    },
    (state, key) => {
      if (key === keyInterest) console.log(`${prefix} rehydrate ${key}`, state)
      return state
    },
  )

const nullStateRemover = createTransform(
  state => state, // when persisting don't do anything
  (state, key) => {
    if (key === 'counter' && state === null) {
      console.log('trying to remove the counter')
      return undefined
    } else {
      return state
    }
  },
)

const persistConfig = {
  key: 'root',
  storage,
  transforms: [
    createLogger('A', 'counter'),
    // nullStateRemover,
    encryptor,
    createLogger('B', 'counter'),
  ], // persist is left to right, rehydrate is right to left
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store

export const persistor = persistStore(store)
