let texto = "Era uma vez..."
let letra = "a"
let encontrou = false

for(let t in texto){
    if(texto[t].toLowerCase() === letra){
        encontrou = true
        break
    }
}

if(encontrou){
    console.log(`A letra ${letra} existe no texto`)
}else{
    console.log(`A letra ${letra} não existe no texto`)
}