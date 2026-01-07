function firstUniqueChar(s: string): unknown {
  // Mapa para contar a frequência de cada caractere
  let charCount: Record<string, number> = {}

  // Conta a frequência de cada caractere
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1
  }

  // Encontra o primeiro caractere único
  for (let i = 0; i < s.length; i++) {
    if (charCount[s[i]] === 1) {
      return `${s[i]} no index ${i}`
    }
  }

  return -1
}

const s = "leetcode"

console.log(firstUniqueChar(s))