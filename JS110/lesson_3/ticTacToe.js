const readline = require('readline-sync');
const EMPTY_SQUARE_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const PLAYER = 'Player';
const COMPUTER = 'Computer';
const SERIES_MAX = 5;
const SINGLE_GAME = 1;
const YES = 'y';

function displayBoard(board) {
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}  `);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}  `);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}  `);
  console.log('     |     |');
  console.log('');
}

function displayBoardHeader(score, maxScore) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  if (maxScore > 1) displayScore(score);
}

function displayScore(score) {
  prompt('SCORE:');
  prompt(`Player: ${score.x} Computer: ${score.o}`);
}

function joinOr(arr, delimiter = ', ', orDelimiter = 'or') {
  // replace last index value with the orDelimiter + value
  // then join on the delimiter
  let newArr = [...arr];

  if (arr.length === 2) {
    delimiter = ' ';
  }

  if (arr.length > 1) {
    let lastValue = newArr.slice(-1)[0];
    newArr.splice(-1, 1, `${orDelimiter} ${String(lastValue)}`);
  }

  return newArr.join(delimiter);
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = EMPTY_SQUARE_MARKER;
  }

  return board;
}

function prompt(text) {
  console.log(`-> ${text}`);
}

function emptySquares(board) {
  return Object.keys(board).filter((key) =>
    board[key] === EMPTY_SQUARE_MARKER
  );
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = readline.question().trim();

    if (emptySquares(board).includes(square)) break; // valid square

    prompt("Sorry, that's not a valid choice");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

// eslint-disable-next-line max-lines-per-function
function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // rows
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [ sq1, sq2, sq3 ] = winningLines[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return PLAYER;
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return COMPUTER;
    }
  }

  return null;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function displayWinOrTie(winner) {
  if (winner) {
    prompt(`${winner} won!`);
  } else {
    prompt("It's a tie!");
  }
}

function isPlayingAgain() {
  prompt('Play again? (y or n)');

  return readline.question().toLowerCase()[0] === YES;
}

function runGameLoop(board, score, maxScore) {
  while (true) {
    displayBoardHeader(score, maxScore);
    displayBoard(board);

    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
  }

  return board;
}

function playSeriesBestOfFive() {
  prompt('Do you want to play a series best of 5?');

  return readline.question().toLowerCase()[0] === YES;
}


function updateScore(score, winner) {
  if (winner === PLAYER) {
    score.x += 1;
  } else if (winner === COMPUTER) {
    score.o += 1;
  }

  score.gamesPlayed += 1;
}

function minScoreToWin(maxScore) {
  if (maxScore % 2 === 0) {
    return (maxScore / 2) + 1;
  }

  return Math.ceil(maxScore / 2);
}

function detectSeriesWinner(score, maxScore) {
  if (score.x === minScoreToWin(maxScore)) {
    return PLAYER;
  } else if (score.o === minScoreToWin(maxScore)) {
    return COMPUTER;
  }

  return null;
}

function displaySeriesWinner(seriesWinner, maxScore) {
  if (maxScore === SINGLE_GAME) return;

  prompt(`${seriesWinner} wins the series!`);
}

function initializeScore() {
  return { x: 0, o: 0, gamesPlayed: 0 };
}

// Game control loop
while (true) {
  let board = initializeBoard();
  let score = initializeScore();
  let gameWinner = null;
  let seriesWinner = null;
  let maxScore = playSeriesBestOfFive() ? SERIES_MAX : SINGLE_GAME;

  displayBoardHeader(score, maxScore);
  displayBoard(board);

  // Series loop
  while (true) {
    seriesWinner = detectSeriesWinner(score, maxScore);

    if (seriesWinner) break;

    runGameLoop(board, score, maxScore);

    gameWinner = detectWinner(board);
    updateScore(score, gameWinner);
    displayWinOrTie(gameWinner);

    board = initializeBoard();
  }

  displaySeriesWinner(seriesWinner, maxScore);

  if (!isPlayingAgain()) break;
}

prompt('Thanks for playing Tic Tac Toe!');