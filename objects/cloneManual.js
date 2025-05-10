let source = { a: 1, b: {c: 10}};
let target = {};

for (let key in source) {
  if (source.hasOwnProperty(key)) {
    target[key] = source[key];
  }
}

console.log(target)