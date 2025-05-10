
const arr = [1,2,3,4,0,false,0,undefined, 4,5, 6, 7,8,1];

arr.splice(2,1);

console.log(arr)

const filteredArr = arr.filter(element =>  {if(element) return element})
console.log(" \n\n\n This is final filetered array ", filteredArr)