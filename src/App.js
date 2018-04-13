import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { CookiesProvider } from 'react-cookie'
import { Layout, Row, Col } from 'antd'

import store, { persistor } from './store'
import { getEncryptionKey, setEncryptionKey } from './encryption'

import Counter from './Counter'
import Todo from './Todo'
import EncryptionCard from './EncryptionCard'

const App = () => (
  <CookiesProvider>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Layout style={{ minHeight: '100vh' }}>
          <Layout.Content>
            <div style={{ maxWidth: 960, padding: 24, margin: '0 auto' }}>
              <Row gutter={24}>
                <Col span={8}>
                  <Counter />
                </Col>
                <Col span={8}>
                  <Todo />
                </Col>
                <Col span={8}>
                  <EncryptionCard
                    encryptionKey={getEncryptionKey()}
                    onSetEncryptionKey={setEncryptionKey}
                  />
                </Col>
              </Row>
            </div>
          </Layout.Content>
        </Layout>
      </PersistGate>
    </Provider>
  </CookiesProvider>
)

export default App
