function indexOfFn(str, vowel)
{
 
  const arrResult = [];
  const obj = {};
  if(str.length>0)
  {
     let arrCount = 0;
    for(let i=0; i<str.length; i++)
      {
        if(str[i]==vowel)
          {
            // console.log(" I am inside this ", vowel, str)
            arrCount++;
          }
        
      }
    obj[vowel] = arrCount;
    
    
    
    }
  arrResult.push(obj)
  return arrResult;
  
}

const strToCheck = 'I am from India my name is sam';
const vowelsArr = ['a', 'e', 'i', 'o', 'u'];

vowelsArr.map((vowel)=>{
    const arrVowels = indexOfFn(strToCheck, vowel);
    console.log("Occurence of vowel "+ vowel + "="+arrVowels[0][vowel] + " Times")
  
})
