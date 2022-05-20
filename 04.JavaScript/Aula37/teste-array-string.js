let alfabeto = "ABCDEFGHIJLMNOPQRSTUVXZ"

// Transformando uma string em um vetor de caracteres
let vetorAlfabeto = Array.from(alfabeto)

console.log(vetorAlfabeto)

//obtendo cada caracter do vetor e seu respectivo indice
for(let letra of vetorAlfabeto.entries()){
    console.log(letra)
}

//obtendo uma letra do alfabeto com base no seu indice
console.log(vetorAlfabeto[14])