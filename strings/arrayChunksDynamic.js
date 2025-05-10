function createChunk(arraySize, array)
{
  const newArr = [];
  for(let i=0; i<array.length; i+=arraySize)  
    {
      newArr.push(array.slice(i, i+arraySize))
    }
  
  console.log(newArr)
}

const array = [ 5, 3, 7, 4, 6];
const outputArr = createChunk(2, array);


const array1 = [ 15, 13, 17, 14, 16];
const outputArr1 = createChunk(3, array1);
