import WebSocket from 'ws'
import namingHelper from './helpers/namingHelper.js'

const
  ws = game => new WebSocket(`wss://yare.io/d1/${game}`),
  { toSnakeCaseSendCode: toSnakeCase } = namingHelper

export default (code, { user, session }) => async game => await new Promise(resolve => {
  const
    session = ws(game),
    codeData = JSON.stringify(toSnakeCase(code, user, session))

  session
    .on('open', _ => resolve(!(session.send(codeData) || session.close())))
    .on('error', _ => resolve(false))
})
