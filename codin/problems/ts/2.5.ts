type LinkedList = Node | null

type Node = {
  data: number
  next: LinkedList
}

function toLinkedList(arr: number[]): LinkedList {
  let head = null
  for (const item of arr.reverse()) {
    head = {data: item, next: head}
  }
  return head
}

function toArray(head: LinkedList): number[] {
  const result: number[] = []
  let currentNode = head

  while (currentNode !== null) {
    result.push(currentNode.data)
    currentNode = currentNode.next
  }

  return result
}

function getLength(head: LinkedList): number {
  let count = 0
  let currentNode = head

  while (currentNode !== null) {
    count++
    currentNode = currentNode.next
  }

  return count
}

function recursiveSum(place: number, curr1: LinkedList, curr2: LinkedList, diff: number): LinkedList {
  if (curr1 === null && curr2 === null) return null

  let nextResult: LinkedList
  let currData: number

  if (diff < 0 && place <= -diff) {
    nextResult = recursiveSum(place + 1, curr1, curr2!.next, diff)
    currData = curr2!.data
  } else if (diff > 0 && place <= diff) {
    nextResult = recursiveSum(place + 1, curr1!.next, curr2, diff)
    currData = curr1!.data
  } else {
    nextResult = recursiveSum(place + 1, curr1!.next, curr2!.next, diff)
    currData = curr1!.data + curr2!.data
  }

  const remain = (nextResult === null) ? 0 : Math.floor(nextResult.data / 10)
  const result = {data: currData + remain, next: nextResult}
  if (nextResult !== null) nextResult.data = nextResult!.data % 10
  return result
}

function sum(head1: LinkedList, head2: LinkedList) {
  const tmp1 = {data: 0, next: head1}
  const tmp2 = {data: 0, next: head2}
  const diff = getLength(tmp1) - getLength(tmp2)

  const result = recursiveSum(1, tmp1, tmp2, diff)
  return result!.data === 0 ? result!.next : result
}

console.log(toArray(sum(
  toLinkedList([9, 1, 4, 2]),
  toLinkedList([9, 9, 9])
)))
