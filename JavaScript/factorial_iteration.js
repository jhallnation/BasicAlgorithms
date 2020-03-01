// Takes in a number and returns its factorial

function factorial(num){

  if (num == 0 || num == 1) {
    return 1;
  }

  let a = num
  let b = a - 1

  while (b > 0) {
    a *= b;
    b--;
  }

  return a;
}

// Tests
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(0));