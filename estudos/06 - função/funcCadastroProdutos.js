let produtos = []

let precos = []

function cadastraProduto(nome, valor){

    produtos.push(nome)

    precos.push(valor)
}

let i = 0

let qtd = Number(prompt("Digite a qtd de produtos a serem cadastrados"))

while(i < qtd){

    let n = prompt("Digite o nome do produto: ")

    let v = Number(prompt("Digite o valor do produto: "))

    cadastraProduto(n, v)

    i++
}

for(let p in produtos){

    alert(produtos[p] + " - R$" + precos[p])
}