const botaoHistorico = document.querySelector(".botao-historico")

const listaHistorico = document.createElement('ol')
listaHistorico.classList.add('lista-historico')
console.log(listaHistorico)
const main = document.querySelector('.principal')

/*pega os itens salvos no local storage(transformados em array com o JSON.parse()) ou cria um array vazio se não tiver nada salvo */
const lista = JSON.parse(localStorage.getItem('lista')) || []

lista.forEach(element => {
    criaRegistro(element)
});




function pegaData (n_tentativa){
    const dataHora = new Date()
    const ano = dataHora.getFullYear()
    const mes = (dataHora.getMonth()+1)
    const dia = dataHora.getDate()
    const hora = dataHora.getHours()
    const minutos = dataHora.getMinutes()
    const registro = {
        "dia": dia,
        "mes": mes,
        "ano": ano,
        "hora": hora,
        "minutos": minutos,
        "tentativas": n_tentativa
    }
    lista.push(registro)
    if(lista.length == 4){
        lista.splice(0, 1)
    }

    //salva a variavel lista atualizada no local storage
    localStorage.setItem("lista", JSON.stringify(lista))
    return registro
}


function criaRegistro(registro) {
    const registroAtual = `${registro.dia}/${registro.mes}/${registro.ano} às ${registro.hora}:${registro.minutos}, vitória com ${registro.tentativas} tentativa(s)`

    const novoRegistro = document.createElement('li')
    novoRegistro.classList.add('lista-historico-item')
    novoRegistro.innerHTML += registroAtual
    //salva o registro na lista HTML de registros
    listaHistorico.appendChild(novoRegistro)
}

main.appendChild(listaHistorico)

