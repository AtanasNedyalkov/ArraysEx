function solve(commands){
    let num = 1;
    let arr = [];
commands.forEach(command => {
    if(command=='add'){
        arr.push(num)
        num++;
    }
    else if (command=='remove'){
        arr.pop(num)
        num++;
   }
    
})
if (arr.length<=0)
console.log('Empty')
console.log(arr.join('\n'))
}
solve(['add',

'add',

'add',

'add'])
console.log('---------')
solve(['add', 'add', 'remove', 'add', 'add'])
console.log('---------')
solve(['remove', 'remove', 'remove'])