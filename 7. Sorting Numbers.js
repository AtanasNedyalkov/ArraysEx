function solve (arr){
    let newArr = [];
    let sortedArr =  arr.sort((a,b)=>a-b);
    for(let i = 0; i<=sortedArr.length+2; i++){
        let biggestNum = sortedArr[sortedArr.length-1]
        let smallestNum = sortedArr[0]
        //let middle = sortedArr.splice(sortedArr.length/2)
        newArr.push(smallestNum,biggestNum)
        sortedArr.shift(smallestNum)
        sortedArr.pop(biggestNum)
    
    }
    return newArr;
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]) // -3, 1, 3, 18, 31, 48, 52, 56, 63, 65
//    -3, 65, 1, 63, 3, 56, 18, 52, 31, 48    //-3, 65, 
