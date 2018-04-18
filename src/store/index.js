import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer, createTransform } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1'
import createEncryptor from 'redux-persist-transform-encrypt'

import { readFromCookie, storeInCookie, generate } from '../key'
import counter from './counter'

const reducers = combineReducers({
  counter,
})

const key = readFromCookie() || generate()

const encryptor = createEncryptor({
  secretKey: key,
  onError: err => {
    console.log(`redux-persist-transform-encrypt error: ${err}`)
  },
})

const myTransform = createTransform(state => {
  storeInCookie(key) // as a side effect store the cookie
  return state
}, state => state)

// If decryption fails redux-persist-transform-encrypt will return null. Here we'll simply remove those keys
// from the inboundState before passing it to redux-persists default stateReducer, thus making it return the originalState.
// A caveat is that this makes it impossible for a state that's null to be persisted properly. To fix this it might be an idea to
// have the onError option of createEncryptor keep track of for which keys the decryption failed, and to only remove those keys
// from the originalState.
const myStateReconciler = (inboundState, ...args) => {
  Object.entries(inboundState).forEach(([key, value]) => {
    if (value === null) {
      delete inboundState[key]
    }
  })

  return autoMergeLevel1(inboundState, ...args)
}

const persistConfig = {
  key: 'root',
  storage,
  transforms: [encryptor, myTransform], // persist is left to right, rehydrate is right to left
  stateReconciler: myStateReconciler,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export const persistor = persistStore(store)

export default store
