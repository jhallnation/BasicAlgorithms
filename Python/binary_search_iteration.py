# Finds the index of inputed value with binary search
# First argument is the list, second is value to search
# If value is not found, returns 'Not Found'
# No input validations 

def binary_search(list, value):
  low = 0
  high = len(list) - 1

  while low <= high: 
    mid = low + ((high - low)//2)
    if list[mid] == value:
      return mid
    elif list[mid] > value: 
      high = mid - 1
    else:
      low = mid + 1

  return 'Not Found'

# Tests
test_list = [1,3,5,9,11,15,19,23,29];
print(binary_search(test_list,5))
print(binary_search(test_list,24))