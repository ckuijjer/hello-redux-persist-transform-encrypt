import Cookies from 'universal-cookie'

const ENCRYPTION_KEY = 'persist:encryptionKey'

const cookies = new Cookies()

export const getEncryptionKey = () => cookies.get(ENCRYPTION_KEY) || ''

export const setEncryptionKey = ({ encryptionKey, maxAge = 60 }) =>
  cookies.set(ENCRYPTION_KEY, encryptionKey, { path: '/', maxAge })
