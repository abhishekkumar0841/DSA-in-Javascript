// Question:-> Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

//NORMAL METHOD --> Time complexity-> O(N^2) , Space complexity -> O(1)
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 4]));

//OPTIMIZED METHOD --> Time complexity-> O(N) , Space complexity -> O(1)
function sumZero2(arr) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  while (leftPointer < rightPointer) {
    let sum = arr[leftPointer] + arr[rightPointer];
    if (sum === 0) {
      return [arr[leftPointer], arr[rightPointer]];
    } else if (sum > 0) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }
}

console.log(sumZero2([-3, -2, -1, 0, 3, 4]));

// Question: -->Count unique values:-> Implement a function called countUniqueValues, which accept  sorted arrays, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

//NORMAL METHOD
function countUniqueValues(arr) {
  let count = 1;

  const unique = new Set();

  for (let i = 0; i < arr.length; i++) {
    unique.add(arr[i]);
  }

  return [...unique].length;
}

console.log(countUniqueValues([1, 2, 2, 3, 3, 3, 3, 4, 6]));

//OPTIMIZED METHOD
function countUniqueValues2(arr) {
  if (arr.length < 1) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues2([1, 2, 2, 3, 3, 3, 3, 4, 6]));
