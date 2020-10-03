type CharCounts = {[key: string]: number}

function count(str: string): CharCounts {
  const result: CharCounts = {}

  for (const c of str) {
    if (!result[c]) result[c] = 1
    else result[c] += 1
  }

  return result
}

function diff(count1: CharCounts, count2: CharCounts): number {
  let result = 0

  for (const key in count1) {
    if (!count2[key]) result += count1[key]
    else result += Math.max(count1[key] - count2[key], 0)
  }

  return result
}

function isPalindromePermutation(str1: string, str2: string): boolean {
  const count1 = count(str1)
  const count2 = count(str2)

  return diff(count1, count2) <= 1 && diff(count2, count1) <= 1
}

console.log(isPalindromePermutation('pale', 'bale'))
console.log(isPalindromePermutation('pale', 'balse'))
