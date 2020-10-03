type LinkedList<T> = Node<T> | null

type Node<T> = {
  data: T
  next: LinkedList<T>
}

function toLinkedList<T>(arr: T[]): LinkedList<T> {
  let head: LinkedList<T> = null

  for (const item of arr.reverse()) {
    head = {data: item, next: head}
  }

  return head
}

function caseOneSol<T>(head: LinkedList<T>): LinkedList<T> {
  let currentNode: LinkedList<T> = head
  let prevNode: LinkedList<T> = null
  const flag: Set<T> = new Set()

  while (currentNode !== null) {
    if (flag.has(currentNode.data)) {
      prevNode!.next = currentNode.next
    } else {
      flag.add(currentNode.data)
    }

    prevNode = currentNode
    currentNode = currentNode.next
  }

  return head
}

function caseTwoSol<T>(head: LinkedList<T>) {
  let currentNode = head

  while (currentNode !== null) {
    let runner = currentNode.next
    let prevRunner = currentNode

    while (runner !== null) {
      if (currentNode.data === runner.data) {
        prevRunner.next = runner.next
      }

      prevRunner = runner
      runner = runner.next
    }

    currentNode = currentNode.next
  }

  return head
}

console.log(caseOneSol(toLinkedList([1, 2, 3, 1, 4, 2])))
console.log(caseTwoSol(toLinkedList([1, 2, 3])))
