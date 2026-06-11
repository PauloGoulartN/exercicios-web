let idade = Number(prompt("Digite a sua idade: "))
let possuiCNH = prompt("Possui CNH? (s/n)")

switch(true){
    case(idade >= 18 && possuiCNH == 's'):
        alert("Você pode dirigir")
        break

    case(idade >= 18 && possuiCNH == 'n'):
        alert("Você precisa de habilitação para dirigir")
        break

    case(idade < 18):
        alert("Você é muito jovem para dirigir")
        break

    default:
        alert("Dado Inválido")
}