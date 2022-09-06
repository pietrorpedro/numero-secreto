function verificarChute(chute) {
  const numero = +chute; //Transforma o chute em um número inteiro

  //Validação caso não seja um número, caso o número seja maior que o maior valor e caso o número seja menor que o menor valor.
  if (Number.isNaN(numero) || numero > maiorValor || numero < menorValor) {
    elementoChute.innerHTML = "<div>Você disse:</div>";
    elementoChute.innerHTML += `<div class="box">${chute}</div>`;
    elementoChute.innerHTML += `<div>Chute inválido, tente falar um número entre ${menorValor} e ${maiorValor}.</div>`;
    return;
  }
  //Caso o jogador acerte o número secreto
  else if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <h2>Você acertou o número secreto!</h2>
    <h3>Parabens! O número secreto era ${numeroSecreto}</h3>
    `;
  }
  //Caso o chute seja maior que o número secreto
  else if (numero > numeroSecreto) {
    elementoChute.innerHTML = "<div>Você disse:</div>";
    elementoChute.innerHTML += `<div class="box">${chute}</div>`;
    elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-angle-down"></i></div>`;
  }
  //Caso o chute seja menor que o número secreto
  else {
    elementoChute.innerHTML = "<div>Você disse:</div>";
    elementoChute.innerHTML += `<div class="box">${chute}</div>`;
    elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-angle-up"></i></div>`;
  }
}
