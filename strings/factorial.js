function factorial(num)
{
  let result = 1;
  for(let i=num; i>=1; i--)
    {
      result = result*i;
    }
  console.log(result);
  return result;
}

const val = 4
const result = factorial(val)
console.log("Factorial of ", val + " is " + result )