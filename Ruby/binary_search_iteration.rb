# Finds the index of inputed value with binary search
# First argument is the array, second is the value to search
# If value is not found, returns 'Not Found'

def binary_saerch arr, value
  low = 0
  high = arr.length - 1

  while low <= high
    mid = low + ((high - low)/2)

    if arr[mid] == value
      return mid
    elsif arr[mid] > value
      high = mid - 1
    else
      low = mid + 1
    end
  end

  return "Not Found"
      
end

# Test
test_arr = [1,3,5,9,11,15,19,23,29];
puts binary_saerch test_arr, 19
puts binary_saerch test_arr, 10