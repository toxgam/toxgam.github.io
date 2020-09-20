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
