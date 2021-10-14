let a = 8
let b = 9
let c = 7

if (a > b && a > c) {
  console.log(`Entre ${a}, ${b} e ${c}, ${a} é o maior número.`)
} else if (b > a && b > c) {
  console.log(`Entre ${a}, ${b} e ${c}, ${b} é o maior número.`)
} else if (c > a && c > b) {
  console.log(`Entre ${a}, ${b} e ${c}, ${c} é o maior número.`)
} else {
  console.log(`Os números tem o mesmo valor.`)
}
