/*
= String Compression

Implement a method to perform basic string compression using the counts of
repeated characters.

For example, the string aabcccccaaa would become a2blc5a3.

If the "compressed" string would not become smaller than the original string,
your method should return the original string.

You can assume the string has only uppercase and lowercase letters (a - z).

== Solution

Go through each character of the string, check if it is the same as previous
one. If yes, increase the count. Otherwise, append the chracter and count to
result.
*/

const stringCompression = (str) => {
  const arr = Array.from(str)
  arr.push(' ') // Add a unique buffer character for ease of implementation

  const result = []
  let prevChar = undefined
  let prevCharCount = 0

  for (const e of arr) {
    if (e !== prevChar) {
      if (prevChar) {
        result.push(prevChar)
        result.push(prevCharCount)
      }

      prevChar = e
      prevCharCount = 1
    } else prevCharCount++
  }

  return result.join('')
}

console.log(stringCompression('aabcccccaaa'))
