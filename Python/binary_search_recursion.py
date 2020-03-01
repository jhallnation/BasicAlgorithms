# Finds the index of inputed value with binary search
# First argument is the list
# Second is the low index value
# Third is the high index value
# Last is the value to search
# If value is not found, returns 'Not Found'
# No input validations 

def binary_search(list, low, high, value):

  if low <= high:
    mid = low + ((high - low)//2)
    if list[mid] == value:
      return mid
    elif list[mid] > value:
      return binary_search(list, low, mid - 1, value)
    else:
      return binary_search(list, mid + 1, high, value)
  else:
    return "Not Found"

# Tests
test_list = [1,3,5,9,11,15,19,23,29];
print(binary_search(test_list, 0, len(test_list) - 1, 5))
print(binary_search(test_list, 0, len(test_list) - 1, 24))