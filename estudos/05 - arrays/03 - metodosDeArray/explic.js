// SPLICE - altera o conteudo do array, removendo, substituindo ou adicionando elementos
// SINTAXE: Array.splice(inicio, qteRemover, item1, ...)
// let nomes = ["carlos", "maria", "edson", "bete", "miranda"] 
// nomes.splice(1, 2); // Remove 2 a partir da posição selecionada
// console.log(nomes)
// nomes.splice(2, 0, "paulo", "ana"); // Adiciona paulo a partir da posição selecionada
// console.log(nomes)
// =======================================================================================================
// CONCAT() une dois ou mais array sem alterar os originais, retornando um novo array resultante
// let front = ["html", "css"];
// let back = ["node", "sql"];
// let full = front.concat(back);
// console.log(full)
// =======================================================================================================
// SLICE() Retorna uma CÓPIA de parte de um array a partir de um indice inicial até um final (não incluso)
// SINTAXE: array.slice(inicio, fim)
// let nums = [10, 20, 30, 40, 50];
// let parte = nums.slice(1,4); // começa a partir da posição 1 (20) e vai até a posição 4 (40)
// console.log(nums.slice 1,4)
// console.log(parte)
// =======================================================================================================
// indexOF() - includes() - lastIndexOf
// console.log(nomes.includes("Maria")) // diz se Maria está no array
// console.log(nomes.indexOf("Maria")) // dá a posição de maria no array
// console.log(nomes.lastIndexOf("Maria")) // percorre o array de trás para frente
// =======================================================================================================
// map() criar um novo array com os resultados da resultados da função aplicada a cada elemento original 
// let precos = [10, 20, 30]
// let dobro = precos.map (v => v*2) // (v => v*1.10) para aumentar 10% ou (v => v*0.9) diminuir 10%
// console.log(dobro)
// ===================
// let nomes = ["carlos", "maria", "edson", "bete", "miranda"]
// let xtudo = nomes.map (n => "X-"+n)
// console.log(xtudo)
// =======================================================================================================
// REDUCE() REDUZ O VALOR DA LISTA PARA UM UNICO VALOR (FUNCAO QUE SOMA O TOTAL DA LISTA)
// let precos = [29.90, 15.90, 35.90, 10.90, 26.90]
// let somElem = precos.reduce((acumula, vAtual) => acumula + vAtual, 0) // o acumula e o vAtual são parametros, posso usar o .PUXANOMEOBJETO
// console.log(somElem)  // o 0 é o valor inicial, SOMA COMEÇANDO EM 0
// =======================================================================================================
// FILTER cria um novo array com todos os elementos que passaram no teste da função fornecida
// let precos = [29, 15, 35, 10, 26]
// let impares = precos.filter(i => i % 2 != 0)
// console.log(impares)
// let palavras = ["tatu", "ovo", "boi", "sopa", "registro", "tainha", "anchova", "barco", "pensamento"]
// let palavrasSemA = palavras.filter(p => !p.includes("a"))
// let comecaComA = palavras.filter(p => p.startsWith("b"))
// console.log(comecaComA)
// =======================================================================================================