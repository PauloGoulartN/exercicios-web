let conjunto = new Array(3)
for(let i = 0; i < conjunto.length; i++){
    conjunto[i] = new Array(3)
}

for(let linha = 0; linha < conjunto.length; linha++){
    for(let col = 0; col < conjunto[linha].length; col++){
        console.log(linha, col)
    }
}

let botao

botao = document.createElement("button")
botao.setAttribute("type", "button")
botao.setAttribute("id", "bt1")
botao.setAttribute("class", "btJogo")
botao.setAttribute("onclick", "exibeMsg()")
botao.append(document.createTextNode("Clicar aqui"))
document.body.append(botao) // Apend é gravar alguma coisa lá

function exibeMsg(){
    alert("Você apertou o botão do buratti")
}