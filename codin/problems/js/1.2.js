const count = (str) => {
  const result = {}

  for (const c of str) {
    if (!result[c]) result[c] = 1
    else result[c] += 1
  }

  return result
}

const isPermutation = (str1, str2) => {
  const count1 = count(str1)
  const count2 = count(str2)

  if (count1.length != count2.length) return false

  for (const key in count1) {
    if (!count2[key] || count1[key] !== count2[key]) return false
  }

  return true
}

console.log(isPermutation('asdvae', 'evdasa'))
console.log(isPermutation('asdvab', 'evdasa'))
