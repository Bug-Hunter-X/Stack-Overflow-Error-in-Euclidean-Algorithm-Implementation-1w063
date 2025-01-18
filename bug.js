function foo(a, b) {
  if (a === b) {
    return true;
  } else if (a > b) {
    return foo(a - b, b);
  } else {
    return foo(a, b - a);
  }
}

console.log(foo(12, 4)); // Output: true
console.log(foo(15, 5)); // Output: true
console.log(foo(25, 15)); // Output: true
console.log(foo(10, 6)); // Output: true
console.log(foo(9, 3)); // Output: true

// This will cause a stack overflow error
console.log(foo(1000000, 1));