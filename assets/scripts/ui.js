const store = require('./store')

const newGameSuccess = function (data) {
  $('#message').html('New Game Started || Click any square to begin!')
  $('#message').removeClass()
  $('#message').addClass('message')
  store.game = data.game
  console.log('TESTTEST  = ', data.game)
}

const newGameFailure = function (data) {
  $('#message').html('New Game Failed!')
  $('#message').removeClass()
  $('#message').addClass('message')
}

const goodMove = function (data) {

}
const badMove = function () {
  $('#message').html('SQUARE ALREADY PLAYED')
  setTimeout(() => $('#message').text(''), 1300)
}

const onScoreSuccessful = function (data) {
  $('#lineOne').html('TOTAL GAMES PLAYED: ' + data.games.length)
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
  onScoreFailure,
  badMove

}
