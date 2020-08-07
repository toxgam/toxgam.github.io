/*
= Sum Lists

You have two numbers represented by a linked list, where each node
contains a single digit.

The digits are stored in reverse order, such that the 1's digit
is at the head of the list. Write a function that adds the two
numbers and returns the sum as a linked list.

Example
* Input: (7-> 1 -> 6) + (5 -> 9 -> 2). That is 617 + 295.
* Output: 2 -> 1 -> 9. That is 912.

Follow up
Suppose the digits are stored in forward order.
Repeat the above problem.

Exmaple
* Input: (6 -> 1 -> 7) + (2 -> 9 -> 5). That is 617 + 295.
* Output: 9 -> 1 -> 2. That is 912.

== Solution

Use recursion to calculate from the end.
*/

class Node {
  constructor(data, next) {
    this.data = data
    this.next = next
  }
}

const toLinkedList = (arr) => {
  let head = null
  for (item of arr.reverse()) {
    head = new Node(item, head)
  }
  return head
}

const toArray = (head) => {
  const result = []
  let currentNode = head

  while (currentNode !== null) {
    result.push(currentNode.data)
    currentNode = currentNode.next
  }

  return result
}

const getLength = (head) => {
  let count = 0
  let currentNode = head

  while (currentNode !== null) {
    count++
    currentNode = currentNode.next
  }

  return count
}

const recursiveSum = (place, curr1, curr2, diff) => {
  if (curr1 === null && curr2 === null) return null

  let nextResult
  let currData

  if (diff < 0 && place <= -diff) {
    nextResult = recursiveSum(place + 1, curr1, curr2.next, diff)
    currData = curr2.data
  } else if (diff > 0 && place <= diff) {
    nextResult = recursiveSum(place + 1, curr1.next, curr2, diff)
    currData = curr1.data
  } else {
    nextResult = recursiveSum(place + 1, curr1.next, curr2.next, diff)
    currData = curr1.data + curr2.data
  }

  const remain = (nextResult === null) ? 0 : Math.floor(nextResult.data / 10)
  const result = new Node(currData + remain, nextResult)
  if (nextResult !== null) nextResult.data = nextResult.data % 10
  return result
}

const sum = (head1, head2) => {
  const tmp1 = new Node(0, head1)
  const tmp2 = new Node(0, head2)
  const diff = getLength(tmp1) - getLength(tmp2)

  const result = recursiveSum(1, tmp1, tmp2, diff)
  return result.data === 0 ? result.next : result
}

console.log(toArray(sum(
  toLinkedList([9, 1, 4, 2]),
  toLinkedList([9, 9, 9])
)))
