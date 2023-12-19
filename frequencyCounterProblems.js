// ******FREQUENCY COUNTERS problems*****
//QUESTION--> Write a function called same, which accepts two arrays . The function should return true if every value in the array has it's corresponding values squared in the second array. The of values must be the same.
// sample output--> same([1,2,3,4], [1, 16, 9, 4]) // true
// sample output--> same([1,2,3,4], [1, 9, 4]) // false
// sample output--> same([1,2,2,4], [1, 16, 16, 4]) // false

// ******NORMAL METHOD******
function same(a1, a2) {
  if (a1.length !== a2.length) {
    return false;
  }
  for (let i = 0; i < a1.length; i++) {
    let correctIndex = a2.indexOf(a1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    a2.splice(correctIndex, 1);
  }
  return true;
}

console.log(same([1, 2, 3, 4], [1, 16, 4, 9]));

// ******OPTIMIZE METHOD******
function same2(arr1, arr2) {
  let freqCounter1 = {};
  let freqCounter2 = {};
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let val of arr1) {
    freqCounter1[val] = (freqCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    freqCounter2[val] = (freqCounter2[val] || 0) + 1;
  }

  for (let key in freqCounter1) {
    if (!(key ** 2 in freqCounter2)) {
      return false;
    }
    if (freqCounter2[key ** 2] !== freqCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same2([1, 2, 3, 4], [1, 16, 4, 9]));

// QUESTION:->  Given two strings , write a function to determine if the second string is an anagram of the first. An anagram is the word, phrase, or named formed by rearranging the letters of another , such as cinema, formed as iceman.

function isAnAnagram(str1, str2) {
  let newStr1 = str1.toLowerCase();
  let newStr2 = str2.toLowerCase();

  if (newStr1.length !== newStr2.length) return false;

  let lookUp = {};
  for (let val of str1) {
    lookUp[val] ? (lookUp[val] += 1) : (lookUp[val] = 1);
  }

  for (let val of str2) {
    if (!lookUp[val]) {
      return false;
    } else {
      lookUp[val] -= 1;
    }
  }

  return true;
}

console.log(isAnAnagram("iceman", "cinema"));
