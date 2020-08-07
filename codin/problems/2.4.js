/*
= Partition

Write code to partition a linked list around a value x, such that
all nodes less than x come before all nodes greater than or equal to x.
If x is contained within the list, the values of x only need to be after
the elements less than x (see below).

The partition element x can appear anywhere in the "right partition";
it does not need to appear between the left and right partitions.

Example
* Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1[partition=5]
* Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

== Solution

Create a new linked list contains the element in left partition.
Create a new linked list contains the element in right partition.
Concat these two partition.
* Time complexity: O(n)
* Memory complexity: O(n)
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

const partition = (head, p) => {
  let leftHead = null
  let rightHead = null
  let leftTail = null

  let currentNode = head

  while (currentNode !== null) {
    if (currentNode.data < p) {
      leftHead = Object.assign({}, currentNode, {next: leftHead})

      if (leftTail === null) {
        leftTail = leftHead
      }
    } else {
      rightHead = Object.assign({}, currentNode, {next: rightHead})
    }

    currentNode = currentNode.next
  }

  leftTail.next = rightHead

  return leftHead
}

console.log(toArray(partition(toLinkedList([1, 2, 3, 1, 4, 2]), 3)))
