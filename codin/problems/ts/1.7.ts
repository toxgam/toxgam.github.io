function rotateMatrix(arr: number[][]) {
  const n = arr.length

  for (let i = 0; i <= (n - 1) / 2; i++) {
    for (let j = 0; j <= (n - 1) / 2; j++) {
      const tmp = arr[i][j]
      arr[i][j] = arr[n - i - 1][j]
      arr[n - i - 1][j] = arr[n - i - 1][n - j - 1]
      arr[n - i - 1][n - j - 1] = arr[i][n - j - 1]
      arr[i][n - j - 1] = tmp
    }
  }
}

const arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 1, 2, 3],
  [4, 5, 6, 7]
]

rotateMatrix(arr)
console.log(arr)
