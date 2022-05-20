let frase = "Salve galera do meu brasil brasileiro! O hexa vem! Eu acredito!";

//verificando se existe um determinado caracter ou palavra
console.log(frase.includes("galera"))

let time = "Palmeiras do Marcão";

console.log(time.includes("mundial"))

let senha = "uyibgafb#tv/*d";

//verificando se existe um determinado caracter ou palavra
if(senha.includes("*")){
    console.log("Senha inválida")
}else{
    console.log("Senha válida")
}