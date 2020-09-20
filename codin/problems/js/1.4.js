const isPalindromePermutation = (str) => {
  const occurences = {}

  for (const item of str) {
    if (item !== ' ') {
      const c = item.toUpperCase()

      if (!occurences[c]) occurences[c] = 1
      else occurences[c] += 1
    }
  }

  let countOdd = 0

  for (const key in occurences) {
    countOdd += occurences[key] % 2
  }

  return countOdd <= 1
}

console.log(isPalindromePermutation('Tact Coa'))
console.log(isPalindromePermutation('Tact Csoa'))
