//NORMAL METHOD
function addTillN(nums) {
  let total = 0;
  for (let i = 0; i <= nums; i++) {
    total += i;
  }
  return total;
}

let t1 = performance.now();
console.log(addTillN(1000000000));

let t2 = performance.now();
console.log(`Timer stops: ${(t2 - t1) / 1000}`);

//OPTIMIZED METHOD for adding all nu
function addTillN2(n) {
  return (n * (n + 1)) / 2;
}

let t3 = performance.now();
console.log(addTillN2(1000000000));

let t4 = performance.now();
console.log(`Timer stops: ${(t4 - t3) / 1000}`);
