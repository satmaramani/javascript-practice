const arr1 = [1, 3,8,9];

const arr2 = [2,6,7,3, 9];
const intersectionArray = findComparision(arr1, arr2);

console.log("After Returning from Function ", intersectionArray)
function findComparision(arr1, arr2)
{
  if(arr1.length>0 && arr2.length>0)
    {
      let intersectionArr = [];
      arr1.map((element)=>{
        // console.log("XXX This is first iteration " , element)
        arr2.map((element2) => {
          // console.log("YYY This is Second iteration " , element2)
          if(element===element2)
            {
              console.log("ZZZZZZZZ This is Intersection " , element2)
              intersectionArr.push(element);
            }
        })
      })
      
      console.log(intersectionArr);
      return intersectionArr;
    }
  else
    {
      console.log("At least one array is empty, please provide good data")
    }
}