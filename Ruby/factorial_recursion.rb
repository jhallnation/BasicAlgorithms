# Takes in a number and returns its factorial

def factorial num 
  if num == 0 || num == 1
    return 1
  end

  return num * factorial(num - 1)
end

# Tests
puts factorial 7
puts factorial 5