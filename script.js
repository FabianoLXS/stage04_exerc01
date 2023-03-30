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
}
