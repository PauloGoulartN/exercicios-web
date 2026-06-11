let valorTotal = 0
let valorCompra = Number(prompt("Digite o valor da compra:"))
let condicaoPgto = Number(prompt("1 - a vista\n2- parcelado"))

if(valorCompra >= 500 || condicaoPgto == 1){
    valorTotal = valorCompra * 0.9
}else{
    valorTotal = valorCompra
}

alert(`Valor total da compra : R$${valorTotal}`)