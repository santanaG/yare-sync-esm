import axios from 'axios'

export default async ({ user_id: uid, session_id: sid } = {}) => await axios
  .post('https://yare.io/session', { user_id: uid, session_id: sid })
  .then(({ data: { username } }) => username === uid)
  .catch(_ => false)
