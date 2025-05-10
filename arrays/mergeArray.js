//Array Merge

//first method  using concat 
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3=[];
let merged = arr1.concat(arr2);

console.log(merged)


//second Method using rest
arr1 = [1, 2], arr2 = [3, 4], arr3 = [5, 6], merged = [];

merged = Array.from([...arr1, ...arr2, ...arr3]);

console.log(merged)

//third method using rest inside array 
arr3 = [5, 6];
merged = [...arr1, ...arr2, ...arr3];

//fourth method - using push method 
arr1 = [1, 2];
arr2 = [3, 4];
arr1.push(...arr2);

//using reduce 
let arrays = [[1, 2], [3, 4], [5, 6]];
merged = arrays.reduce((acc, val) => acc.concat(val), []);

//flat method, one level deep only 
arrays = [[1, 2], [3, 4], [5, 6]];
merged = arrays.flat();  // Only works one level deep

//push method individually in one array two times 
arr1 = [1, 2], arr2 = [3, 4], merged = [];
for (let val of arr1) merged.push(val);
for (let val of arr2) merged.push(val);

console.log(merged)


//using array.from method 
merged = Array.from([...arr1, ...arr2]);