import axios from 'axios'
import namingHelper from './helpers/namingHelper.js'

const [dun, dpw] = ['noUsername', 'noPassword']
const { toSnakeCaseLogin: toSnakeCase, toCamelCaseLogin: toCamelCase } = namingHelper

export default (userName = dun, password = dpw) => axios
  .post('https://yare.io/validate', toSnakeCase(userName, password), { timeout: 5000 })
  .then(toCamelCase)
  .catch(({ response }) => {
    console.log(`Login attempt failed with ${response?.statusText} status`)
    console.log(`Username/Password: ${userName}/${password}`)
  })
