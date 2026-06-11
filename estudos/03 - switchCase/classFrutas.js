let fruta = prompt("Digite o nome da fruta: ").toLowerCase()

switch(fruta){
    case "maçã":
    case "pera":
    case "banana":
        alert("Esta é uma fruta comum")
        break

    case "pitaya":
    case "araçá":
        alert("Esta é uma fruta exótica")
        break

    default:
        alert("Fruta desconhecida")
}