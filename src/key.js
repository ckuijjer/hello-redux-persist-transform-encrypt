import Cookies from 'universal-cookie'
import moment from 'moment'

const COOKIE_NAME = 'persist:encryptionKey'
const EXPIRE_AFTER_SECONDS = 60

const cookies = new Cookies()

export const expireAfterSeconds = seconds =>
  moment()
    .add(seconds, 'seconds')
    .toDate()

export const readFromCookie = () => cookies.get(COOKIE_NAME)

export const storeInCookie = key => {
  cookies.set(COOKIE_NAME, key, {
    path: '/',
    expires: expireAfterSeconds(EXPIRE_AFTER_SECONDS),
  })
}

export const generate = () => Math.random().toString() // for demo only, don't use this in production
