{
  //
  function processArray(param: unknown): void {
    // Type guard to check if the parameter is an array of numbers
    const isArrayOfNumbers = (value: unknown): value is number[] =>
      Array.isArray(value) && value.every((item) => typeof item === "number");

    if (isArrayOfNumbers(param)) {
      // Calculate the sum of the numbers
      const sum = param.reduce((total, num) => total + num, 0);
      console.log(`The sum of the numbers is: ${sum}`);
    } else {
      console.log("Error: The provided parameter is not an array of numbers.");
    }
  }

  // Example usage:
  processArray([1, 2, 3, 4]); // Output: The sum of the numbers is: 10
  processArray(["one", 2, 3]); // Output: Error: The provided parameter is not an array of numbers.
  processArray(123); // Output: Error: The provided parameter is not an array of numbers.

  //
}
