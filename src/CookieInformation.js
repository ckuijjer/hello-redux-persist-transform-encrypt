import React from 'react'
import { withCookies } from 'react-cookie'
import { Card } from 'antd'
import { ENCRYPTION_KEY, EXPIRES_AT } from './encryption'

class CookieInformation extends React.Component {
  state = {
    now: new Date(),
  }

  componentDidMount() {
    this.timer = window.setInterval(() => {
      this.setState({ now: new Date() })
    }, 1000)
  }

  componentWillUnmount() {
    window.clearInterval(this.timer)
  }

  render() {
    const { cookies } = this.props

    const encryptionCookie = cookies.get(ENCRYPTION_KEY)
    const expiresAt = cookies.get(EXPIRES_AT)
    const secondsLeft = Math.floor(
      (new Date(expiresAt) - this.state.now) / 1000,
    )

    return (
      <Card title="Cookie information">
        <div>cookie: {encryptionCookie}</div>
        <div>expires: {expiresAt}</div>
        <div>seconds left: {secondsLeft}</div>
      </Card>
    )
  }
}

export default withCookies(CookieInformation)
