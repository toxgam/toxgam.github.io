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

const caseOneSol = (head) => {
  let currentNode = head
  let prevNode = null
  const flag = {}

  while (currentNode !== null) {
    if (flag[currentNode.data]) {
      prevNode.next = currentNode.next
    } else {
      flag[currentNode.data] = true
    }

    prevNode = currentNode
    currentNode = currentNode.next
  }

  return head
}

const caseTwoSol = (head) => {
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

console.log(toArray(caseOneSol(toLinkedList([1, 2, 3, 1, 4, 2]))))
console.log(toArray(caseTwoSol(toLinkedList([1, 2, 3]))))
