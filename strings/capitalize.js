

function checkLengthyStmt(statement)
{
  const eachWordArr = statement.split(" ");
  
  let biggestElementLength = 0, biggestElementName ='';
  let newArr = [];
  for(let i=0; i<eachWordArr.length; i++)
    {
      newArr.push(eachWordArr[i].toUpperCase())
    }
  return newArr;

  
}

const statement = "This is the biggest word in this line";
const result = checkLengthyStmt(statement);
  console.log(result)