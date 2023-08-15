const readline = require('readline-sync');
const VALID_CHOICES = [
  'rock', 'r', 'paper', 'p', 'scissors', 's', 'lizard', 'l', 'spock', 'sp'
];

function prompt(message) {
  console.log(`-> ${message}`);
}

function getChoiceValue(choice) {
  const wordRef = {
    r: 'rock',
    p: 'paper',
    s: 'scissors',
    l: 'lizard',
    sp: 'spock'
  };

  if (choice.length < 3) {
    return wordRef[choice];
  }

  return choice;
}

function win(choice, computerChoice) {
  const winningValuesRef = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['spock', 'paper'],
    spock: ['scissors', 'rock']
  };

  if (winningValuesRef[choice].includes(computerChoice)) {
    return true;
  }

  return false;
}

function displayChoices() {
  let displayStr = 'Choose one:';

  for (let idx = 0; idx < VALID_CHOICES.length; idx += 2) {
    displayStr += ` ${VALID_CHOICES[idx]}(${VALID_CHOICES[idx + 1]})`;
  }

  console.log(displayStr);
}

function determineWinner(choice, computerChoice) {
  if (win(choice, computerChoice)) {
    return 'player';
  } else if (choice === computerChoice) {
    return 'tie';
  } else {
    return 'computer';
  }
}

function grandWinner(winCountRef) {
  let winner = false;

  if (winCountRef.player === 5) {
    winner = 'player';
  } else if (winCountRef.computer === 5) {
    winner = 'computer';
  }

  return winner;
}

function displayGrandWinner(winner) {
  let winnerStr = '';

  if (winner === 'player') {
    winnerStr = 'You are';
  } else {
    winnerStr = 'The COMPUTER is';
  }

  prompt(`${winnerStr} the GRAND WINNER! Thanks for playing!`);
}

function displayWinner(winner) {
  switch (winner) {
    case 'player':
      prompt('You win!\n'.toUpperCase());
      break;
    case 'computer':
      prompt('Computer wins!\n'.toUpperCase());
      break;
    case 'tie':
      prompt("It's a tie\n".toUpperCase());
      break;
  }
}

function displayScore(winCountRef) {
  console.log('Score');
  console.log('-'.repeat(10));
  console.log(`Player: ${winCountRef.player}`);
  console.log(`Computer: ${winCountRef.computer}\n`);
}

function incrementWinCount(winner, winCountRef) {
  winCountRef[winner] += 1;
}

let winCount = {
  player: 0,
  computer: 0
};

while (true) {
  console.clear();

  console.log('First to 5 matches is the GRAND WINNER, good luck!\n');
  displayScore(winCount);
  displayChoices();
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  choice = getChoiceValue(choice);

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = getChoiceValue(VALID_CHOICES[randomIndex]);

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  const winner = determineWinner(choice, computerChoice);
  displayWinner(winner);
  incrementWinCount(winner, winCount);

  const grandWinnerVal = grandWinner(winCount);
  if (grandWinnerVal) {
    displayGrandWinner(grandWinnerVal);
    break;
  }

  prompt('Continue to next round(y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}
