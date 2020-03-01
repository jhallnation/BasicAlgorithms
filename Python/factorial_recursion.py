# Takes in a number and returns its factorial

def factorial(num):

  if num == 0 or num == 1:
    return 1

  return num * factorial(num - 1)

# Tests
print(factorial(3))
print(factorial(6))