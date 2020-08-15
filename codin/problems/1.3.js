/*
= URLify

Write a method to replace all spaces in a string with '%20'.
You may assume that the string has sufficient space at the end to hold the
additional characters, and that you are given the "true" length of the string.

Example
Input:  "Mr John Smith    ", 13
Output: "Mr%20John%20Smith"

== Solution

Use two loop:
* First loop, count number of space to calculate the length of output
* Second loop, start from end of the string, ASSIGN each character into the
current output index

*/

const URLify = (str, len) => {
  const result = Array.from(str)

  let countSpace = 0
  let endURL = 0

  for (const index of result.keys()) {
    if (str[index] === ' ') countSpace++
    else endURL = index
  }

  let trailingSpace = str.length - endURL - 1
  let currentIndex = len + (countSpace - trailingSpace) * 2

  for (let i = endURL; i >= 0; i--) {
    if (str[i] !== ' ') {
      result[--currentIndex] = str[i]
    } else {
      result[--currentIndex] = '0'
      result[--currentIndex] = '2'
      result[--currentIndex] = '%'
    }
  }

  return result.join('')
}

console.log(URLify('Mr John Smith    ', 13))
