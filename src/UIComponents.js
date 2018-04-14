import styled from 'react-emotion'
import { Button as _Button, Card as _Card } from 'antd'

export const Button = styled(_Button)({
  flex: 1,
  margin: 8,
})

export const Card = styled(_Card)({
  width: 300,
  margin: 32,
})

export const ButtonGroup = styled('div')({
  display: 'flex',
  margin: -8,
  marginTop: 16,
})

export const Header = styled('div')({
  fontSize: 72,
  textAlign: 'center',
})
