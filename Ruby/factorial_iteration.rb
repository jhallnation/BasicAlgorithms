# Takes in a number and returns its factorial

def factorial num

  if num == 0 || num == 1
    return 1
  end

  a = num
  b = a - 1

  while b > 0 
    a *= b
    b -= 1
  end

  return a

end

# Tests
puts factorial 4
puts factorial 3