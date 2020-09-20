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
