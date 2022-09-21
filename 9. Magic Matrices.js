function solve(matrix){
    let sumOfFirst = [];
    let sumOfsecond = [];
for (let i = 0; i<matrix.length-1; i++){
     sumOfFirst += matrix[i];
     sumOfsecond +=matrix[i+1]
     let sumOfCol = 0;
     let sumOfCol2 = 0;
     for (let j = 0; j<matrix[i].length; j++)
     {
        sumOfCol+=matrix[i][j];
        sumOfCol2+=matrix[i+1][j]
     }
     if(sumOfFirst!==sumOfsecond || sumOfCol!==sumOfCol2)
     return false;
}
return true;
}
solve([4, 5, 6],
      [6, 5, 4],
      [5, 5, 5])
