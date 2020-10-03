function urlify(chars: string[], len: number) {
  let countSpace = 0
  let endURL = 0

  for (const index of chars.keys()) {
    if (chars[index] === ' ') countSpace++
    else endURL = index
  }

  let trailingSpace = chars.length - endURL - 1
  let currentIndex = len + (countSpace - trailingSpace) * 2

  for (let i = endURL; i >= 0; i--) {
    if (chars[i] !== ' ') {
      chars[--currentIndex] = chars[i]
    } else {
      chars[--currentIndex] = '0'
      chars[--currentIndex] = '2'
      chars[--currentIndex] = '%'
    }
  }
}

const str = 'Mr John Smith'
const chars = Array.from(str + '    ')
urlify(chars, str.length)
console.log(chars)
