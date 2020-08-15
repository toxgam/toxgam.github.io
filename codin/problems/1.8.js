/*
= Zero Matrix

Write an algorithm such that if an element in an MxN matrix is 0,
its entire row and column are set to 0.

== Solution

Use flag for each row and column if there is a zero in it.

* First loop, complete 2 flag arrays for column and row.
* Second loop, set approriate element according to these arrays.
*/

const zeroMatrix = (arr) => {
  const m = arr.length
  const n = arr[0].length

  const containZeroCol = Array(m).fill(false)
  const containZeroRow = Array(n).fill(false)

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === 0) {
        containZeroRow[i] = true
        containZeroCol[j] = true
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (containZeroRow[i] || containZeroCol[j]) {
        arr[i][j] = 0
      }
    }
  }
}

arr = [
  [0, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 1, 0, 3],
  [4, 5, 6, 7],
  [1, 2, 3, 4]
]

zeroMatrix(arr)
console.log(arr)
