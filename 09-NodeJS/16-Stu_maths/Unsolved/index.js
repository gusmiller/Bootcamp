// TODO: Import `maths.js`
const maths = require('./maths.js');
console.log(maths.difference(4,3));

// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
const args = process.argv;
console.log(args[3])

// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
