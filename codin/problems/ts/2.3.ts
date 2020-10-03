type LinkedList<T> = Node<T> | null

type Node<T> = {
  data: T
  next: LinkedList<T>
}

function toLinkedList<T>(arr: T[]): LinkedList<T> {
  let head: LinkedList<T> = null
  
  for (let item of arr.reverse()) {
    head = {data: item, next: head}
  }
  return head
}

function toArray<T>(head: LinkedList<T>): T[] {
  const result: T[] = []
  let currentNode = head

  while (currentNode !== null) {
    result.push(currentNode.data)
    currentNode = currentNode.next
  }

  return result
}

function deleteMiddle<T> (head:LinkedList<T>): LinkedList<T> {
  let currentNode = head
  let length = 0

  while (currentNode !== null) {
    length++
    currentNode = currentNode.next
  }

  if (length <= 2) return head

  let i = 0
  let prevNode: LinkedList<T> = null
  currentNode = head

  while (currentNode !== null) {
    if (i === length / 2) {
      prevNode!.next = currentNode.next
      break
    }

    i++
    prevNode = currentNode
    currentNode = currentNode.next
  }

  return head
}

console.log(toArray(deleteMiddle(toLinkedList([1, 2, 3, 4, 5, 6]))))