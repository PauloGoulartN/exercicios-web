let nums = [18, 47, 28, 32, 95, 44, 15]

let multiplo = []

let num = Number(prompt("Digite um numero: "))

function exibeOsMultiplosDe3(numero){

    let encontrado = nums.includes(numero)

    for(i of nums){
        if(i % numero == 0){
            multiplo.push(i)
        }
    }
}

exibeOsMultiplosDe3(num)

alert(`No Array existe(m) ${multiplo.length} Múltiplo(s) de ${num}`)