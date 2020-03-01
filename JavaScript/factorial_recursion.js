// Takes in a number and returns its factorial

function factorial(num){
  let a = num

  if (a > 1){
    return a * factorial(a - 1)
  }

  return 1;
}

// Tests
console.log(factorial(7));
console.log(factorial(5));
console.log(factorial(1));