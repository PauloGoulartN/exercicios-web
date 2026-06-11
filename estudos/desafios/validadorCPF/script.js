let result1, dv1, result2, dv2
function validaCPF(){
    let multiplicador = 2, acum1 = 0, acum2 = 0
    let cpfCli = document.getElementById('cpf').value // getElementById PARA PEGAR ELEMENTO POR ID DO INDEX.HTML
    if(cpfCli.length != 11){
        alert("CPF INVÁLIDO")
    }else{
        let cpf9Dig = cpfCli
        for(let i = 8; i >= 0; i--){
            let dig = Number(cpf9Dig[i])
            dig *= multiplicador
            acum1 += dig
            multiplicador++
        }
        result1 = acum1 % 11
        if(result1 == 0 || result1 == 1){
            dv1 = 0
        }else{
            dv1 = 11 - result1
        }
        let cpf10Dig = cpfCli
        for(let i = 0; i <= 9; i++){
            let dig2 = Number(cpf10Dig[i])
            dig2 *= multiplicador
            acum2 += dig2
            multiplicador--
        }
        result2 = acum2 % 11
        if(result2 == 0 || result2 == 1){
            dv2 = 0
        }else{
            dv2 = 11 - result2
        }
    }
    if(cpfCli[9] !== dv1.toString() || cpfCli[10] !== dv2.toString()){
        alert("CPF Inválido")
        document.getElementById('cpf').value = ''
    }else{
        alert('CPF Validado')
    }
}