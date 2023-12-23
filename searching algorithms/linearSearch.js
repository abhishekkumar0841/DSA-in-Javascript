function search(arr, word){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === word){
            return i
        }
    }
    return -1
}

console.log(search(['abhi', 'shre', 'ravi', 'kavi'], 'abhi'));
console.log(search([4,5,2,6], 6));