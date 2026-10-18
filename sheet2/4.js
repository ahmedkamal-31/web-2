// Define an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Define a function to check if a number is even
function isEven(number) {
  return number % 2 === 0;
}

// Initialize an empty array to store the even numbers and their squares
const evenNumbers = [];

// Iterate through the numbers array
for (let num of numbers) {
  if (isEven(num)) {
    // Create an object storing the even number and its square
    const squareObject = {
      number: num,
      square: num * num
    };
    
    // Add the object to the evenNumbers array
    evenNumbers.push(squareObject);
  }
}

// Print the resulting array to the console
console.log(evenNumbers);