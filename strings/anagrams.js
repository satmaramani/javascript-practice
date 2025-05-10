//check if anagrams means all letter are exactly overlappig or not 
const str1 = "evil"
const str2 = "live";

//convert to array and then sort and then join back
const str1ToArr = str1.split("").sort().join("");
const str2ToArr = str2.split("").sort().join("");

//if both matched that means they are anagrams
if(str1ToArr==str2ToArr)
  {
    console.log("Same")
  }
else
  {
    console.log("Differe")
  }
