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
