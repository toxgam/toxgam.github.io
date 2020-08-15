/*
= Return Kth to Last

Implement an algorithm to find the kth to last element of a singly
linked list.

== Solution

Use a runner pointer pointing to the kth next element from current
pointer. Loop through the runner is the last element, the current
pointer is the result.

**Noted: lined list has less than k elements**
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

const kthLast = (head, k) => {
  let runner = head

  for (let i = 0; i < k; i++) {
    if (runner === null) return null

    runner = runner.next
  }

  let currentNode = head

  while (runner !== null) {
    runner = runner.next
    currentNode = currentNode.next
  }

  return currentNode
}

console.log(kthLast(toLinkedList([1, 2, 3, 1, 4, 2]), 3))
console.log(kthLast(toLinkedList([1, 2]), 2))
console.log(kthLast(toLinkedList([1, 2, 3, 1, 4, 2]), 7))
