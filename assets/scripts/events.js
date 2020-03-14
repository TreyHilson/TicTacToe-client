const api = require('./api.js')
const ui = require('./ui.js')
let turn = true
let play = true


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
.catch()
}
// create action to click listener
const clickOn = function (event) {
  const id = event.target.id
  // when its true = X , otherwise switch turn
  if (play) {
    if (turn === true) {
      if (gameBoard[id] === '') {
        gameBoard[id] = 'X'
        $('#' + id).text('X')
        if (winnerX(gameBoard)) {
          $('#message').text('X Wins the Game!!!')
          play = false
        }
        turn = false
      }
    }
    else {
      if (gameBoard[id] === '') {
        gameBoard[id] = 'O'
        $('#' + id).text('O')
        if (winnerO(gameBoard)) {
          $('#message').text('O Wins the Game!!!')
          play = false
        }
        turn = true
      }
    }
  }
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
  console.log('testing' + arr)
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
  gameBoard,
  restart

}
