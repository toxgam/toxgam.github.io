function check(string) {
  const stack = []

  for (const c of string) {
    if (c === '[' || c === '(' || c === '{') {
      stack.push(c)
    } else if (stack.length === 0) {
      return false
    } else {
      const open = stack.pop()

      if (c === ']' && open !== '[') {
        return false
      } else if (c === '}' && open !== '{') {
        return false
      } else if (c === ')' && open !== '(') {
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
