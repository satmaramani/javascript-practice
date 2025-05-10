

function checkLengthyStmt(statement)
{
  const eachWordArr = statement.split(" ");
  
  let biggestElementLength = 0, biggestElementName ='';
  
  for(let i=0; i<eachWordArr.length; i++)
    {
      if(eachWordArr[i].length > biggestElementLength)
        {
          biggestElementLength = eachWordArr[i].length;
          biggestElementName = eachWordArr[i];
        }
    }
  console.log(biggestElementLength)
  console.log(biggestElementName)
}

const statement = "This is the biggest word in this line";
checkLengthyStmt(statement);