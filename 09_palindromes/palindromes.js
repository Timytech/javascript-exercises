const palindromes = function (str) {
    const str1 = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let str2 = str1.split("").reverse().join("");
    return (str1 === str2);
  };
  
console.log(palindromes('A car, a man, a maraca.'));
console.log(palindromes('ZZZZ car, a man, a maracaz.'));

  module.exports = palindromes;
  
  /*
  The regex /[^a-z0-9]/g matches any character is not a lowercase letter or digit;
  The replace() method returns a new string with all of these characters removed from the original string.
  The g (global) flag specifies that every occurrence of the pattern should be matched.
  */

// Do not edit below this line
module.exports = palindromes;
