function binarySearch(sortedArr, val) {
  let min = 0;
  let max = sortedArr.length - 1;
  while (max >= min) {
    let mid = Math.floor((min + max) / 2);
    let currVal = arr[mid];

    if(currVal < val){
        min = mid + 1;
    }else if(currVal > val){
        max = mid - 1;
    }else{
        return mid
    }
  } 
  return -1;
}

const arr = [
  "bhopal",
  "delhi",
  "goa",
  "indore",
  "kashmir",
  "kerela",
  "patna",
  "punjab",
];
console.log(binarySearch(arr, "patna"));

//this also works same as above, but it is shorter and also not clear read able.. prefer first one
function binarySearch2(arr, val){
    let start = 0; 
    let end = arr.length -1;
    let mid = Math.floor((start + end) / 2)
    while(arr[mid] !== val && start <= end){
        if(arr[mid] > val) end = mid - 1;
        else start = mid + 1;
        mid = Math.floor((start + end) / 2);
    }
    return arr[mid] === val ? mid : -1;
}
console.log(binarySearch2([1,3,4,5,6,7,8,11,22,33,44,55], 44));
                        // 0,1,2,3,4,5,6,7,8,9,10,11,12
                        // s           m              e