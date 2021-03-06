const CLOSES = {
  '[': ']',
  '(': ')',
  '{': '}'
}

const OPENS = Object.keys(CLOSES)

function check(str) {
  const stack = []

  for (const c of str) {
    if (OPENS.includes(c)) {
      stack.push(c)
    } else if (stack.length === 0) {
      return false
    } else {
      const open = stack.pop()
      const close = CLOSES[open]
      if (c !== close) {
        return false
      }
    }
  }

  return stack.length === 0
}

console.log(check('{}'))
console.log(check(')('))
console.log(check('[(])'))
console.log(check('[()]{}{[()()]()}'))
