
/* alert('Olá, mundo!')
 prompt('Digite seu nome')
 confirm('Você está certo disso?')

var nome = prompt('Qual é o seu nome? ')

console.log('Olá, ' + nome + ' seja bem-vindo!');
console.log(`Olá ${nome}, seja bem-vindo! `)
console.log(typeof nome)

var nome = prompt('Qual é o seu nome?')
var idade = prompt('Qual a sua idade?')
var profissao = prompt('Qual a sua profissão?')

console.log(`Olá ${nome}, você tem ${idade} anos e trabalha como ${profissao}!`)*/

function mostrarMensagem(){
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);

    var resultado = num1 + num2
    
    console.log(`O resultado da soma é: ${resultado}`)
}

function Subtrai(){
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);

    var subtracao = num1 - num2

    console.log(`O resultado da subtração é: ${subtracao}`)
}

function Multiplica(){
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);

    var multiplicacao = num1 * num2

    console.log(`O resultado da multiplicação é: ${multiplicacao}`)
}

function Divisao(){
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);

    var divisao = num1 / num2

    console.log(`O resultado da multiplicação é: ${divisao}`)
}