
/* 
  Add your pseudocode here
  1. Remove all the non-numbers/letters characters from the word.
  2. The word should be converted to lowercase.
  3. Add two pointers by initialization at the beginning and at the end of the word.
  4. WHile the pointers have not crossed each other, so if the character at the pointers do not macth,
      move the left pointer forward and the right pointer backword.
  5. If all characters have been compared and they all match, return true.  
*/

/*
  Add written explanation of your solution here
  1. The first step is not ensure the word conforms to the set standards by removing any unwanted character 
  other than numbers or letters.
  2. Comparisons of the two words when read forward and backword through the use of the two pointers.
  3. If any characters do not match, then the word is not a palindrom, thus we reurn false.
  4. If all the conditions are met, the word is a palindrome and we retrun true. 
*/

// You can run `node index.js` to view these console logs
function isPalindrome(word) {
  // Write your algorithm here
  const refinedWord = word.replace(/[^a-zA-Z0-9]/g, " ").toLowerCase();
  let leftLetterOrNumber = 0;
  let rightLetterOrNumber = refinedWord.length -1;

  while (leftLetterOrNumber < rightLetterOrNumber){
    if (refinedWord[leftLetterOrNumber] !== refinedWord[rightLetterOrNumber]){
      return false;
    }
    leftLetterOrNumber++;
    rightLetterOrNumber--;
  }
  return true;
}
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
