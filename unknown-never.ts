// @ts-nocheck

// unknown type example

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max'

// you have to specify because if you just reassign, it will throw an error
if (typeof userInput === 'string') {
  userName = userInput
}

// never type example

function generateError(message: string, code: number): never {
  throw {message: message, errorCode: code};
}

const result = generateError('An error occured', 500)
console.log(result);