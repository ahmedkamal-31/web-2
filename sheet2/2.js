function countOccurrences(arr, element) {
  // Filter the array to only include matching elements, then return the length
  return arr.filter(item => item === element).length;
}

// Example usage:
const sampleArray = [1, 4, 2, 4, 5, 4, 8];
const targetElement = 4;
const count = countOccurrences(sampleArray, targetElement);

console.log(`The element ${targetElement} occurs ${count} times.`);