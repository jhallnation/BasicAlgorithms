// Finds the index of inputed value with binary search
// First argument is the array
// Second is the low index value
// Third is the high index value
// Last is the value to search
// If value is not found, returns 'Not Found'
// No input validations 

function binarySearch(arr, low, high, value) {

  if (low <= high) {
    var mid = Math.round(low + ((high - low)/2));
    if (arr[mid] == value) {
      return mid;
    } else if (arr[mid] > value) {
      binarySearch(arr, low, mid - 1, value);
    } else {
      binarySearch(arr, mid + 1, high, value);
    }
  }

  return 'Not Found'

}

// Tests
testArray = [1,3,5,9,11,15,19,23,29];
console.log(binarySearch(testArray, 0, testArray.length - 1, 11));
console.log(binarySearch(testArray, 0, testArray.length - 1, 25));