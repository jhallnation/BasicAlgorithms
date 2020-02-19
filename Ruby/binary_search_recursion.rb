# Finds the index of inputed value with binary search
# First argument is the array
# Second is the low index value
# Third is the high index value
# Last is the value to search
# If value is not found, returns 'Not Found'
# No input validations 

def binary_search arr, low, high, value

  if low <= high
    mid = (low + ((high - low)/2)).round
    if arr[mid] == value
      return mid
    elsif arr[mid] > value
      binary_search arr, low, mid - 1, value
    else
      binary_search arr, mid + 1, high, value
    end
  else  
    return "Not Found"
  end


end

# Test
test_arr = [1,3,5,9,11,15,19,23,29];
puts binary_search test_arr, 0, test_arr.length - 1, 19
puts binary_search test_arr, 0, test_arr.length - 1, 10