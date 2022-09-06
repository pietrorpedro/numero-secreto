const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = getNumeroAleatorio();

const elementoMenorValor = document.getElementById("menor-valor");
const elementoMaiorValor = document.getElementById("maior-valor");

function getNumeroAleatorio() {
  return parseInt(Math.random() * maiorValor + 1);
}

console.log(numeroSecreto);

elementoMenorValor.innerHTML = menorValor
elementoMaiorValor.innerHTML = maiorValor
