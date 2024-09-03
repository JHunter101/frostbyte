function smallestCommonDenominator(realNumbers: number[]): number {
  // Helper function to find the greatest common divisor (GCD) of two numbers
  function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b);
  }

  // Helper function to find the least common multiple (LCM) of two numbers
  function lcm(a: number, b: number): number {
    return (a * b) / gcd(a, b);
  }

  // Function to find the least common multiple (LCM) of an array of numbers
  function lcmArray(arr: number[]): number {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
      result = lcm(result, arr[i]);
    }
    return result;
  }

  // Find the least common multiple (LCM) of the denominators of all numbers
  const denominators = realNumbers.map((num) => {
    const decimalStr = String(num);
    const [, decimal] = decimalStr.split('.');
    return decimal ? Math.pow(10, decimal.length) : 1;
  });

  return lcmArray(denominators);
}
