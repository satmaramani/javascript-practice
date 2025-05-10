//calling function inside function in this method ()() 
function add(x) {
    return function(y) {
      return x + y;
    };
  }
  
  const add5 = add(5); // Creates a function that adds 5
  console.log(add5(10));  // Output: 15