import Cookies from 'universal-cookie'
import moment from 'moment'

export const ENCRYPTION_KEY = 'persist:encryptionKey'

const cookies = new Cookies()

const generateNewKey = () => Math.random().toString() // don't use this in production

export const getEncryptionKey = () =>
  cookies.get(ENCRYPTION_KEY) || generateNewKey()

export const expiresAfterSeconds = seconds => moment().add(seconds, 'seconds')

export const setEncryptionKey = ({
  encryptionKey,
  expires = expiresAfterSeconds(60),
}) => {
  cookies.set(ENCRYPTION_KEY, encryptionKey, {
    path: '/',
    expires: expires.toDate(),
  })
}
