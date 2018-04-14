import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { increment, decrement } from './store/counter'

import { Button, Card, ButtonGroup, Header } from './UIComponents'

const Counter = ({ counter, increment, decrement }) => (
  <Card title="Counter">
    <Header>{counter}</Header>
    <ButtonGroup>
      <Button onClick={decrement}>-</Button>
      <Button onClick={increment}>+</Button>
    </ButtonGroup>
  </Card>
)

const mapStateToProps = ({ counter }) => ({ counter })

const mapDispatchToProps = dispatch =>
  bindActionCreators({ increment, decrement }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
