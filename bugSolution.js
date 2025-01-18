function gcd(a, b) {
  while (b) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(gcd(12, 4)); // Output: 4
console.log(gcd(15, 5)); // Output: 5
console.log(gcd(25, 15)); // Output: 5
console.log(gcd(10, 6)); // Output: 2
console.log(gcd(9, 3)); // Output: 3

// This will not cause a stack overflow error
console.log(gcd(1000000, 1)); // Output: 1