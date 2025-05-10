//replace the vowels aeiou in the array with $$$ 

/*
converted string to array for looping through it
finding the match of vowels
replace the position of matched voewls with $$$
converting array to string as earlier

*/
const str = "abacdefghijklmnopqrstuvwxyz";
const arr = str.split("");
console.log(arr)
const vowels = ["a", "e", "i", "o", "u"]

for(let i=0; i<str.length; i++)
  {
    vowels.map((element, index) => {
      //if vowels matched
      if(element==str[i])
        {
          console.log("Matched ", element, i)
           arr[i] = "$$$"
        }
    })
  }

  const str1 = arr.join("")
console.log(str1)