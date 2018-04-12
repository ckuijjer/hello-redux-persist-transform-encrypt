import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { increment, decrement } from './store/counter'
import { Button, Card } from 'antd'

const Counter = ({ counter, increment, decrement }) => (
  <Card title="Counter">
    <div style={{ fontSize: 72, textAlign: 'center' }}>{counter}</div>
    <div style={{ display: 'flex' }}>
      <Button onClick={decrement} style={{ flex: 1 }}>
        -
      </Button>
      <Button onClick={increment} style={{ flex: 1, marginLeft: 16 }}>
        +
      </Button>
    </div>
  </Card>
)

const mapStateToProps = ({ counter }) => ({ counter })

const mapDispatchToProps = dispatch =>
  bindActionCreators({ increment, decrement }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
