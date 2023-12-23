//First recursive function
function countDown(n){
    if(n <= 0){  //<--This is base case, important to dismiss recursive function call
        console.log("All done!");
        return;
    }

    console.log("n is-->", n);
    n--;
    countDown(n) //<--Recursive function call itself
}

countDown(5)

//Second recursive function
function sumRange(n){
    if(n === 1)  return 1;  //<--This is base case, important to dismiss recursive function call
    return n + sumRange(n - 1) //<--Recursive function call itself
}

const sumRangeResult = sumRange(4)
console.log(sumRangeResult);

//Third recursive function **FACTORIAL OF A NUMBER **
function factorial(n){
    if(n === 1) return 1;                       
    return n * factorial(n - 1)  // 5 * fact(4) --> 4 * fact(3) --> 3 * fact(2) --> 2 * fact(1) --> return 1
                                                                                            //Backtracking starts 👇👇
                //result = 120 <-- // 5 * 24 = return 120 <-- 4 * 6 = return 24 <-- 3 * 2 = return 6 <-- 2 * 1 = return 2
}

const factorialResult = factorial(5)
console.log(factorialResult);

//*****HELPER METHOD RECURSION****** */
//recursive function to collect odd values
function collectOddValues(arr){
    let oddVal = [];

    function helper(helperInput){
        if(helperInput.length === 0){
            return
        }

        if(helperInput[0] % 2 !== 0){
            oddVal.push(helperInput[0])
        }

        helper(helperInput.splice(1)) //<--It remove the zeroth index value and pass new from 1st index to last inside helperInput
    }

    helper(arr)

    return oddVal;
}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9]));

//*****PURE RECURSION****** */
function collectOddValues2(arr){
    let newArr = [];
    if(arr.length === 0){
        return newArr;
    }
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0])
    }
    newArr = newArr.concat(collectOddValues(arr.splice(1)))
    return newArr
}

console.log(collectOddValues2([1,2,3,4,5,6,7,8]));


