function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
  
  console.log(validateEmail("example@domain.com"));  // true
  console.log(validateEmail("invalid-email@com"));   // false
  console.log(validateEmail("another.example@domain.org")); // true