function findMaxValue(arr) {
  if (arr.length === 0) return null;

  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Example usage:
const numbers = [5, 12, 8, 130, 44];
console.log(findMaxValue(numbers)); // Output: 130