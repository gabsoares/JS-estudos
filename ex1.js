const primeiroNumero = Number(prompt(`Digite um número:`))
const segundoNumero = Number(prompt(`Digite outro número:`))

const somaNumeros = primeiroNumero + segundoNumero;
console.log(somaNumeros);

if (primeiroNumero === segundoNumero && somaNumeros > 10 && somaNumeros < 20) {
    console.log(`
    Os números ${primeiroNumero} e ${segundoNumero} são iguais e a soma dos números (${somaNumeros}) é maior que 10 e menor que 20
    `);
} else if (primeiroNumero !== segundoNumero && somaNumeros > 10 && somaNumeros < 20) {
    console.log(`Os números não são iguais e a soma dos números (${somaNumeros}) é maior que 10 e menor que 20`);
}
else {
    console.log(`Os números não são iguais ou a soma é menor que 10 e/ou maior que 20 `);
}