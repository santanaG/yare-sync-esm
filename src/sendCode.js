import WebSocket from 'ws'
import namingHelper from './helpers/namingHelper.js'

const
  ws = game => new WebSocket(`wss://yare.io/d1/${game}`),
  { toSnakeCaseSendCode: toSnakeCase } = namingHelper

export default (code, { user, session }) => game => new Promise(resolve => {
  const wsSession = ws(game)
  const codeData = JSON.stringify(toSnakeCase(code, user, session))

  wsSession
    .on('open', _ => resolve(!(wsSession.send(codeData) || wsSession.close())))
    .on('error', _ => resolve(false))
})
