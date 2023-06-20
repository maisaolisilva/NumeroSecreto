const cabecalho = `
<header class="cabecalho">
        <a href="explicacao.html" class="cabecalho-link"><i class="fa-solid fa-question"></i><span>Instruções</span></a>
</header>
`
const rodape = `
<footer class="rodape">
    <p>Desenvolvido por Maisa Oliveira</p>
    <div class="rodape-div">
        <a href="https://github.com/maisaolisilva/NumeroSecreto" class="rodape-link"><i class="fa-brands fa-github"></i>GitHub</a>
        <a href="https://www.linkedin.com/in/maisa-oliveira-981411238/" class="rodape-link"><i class="fa-brands fa-linkedin"></i>LinkedIn</a>
    </div>
</footer>`

function verificaChute(chute) {

    if (chuteInvalido(chute)){ //caso não seja um número 
        if (chute.toUpperCase() === "GAME OVER") {
            document.body.innerHTML =`
                ${cabecalho}
                <main class="principal">
                    <h2>Game Over!!!</h2>
                    <h3>Pressione o botão para jogar novamente</h3>
                    <button id="jogar-novamente" class="botao"><i class="fa-solid fa-rotate-left"></i>Jogar novamente</button>
                </main>
                ${rodape}
                `
            return
        }else {
            elementoChute.innerHTML += '<div> Valor inválido </div>'
            return
        } 
    }
    if(numeroForaDoIntervalo(chute)){ //caso o número esteja fora do intervalo
        elementoChute.innerHTML += `<div> Valor inválido: o número precisa estar entre ${menorValor} e ${maiorValor} </div>`
        return
    }

    if (chute === numeroSecreto){
        pegaData()
        document.body.innerHTML = `
            ${cabecalho}
            <main class="principal">
                <h2>Você acertou!</h2>
                <h3> O número secreto era: ${numeroSecreto}</h3>
                <button id="jogar-novamente" class="botao"><i class="fa-solid fa-rotate-left"></i>Jogar novamente</button>
                <p class="tentativas" id="tentativas">Número de tentativas: ${n_tentativa}</p>
            </main>
            ${rodape}
            `

    } else if (chute>numeroSecreto){
        elementoChute.innerHTML +=`
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML +=`
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero); //retorna true caso o não seja um número
}

function numeroForaDoIntervalo(numero){
    return numero > maiorValor || numero < menorValor //retorna true caso o número esteja fora do intervalo
}

document.body.addEventListener("click", event => {
    if (event.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})
