import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Card, Select } from 'antd'

import { setTodos } from './store/todos'

const Todo = ({ todos, setTodos }) => (
  <Card title="Todo">
    <Select
      mode="tags"
      value={todos}
      onChange={setTodos}
      tokenSeparators={[',']}
      style={{ width: '100%' }}
    />
  </Card>
)

const mapStateToProps = ({ todos }) => ({ todos })

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setTodos }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
