
const arr = [1,2,3,3, 2, 1,10,1];

const newArr = [];
arr.map((element ) => {
//   console.log(index)
  if(!newArr.includes(element))
    {
    //   console.log( "I am here ", element)
      newArr.push(element);
      
    }
})

console.log(newArr)