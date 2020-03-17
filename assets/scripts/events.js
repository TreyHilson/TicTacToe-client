const api = require('./api.js')
const ui = require('./ui.js')
let turn = true
let play = true
const gameData = function (index, value, over) {
return {
    'game': {
      'cell': {
        'index': index,
        'value': value
      },
      'over': over
    }
  }
}

// Add a click handler for when a space on the game board is clicked
// If the user clicks on a valid space then add their X or O
const gameBoard = ['', '', '', '', '', '', '', '', '']

const restart = function () {
  for (let i = 0; i < 9; i++)
  { $('#' + i).text('')
    gameBoard[i] = ''
    $('#message').text('')
  }
  play = true
  turn = true
  api.startGame('{}')
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
  $('#board').removeClass()
  $('#change-password').addClass('hidden') }

const showChangePassword = function () {
  $('#change-password').removeClass()
  $('#board').addClass('hidden')
}
// create action to click listener
const clickOn = function (event) {
  const id = event.target.id
  // play effects gameboard functionality
  if (play) {
    // when its true = X , otherwise switch turn
    if (turn === true) {
      $('#message').html('PLAYER O TURN')
      if (gameBoard[id] === '') {
        gameBoard[id] = 'X'
        $('#' + id).text('X')
        $('#' + id).addClass('xmen')
        api.updateGame(gameData(id, 'X', !play))
          .then(ui.goodMove)
          .catch(ui.badMove)
        if (tie(gameBoard) === true) {
          $('#message').text('ITS A TIE GAME!!!')
        }
        if (winnerX(gameBoard)) {
          $('#message').text('X Wins the Game!!!')
          $('#L').addClass('hidden')
          $('#pika').removeClass()
          play = false
          api.updateGame(gameData(id, 'X', !play))
            .then(ui.goodMove)
            .catch(ui.badMove)
        }
        turn = false
      }
      else{
        ui.badMove()
      }
    }
    // Data for O variations
    else {
      if (gameBoard[id] === '') {
        $('#message').html('PLAYER X TURN')
        gameBoard[id] = 'O'
        $('#' + id).html('O')
        $('#' + id).addClass('oreo')
        api.updateGame(gameData(id, 'O', !play))
          .then(ui.goodMove)
          .catch(ui.badMove)
        if (tie(gameBoard) === true) {
          $('#message').text('ITS A TIE GAME!!!')
        }

        if (winnerO(gameBoard)) {
          $('#message').text('O Wins the Game!!!')
          $('#L').addClass('hidden')
          $('#pika').removeClass()
          play = false
        }
        turn = true
      }
      else { ui.badMove() }


    }
  }
}

// function for scoreCard
const scoreCard = function () {
api.scoreCard()
.then(ui.onScoreSuccessful)
.catch(ui.onScoreFailure)
}

// GameBoard ID
// [0, 1, 2]
// [3, 4, 5]
// [6, 7, 8]
const winnerX = function (arr) {
  if (arr[0] === 'X' && arr[1] === 'X' && arr[2] === 'X') { return true }
  if (arr[3] === 'X' && arr[4] === 'X' && arr[5] === 'X') { return true }
  if (arr[6] === 'X' && arr[7] === 'X' && arr[8] === 'X') { return true }
  if (arr[0] === 'X' && arr[3] === 'X' && arr[6] === 'X') { return true }
  if (arr[1] === 'X' && arr[4] === 'X' && arr[7] === 'X') { return true }
  if (arr[2] === 'X' && arr[5] === 'X' && arr[8] === 'X') { return true }
  if (arr[0] === 'X' && arr[4] === 'X' && arr[8] === 'X') { return true }
  if (arr[6] === 'X' && arr[4] === 'X' && arr[2] === 'X') { return true }
  return false
}

const winnerO = function (arr) {
  if (arr[3] === 'O' && arr[4] === 'O' && arr[5] === 'O') { return true }
  if (arr[6] === 'O' && arr[7] === 'O' && arr[8] === 'O') { return true }
  if (arr[0] === 'O' && arr[3] === 'O' && arr[6] === 'O') { return true }
  if (arr[1] === 'O' && arr[4] === 'O' && arr[7] === 'O') { return true }
  if (arr[2] === 'O' && arr[5] === 'O' && arr[8] === 'O') { return true }
  if (arr[2] === 'O' && arr[5] === 'O' && arr[8] === 'O') { return true }
  if (arr[0] === 'O' && arr[4] === 'O' && arr[8] === 'O') { return true }
  if (arr[6] === 'O' && arr[4] === 'O' && arr[2] === 'O') { return true }
  return false
}
// a tie - arrays if they are not empty
const tie = function (arr) {
  for (let tie = 0; tie < 9; tie++) {
    if (arr[tie] === '') {
      return false
    }
  }
  return true
}


// add winning arrays etc

module.exports = {
  api,
  ui,
  clickOn,
  gameBoard,
  restart,
  showChangePassword,
  scoreCard,
  tie



}
