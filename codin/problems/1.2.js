/*
= Check Permutation

Given two strings, write a method to decide if one is a permutation of the
other.

== Solution

Calculate the occurences of each characters for both arrays and compare
these two array with each other
* Time complexity: O(n + m + c)
* Memory complexity: O(c)
(n, m is length of each string, c is number of distinct character)
*/

const count = (str) => {
  const result = {}

  for (const c of str) {
    if (!result[c]) result[c] = 1
    else result[c] += 1
  }

  return result
}

const isPermutation = (str1, str2) => {
  const count1 = count(str1)
  const count2 = count(str2)

  if (count1.length != count2.length) return false

  for (const key in count1) {
    if (!count2[key] || count1[key] !== count2[key]) return false
  }

  return true
}

console.log(isPermutation('asdvae', 'evdasa'))
console.log(isPermutation('asdvab', 'evdasa'))
