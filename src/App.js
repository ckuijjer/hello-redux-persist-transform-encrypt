import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Layout, Row, Col } from 'antd'

import store, { persistor } from './store'
import Counter from './Counter'

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Layout style={{ minHeight: '100vh' }}>
        <Layout.Content>
          <div style={{ maxWidth: 960, padding: 24, margin: '0 auto' }}>
            <Row gutter={24}>
              <Col span={8}>
                <Counter />
              </Col>
            </Row>
          </div>
        </Layout.Content>
      </Layout>
    </PersistGate>
  </Provider>
)

export default App
