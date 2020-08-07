/*
= String Rotation

Assume you have a method isSubstring which checks if one word
is a substring of another.

Given two strings, sl and s2, write code to check if s2 is a
rotation of sl using only one call to isSubstring
(e.g. "waterbottle" is a rotation of "erbottlewat").

== Solution

Check is one string is the substring of 2 of the other strings
concatenated to each other. In addition, these two string need
to have the same length.

**Noted 'aaaa' and 'aaa'**
*/

const isSubstring = (str1, str2) => str2.includes(str1)

const isStringRotation = (str1, str2) => {
  return str1.length === str2.length && isSubstring(str1, str2 + str2)
}

console.log(isStringRotation('aaaa', 'aaa'))
