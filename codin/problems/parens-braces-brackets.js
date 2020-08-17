/*
= Balanced parentheses, braces, and brackets

Check if the paretheses, curly braces, and square brackets are balanced:
opening ones "(", "{", "[" have corresponding closing ones ")", "}", "]".

Examples:

* "[()]{}{[()()]()}" balanced
* "[(])" not balanced
* ")(": not balanced

== Solution

Use a stack to keep track of the opening ones.

Scan each character of the string from left to right:
- If the character is an open one, push it to the stack.
- If the character is a close one, pop one opening character from the stack.
- If the popped open character doesn't match the open close one,
  return false immediately.
- Also return false immediately if the stack is empty when we try to pop.
- At the end, return false if the stack is non-empty.

Note: We cannot simply use 3 numbers to keep track of the opening ones.
*/

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
