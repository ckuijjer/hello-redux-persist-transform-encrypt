import Cookies from 'universal-cookie'
import moment from 'moment'

export const ENCRYPTION_KEY = 'persist:encryptionKey'
export const EXPIRES_AT = 'persist:expiresAt' // just for logging it to the UI

const cookies = new Cookies()

export const getEncryptionKey = () =>
  cookies.get(ENCRYPTION_KEY) || 'my secret key'

export const getEncryptionKeyExpiry = () => cookies.get(EXPIRES_AT)

export const expiresAfterSeconds = seconds => moment().add(seconds, 'seconds')

export const setEncryptionKey = ({
  encryptionKey,
  expires = expiresAfterSeconds(60),
}) => {
  cookies.set(ENCRYPTION_KEY, encryptionKey, {
    path: '/',
    expires: expires.toDate(),
  })
  cookies.set(EXPIRES_AT, expires, { path: '/', expires: expires.toDate() }) // just for logging it to the UI
}
