let nums = [18, 47, 28, 32, 95, 44, 15]

let palpite = Number(prompt("Digite um nº: "))

function encontraElemento(elemento){
    let encontrado = nums.includes(elemento)

    if(encontrado == true){
        alert(`O nº ${palpite} pertence ao array`)
    }else{
        alert(`O nº ${palpite} não pertence ao array`)
    }
}

encontraElemento(palpite)