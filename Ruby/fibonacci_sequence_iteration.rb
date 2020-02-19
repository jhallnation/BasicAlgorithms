# Finds the value at the inputed index of the Fibonacci Sequence
# Takes one aurgument as the index
# No input validations 

def fibonacci_sequence index
  if index == 0 || index == 1
    return index
  else
    a = 0
    b = 1

    for i in 2..index
      c = a + b
      a = b
      b = c
    end

    return b
  end
end

# Tests
puts fibonacci_sequence 2
puts fibonacci_sequence 9
      