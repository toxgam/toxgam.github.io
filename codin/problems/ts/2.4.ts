type LinkedList = Node | null

type Node = {
  data: number
  next: LinkedList
}

function toLinkedList(arr: number[]): LinkedList {
  let head = null

  for (let item of arr.reverse()) {
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

function partition(head: LinkedList, p: number): LinkedList {
  let leftHead: LinkedList = null
  let rightHead: LinkedList = null
  let leftTail: LinkedList = null

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

  leftTail!.next = rightHead

  return leftHead
}

console.log(toArray(partition(toLinkedList([1, 2, 3, 1, 4, 2]), 3)))
