// eslint-disable-next-line max-lines-per-function
function processCommand({ command, stack, register }) {
  const newStack = stack.slice();

  switch (command) {
    case 'PUSH':
      newStack.push(register);
      break;
    case 'POP':
      register = newStack.length ? newStack.pop() : register;
      break;
    case 'ADD':
      register += newStack.pop() || 0;
      break;
    case 'SUB':
      register -= newStack.pop() || 0;
      break;
    case 'MULT':
      register *= newStack.pop() || 1;
      break;
    case 'DIV':
      register /= newStack.pop() || 1;
      register = Math.floor(register);
      debugger;
      break;
    case 'REMAINDER':
      register = newStack.length ? register % newStack.pop() : register;
      break;
    case 'PRINT':
      console.log(register);
      break;
  }

  return [newStack, register];
}

function minilang(program) {
  const commands = program.split(' ');
  let stack = [];
  let register = 0;

  commands.forEach((command) => {
    if (!Number.isNaN(Number(command))) {
      register = Number(command);
    } else {
      const [
        updatedStack,
        updatedRegister
      ] = processCommand({ command, stack, register });

      stack = updatedStack;
      register = updatedRegister;
    }
  });
}

// minilang('PRINT');
// minilang('5 PUSH 3 MULT PRINT');
// minilang('5 PUSH POP PRINT');
minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// minilang('-3 PUSH 5 SUB PRINT');
// minilang('6 PUSH');

// n : Place a value, n, in the register. Do not modify the stack.
// PUSH : Push the register value onto the stack.
//        Leave the value in the register.
// ADD : Pop a value from the stack and add it to the register value,
//       storing the result in the register.
// SUB : Pop a value from the stack and subtract it from the register value
//       , storing the result in the register.
// MULT : Pop a value from the stack and multiply it by the register value,
//        storing the result in the register.
// DIV : Pop a value from the stack and divide the register value
//       by the popped stack value, storing the
//       integer result back in the register.
// REMAINDER : Pop a value from the stack and divide the register value by
//             the popped stack value, storing the integer remainder
//             of the division back in the register.
// POP : Remove the topmost item from the stack and place it in the register.
// PRINT : Print the register value.

// implement one command at a time, first is adding the value to the register

// or set of instructions
// I operate on this set of instructions
// in a procedure like manner and perform the actions one at a time
// I will know what each command does and loop through the set of commands
// I will need to know if a value is a number or a command
//
// how can I determine if it's a number or a command?
// I can check if it's a command and if not it's a number
// OR I can exlicitly check with a regExp to make sure it's a valid number

// I initialize register
// initialize stack as an empty array
// split the program by spaces into an array

// loop through the program
// each number as it is, will get stored in the register
// then the proceeding command, if there is one,
// will determine what happens to the register value

// each value is added to the register
// preceeding commands determine what happes to the value in the register
// or what happes to that stack itself
