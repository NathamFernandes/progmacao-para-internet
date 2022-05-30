/* QUESTÃO 01 */
var senha = 0
var login = 1

while (login != senha) {
    var login = String(window.prompt("Digite seu login:"))
    var senha = String(window.prompt("Digite sua senha:"))
    if (login != senha) {
        window.alert("Show fera! Tudo nos conformes.")
    }
}
window.alert("Aí não fera! O login e senha devem ser iguais. Algoritmo encerrado.")

/* QUESTÃO 02 */

var lista = [4, 7, 2, 1, 9, 5, 6, 3, 8]
var j = 1

console.log(lista)

while (j < lista.length) {
    var x = lista[j]
    var i = j - 1
    while (i >= 0 && lista[i] > x) {
        lista[i+1] = lista[i]
        i = i - 1
    }
    lista[i+1] = x
    j = j + 1
}

console.log(lista)

/* QUESTÃO 03 */

var cecilia = 0
var ariano = 0
var machado = 0
var ramos = 0
var branco = 0
var nulos = -1
var votantes = 0

while (voto != 1234) {
    var voto = Number(window.prompt("Opções de voto:\n \n11 - Cecília Meireles \n33 - Ariano Suassuna \n44 - Machado de Assis \n99 - Graciliano Ramos \n0 - Branco"))
    if (voto == 11) {
        cecilia++
    } else if (voto == 33) {
        ariano++
    } else if (voto == 44) {
        machado++
    } else if (voto == 99) {
        ramos++
    } else if (voto == 0) {
        branco++
    } else {
        nulos++
    }
    votantes++
}

console.log(`Quantidade de votantes: ${votantes} \n \nVotos: \n \nCecília Meireles - ${cecilia} \nAriano Suassuna - ${ariano} \nMachado de Assis - ${machado} \nGraciliano Ramos - ${ramos} \nBrancos - ${branco} \nNulos - ${nulos}`)

/* QUESTÃO 04 */

let maior_numero = 0
var quantidade = window.prompt("Quantos números serão lidos?")

for (let contador = 0; contador < quantidade; contador++) {
  let posicao = contador + 1
  var numero = window.prompt(`Digite o ${posicao}º número.`)
  if (numero > maior_numero) {
    maior_numero = numero
  }
}

console.log(`Dentre os números inseridos, o maior número é: ${maior_numero}`)