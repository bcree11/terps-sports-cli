const axios = require('axios')

module.exports = async (location) => {
  const results = await axios({
    method: 'get',
    url: 'https://api.sportsdata.io/v3/cfb/scores/json/Games/2019?key=9bfa4a1538614f7a8538c39a32a4a381',
    params: {
      format: 'json'
    },
  })

  return results.data
}
