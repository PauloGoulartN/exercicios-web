function verificaIdade(){

    let idade = prompt("Digite a sua idade: ")

    if(idade >= 18){
        alert("acesso liberado")
    }else{
        alert("acesso negado")
    }
}

verificaIdade()