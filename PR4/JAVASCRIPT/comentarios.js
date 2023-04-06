const form = document.querySelector("#novoComentario")
const comentario = document.querySelector(".comentari")
const itens = JSON.parse(localStorage.getItem("itens")) || []

itens.forEach((elemento) => {
    criarElemento(elemento)
});


form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const nota = evento.target.elements['nota']
    const texto = evento.target.elements['texto']
    
    const itemAtual = {
        "nome":  nome.value,
        "nota":  nota.value,
        "texto":  texto.value
    }

    criarElemento(itemAtual)
    itens.push(itemAtual)

    localStorage.setItem("itens", JSON.stringify(itens))

    nome.value =""
    nota.value = ""
    texto.value = ""

    alert("obrigado por deixar sua avaliaçao ♥")

})

function criarElemento (item) {
    
    const novoItem = document.createElement('div')
    novoItem.classList.add('comentario-1')

    const divQuebra = document.createElement('div')
    divQuebra.classList.add('quebra')
    divQuebra.innerHTML = `<img src='../IMGS/homem-com-balao.png' alt='menssagem'> <h2 class="subtitulo nome__comentario"> ${item.nome} </h2>` 

    const notaItem = document.createElement('h3')
    notaItem.innerHTML = `Nota ${item.nota}`
    notaItem.classList.add('subtitulo')

    const novoTexto = document.createElement('h2')
    novoTexto.innerHTML = item.texto
    novoTexto.classList.add('texto', 'texto-comenta')

    novoItem.appendChild(divQuebra)
    novoItem.appendChild(notaItem)
    novoItem.appendChild(novoTexto)

    comentario.appendChild(novoItem)

}

