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

const arr = [
  [0, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 1, 0, 3],
  [4, 5, 6, 7],
  [1, 2, 3, 4]
]

zeroMatrix(arr)
console.log(arr)
