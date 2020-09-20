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
