const arr1 = [1,2,3,false,0,undefined, 4,5, 6, 7,8];
const result = [];
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i]) {
    result.push(arr1[i]);
  }
  
}

console.log(result)