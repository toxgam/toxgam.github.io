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

const getLength = (head) => {
  let count = 0
  let currentNode = head

  while (currentNode !== null) {
    count++
    currentNode = currentNode.next
  }

  return count
}

const recursiveSum = (place, curr1, curr2, diff) => {
  if (curr1 === null && curr2 === null) return null

  let nextResult
  let currData

  if (diff < 0 && place <= -diff) {
    nextResult = recursiveSum(place + 1, curr1, curr2.next, diff)
    currData = curr2.data
  } else if (diff > 0 && place <= diff) {
    nextResult = recursiveSum(place + 1, curr1.next, curr2, diff)
    currData = curr1.data
  } else {
    nextResult = recursiveSum(place + 1, curr1.next, curr2.next, diff)
    currData = curr1.data + curr2.data
  }

  const remain = (nextResult === null) ? 0 : Math.floor(nextResult.data / 10)
  const result = new Node(currData + remain, nextResult)
  if (nextResult !== null) nextResult.data = nextResult.data % 10
  return result
}

const sum = (head1, head2) => {
  const tmp1 = new Node(0, head1)
  const tmp2 = new Node(0, head2)
  const diff = getLength(tmp1) - getLength(tmp2)

  const result = recursiveSum(1, tmp1, tmp2, diff)
  return result.data === 0 ? result.next : result
}

console.log(toArray(sum(
  toLinkedList([9, 1, 4, 2]),
  toLinkedList([9, 9, 9])
)))
