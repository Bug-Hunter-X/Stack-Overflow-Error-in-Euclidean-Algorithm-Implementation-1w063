# Stack Overflow Error in Euclidean Algorithm

This repository demonstrates a common error in recursive function implementations: stack overflow.  The provided JavaScript code implements the Euclidean algorithm to find the greatest common divisor (GCD) of two numbers.  While correct for smaller inputs, it fails with large inputs due to excessive recursive calls.

The solution demonstrates how to address this issue by using an iterative approach instead of recursion, preventing stack overflow errors.

## Bug

The `bug.js` file contains the recursive implementation of the Euclidean algorithm. When called with large numbers (e.g., `foo(1000000, 1)`), it leads to a stack overflow error.

## Solution

The `bugSolution.js` file provides an iterative solution to the GCD calculation, effectively avoiding the stack overflow problem.

## How to run

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in your preferred JavaScript environment.
3. Run the code in `bug.js` to observe the stack overflow error with large inputs.
4. Run the code in `bugSolution.js` to see the correct, stack overflow-safe solution.