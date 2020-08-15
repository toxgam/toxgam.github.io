/*
= Palindrome Permutation

Given a string, write a function to check if it is a permutation of a palin­drome.
A palindrome is a word or phrase that is the same forwards and backwards
A permutation is a rearrangement of letters.
The palindrome does not need to be limited to just dictionary words.

Example
* Input: Tact Coa
* Output: true (permutations: "taco cat", "atco eta", etc.)

== Solution

Calculate the array of occurences for each character in the string.
Count number of character has odd occurences.
If it is not greater than 1, the string is permutation of palindrome.
*/

const isPalindromePermutation = (str) => {
  const occurences = {}

  for (const item of str) {
    if (item !== ' ') {
      const c = item.toUpperCase()

      if (!occurences[c]) occurences[c] = 1
      else occurences[c] += 1
    }
  }

  let countOdd = 0

  for (const key in occurences) {
    countOdd += occurences[key] % 2
  }

  return countOdd <= 1
}

console.log(isPalindromePermutation('Tact Coa'))
console.log(isPalindromePermutation('Tact Csoa'))
