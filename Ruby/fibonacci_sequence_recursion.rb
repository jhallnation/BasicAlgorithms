# Finds the value at the inputed index of the Fibonacci Sequence
# Takes one aurgument as the index
# No input validations 

def fibonacci_sequence index
  if index == 0 || index == 1
    return index
  else
    return fibonacci_sequence(index - 2) + fibonacci_sequence(index - 1)
  end
end

# Tests
puts fibonacci_sequence 3
puts fibonacci_sequence 8