import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import store, { persistor } from './store'
import Counter from './Counter'

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Counter />
    </PersistGate>
  </Provider>
)

export default App
