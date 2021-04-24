"use strict";
// @ts-nocheck
// we can assign types to parameters
// TypeScript will infer that the return type is a number
// add : type after the paramters fo define the return type 
function add(n1, n2) {
    return n1 + n2;
}
// void return type -> it does not return anything - it does not have a return statement
function printResult(num) {
    console.log('result: ' + num);
}
// callback function example
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
// Function type example
// combineValues accepts a function that takes in 2 parameters as a number and returns a number
var combineValues;
combineValues = add;
// combineValues = printResult;
// combineValues = 5;
console.log(combineValues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
    return result;
});
