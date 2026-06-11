let num = Number(prompt("Digite um numero para saber sua tabuada: "))
let result = ""
for(let i = 1; i <= 10; i++){
    result += `${num} x ${i} = ${i*num}\n`
}
alert(result)