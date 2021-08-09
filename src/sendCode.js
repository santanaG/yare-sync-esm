/* eslint-disable camelcase */
import WebSocket from 'ws'
import isActiveSession from './isActiveSession.js'

const ws = game => new WebSocket(`wss://yare.io/d1/${game}`)

export default (code, account) => async game => (
  await isActiveSession(account) && await new Promise(resolve => {
    const
      session = ws(game),
      { user_id: u_id, session_id } = account,
      codeData = JSON.stringify({ u_code: code, u_id, session_id })

    session
      .on('open', _ => resolve(!(session.send(codeData) || session.close())))
      .on('error', _ => resolve(false))
  })
)
