
const arr = [1,2,3,3,0,false,0,undefined, 4,5, 6, 7,8,1];

const unique = [...new Set(arr)];

console.log(unique)