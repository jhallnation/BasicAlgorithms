# Finds the value at the inputed index of the Fibonacci Sequence
# Takes one aurgument as the index
# No input validations 

def fibonacci_sequence(index):
  if index == 0 or index == 1:
    return index
  else:
    return fibonacci_sequence(index - 2) + fibonacci_sequence(index -1)

# Tests
print(fibonacci_sequence(5))
print(fibonacci_sequence(7))