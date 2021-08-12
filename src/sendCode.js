/* eslint-disable camelcase */
import WebSocket from 'ws'

const ws = game => new WebSocket(`wss://yare.io/d1/${game}`)

export default (code, { user_id: u_id, session_id }) => async game => await new Promise(resolve => {
  const
    session = ws(game),
    codeData = JSON.stringify({ u_code: code, u_id, session_id })

  session
    .on('open', _ => resolve(!(session.send(codeData) || session.close())))
    .on('error', _ => resolve(false))
})
