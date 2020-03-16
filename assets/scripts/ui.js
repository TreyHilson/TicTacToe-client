const store = require('./store')

const newGameSuccess = function (data) {
  $('#message').html('New Game Started!')
  $('#message').removeClass()
  $('#message').addClass('message')
  store.game = data.game
  console.log('TESTTEST  = ', data.game)
}

const newGameFailure = function (date) {
  $('#message').html('New Game Failed!')
  $('#message').removeClass()
  $('#message').addClass('message')
}

const goodMove = function (data) {

}

const onScoreSuccessful = function (data) {
  $('#lineOne').html('TOTAL GAMES PLAYED:' + data.games.length)
  $('#scoreBoard').removeClass()
}


const onScoreFailure = function (data) {
  $('#lineOne').html('COULDNT GET DATA')
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  goodMove,
  onScoreSuccessful,
  onScoreFailure

}
