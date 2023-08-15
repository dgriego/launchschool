const readline = require('readline-sync');
const messages = require('./mortgage_calculator_messages.json');
const colors = require('colors/safe');

const MONTHS_IN_YEAR = 12;

const prompt = (text) => {
  console.log(`\n${colors.bold('->')} ${colors.brightCyan.bold(text)}`);
};

const error = (text) => {
  console.log(colors.red(text));
};

const displayResult = (label, value) => {
  console.log(`${colors.yellow(label)}: ${colors.bold(value)}`);
};

const numberToCurrency = (number) => `$${number}`;

const addCommasToNumber = (number) => {
  if (number < 1000) {
    return number;
  }

  const numArr = String(number).split('.');
  const wholeNumberArr = numArr[0].split('');
  const decimal = numArr[1] ? numArr[1] : '00';
  let numWithCommasArr = [];
  let incrementer = 0;

  for (let idx = wholeNumberArr.length - 1; idx >= 0; idx -= 1) {
    incrementer += 1;
    numWithCommasArr[idx] = wholeNumberArr[idx];

    if (incrementer % 3 === 0) {
      numWithCommasArr.splice(idx, 0, ',');
    }
  }

  return `${numWithCommasArr.join('')}.${decimal}`;
};

const formatNumber = (number) => {
  number = number.toFixed(2);
  number = addCommasToNumber(Number(number));
  return numberToCurrency(number);
};

const validNumber = (number) => (
  number.trimStart() === '' || Number.isNaN(Number(number))
);

const getValidNumber = () => {
  let number = readline.question();
  while (validNumber(number)) {
    error(messages['error']['invalid_number']);
    number = readline.question();
  }

  return number;
};

const getNumberGreaterThanZero = () => {
  let number = getValidNumber();

  while (number <= 0) {
    error(messages['error']['greater_than_zero']);
    number = getValidNumber();
  }

  return Number(number);
};

const getWholeNumber = () => {
  let number = getValidNumber();

  while (number < 0) {
    error(messages['error']['negative_number']);
    number = getValidNumber();
  }

  return Number(number);
};

const calculateMonthlyPayment = (loanAmount, apr, loanDurationMonths) => {
  const percentToDecimal = apr / 100;
  const monthlyInterestRate = percentToDecimal / MONTHS_IN_YEAR;

  return loanAmount * (
    monthlyInterestRate /
    (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths)))
  );
};

while (true) {
  console.clear();

  const title = `${(' ').repeat(5)}${messages['title']}${(' ').repeat(5)}`;
  console.log(colors.bgBrightWhite.black(title));

  prompt(messages['question']['loan_amount']);
  let loanAmount = getNumberGreaterThanZero();

  prompt(messages['question']['apr']);
  const apr = getWholeNumber();

  prompt(messages['question']['loan_duration_years']);
  const loanDurationYears = getNumberGreaterThanZero();

  prompt(messages['question']['loan_duration_months']);
  let loanDurationMonths = getWholeNumber();
  loanDurationMonths += loanDurationYears * MONTHS_IN_YEAR;

  const monthlyPayment = calculateMonthlyPayment(
    loanAmount, apr, loanDurationMonths
  );
  const totalPayment = monthlyPayment * loanDurationMonths;
  const totalInterest = totalPayment - loanAmount;

  console.log('\n-----------------------------------');
  displayResult(messages['monthly_payment'], formatNumber(monthlyPayment));
  displayResult(
    `${messages['total_payment']} (${loanDurationMonths} months)`,
    formatNumber(totalPayment)
  );
  displayResult(messages['total_interest'], formatNumber(totalInterest));
  console.log('-----------------------------------');

  prompt(messages['question']['another_calculation']);
  let anotherCalculation = readline.question().toLowerCase();
  while (!['y', 'n'].includes(anotherCalculation)) {
    error(messages['error']['not_y_or_n']);
    anotherCalculation = readline.question().toLowerCase();
  }

  if (anotherCalculation === 'n') {
    console.log(colors.magenta('\nBye for now!\n'));
    break;
  }
}
