/* CHAMAR TODAS AS FUNÇÕES */

function chama_tudo() {
    media_estudante()
    calcula_montante()
    separa_data()
    mostra_aluguel()
}
 
/* QUESTÃO 01 */

function media_estudante() {
    let nota_01 = 80
    let nota_02 = 60
    let nota_03 = 95
    let nota_04 = 77
    let media = ((nota_01 * 2) + (nota_02 * 2) + (nota_03 * 3) + (nota_04 * 3))/10
    resposta_01.innerHTML = `As notas foram de ${nota_01}, ${nota_02}, ${nota_03}, ${nota_04}, respectivamente. A média do aluno foi de ${media}.`
}

/* QUESTÃO 02 */

function calcula_montante() {
    let capital_variavel = window.document.getElementById("capital")
    let juros_variavel = window.document.getElementById("juros")
    let capital_final = Number(capital_variavel.value)
    let juros_final = Number(juros_variavel.value)
    let montante = capital_final * ((1 + (juros_final/100)) ** 20) 
    resposta_02.innerHTML = `Com o capital de R$${capital_final} e o juros de ${juros_final}% ao ano, o montante total depois de 20 anos (240 meses) é de: R$${montante}` 
}

/* QUESTÃO 03 */

function separa_data() {
    let data = '02/04/2004'
    let resultado = data.split('/')
    resposta_03.innerHTML = `Resultado da operação "split" com a data "02/04/2004": ${resultado}`
}

/* QUESTÃO 04 */

function mostra_aluguel() {
    let nome_variavel = window.document.getElementById("nome")
    let dias_variavel = window.document.getElementById("dias")
    let nome_final = String(nome_variavel.value)
    let dias_final = Number(dias_variavel.value)
    let aluguel = 80 * dias_final
    resposta_04.innerHTML = `Sr.(a) ${nome_final}, você deve pagar R$${aluguel} pelo aluguel por ${dias_final} dias.`
}