Array.prototype.last = function() {
    return this[this.length - 1];
  };
  
  Array.prototype.first = function(){
    return this[0];
  }
  
  Object.prototype.first = function(keyName) {
    return this[keyName];
  }
  
  let nums = [9, 1, 2, 3, 5];
  console.log(nums.first()); 
  
  let obj = {'key' : "value", "key1" : "value2"}
  console.log(obj.first("key"))