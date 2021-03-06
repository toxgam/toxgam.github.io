function stringCompression(str) {
  const arr = Array.from(str)

  const result = []
  let prevChar = ''
  let prevCharCount = 0

  for (const e of arr) {
    if (e !== prevChar) {
      if (prevChar !== '') {
        result.push(prevChar)
        result.push(prevCharCount)
      }

      prevChar = e
      prevCharCount = 1
    } else {
      prevCharCount++
    }
  }

  if (prevCharCount > 0) {
    result.push(prevChar)
    result.push(prevCharCount)
  }

  return result.join('')
}

console.log(stringCompression('aabcccccaaa'))
