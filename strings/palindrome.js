
var debug =0;
const reverseFatArrow = (str)=>{
    if(str.length==0)
      {
        console.log("Sring length is 0, can not proceed")
        return false;
      }
    else
      {
        let reversedStr = '';
        for(let i=(str.length-1); i>=0; i--)
          {
            if(debug==1)
            {
                console.log(i)
                console.log('This is individual string ', str[i])
            }
            reversedStr += str[i];
          }
        return reversedStr;
      }
    
  }
  
  let str = "aab";
  
  if(str.length >0)
  {
    if(str.length<=2)
    {
        console.log("Please enter bigger string than 2 characters");

    }
    else
    {
        const reverseStr = reverseFatArrow(str);
        console.log("This is a string => ", str);
        console.log("This is a Reverse string => ", reverseStr);
        if(reverseStr==str)
        {
            console.log("Yes its a palindrom")
        }
        else
        {
            console.log("Its not a palindrome")
        }
    }
    
  }
  else
  {
    console.log("Please enter some string contents")
  }
  
  