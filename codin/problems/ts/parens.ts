function check(str: string): boolean {
  let count = 0

  for (let i = 0; i < str.length; i++) {
    const char = str[i]

    if (char === '(')
      count++
    else if (char === ')')
      count--

    if (count < 0) return false
  }

  return count === 0
}

console.log(check('()(()())'))
console.log(check('(()))'))
console.log(check(')('))