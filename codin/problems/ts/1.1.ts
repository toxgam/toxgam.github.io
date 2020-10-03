function caseOneSol(str: string): boolean {
  // Dictionary used to mark if a character has appeared
  const flag: {[key: string]: boolean} = {}

  for (const c of str) {
    // If character c has appeared, return true
    if (flag[c]) {
      return false
    }
    flag[c] = true
  }

  return true
}

function caseTwoSol(str: string): boolean {
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
