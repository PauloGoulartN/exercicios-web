let cardapio = prompt("Digite o que deseja comer\nHamburguer\nPizza\nMassa").trim()

switch(cardapio){
    case 'Hamburguer':
        let ponto = prompt("Digite o ponto da carne\n1- Mal Passado\n2- Bem Passado\n3- No Ponto").trim()
        let pontos = ["Mal Passado", "Bem Passado", "No Ponto"]
        alert(`Você escolheu ${cardapio} ${pontos[ponto - 1] || "inválido"}`)
        break

    case 'Pizza':
        let pizza = prompt("Digite o sabor da pizza\n1- Bollonesa\n2- Marguerita\n3- Peperoni\n4- Napolitana").trim()
        let saboresPizza = ["Bollonesa", "Marguerita", "Peperoni", "Napolitana"]
        alert(`Você escolheu Pizza ${saboresPizza[pizza - 1] || "inválido"}`)
        break

    case 'Massa':
        let massa = prompt("Digite o sabor da massa\n1- Branco\n2- Ao sugo\n3- Pesto").trim()
        let saboresMassa = ["Branco", "Ao sugo", "Pesto"]
        alert(`Você escolheu Massa ${saboresMassa[massa - 1] || "inválido"}`)
        break

    default:
        alert("Opção inválida")
}