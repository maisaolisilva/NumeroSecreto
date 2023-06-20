const elementoChute = document.getElementById('chute')
const botaoInicio = document.querySelector('.botao-inicio')
let n_tentativa = 0
const tentativas = document.getElementById('tentativas')

//Assim que a página é aberta, o reconhecimento de voz é inicializado (por isso o window.)
window.SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;

//instanciando o reconhecedor de fala
const recognition = new SpeechRecognition();
recognition.lang = 'pt-br';

botaoInicio.addEventListener("click", ()=> {
    recognition.start()
    botaoInicio.classList.add('botaoAtivo')
})



recognition.addEventListener('result', onSpeak)

//função que pega os dados do evento e acessa a propriedade transcript que contém o conteúdo que foi dito
function onSpeak(event) {
    n_tentativa += 1
    chute = event.results[0][0].transcript
    chute = chute = chute.replace('.',''); //Tira o ponto final que aparece em alguns navegadores
    if(chute.toUpperCase() === "SEM"){
        chute = 100
    }
    chute = parseInt(chute)
    exibiChute(chute)
    verificaChute(chute)
    exibeTentativas(n_tentativa)
}

//Função que exibe o que foi falado
function exibiChute(chute){
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    `
}

function exibeTentativas(n){
    tentativas.innerHTML = `Número de tentativas: ${n}`;
}

recognition.addEventListener("end", () => { recognition.start()}) //a captura de áudio é religada toda vez que desliga
