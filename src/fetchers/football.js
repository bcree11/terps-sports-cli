const axios = require('axios')

module.exports = async (url) => {
  const results = await axios({
    method: 'get',
    url: url,
    params: {
      format: 'json'
    },
  })
  return results.data
}
