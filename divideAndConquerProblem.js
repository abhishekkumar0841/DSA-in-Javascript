// Question--> Give a sorted array of integers, write a function called search , that accepts a value and returns the index where the value passed to the function is located. If the value is not found , return -1

//NORMAL METHOD, generally used only in javascript
function search(arr, num) {
  return arr.indexOf(num);
}

console.log(search([-2, -1, 0, 1, 2, 3], 1));

//NORMAL METHOD, without using any built in methods **This is also know as linear search** Time complexity is O(N)
function search2(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

console.log(search2([-2, -1, 0, 1, 2, 3], 1));

// OPTIMIZED METHOD **Divide and Conquer approach**  Time complexity is LOG(N)
function search3(arr, val) {
  let min = 0;
  let max = arr.length - 1;
  while (max >= min) {
    let middle = Math.floor((min + max) / 2);
    let currEl = arr[middle];

    if (currEl < val) {
      min = middle + 1;
    } else if (currEl > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(search3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(search3([1, 2, 55, 333, 777, 888, 933, 999, 1000], 888));
console.log(search3([2,3,5,8,12,34,56,78,90,98,99,123,234,523], 123));
