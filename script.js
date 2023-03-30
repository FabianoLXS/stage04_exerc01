<<<<<<< HEAD
/* Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- A soma dos dois números;
- A subtração dos dois números;
- A multiplicação dos dois números;
- A divisão dos dois números;
- O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!*/

let num1 = Number(prompt("Digite o primeiro número:"))
let num2 = Number(prompt("Digite o segundo número:"))

function sum() {
  return Math.round(num1 + num2)
}

function subtraction() {
  return Math.round(num1 - num2)
}

function multiplication() {
  return Math.round(num1 * num2)
}

function division() {
  return Math.round(num1 / num2)
}

function remainder() {
  return Math.round(num1 % num2)
}

alert(`a soma dos dois números é: ${sum()}`)
alert(`a subtração dos dois números é: ${subtraction()}`)
alert(`a multiplicação dos dois números é: ${multiplication()}`)
alert(`a divisão dos dois números é: ${division()}`)
alert(`o resto da divisão dos dois números é: ${remainder()}`)

if (sum() % 2 == 0) {
  alert("número par")
} else {
  alert("número impar")
}

if (num1 == num2) {
  alert("números iguais")
} else {
  alert("números diferentes")
=======
/*
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes, suas idades, alturas e pesos
*/


/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 190
  },
  {
    name: "Alexandra",
    age: 27,
    weight: 70,
    height: 170
  },
  {
    name: "Carlos",
    age: 42,
    weight: 90,
    height: 180
  },
]

//criação da função
function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

function printPatientIMC(patient) {
  return `
    Paciente ${patient.name} possui o IMC de
    ${IMC(patient.weight, patient.height)}
  `
}

for (let patient of patients) {
  let IMCmessage = printPatientIMC(patient)
  alert(IMCmessage)
>>>>>>> efd8fe36ff712d554efd48e68916dbaba06cde46
}
