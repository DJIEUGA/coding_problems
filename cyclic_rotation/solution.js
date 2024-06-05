// function solution(A, K) {
//     // Implement your solution here
//     const N = A.length
//     if (K === 0) {
//         return;
//     }
//     const tmp = A[N - 1]
//     for (let i = N - 1; i > 0; i--) {
//         A[i] = A[i - 1]
//     }
//     A[0] = tmp
//     solution(A, K - 1)
//     return A
// }

// Function to calculate the greatest common divisor (GCD) using Euclid's algorithm
function gcd(a, b) {
  // Keep dividing until b becomes 0
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  // 'a' holds the GCD
  return a;
}

// Function to rotate the array 'nums' by 'k' positions to the right
function rotateArray(nums, k) {
  const n = nums.length;
  k = k % n; // Handle cases where k is larger than the length of the array
  if (k === 0) {
    return nums; // If k is 0, no rotation needed
  }

  // Calculate the number of cycles based on the GCD of 'n' and 'k'
  const cycles = gcd(n, k);

  // Perform rotation for each cycle
  for (let i = 0; i < cycles; ++i) {
    let start = i; // Start index of the current cycle
    let current = start; // Current index being processed
    let prev = nums[start]; // Store the value to be replaced
    while (true) {
      // Calculate the next index after rotation
      let nextIdx = (current + k) % n;
      // Swap the values and update 'prev' with the replaced value
      let temp = nums[nextIdx];
      nums[nextIdx] = prev;
      prev = temp;
      // Update 'current' to the next index
      current = nextIdx;
      // Break if the cycle completes (back to the start index)
      if (current === start) {
        break;
      }
    }
  }

  return nums; // Return the rotated array
}



console.log(rotateList([3, 8, 9, 7, 6], 1));
