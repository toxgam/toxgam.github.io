/*
= Is Unique

 Implement an algorithm to determine if a string has all unique characters.
 What if you cannot use additional data structures?

== Solution

- In the first case, we will use a dictionary (or array) to mark if a character
of the string has appeared.
* Time complexity: O(n)
* Memory complexity: O(1)

- In the second case, we can either use nested for loop to check every pair of
characters for similarity.
* Time complexity: O(n^2)

- If we do not care for the mutation of input, we can sort input and check every
2 consecutive characters.
* Time complexity: O(nlogn)
*/

const caseOneSol = (str) => {
  // Dictionary used to mark if a character has appeared
  const flag = {}

  for (c of str) {
    // If character c has appeared, return true
    if (flag[c]) {
      return false
    }
    flag[c] = true
  }

  return true
}

const caseTwoSol = (str) => {
  const n = str.length

  for (i = 0; i < n; i++) {
    for (j = i + 1; j < n; j++) {
      if (str[i] === str[j]) return false
    }
  }

  return true
}

console.log(caseOneSol('asdve'))
console.log(caseTwoSol('asdve'))
