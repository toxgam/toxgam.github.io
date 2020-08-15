/*
= One Away

There are three types of edits that can be performed on strings:
insert a character, remove a character, or replace a character.

Given two strings, write a function to check if they are one edit
(or zero edits) away.

EXAMPLE
- pale, ple -> true
- pales, pale -> true
- pale, bale -> true
- pale, bake -> false

== Solution

Count minimum number of delete of first string so that the occurences
of each character in 1st string is not greater than 2nd string.

Do similar count on 2nd string.

If both count is not larger than 1, return true.
Otherwise return false.
*/

const count = (str) => {
  const result = {}

  for (const c of str) {
    if (!result[c]) result[c] = 1
    else result[c] += 1
  }

  return result
}

const diff = (count1, count2) => {
  let result = 0

  for (const key in count1) {
    if (!count2[key]) result += count1[key]
    else result += Math.max(count1[key] - count2[key], 0)
  }

  return result
}

const isPalindromePermutation = (str1, str2) => {
  const count1 = count(str1)
  const count2 = count(str2)

  return diff(count1, count2) <= 1 && diff(count2, count1) <= 1
}

console.log(isPalindromePermutation('pale', 'bale'))
console.log(isPalindromePermutation('pale', 'balse'))
