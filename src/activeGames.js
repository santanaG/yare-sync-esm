import axios from 'axios'

export default user => axios
  .get(`https://yare.io/active-games/${user}`)
  .then(({ data }) => data?.data === 'no active games' ? [] : data.data)
  .catch(_ => {
    console.log('There was an error with the request!')
    return []
  })
