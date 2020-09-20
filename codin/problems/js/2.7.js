class Node {
  constructor(data, next) {
    this.data = data
    this.next = next
  }
}

const toLinkedList = (arr, tail) => {
  let head = tail ? tail : null
  for (const item of arr.reverse()) {
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

  for (let i = 0; i < len1 - len2; i++) {
    curr1 = curr1.next
  }

  for (let i = 0; i < len2 - len1; i++) {
    curr2 = curr2.next
  }

  return getIntersect(curr1, curr2)
}

const common = toLinkedList([1, 2, 3])
const list1 = toLinkedList([1, 2], common)
const list2 = toLinkedList([3, 1, 2], common)
console.log(intersect(list1, list2))
