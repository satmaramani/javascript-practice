function fizzBuzz(num, firstNum, secondNum)
{
  let multiplication = firstNum * secondNum;
  for(let i=1; i<=num; i++)
    {
      if(i % firstNum ==0 && i % secondNum ==0  && i !=0 && i !=firstNum && i !=secondNum)
       
        {
          console.log("FizzBuzz")
        }
      else if(i%secondNum==0 && i !=0)
        {
          console.log("Buzz")
        }
      else if(i%firstNum==0 && i !=0)
        {
          console.log("Fizz")
        }
      else
        {
          console.log(i)
        }
    }
}

fizzBuzz(32, 4, 8)