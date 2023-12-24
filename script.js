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

//***************************************************************** */

//Count the characters occurrences only alphanumeric a-z A-Z or 0-9
function countChars(str) {
  let allStr = str.toLowerCase();
  let lookup = {};
  for (let i = 0; i < allStr.length; i++) {
    if(isAlphaNumeric(allStr[i])){
      lookup[allStr[i]] ? lookup[allStr[i]]++ : (lookup[allStr[i]] = 1);
    }
  }
  return lookup;
}

//this function only return the alphanumeric characters
function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && //numeric (0 - 9)
    !(code > 64 && code < 91) && //upper alpha (A - Z)
    !(code > 96 && code < 123) //lower alpha (a - z)
  ) {
    return false;
  }
  return true;
}

console.log(
  countChars("Count the characters occurrences @@only alphanumeric!!! is this correct or ### ---- not 😒😒")
);
