//this is example of left shifting 
const arr1 = [1,2,3, 4,5, 6, 7,8];

let shiftBy = 2;

const slicedArr = arr1.slice(-shiftBy);// get first 2 elements in another array i.e. [1,2]
console.log(" This is Sliced Array ", slicedArr)
// console.log(arr1.shift());

for(let i=0; i<shiftBy; i++)
  {
    console.log(" here ")
  arr1.unshift();    
  }

console.log(" Array shifted by 2 ", arr1)

//merge in reverse direction because we are shifting 
const output = [...slicedArr, ...arr1]
console.log(output)

const newArr = output.slice(0,arr1.length)
console.log(newArr)
