var idade = 12
var maior;

//Operador ternário que atribui o valor "true" para a variavel "maior" caso a idade seja maior ou igual a 18 anos, caso seja menor, atribui "false"
maior = (idade >= 18 ? true : false)
console.log(maior)

//Operador ternário que escreve "Pode dirigir" para o caso da variável maior ter o valor "true" e escreve "Não pode dirigir" caso seja "false"
maior  ? console.log("Pode dirigir") : console.log("Não pode dirigir")

//Condicional "if/else" que escreve "Pode dirigir" para o caso da variável maior ter o valor "true" e escreve "Não pode dirigir" caso seja "false"
// comparação implícita se o valor va variávle "maior" é "true"
if (maior){

    console.log("pode dirigir")

}else{

    console.log("não dirigir")
}
