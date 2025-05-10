function closure()
{
  let counter = 0;
  return function inside()
  {
    counter = counter +1;
    return counter;
  }
}

let output = closure();
let val = output();
let val2 = output();
let val3 = output();

console.log(val);
console.log(val2);
console.log(val3)