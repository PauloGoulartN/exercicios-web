let precos = [59.9, 129.9, 32.99, 109.9, 42.5] // declarei Array utilizado
let total = 0 // Declarei a variavel total para armazenar o valor total

function desconto(){  // Criei a função desconto conforme solicitado
    for(i in precos){ // Criação do laço de repetição percorrendo o Array
        if(precos[i] > 100.00){ // condicional if, para verificar se o valor é MAIOR que 100
            precos[i] *= 0.9 // Aplicando o desconto de 10% se a condição for verdadeira
            console.log(`Você ganhou 10% de desconto neste item!\n o valor final do item é R$${precos[i].toFixed(2)}`)
            total += precos[i] // somando o valor com o desconto já aplicado
        }else{ // se a condição for falsa, retorna o valor cheio do produto e soma na variavel total
            console.log(`O valor do item é R$${precos[i]}`)
            total += precos[i]
        }
    }
    console.log(`O valor total a pagar é R$${total.toFixed(2)}`) // apresenta o valor total
}
desconto()