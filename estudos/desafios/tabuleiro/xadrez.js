let quebraLinha, casa, pinta = 0
let tabuleiro = new Array(8)

for (let i = 0; i < 8; i++){
    tabuleiro[i] = new Array(8)
}

for (let l = 0; l < tabuleiro.length; l++){
    quebraLinha = document.createElement("br")
    document.body.append(quebraLinha)
    for (let c = 0; c < tabuleiro[l].length; c++){
        casa = document.createElement("button")
        casa.setAttribute("type", "button")
        casa.setAttribute("id", "cs" + l + "" + c)
        casa.setAttribute("onclick", "qq()")
        casa.append(document.createTextNode(""))
        document.body.append(casa)
        if (1 % 2 == 0){
            if (pinta % 2 == 0){
                document.getElementById("cs" + l + "" + c).style.backgroundColor = "white"
            }else{
                document.getElementById("cs" + l + "" + c).style.backgroundColor = "black"
            }
        }else{
            if (pinta % 2 == 0){
                document.getElementById("cs" + l + "" + c).style.backgroundColor = "black"
            }else{
                document.getElementById("cs" + l + "" + c).style.backgroundColor = "white"
            }
        }
        pinta++
    }
}