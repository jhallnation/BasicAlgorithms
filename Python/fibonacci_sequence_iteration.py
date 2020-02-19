# Finds the value at the inputed index of the Fibonacci Sequence
# Takes one aurgument as the index
# No input validations 

def fibonacci_sequence(index):
  if index == 0 or index == 1:
    return index
  else:
    a = 0
    b = 1

    for i in range(index - 1):
      c = a + b
      a = b
      b = c

    return b

# Tests
print(fibonacci_sequence(6))
print(fibonacci_sequence(8))