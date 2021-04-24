"use strict";
// @ts-nocheck
// unknown type example
var userInput;
var userName;
userInput = 5;
userInput = 'Max';
// you have to specify because if you just reassign, it will throw an error
if (typeof userInput === 'string') {
    userName = userInput;
}
// never type example
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError('An error occured', 500);
console.log(result);
