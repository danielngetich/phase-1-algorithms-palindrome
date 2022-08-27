function isPalindrome(word) {
  const palidrome=word.split("");
  const reversed=palidrome.reverse().join("")
if (word===reversed){
  return true
}else{
  return false
}
}

/* 
  if word is palidrome return true 
  else return false
*/

/*
  a function that takes a word and return true if that word is read the same forward and backwards
  and return false if it cant 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
