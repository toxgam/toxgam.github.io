type LinkedList<T> = Node<T> | null

type Node<T> = {
  data: T
  next: LinkedList<T>
}

function toLinkedList<T>(arr: T[]): LinkedList<T> {
  let head = null
  for (const item of arr.reverse()) {
    head = {data: item, next: head}
  }
  return head
}

function getLength<T>(head: LinkedList<T>): number {
  let count = 0
  let currentNode = head

  while (currentNode !== null) {
    count++
    currentNode = currentNode.next
  }

  return count
}

function getIntersect<T>(curr1: LinkedList<T>, curr2: LinkedList<T>): LinkedList<T> {
  if (curr1 === curr2) return curr1
  return getIntersect(curr1!.next, curr2!.next)
}

function intersect<T>(head1: LinkedList<T> , head2: LinkedList<T>): LinkedList<T> {
  const len1 = getLength(head1)
  const len2 = getLength(head2)

  let curr1 = head1
  let curr2 = head2

  for (let i = 0; i < len1 - len2; i++) {
    curr1 = curr1!.next
  }

  for (let i = 0; i < len2 - len1; i++) {
    curr2 = curr2!.next
  }

  return getIntersect(curr1, curr2)
}

const common = [1, 2, 3]
const list1 = toLinkedList([1, 2].concat(common))
const list2 = toLinkedList([3, 1, 2].concat(common))
console.log(intersect(list1, list2))
