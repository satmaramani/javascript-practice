function fizzBuzz(num)
{
  for(let i=1; i<=num; i++)
    {
      if(i %15 ==0 && i !=0 && i !=3 && i !=5)
       
        {
          console.log("FizzBuzz")
        }
      else if(i%5==0 && i !=0)
        {
          console.log("Buzz")
        }
      else if(i%3==0 && i !=0)
        {
          console.log("Fizz")
        }
      else
        {
          console.log(i)
        }
    }
}

fizzBuzz(30)