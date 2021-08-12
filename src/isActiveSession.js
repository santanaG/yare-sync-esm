import axios from 'axios'
import namingHelper from './helpers/namingHelper.js'

const { toSnakeCaseIsActive: toSnakeCase } = namingHelper

export default async ({ user, session }) => await axios
  .post('https://yare.io/session', toSnakeCase(user, session))
  .then(({ data: { username } }) => username === user)
  .catch(_ => false)
