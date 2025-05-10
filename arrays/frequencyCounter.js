function getFrequencyCounter(arr) {
    const frequency = {};
  
    for (const item of arr) {
      frequency[item] = (frequency[item] || 0) +1;
      // console.log(frequency[item])
      
    }
  
    return frequency;
  }
  
  const arr = ['1', '2', '1', '3', '5', '2', '5', '5', 'r', 'r'];
  const result = getFrequencyCounter(arr);
  
  console.log(result);