async function callApi()
{
  try{
    
    const response = await fetch("httpsd://jsonplaceholder.typicode.com/posts/1"); 
    const output = await response.json();   
    await setTimeout(()=>{
        console.log("inside setTimeout")
        console.log(output)
    }, 5000)
    
   
  }
  catch(e)
    {
        console.log(" This is error => ", e)      
      
        console.log("Retrying again \n \n")
        const response1 = await fetch("https://jsonplaceholder.typicode.com/posts/1");   
      const output1 = await response1.json(); 
      console.log(output1)   
    }
  finally
  {
    console.log("I am here in finally ")
  }
  
}

callApi();