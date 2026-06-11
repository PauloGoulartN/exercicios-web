let list = [18, 47, 28, 32, 95, 44, 15], maior = list[0]

for(let i in list){
    if(list[i] > maior){
        maior = list[i]
    }
}

console.log(maior)