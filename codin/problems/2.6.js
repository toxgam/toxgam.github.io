/*
= Palindrome

Implement a function to check if a linked list is a palindrome.

== Solution

Use recursion to compare the tail with head.
*/

class Node {
  constructor(data, next) {
    this.data = data
    this.next = next
  }
}

const toLinkedList = (arr) => {
  let head = null
  for (const item of arr.reverse()) {
    head = new Node(item, head)
  }
  return head
}

const recursiveCheck = (curr, head) => {
  if (curr === null) return [true, head]

  const tmp = recursiveCheck(curr.next, head)

  return [tmp[0] && curr.data === tmp[1].data, tmp[1].next]
}

const isPalindrome = (head) => {
  return recursiveCheck(head, head)[0]
}

console.log(isPalindrome(toLinkedList([9, 1, 2, 1, 9])))
