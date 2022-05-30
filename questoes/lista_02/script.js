/* QUESTÃO 01 */

console.log(">>>>Questão 01<<<<")

const produtoJson = {
  "nome" : "Moto G5", 
  "descrição" : "Celular de entrada", 
  "fabricante" : "Motorola", 
  "quantidade" : "1", 
  "preço" : "R$400,00" 
}

console.log(produtoJson)

/* QUESTÃO 02 */

console.log(">>>>Questão 02<<<<")

let estudantes = ['Maria', 'José', 'Irineu', 'Lorrane', 'Lorena', 'Mickey', 'Edielison'];

console.log(`Quinto estudante: ${estudantes[4]}`)
console.log(`Tamanho do array: ${estudantes.length}`)

estudantes.push('Josefaldo', 'Simplício', 'Arna')
estudantes.splice(2, 3)
console.log(estudantes)

/* QUESTÃO 03 */

console.log(">>>>Questão 03<<<<")
window.alert("Insira as informações para a questão 03.")

let data01 = String(window.prompt("Insira a primeira data."))
let data02 = String(window.prompt("Insira a segunda data."))
let lista_data01 = data01.split("/")
let lista_data02 = data02.split("/")
let diferenca = lista_data02[2] - lista_data01[2]
console.log(`Diferença de anos entre as datas: ${diferenca}`)


/* QUESTÃO 04 */

console.log(">>>>Questão 04<<<<")
window.alert("Insira as informações para a questão 04.")
let preco = Number(window.prompt("Insira o preço do produto (somente números)."))
let desconto = Number(window.prompt("Insira o valor do desconto (somente números)"))
let diminuicao = (preco * desconto) / 100
let valor_final = preco - diminuicao
console.log(`Com o desconto, o valor total a ser pago é de: R$${valor_final}`)


/* QUESTÃO 05 */

console.log(">>>>Questão 05<<<<")
window.alert("Insira as informações para a questão 05.")
var horas_totais = Number(window.prompt("Insira a quantidade de horas trabalhadas."))
var valor_por_hora = Number(window.prompt("Insira o valor de cada hora de trabalho."))
if (horas_totais > 40) {
  let variavel_aumento = valor_por_hora * 1.5
  let horas_extras = horas_totais - 40
  let valor_horas_extras = horas_extras * variavel_aumento
  let valor_horas_maximas = 40 * valor_por_hora
  let valor_total = valor_horas_maximas + valor_horas_extras
  console.log(`Pagamento semanal de "${horas_totais} horas de trabalho, R$${valor_por_hora} por hora": R$${valor_total}`)
} else {
  let valor_total = horas_totais * valor_por_hora
  console.log(`Pagamento semanal de "${horas_totais} horas de trabalho, R$${valor_por_hora} por hora": R$${valor_total}`)
}