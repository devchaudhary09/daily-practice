// REVERSE STRING 

function revString(str){
  let reverse = "";
  for(let i = str.length-1; i >= 0; i--){
    reverse += str[i];
  }
  return reverse;
}
console.log(revString("hello"));

//___-----------____________________________________________________________________________________

/* 
A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

You are given an array of strings sentences, where each sentences[i] represents a single sentence.

Return the maximum number of words that appear in a single sentence.

 

Example 1:

Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]

Output: 6

Explanation:

- The first sentence, "alice and bob love leetcode", has 5 words in total.

- The second sentence, "i think so too", has 4 words in total.

- The third sentence, "this is great thanks very much", has 6 words in total.

Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.




Example 2:

Input: sentences = ["please wait", "continue to fight", "continue to win"]

Output: 3

Explanation: It is possible that multiple sentences contain the same number of words.

In this example, the second and third sentences (underlined) have the same number of words.

*/

var mostWordsFound = function(sentences) {
    let maxWords = 0;

    for (let sentence of sentences) {
        let spaces = 0;

        for (let char of sentence) {
            if (char === " ") {
                spaces++;
            }
        }

        let words = spaces + 1;
        if (words > maxWords) {
            maxWords = words;
        }
    }

    return maxWords;
};
console.log(mostWordsFound(["i love k", "i am in love with k"]))

//________________________________________________________________________________________________________

/*Asked In :

Google
Wallmart Labs
You have given a string , You have to add characters at start of string to make it a palindrome .

return the minimum number of characters required to add to make it a palindrome.



Example 1:

Input:

str = "abcd"

Output: 3

Explanation: Inserted character marked with bold characters in dcbabcd



Example 2:

Input:

str = "aa"

Output: 0

Explanation:"aa" is already a palindrome.
*/

function totaladd(s){
  let rev = s.split("").reverse().join("");

  for(let i = 0; i < s.length; i++){
    if(s.slice(i) === rev.slice(0, s.length-i)){
      return i;
    }
  }
  return s.length;
}
console.log(totaladd("abcd"));

//______________________________________________________________________________________________________________
/*
Given a String Extract all numbers from it and store it inside an array. Return the Array Once extraction is completed.



Note that if the string is "abc334vf" then the number is 334 and not 3,3,4 as individual numbers



Example 1:

Input:

str = "abc334v44d"

Output: [334, 44]



Example 2:

Input:

str = "abv345fjjf123tyir45jf6th"

Output: [345, 123, 45, 6]





Constraints:

1 ≤ |str| ≤ 10^4

str contains only alphabets and digits.



Hint:- Try to solve the question via ascii value concept.

Ascii value :-

'0' is 48

'1' is 49

..

'9' is 57



'a' ascii value is 97

'b' ascii value is 98

...



'A' ascii value is 65

'B' ascii value is 66

(Watch the hint video if stuck)

*/

























