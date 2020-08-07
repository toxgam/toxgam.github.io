/*
= Loop Detection

Given a circular linked list, implement an algorithm that returns the node at
the beginning of the loop.

Definition:
Circular linked list: A (corrupt) linked list in which a node's next pointer
points to an earlier node, so as to make a loop in the linked list.

Example
* Input: A -> B -> C -> D -> E -> C[thesameCasearlier]
* Output: C

== Solution

Use a flag dictionary to store traversed nodes.
*/

class Node {
  constructor(data, next) {
    this.data = data
    this.next = next
  }
}

const toLinkedList = (arr, tail) => {
  let head = tail ? tail : null
  for (item of arr.reverse()) {
    head = new Node(item, head)
  }
  return head
}

const toCircleLinkedList = (arr) => {
  let head = null
  let tail = null
  for (item of arr.reverse()) {
    head = new Node(item, head)
    if(tail === null) tail = head
  }
  tail.next = head
  return head
}

const detectLoop = (head) => {
  let currentNode = head
  const flag = {}

  while (currentNode !== null) {
    if (flag[currentNode.data]) return currentNode
    else flag[currentNode.data] = true
    currentNode = currentNode.next
  }

  return null
}

const circle = toCircleLinkedList([1, 2, 3])
const list = toLinkedList([4, 5], circle)

console.log(detectLoop(list))
