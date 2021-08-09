import axios from 'axios'

export default async uid => await axios
  .get(`https://yare.io/active-games/${uid}`)
  .then(({ data }) => data?.data === 'no active games' ? [] : data.data)
  .catch(_ => {
    console.log('There was an error with the request!')
    return []
  })
