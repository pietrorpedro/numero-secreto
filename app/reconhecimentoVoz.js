const elementoChute = document.getElementById("chute");

// https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API -- API DOC LINK
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

// Instancia a classe do reconhecimento de voz
const recognition = new SpeechRecognition();
// Linguagem
recognition.lang = "pt-Br";
// Inicia o reconhecimento de voz
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(e) {
  let chute = e.results[0][0].transcript;
  verificarChute(chute);
}
function exibeChute(chute) {
  elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `;
}

//Faz o microfone sempre ficar ativo
recognition.addEventListener("end", () => recognition.start());
