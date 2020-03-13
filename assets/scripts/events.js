const api = require('./api.js')
const ui = require('./ui.js')
let turn = true

// Add a click handler for when a space on the game board is clicked
// If the user clicks on a valid space then add their X or O
const gameBoard = ['', '', '', '', '', '', '', '', '']

const clickOn = function (event) {
  let id = event.target.id
  // when its true = X
  if (turn === true) {
    if (gameBoard[id] === '') {
      gameBoard[id] = 'X'
      console.log('return' + winnerX(gameBoard))
      $('#' + id).text('X')
      if (winnerX(gameBoard)) {$('#message').text('X Wins the Game!!!') }
      turn = false
    }

}
  else {
    if (gameBoard[id] === '') {
      gameBoard[id] = 'O'
      $('#' + id).text('O')
      if (winnerO(gameBoard)) { $('#message').text('O Wins the Game!!!') }
      turn = true
    }
  }
}
// GameBoard ID
// [0, 1, 2]
// [3, 4, 5]
// [6, 7, 8]
const winnerX = function (arr) { console.log('testing' + arr)
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

const winnerO = function (arr) { console.log('testing' + arr)
  if (arr[0] === 'O' && arr[1] === 'O' && arr[2] === 'O') { return true }
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


// add winning arrays etc

module.exports = {
  api,
  ui,
  clickOn,
  gameBoard
}
