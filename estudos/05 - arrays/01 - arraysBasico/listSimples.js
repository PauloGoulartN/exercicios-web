let nomes = ["Ana", "Carlos", "João", "Mariana", "Pedro", "Juliana"]
// Adicionar bianca na lista na posição 6
nomes[6] = "Bianca"
// ------ LENGTH ---------
// adicionar nomes na ultima linha LENGTH
nomes[nomes.length] = "Bianca"
// ---------- UNSHIFT --------
nomes.unshift("Vitor") // COLOCA O ELEMENTO NA PRIMEIRA POSIÇÃO
// ---------- PUSH ------------
nomes.push("Carol") // COLOCA O ELEMENTO NO FINAL DA LISTA
// ---------- POP -------------
nomes.pop()// SOME COM O ULTIMO ELEMENTO DA LISTA
// ---------- SHIFT -------------
nomes.shift()// EXCLUI O ULTIMO ELEMENTO DA LISTA(UTIL PARA USAR EM SORTEIOS)
// ------ Aparecer todos os nomes -------
for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i])
}
// ------- SORT -------------
console.log(nomes.sort()) //METODO SORT ORDENA OS ELEMENTOS
