/*
= Rotate Matrix

Given an image represented by an NxN matrix, where each pixel in the image
is 4 bytes, write a method to rotate the image by 90 degrees.
Can you do this in place?

== Solution

Rotate the pixel such that:
(i, j) -> (i,  n - j - 1) -> (n - i - 1, n - j - 1) -> (n - i - 1, j) -> (i, j)
with i, j <= (n - 1) / 2
*/

const rotateMatrix = (arr) => {
  const n = arr.length

  for (i = 0; i <= (n - 1) / 2; i++) {
    for (j = 0; j <= (n - 1) / 2; j++) {
      const tmp = arr[i][j]
      arr[i][j] = arr[n - i - 1][j]
      arr[n - i - 1][j] = arr[n - i - 1][n - j - 1]
      arr[n - i - 1][n - j - 1] = arr[i][n - j - 1]
      arr[i][n - j - 1] = tmp
    }
  }
}

arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 1, 2, 3],
  [4, 5, 6, 7]
]

rotateMatrix(arr)
console.log(arr)
