function solve(arr,numOfRotation){
    for(let i = 0; i<numOfRotation; i++){
        let lastIndex = arr[arr.length-1]
        arr.unshift(lastIndex)
        arr.pop(lastIndex)
       
    }
    console.log(arr.join(' '))
}
solve([10, 20 , 30 ,40], 2)