async function sequentialExample() {
    const response1 = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const response2 = await fetch('https://jsonplaceholder.typicode.com/posts/2');
    
    
    console.log(await response1.json())
    console.log(await response2.json())
    console.log("Both done sequentially");
  }
  
  
  sequentialExample();