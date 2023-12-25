function sortNumberInc(a, b) {
  return a - b; //2 - 3 = -1 negative value so a comes before b , then a is 3 and b is 1 so 3 - 1 = 2 positive value so a comes after b...and so on........... 
}

console.log([2, 3, 1, 90, 88, 45, 999, 234, 7, 34].sort(sortNumberInc));

function sortStringLength(a, b) {
  return a.length - b.length;
}

console.log(
  ["all", "things", "in", "javascript", "is", "an", "object"].sort(
    sortStringLength
  )
);
