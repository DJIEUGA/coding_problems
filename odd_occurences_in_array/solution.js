function solution(A) {
  const n = A.length;
  let result = 0;
  for (let i = 0; i < n; i++) {
    result ^= A[i];
  }
  return result;
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]))