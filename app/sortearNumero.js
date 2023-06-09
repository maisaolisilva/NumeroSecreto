const menorValor = 0;
const maiorValor = 1000;
const numeroSecreto = gerarNumero();
//Função que gera um número aleatório
function gerarNumero(){
    return parseInt(Math.random()*maiorValor + 1); //Maior valor + 1 para incluir o maiorValor no intervalo
}

console.log(numeroSecreto)

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;