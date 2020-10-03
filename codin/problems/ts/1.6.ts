function stringCompression(str: string): string {
  const arr = Array.from(str)

  const result: (string | number)[] = []
  let prevChar: string | number = ''
  let prevCharCount: number = 0

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
