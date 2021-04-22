// we can assign types to parameters
// TypeScript will infer that the return type is a number
// add : type after the paramters fo define the return type 

function add(n1: number, n2: number): number {
  return n1 + n2
}

// void return type -> it does not return anything - it does not have a return statement

function printResult(num: number): void {
  console.log('result: ' + num);

}

// callback function example

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result)
  }
printResult(add(5, 12))

// Function type example
// combineValues accepts a function that takes in 2 parameters as a number and returns a number
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8))

addAndHandle(10, 20, (result) => {
  console.log(result)
  return result;
});