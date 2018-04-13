import React from 'react'
import { Input, Button, Card } from 'antd'
import { expiresAfterSeconds } from './encryption'

export default class EncryptionCard extends React.Component {
  state = {
    encryptionKey: '',
    seconds: 60,
  }

  static getDerivedStateFromProps = ({ encryptionKey }) => ({ encryptionKey })

  changeEncryptionKey = e => {
    this.setState({ encryptionKey: e.target.value })
  }

  changeSeconds = e => {
    this.setState({ seconds: e.target.value })
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
          value={this.state.seconds}
          onChange={this.changeSeconds}
          style={{ marginBottom: 16 }}
        />
        <Button
          onClick={() =>
            onSetEncryptionKey({
              encryptionKey: this.state.encryptionKey,
              expires: expiresAfterSeconds(this.state.seconds),
            })
          }
        >
          Set Key
        </Button>
      </Card>
    )
  }
}
