// Finds the value at the inputed index of the Fibonacci Sequence
// Takes one aurgument as the index
// No input validations 

function fibonacciSequence(index) {
  if (index == 0 || index == 1) {
    return index;
  } else {
    return fibonacciSequence(index - 2) + fibonacciSequence(index -1)
  }
}

// Tests
console.log(fibonacciSequence(6));
console.log(fibonacciSequence(9));