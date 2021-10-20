let n = 3
let v = n
linha = ''

for (let i = 0; i < v; i++) {
  linha = linha + ' '
}

for (let f = 0; f < n; f++) {
  linha = linha.substr(0)

  for (let o = 0; o < n - v + 1; o++) {
    linha = linha + '*'
  }
  v = v - 1
  console.log(linha)
}
