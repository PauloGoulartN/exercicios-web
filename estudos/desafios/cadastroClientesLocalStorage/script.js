const form = document.getElementById("formCliente")
form.addEventListener("submit", function(event){
    event.preventDefault()
    let clientes = []
    let novoNome = document.getElementById("nome").value
    let novoEmail = document.getElementById("email").value
    let novoCPF = document.getElementById("cpf").value
    let log = document.getElementById("log").value
    let num = document.getElementById("num").value
    let comp = document.getElementById("comp").value
    let bairro = document.getElementById("bairro").value
    let cidade = document.getElementById("cidade").value
    let uf = document.getElementById("uf").options[document.getElementById("uf").selectedIndex].text
    // const clienteObj = {
    //     nome : document.getElementById("nome").value,
    //     sexo : sexo
    //     email : document.getElementById
    // }
    let radios = document.getElementsByName("sexo")
    let sexo
    for(let s in radios){
        if(radios[s].checked){
            sexo = radios[s].value
        }
    }
    alert(sexo)
    if(localStorage.clils){
        clientes = JSON.parse(localStorage.getItem("clils"))
    }
    clientes.push([novoNome, novoEmail, novoCPF, log, num, comp, bairro, cidade, uf, sexo])
    localStorage.clils = JSON.stringify(clientes)
    document.getElementById("formCliente").reset()
})


