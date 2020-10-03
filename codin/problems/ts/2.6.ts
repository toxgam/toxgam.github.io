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

function recursiveCheck<T>(curr: LinkedList<T>, head: LinkedList<T>): [boolean, LinkedList<T>] {
  if (curr === null) return [true, head]

  const tmp = recursiveCheck(curr.next, head)

  return [tmp[0] && curr.data === tmp[1]!.data, tmp[1]!.next]
}

function isPalindrome<T>(head: LinkedList<T>) : boolean {
  return recursiveCheck(head, head)[0]
}

console.log(isPalindrome(toLinkedList([9, 1, 2, 1, 9])))
