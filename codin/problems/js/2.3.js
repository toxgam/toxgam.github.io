class Node {
  constructor(data, next) {
    this.data = data
    this.next = next
  }
}

const toLinkedList = (arr) => {
  let head = null
  for (let item of arr.reverse()) {
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

const deleteMiddle = (head) => {
  let currentNode = head
  let length = 0

  while (currentNode !== null) {
    length++
    currentNode = currentNode.next
  }

  if (length <= 2) return head

  let i = 0
  let prevNode = null
  currentNode = head

  while (currentNode !== null) {
    if (i === length / 2) {
      prevNode.next = currentNode.next
      break
    }

    i++
    prevNode = currentNode
    currentNode = currentNode.next
  }

  return head
}

console.log(toArray(deleteMiddle(toLinkedList([1, 2, 3, 4, 5, 6]))))
