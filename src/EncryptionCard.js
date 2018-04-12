import React from 'react'
import { Input, Button, Card } from 'antd'

export default class EncryptionCard extends React.Component {
  state = {
    encryptionKey: '',
    maxAge: 60,
  }

  static getDerivedStateFromProps = ({ encryptionKey }) => ({ encryptionKey })

  changeEncryptionKey = e => {
    this.setState({ encryptionKey: e.target.value })
  }

  changeMaxAge = e => {
    this.setState({ maxAge: e.target.value })
  }

  render() {
    const { onSetEncryptionKey } = this.props

    return (
      <Card title="Encryption">
        Encryption Key:
        <Input
          value={this.state.encryptionKey}
          onChange={this.changeEncryptionKey}
          style={{ marginBottom: 16 }}
        />
        Max Age (expires in 𝓃 seconds):
        <Input
          value={this.state.maxAge}
          onChange={this.changeMaxAge}
          style={{ marginBottom: 16 }}
        />
        <Button
          onClick={() =>
            onSetEncryptionKey({
              encryptionKey: this.state.encryptionKey,
              maxAge: this.state.maxAge,
            })
          }
        >
          Set Key
        </Button>
      </Card>
    )
  }
}
