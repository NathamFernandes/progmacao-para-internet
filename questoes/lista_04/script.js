/******** QUESTÃO 01 ********/

window.alert("Questão 01");

/* Declarando variáveis. */

var quantidade = window.prompt("Digite o número de questões da prova.");
var gabarito = String(window.prompt("Insira, de forma seguida e sem interrupções, o gabarito da prova."));
var resposta = String(window.prompt("Insira, de forma seguida e sem interrupções, suas respostas da prova."));
var indice_01 = 0;
var certas = 0;

/* Laço de repetição - validador do gabarito */

for (x in gabarito) {
    if (gabarito[indice_01] == resposta[indice_01]) {
        certas++
    };
    indice_01++;
};

console.log(certas);


/******** QUESTÃO 02 ********/

window.alert("Questão 02");

/* Declarando variáveis. */

var cpf = String(window.prompt("Digite o CPF."));
var soma_01 = 0;
var soma_02 = 0;
var cpf_novo = cpf.split("");
var indice_02 = 0;
var multi = 10;

/* Laço de repetição da primera soma (validador 01). */

for (x in cpf_novo) {
    soma_01 = soma_01 + (multi * cpf_novo[indice_02]);
    multi = multi - 1;
    indice_02++;
};

/* Cálculo do validador 01. */

let resto_01 = soma_01 % 11;
if (resto_01 == 0 || resto_01 == 1) {
    var d1 = 0;
} else {
    var d1 = 11 - resto_01;
};

/* Para o cálculo da soma 2, a string "cpf", apesar de também possuir características de array, foi convertida em um array puro. O motivo é a utilização das funções splice e push. Foi retirado o primeiro dígito do cpf e adicionado o D1 ao final da lista. // Re-declaração de variáveis para o próximo laço de repetição. */

cpf_novo.splice(0, 1);
cpf_novo.push(d1);

var indice_02 = 0;
var multi = 10;

/* Laço de repetição da segunda soma (validador 02) */

for (z in cpf_novo) {
    soma_02 = soma_02 + (multi * cpf_novo[indice_02]);
    multi--;
    indice_02++;
};

/* Cálculo do validador 02. */

let resto_02 = soma_02 % 11;
if (resto_02 == 0 || resto_02 == 1) {
    var d2 = 0;
} else {
    var d2 = 11 - resto_02;
};

var validadores = d1 + ' ' + d2;

console.log(validadores);

window.alert("As respostas se encontram no console. As saídas estão descritas estritamente como indicado no comando da atividade.")