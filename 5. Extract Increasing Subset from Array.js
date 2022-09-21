function solve(arr){
    let result = [];
    let biggestNum = arr.shift();
    result.push(biggestNum)
    for (let element of arr) {
        if(element>=biggestNum){
            result.push(element);
            biggestNum=element;
        }
    }
    return result;
}