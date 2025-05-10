//this is example of right shifting 
const arr1 = [1,2,3, 4,5];

let shiftBy = 2;

const slicedArr = arr1.slice(0, shiftBy);// get first 2 elements in another array i.e. [1,2]
console.log(" This is Sliced Array ", slicedArr)
// console.log(arr1.shift());

for(let i=0; i<shiftBy; i++)
  {
  arr1.shift();    
  }

console.log(" Array shifted by 2 ", arr1)

//merge in reverse direction because we are shifting 
const output = [...arr1, ...slicedArr]
console.log(output)
