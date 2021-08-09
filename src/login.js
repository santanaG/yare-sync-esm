/* eslint-disable camelcase */
import axios from 'axios'

const [dun, dpw] = ['noUsername', 'noPassword']

export default async (user_name = dun, password = dpw) => await axios
  .post('https://yare.io/validate', { user_name, password }, { timeout: 5000 })
  .then(({ data: { user_id, data: session_id } }) => ({ user_id, session_id }))
  .catch(({ response }) => {
    console.log(`Login attempt failed with ${response?.statusText} status`)
    console.log(`Username/Password: ${user_name}/${password}`)
  })
