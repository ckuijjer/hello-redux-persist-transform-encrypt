import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import createEncryptor from 'redux-persist-transform-encrypt'

import counter from './counter'

const reducers = combineReducers({
  counter,
})

const encryptor = createEncryptor({
  secretKey: 'my-super-secret-key',
  onError: err =>
    console.error(`redux-persist-transform-encrypt error: ${err}`),
})

const persistConfig = {
  key: 'root',
  storage,
  transforms: [encryptor],
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store

export const persistor = persistStore(store)
