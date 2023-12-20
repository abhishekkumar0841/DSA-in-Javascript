// Q. Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in an array?

//NORMAL METHOD
function maxSubarraySum(arr, n) {
  if (arr.length < n) return null;
  let max = -Infinity;
  for (let i = 0; i < arr.length - n + 1; i++) {
    temp = 0;
    for (let j = 0; j < n; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

console.log("maxSubarraySum", maxSubarraySum([9, 3, 4, 9, 9, 2, 3, 5], 3));

//OPTIMIZED METHOD
function maxSubarraySum2(arr, n) {
  let maxSum = 0;
  let tempSum = 0;
  if (n > arr.length) return null;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log("maxSubarraySum2", maxSubarraySum2([9, 3, 4, 1, 9, 9, 3, 5], 3));
