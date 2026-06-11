let idade = Number(prompt("Digite a sua idade: "))
let habilitacao = prompt("Possui CNH? s/n")

if(idade >= 18 && habilitacao == 's'){
    alert("Você pode dirigir!")
}else{
    alert("Você não pode dirigir!")
}