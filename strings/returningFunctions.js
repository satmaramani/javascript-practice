function outerFn()
{
  console.log(" This is Outer first layer")
  return function innerFirstLayerFn()
  {
    console.log("This is inner Layer first")
    return function thirdLayer()
    {
      console.log("This is last layer")  
      return function add(first, second)
      {
        const sum = first + second;
        console.log("this is param ", first, second, sum)
      }
        
    }
    
  }
}


const fn = outerFn()()();
console.log(fn(14, 30))