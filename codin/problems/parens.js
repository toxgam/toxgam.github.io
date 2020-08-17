/*
= Balanced parentheses

Check if the paretheses are balanced:
opening paretheses "(" have corresponding closing ones ")".

Examples:

* "()(()())": balanced
* "(()))": not balanced
* ")(": not balanced

== Solution

Create a number, initialize it to 0.

Scan each character of the string from left to right:
- Increase the number when "(" is met.
- Decrease the number when ")" is met.

Return false:
- If at the end, the number is not 0.
- If the number is negative even if it's not the end.
*/

function check(string) {
  let count = 0

  for (let i = 0; i < string.length; i++) {
    const char = string[i]

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
