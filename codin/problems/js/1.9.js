const isSubstring = (str1, str2) => str2.includes(str1)

const isStringRotation = (str1, str2) => {
  return str1.length === str2.length && isSubstring(str1, str2 + str2)
}

console.log(isStringRotation('aaaa', 'aaa'))
