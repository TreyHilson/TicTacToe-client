const config = require('./config')
const store = require('./store')

const startGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token

    },
    data
  })
}




module.exports = {
startGame,
store

}
