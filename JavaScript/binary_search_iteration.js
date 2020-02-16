// Finds the index of inputed value with binary search
// First argument is the array, second is value to search
// If value is not found, returns 'Not Found'

function binarySearch(arr, value) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = low + ((high - low)/2);
    if (arr[mid] == value) {
      return mid;
    } else if (arr[mid] > value) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return 'Not Found'
}

// Tests
testArray = [1,3,5,9,11,15,19,23,29];
console.log(binarySearch(testArray,11));
console.log(binarySearch(testArray,25));