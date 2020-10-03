type LinkedList<T> = Node<T> | null

type Node<T> = {
  data: T
  next: LinkedList<T>
}

function toLinkedList<T>(arr: T[], tail: LinkedList<T>): LinkedList<T> {
  let head = tail ? tail : null
  for (const item of arr.reverse()) {
    head = {data: item, next: head}
  }
  return head
}

function toCircleLinkedList<T>(arr: T[]): LinkedList<T> {
  let head: LinkedList<T> = null
  let tail: LinkedList<T> = null
  for (const item of arr.reverse()) {
    head = {data: item, next: head}
    if (tail === null) tail = head
  }
  tail!.next = head
  return head
}

function detectLoop<T>(head: LinkedList<T>) : LinkedList<T> {
  let currentNode: LinkedList<T> = head
  const flag: Set<T> = new Set()

  while (currentNode !== null) {
    if (flag.has(currentNode.data)) return currentNode
    else flag.add(currentNode.data)
    currentNode = currentNode.next
  }

  return null
}

const circle = toCircleLinkedList([1, 2, 3])
const list = toLinkedList([4, 5], circle)

const circleStart = detectLoop(list)
console.log(circleStart!.data)
