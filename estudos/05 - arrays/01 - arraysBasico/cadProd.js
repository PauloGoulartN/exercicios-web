let produtos = []
let precos = []
let precoMenor50 = 0
let prodEntre50e100 = ""

for(let i = 0; i < 5; i++){
    produtos.push(prompt("Digite um produto: "))
    precos.push(prompt("Digite o preco do produto: "))
    if(precos[i] < 50){
        precoMenor50++
    }
    if(precos[i] >= 50 && precos[i] <= 100){
        prodEntre50e100 += produtos[i] + ", "
    }
}
alert("qtd de produtos abaixo de R$ 50,00: " + precoMenor50)
alert("Os produtos entre 50 e 100 são: " + prodEntre50e100)