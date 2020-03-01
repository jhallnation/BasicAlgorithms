# Takes in a number and returns its factorial

def factorial(num):

  if num == 0 or num == 1:
    return 1

  a = num
  b = a - 1

  while b > 0:
    a *= b
    b -= 1

  return a

# Tests
print(factorial(4))
print(factorial(5))