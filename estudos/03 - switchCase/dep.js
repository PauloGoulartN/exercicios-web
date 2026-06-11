let set = prompt("Digite o nome do setor: ").toLowerCase()

switch(set){
    case "mercados":
    case "campanhas":
    case "propaganda":
        alert("Pertence ao departamento DMK")
        break

    case "clientes":
    case "ativos":
        alert("Pertence ao departamento DAC")
        break

    case "politicas e normas":
    case "processos":
    case "registros":
        alert("Pertence ao departamento DAU")
        break

    case "contabilidade":
    case "fiscal":
    case "logistica":
        alert("Serviços terceirizados de suporte")
        break

    default:
        alert("Setor inválido")
}