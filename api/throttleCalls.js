function throttle(func, limit) {
    let inThrottle = false;
  
    return function (...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }
  
  const callAPI = () => {
    console.log("API called at", new Date().toISOString());
  };
  
  const throttledApiCall = throttle(callAPI, 2000); // max 1 call every 2 seconds
  
  // Simulate rapid calls
  setInterval(throttledApiCall, 2000); // tries every 500ms, but only fires every 2s
  
  