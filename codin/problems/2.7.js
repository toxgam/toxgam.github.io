/*
= Intersection

Given two (singly) linked lists, determine if the two lists intersect.

Return the inter­ secting node.

Note that the intersection is defined based on reference, not value.

That is, if the kth node of the first linked list is the exact same node
(by reference) as the jth node of the second linked list, then they are
intersecting.

== Solution

Use recursion to compare the tails of two linked lists.
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

const getLength = (head) => {
  let count = 0
  let currentNode = head

  while (currentNode !== null) {
    count++
    currentNode = currentNode.next
  }

  return count
}

const getIntersect = (curr1, curr2) => {
  if (curr1 === curr2) return curr1
  return getIntersect(curr1.next, curr2.next)
}

const intersect = (head1, head2) => {
  const len1 = getLength(head1)
  const len2 = getLength(head2)

  let curr1 = head1
  let curr2 = head2

  for (i = 0; i < len1 - len2; i++) {
    curr1 = curr1.next
  }

  for (i = 0; i < len2 - len1; i++) {
    curr2 = curr2.next
  }

  return getIntersect(curr1, curr2)
}

const common = toLinkedList([1, 2, 3])
const list1 = toLinkedList([1, 2], common)
const list2 = toLinkedList([3, 1, 2], common)
console.log(intersect(list1, list2))
