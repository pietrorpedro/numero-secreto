function verificarChute(chute) {
  const numero = +chute;

  if (Number.isNaN(numero) || numero > maiorValor || numero < menorValor) {
    elementoChute.innerHTML += `<div>${chute}</div>`;
    elementoChute.innerHTML += '<div>invalido</div>';

    return;
  }
  exibeChute(chute);
  
}
