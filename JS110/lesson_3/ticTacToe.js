const readline = require('readline-sync');
const EMPTY_SQUARE_MARKER = ' ';
const X_MARKER = 'X';
const O_MARKER = 'O';
const PLAYER = 'Player';
const PLAYER_ONE = `${PLAYER} 1`;
const PLAYER_TWO = `${PLAYER} 2`;
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

function displayBoardHeader(score, maxScore, isTwoPlayer = false) {
  console.clear();

  if (isTwoPlayer) {
    console.log(`${PLAYER_ONE} is ${X_MARKER}. ${PLAYER_TWO} is ${O_MARKER}`);
  } else {
    console.log(`You are ${X_MARKER}. ${COMPUTER} is ${O_MARKER}`);
  }

  if (maxScore > 1) displayScore(score, isTwoPlayer);
}

function displayScore(score, isTwoPlayer = false) {
  const playerOne = isTwoPlayer ? PLAYER_ONE : PLAYER;
  const playerTwo = isTwoPlayer ? PLAYER_TWO : COMPUTER;
  prompt('SCORE:');
  prompt(`${playerOne}: ${score.x} ${playerTwo}: ${score.o}`);
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

function playerChoosesSquare(board, marker = X_MARKER) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = readline.question().trim();

    if (emptySquares(board).includes(square)) break; // valid square

    prompt("Sorry, that's not a valid choice");
  }

  board[square] = marker;
}

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  let square = emptySquares(board)[randomIndex];
  board[square] = O_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

// eslint-disable-next-line max-lines-per-function
function detectWinner(board, playerX = PLAYER, playerO = COMPUTER) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // rows
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [ sq1, sq2, sq3 ] = winningLines[line];

    if (
      board[sq1] === X_MARKER &&
      board[sq2] === X_MARKER &&
      board[sq3] === X_MARKER
    ) {
      return playerX;
    } else if (
      board[sq1] === O_MARKER &&
      board[sq2] === O_MARKER &&
      board[sq3] === O_MARKER
    ) {
      return playerO;
    }
  }

  return null;
}

function displayWinOrTie(winner) {
  if (winner) {
    prompt(`${winner} wins!`);
  } else {
    prompt("It's a tie!");
  }
}

function isPlayingAgain() {
  prompt('Play again? (y or n)');

  return readline.question().toLowerCase()[0] === YES;
}

function displayBoardAndHeader(board, score, maxScore, isTwoPlayer) {
  displayBoardHeader(score, maxScore, isTwoPlayer);
  displayBoard(board);
}

function runGameLoop(
  board, score, maxScore, isTwoPlayer = false, playerOne, playerTwo,
) {
  while (true) {
    displayBoardAndHeader(board, score, maxScore, isTwoPlayer);

    playerChoosesSquare(board);
    displayBoardAndHeader(board, score, maxScore, isTwoPlayer);
    if (!!detectWinner(board, playerOne, playerTwo) || boardFull(board)) break;

    if (isTwoPlayer) {
      playerChoosesSquare(board, O_MARKER);
      displayBoardAndHeader(board, score, maxScore, isTwoPlayer);
    } else {
      computerChoosesSquare(board);
    }
    if (!!detectWinner(board, playerOne, playerTwo) || boardFull(board)) break;
  }

  return board;
}

function askIfPlaySeriesBestOfFive() {
  console.clear();

  prompt('Do you want to play a series best of 5?');

  return readline.question().toLowerCase()[0] === YES;
}

function askIfTwoPlayer() {
  prompt('Will this be a 1 or 2 player game?');

  return readline.question().toLocaleLowerCase()[0] === '2';
}

function updateScore(
  score, winner, playerX = PLAYER, playerO = COMPUTER
) {
  if (winner === playerX) {
    score.x += 1;
  } else if (winner === playerO) {
    score.o += 1;
  }
}

function minScoreToWin(maxScore) {
  if (maxScore % 2 === 0) {
    return (maxScore / 2) + 1;
  }

  return Math.ceil(maxScore / 2);
}

function detectSeriesWinner(
  score, maxScore, playerX = PLAYER, playerO = COMPUTER
) {
  if (score.x === minScoreToWin(maxScore)) {
    return playerX;
  } else if (score.o === minScoreToWin(maxScore)) {
    return playerO;
  }

  return null;
}

function displaySeriesWinner(seriesWinner, maxScore) {
  if (maxScore === SINGLE_GAME) return;

  prompt(`${seriesWinner} wins the series!`);
}

function initializeScore() {
  return { x: 0, o: 0 };
}

// Game control loop
while (true) {
  const maxScore = askIfPlaySeriesBestOfFive() ? SERIES_MAX : SINGLE_GAME;
  const isTwoPlayer = askIfTwoPlayer();
  const playerTwo = isTwoPlayer ? PLAYER_TWO : COMPUTER;
  const playerOne = isTwoPlayer ? PLAYER_ONE : PLAYER;
  let board = initializeBoard();
  let score = initializeScore();
  let gameWinner = null;
  let seriesWinner = null;

  displayBoardAndHeader(board, score, maxScore, isTwoPlayer);

  // Series loop
  while (true) {
    seriesWinner = detectSeriesWinner(score, maxScore, playerOne, playerTwo);

    if (seriesWinner) break;

    runGameLoop(
      board,
      score,
      maxScore,
      isTwoPlayer,
      playerOne,
      playerTwo,
    );

    gameWinner = detectWinner(board, playerOne, playerTwo);
    updateScore(score, gameWinner, playerOne, playerTwo);
    displayWinOrTie(gameWinner);

    board = initializeBoard();
  }

  displaySeriesWinner(seriesWinner, maxScore);

  if (!isPlayingAgain()) break;
}

prompt('Thanks for playing Tic Tac Toe!');