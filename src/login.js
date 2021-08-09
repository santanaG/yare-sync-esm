/* eslint-disable camelcase */
import axios from 'axios'

const [dun, dpw] = ['noUsername', 'noPassword']

const login = (user_name = dun, password = dpw) => axios
  .post('https://yare.io/validate', { user_name, password }, { timeout: 5000 })
  .catch(({ code }) => {
    console.log(`Login failed with ${code}`)
    console.log(`Username/Password: ${user_name}/${password}`)
    throw new Error('Login attempt failed!')
  })

export default async (un, pw) => {
  const { data: { user_id, data: session_id } } = await login(un, pw)

  return { user_id, session_id }
}
