type LinkedList<T> = Node<T> | null

type Node<T> = {
  data: T
  next: LinkedList<T>
}

function toLinkedList<T>(arr: T[]) : LinkedList<T> {
  let head: LinkedList<T> = null
  
  for (const item of arr.reverse()) {
    head = {data: item, next: head}
  }
  return head
}

function kthLast<T>(head: LinkedList<T>, k:number): LinkedList<T> {
  let runner = head

  for (let i = 0; i < k; i++) {
    if (runner === null) return null

    runner = runner.next
  }

  let currentNode = head

  while (runner !== null) {
    runner = runner.next
    currentNode = currentNode!.next
  }

  return currentNode
}

console.log(kthLast(toLinkedList([1, 2, 3, 1, 4, 2]), 3))
console.log(kthLast(toLinkedList([1, 2]), 2))
console.log(kthLast(toLinkedList([1, 2, 3, 1, 4, 2]), 7))
