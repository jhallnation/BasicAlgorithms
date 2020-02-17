// Finds the value at the inputed index of the Fibonacci Sequence
// Takes one aurgument as the index
// No input validations 

function fibonacciSequence(index) {
  if (index == 0) {
    return 0;
  } else if (index == 1) {
    return 1;
  } else {
    let a = 0;
    let b = 1;

    for (var i = 1; i < index; i++) {
      var c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
}

// Tests
console.log(fibonacciSequence(5));
console.log(fibonacciSequence(7));