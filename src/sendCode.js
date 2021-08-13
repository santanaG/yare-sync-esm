import WebSocket from 'ws'
import namingHelper from './helpers/namingHelper.js'

const
  ws = game => new WebSocket(`wss://yare.io/d1/${game}`),
  { toSnakeCaseSendCode: toSnakeCase } = namingHelper

export default (code, { user, session }) => async game => await new Promise(resolve => {
  const
    session = ws(game),
    codeData = JSON.stringify(toSnakeCase(code, user, session))

  wsSession
    .on('open', _ => resolve(!(wsSession.send(codeData) || wsSession.close())))
    .on('error', _ => resolve(false))
})
