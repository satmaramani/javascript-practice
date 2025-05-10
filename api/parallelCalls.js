async function parallelExample() {
    const promise1 = fetch('https://jsonplaceholder.typicode.com/posts/1');
    const promise2 = fetch('https://jsonplaceholder.typicode.com/posts/2');
  
    const promise3 = fetch('https://jsonplaceholder.typicode.com/posts/3');
    
    const [res1, res2, res3] = await Promise.all([promise1, promise2, promise3]);
    
    const json1 =  res1.json();
    const json2 =  res2.json();
    const json3 =  res3.json();
    
    [output1, output2, output3] = await Promise.all([json1, json2, json3]);
    
    console.log(output1)
    console.log(output2)
    console.log(output3)
    console.log("All done in parallel");
  } 
  
  parallelExample();