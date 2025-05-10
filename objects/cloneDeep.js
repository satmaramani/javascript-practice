let obj = { a: 1, b: { c: {d: 5} } }

//below function deep clones the object 
let obj2 = structuredClone(obj);

console.log(obj2)

obj2.a = 100;
obj2.b.c.d = 100;
console.log(obj)
console.log(obj2)