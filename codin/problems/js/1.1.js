const caseOneSol = (str) => {
  // Dictionary used to mark if a character has appeared
  const flag = {}

  for (const c of str) {
    // If character c has appeared, return true
    if (flag[c]) {
      return false
    }
    flag[c] = true
  }

  return true
}

const caseTwoSol = (str) => {
  const n = str.length

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (str[i] === str[j]) return false
    }
  }

  return true
}

console.log(caseOneSol('asdve'))
console.log(caseTwoSol('asdve'))
