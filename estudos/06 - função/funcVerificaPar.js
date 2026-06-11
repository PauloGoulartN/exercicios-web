lista = [18, 47, 28, 32, 95, 44, 15]

pares = []

function verificaPar(){

    for(let i of lista){

        if(i % 2 == 0)

            pares.push(i)
    }
}

verificaPar()

alert(`${pares} é par`)